'use client';
import { useEffect, useRef, useState } from 'react';
import {
  Video,
  Pause,
  Play,
  Square,
  FolderOpen,
  Download,
  X,
} from 'lucide-react';
import { recordingMime, recordingName } from '@/lib/recording';

type Directory = {
  name: string;
  getFileHandle: (
    name: string,
    options: { create: boolean },
  ) => Promise<{
    createWritable: () => Promise<{
      write: (data: Blob) => Promise<void>;
      close: () => Promise<void>;
    }>;
  }>;
};
type PickerWindow = Window & {
  showDirectoryPicker?: (options: {
    id: string;
    mode: 'read' | 'readwrite';
    startIn: Directory | 'videos';
  }) => Promise<Directory>;
};
type Phase = 'idle' | 'selecting' | 'recording' | 'paused' | 'finishing';
type Clip = { url: string; blob: Blob; name: string; saved: boolean };

export default function ScreenRecorder({
  language,
}: {
  language: 'zh' | 'en';
}) {
  const t = (zh: string, en: string) => (language === 'zh' ? zh : en);
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [seconds, setSeconds] = useState(0);
  const [clip, setClip] = useState<Clip | null>(null);
  const [message, setMessage] = useState('');
  const [folder, setFolder] = useState<Directory | null>(null);
  const [saving, setSaving] = useState(false);
  const [supported, setSupported] = useState(false);
  const [directorySupported, setDirectorySupported] = useState(false);
  const [mp4, setMp4] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const chunks = useRef<Blob[]>([]);
  const objectUrl = useRef('');
  const elapsed = useRef(0);
  const started = useRef(0);
  const bytes = useRef(0);
  const busy = phase !== 'idle';

  useEffect(() => {
    setSupported(
      !!navigator.mediaDevices?.getDisplayMedia &&
        typeof MediaRecorder !== 'undefined',
    );
    setDirectorySupported(!!(window as PickerWindow).showDirectoryPicker);
    if (typeof MediaRecorder !== 'undefined')
      setMp4(
        recordingMime((m) => MediaRecorder.isTypeSupported(m)).includes('mp4'),
      );
    return () => {
      if (recorder.current) {
        recorder.current.onstop = null;
        recorder.current.ondataavailable = null;
      }
      stream.current?.getTracks().forEach((track) => track.stop());
      if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    };
  }, []);
  useEffect(() => {
    if (phase !== 'recording') return;
    const id = setInterval(
      () =>
        setSeconds(
          Math.floor(
            (elapsed.current + performance.now() - started.current) / 1000,
          ),
        ),
      500,
    );
    return () => clearInterval(id);
  }, [phase]);
  useEffect(() => {
    if (!busy && (!clip || clip.saved)) return;
    const leave = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', leave);
    return () => window.removeEventListener('beforeunload', leave);
  }, [busy, clip]);

  async function chooseFolder() {
    try {
      const picker = (window as PickerWindow).showDirectoryPicker;
      if (!picker) return;
      setFolder(
        await picker.call(window, {
          id: 'carelab-recordings',
          mode: 'readwrite',
          startIn: folder ?? 'videos',
        }),
      );
      setMessage('');
    } catch (error) {
      if ((error as DOMException).name !== 'AbortError')
        setMessage(
          t(
            '无法访问目录，可以使用“下载视频”保存。',
            'Folder access unavailable. Use Download video instead.',
          ),
        );
    }
  }
  async function openFolder() {
    try {
      await (window as PickerWindow).showDirectoryPicker?.({
        id: 'carelab-recordings',
        mode: 'read',
        startIn: folder ?? 'videos',
      });
    } catch (error) {
      if ((error as DOMException).name !== 'AbortError')
        setMessage(
          t(
            '请在浏览器下载列表中选择“在文件夹中显示”。',
            'Choose Show in folder in your browser downloads.',
          ),
        );
    }
  }
  function stop() {
    const rec = recorder.current;
    if (!rec || rec.state === 'inactive') return;
    if (rec.state === 'recording')
      elapsed.current += performance.now() - started.current;
    setSeconds(Math.floor(elapsed.current / 1000));
    setPhase('finishing');
    rec.stop();
  }
  async function start() {
    if (busy || clip) return;
    setMessage('');
    setPhase('selecting');
    try {
      const media = await navigator.mediaDevices.getDisplayMedia({
        video: {
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          frameRate: { ideal: 30, max: 30 },
        },
        audio: false,
      });
      stream.current = media;
      const mime = recordingMime((m) => MediaRecorder.isTypeSupported(m));
      const rec = new MediaRecorder(media, {
        ...(mime ? { mimeType: mime } : {}),
        videoBitsPerSecond: 4_000_000,
      });
      recorder.current = rec;
      chunks.current = [];
      bytes.current = 0;
      elapsed.current = 0;
      setSeconds(0);
      rec.ondataavailable = (event) => {
        if (!event.data.size) return;
        chunks.current.push(event.data);
        bytes.current += event.data.size;
        // Bound memory for long demonstrations; preserve the recording rather than losing it.
        if (bytes.current >= 200 * 1024 * 1024 && rec.state !== 'inactive') {
          setMessage(
            t(
              '视频已达到 200 MB，已自动结束，请保存后开始下一段。',
              'Recording reached 200 MB and was stopped. Save it before starting another clip.',
            ),
          );
          stop();
        }
      };
      rec.onstop = async () => {
        media.getTracks().forEach((track) => track.stop());
        stream.current = null;
        const type = rec.mimeType || chunks.current[0]?.type || mime;
        const blob = new Blob(chunks.current, { type });
        chunks.current = [];
        recorder.current = null;
        if (!blob.size) {
          setPhase('idle');
          setOpen(true);
          setMessage(
            t(
              '未生成视频，请重新录制。',
              'No video was captured. Please try again.',
            ),
          );
          return;
        }
        if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
        objectUrl.current = URL.createObjectURL(blob);
        const result: Clip = {
          url: objectUrl.current,
          blob,
          name: recordingName(type),
          saved: false,
        };
        setClip(result);
        setOpen(true);
        setPhase('idle');
        if (folder) {
          setSaving(true);
          try {
            const file = await folder.getFileHandle(result.name, {
              create: true,
            });
            const writer = await file.createWritable();
            await writer.write(blob);
            await writer.close();
            setClip({ ...result, saved: true });
          } catch {
            setMessage(
              t(
                '目录保存未完成，视频仍可预览和下载。',
                'Folder save failed. Your video is still available to preview and download.',
              ),
            );
          } finally {
            setSaving(false);
          }
        }
      };
      rec.onerror = () => {
        setMessage(
          t(
            '录制中断，正在保留已录制的视频。',
            'Recording interrupted. Keeping the captured video.',
          ),
        );
        if (rec.state !== 'inactive') stop();
      };
      media.getVideoTracks()[0].addEventListener('ended', stop, { once: true });
      started.current = performance.now();
      rec.start(1000);
      setPhase('recording');
      setOpen(false);
    } catch (error) {
      stream.current?.getTracks().forEach((track) => track.stop());
      stream.current = null;
      recorder.current = null;
      setPhase('idle');
      setMessage(
        (error as DOMException).name === 'NotAllowedError' ||
          (error as DOMException).name === 'AbortError'
          ? t(
              '已取消录制或未获得屏幕共享许可。',
              'Recording cancelled or screen sharing permission was not granted.',
            )
          : t(
              '当前浏览器无法开始录制，请用桌面版 Chrome 或 Edge 打开本网站重试。',
              'Recording could not start. Open this site in desktop Chrome or Edge and retry.',
            ),
      );
    }
  }
  function pauseResume() {
    const rec = recorder.current;
    if (rec?.state === 'recording') {
      rec.pause();
      elapsed.current += performance.now() - started.current;
      setPhase('paused');
    } else if (rec?.state === 'paused') {
      rec.resume();
      started.current = performance.now();
      setPhase('recording');
    }
  }
  function clearClip() {
    if (!clip || saving) return;
    if (
      !clip.saved &&
      !window.confirm(
        t(
          '请确认已下载视频。开始新录制将清除本页的视频预览。',
          'Make sure you downloaded the video. Starting a new recording clears this preview.',
        ),
      )
    )
      return;
    URL.revokeObjectURL(clip.url);
    objectUrl.current = '';
    setClip(null);
    setMessage('');
    setSeconds(0);
  }
  const clock = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
  return (
    <div className="screen-recorder">
      <button
        className="ghost"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Video size={16} />
        {busy
          ? `${phase === 'paused' ? t('已暂停', 'Paused') : t('录制中', 'Recording')} ${clock}`
          : t('录制视频', 'Record video')}
      </button>
      {(phase === 'recording' || phase === 'paused') && (
        <>
          <button
            className="icon-button"
            aria-label={
              phase === 'paused'
                ? t('继续录制', 'Resume recording')
                : t('暂停录制', 'Pause recording')
            }
            onClick={pauseResume}
          >
            {phase === 'paused' ? <Play size={15} /> : <Pause size={15} />}
          </button>
          <button
            className="icon-button record-stop"
            aria-label={t('结束录制', 'Stop recording')}
            onClick={stop}
          >
            <Square size={15} />
          </button>
        </>
      )}
      {open && (
        <section
          className="record-panel"
          aria-label={t('界面视频录制', 'Screen recording')}
        >
          <div className="record-heading">
            <strong>{t('录制演示视频', 'Record your demonstration')}</strong>
            <button
              className="icon-button"
              aria-label={t('收起录制面板', 'Close recording panel')}
              onClick={() => setOpen(false)}
            >
              <X size={16} />
            </button>
          </div>
          <p>
            {t(
              '先进入全屏演示，再开始录制并选择本网页或窗口。录制当前可见的整个画面，无音频。',
              'Enter fullscreen first, then start recording and select this tab or window. Captures the entire visible view, without audio.',
            )}
          </p>
          <p className="record-format">
            {mp4
              ? t(
                  'MP4 · H.264 优先 · 最高 1080p / 30 fps · 约 30 MB/分钟',
                  'MP4 · H.264 preferred · up to 1080p / 30 fps · about 30 MB/min',
                )
              : t(
                  '当前浏览器使用 WebM；若要微信直接播放，建议使用支持 MP4 录制的新版 Chrome / Edge。',
                  'This browser records WebM. For inline WeChat playback, use a recent Chrome / Edge with MP4 recording support.',
                )}
          </p>
          {!supported && (
            <p role="alert">
              {t(
                '此浏览器不支持屏幕录制，请在桌面版 Chrome 或 Edge 中打开网站。',
                'Screen recording is unavailable here. Open the site in desktop Chrome or Edge.',
              )}
            </p>
          )}
          <div className="record-actions">
            {directorySupported && (
              <button
                className="ghost"
                disabled={busy || saving || !!clip}
                onClick={chooseFolder}
              >
                <FolderOpen size={15} />
                {folder
                  ? t('更换保存目录', 'Change folder')
                  : t('选择保存目录', 'Choose save folder')}
              </button>
            )}
            {!busy && !clip && (
              <button className="primary" disabled={!supported} onClick={start}>
                <Video size={15} />
                {t('开始录制', 'Start recording')}
              </button>
            )}
            {(phase === 'recording' || phase === 'paused') && (
              <>
                <button className="ghost" onClick={pauseResume}>
                  {phase === 'paused'
                    ? t('继续', 'Resume')
                    : t('暂停', 'Pause')}
                </button>
                <button className="primary" onClick={stop}>
                  {t('结束并保存', 'Stop & save')}
                </button>
              </>
            )}
          </div>
          <p>
            {folder
              ? `${t('保存目录：', 'Save folder: ')}${folder.name}`
              : t(
                  '未选择目录：结束后点击“下载视频”，保存到浏览器下载位置。',
                  'No folder selected: use Download video after recording to save through your browser.',
                )}
          </p>
          {phase === 'selecting' && (
            <p role="status">
              {t(
                '请在浏览器弹窗中选择录制画面…',
                'Select a capture source in the browser dialog…',
              )}
            </p>
          )}
          {phase === 'finishing' && (
            <p role="status">{t('正在生成视频…', 'Preparing video…')}</p>
          )}
          {clip && (
            <>
              <video
                controls
                playsInline
                src={clip.url}
                className="record-preview"
              />
              <p className="record-filename">
                {clip.name} · {(clip.blob.size / 1048576).toFixed(1)} MB
              </p>
              <p role="status">
                {saving
                  ? t('正在保存…', 'Saving…')
                  : clip.saved
                    ? t('已保存到所选目录。', 'Saved to your selected folder.')
                    : t(
                        '视频已生成，请下载保存。',
                        'Video ready. Download to keep it.',
                      )}
              </p>
              <div className="record-actions">
                <a className="primary" href={clip.url} download={clip.name}>
                  <Download size={15} />
                  {t('下载视频', 'Download video')}
                </a>
                {folder && directorySupported && (
                  <button className="ghost" onClick={openFolder}>
                    <FolderOpen size={15} />
                    {t('打开保存目录', 'Open save folder')}
                  </button>
                )}
                <button className="ghost" disabled={saving} onClick={clearClip}>
                  {t('录制下一段', 'New recording')}
                </button>
              </div>
              <p>
                {t(
                  'MP4 保存后可拖入电脑微信聊天发送。WebM 可作为文件发送，直接播放需转为 MP4。',
                  'Drag a saved MP4 into a desktop WeChat chat to send it. WebM can be sent as a file; inline playback requires MP4.',
                )}
              </p>
              <p>
                {folder
                  ? t(
                      '“打开保存目录”通过浏览器文件夹窗口定位；如需系统文件管理器，请从下载列表选择“在文件夹中显示”。',
                      'Open save folder uses the browser folder dialog. For your system file manager, use Show in folder in browser downloads.',
                    )
                  : t(
                      '打开浏览器下载列表，选择“在文件夹中显示”即可找到保存的视频。',
                      'Open browser downloads and choose Show in folder to locate the saved video.',
                    )}
              </p>
            </>
          )}
          {message && (
            <p className="record-message" role="status">
              {message}
            </p>
          )}
        </section>
      )}
    </div>
  );
}
