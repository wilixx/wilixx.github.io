'use client';
import { useEffect, useRef, useState } from 'react';
import {
  Video,
  Circle,
  Pause,
  Play,
  Square,
  FolderOpen,
  Download,
  X,
} from 'lucide-react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
} from './ui/popover';
import {
  CaptureSession,
  RECORDING_MAX_MS,
  recordingFormat,
} from '../lib/recording';
import type { RecordingResult } from '../lib/recording';
import type { Language } from '../lib/i18n';
type Phase = 'idle' | 'choosing' | 'recording' | 'paused' | 'saving';
type Local = { token: string; folder: string; can_open: boolean };
export default function Recorder({ language }: { language: Language }) {
  const zh = language === 'zh';
  const txt = (a: string, b: string) => (zh ? a : b);
  const [open, setOpen] = useState(false),
    [phase, setPhase] = useState<Phase>('idle');
  const [mime, setMime] = useState(''),
    [supported, setSupported] = useState(false);
  const [seconds, setSeconds] = useState(0),
    [bytes, setBytes] = useState(0);
  const [result, setResult] = useState<
    (RecordingResult & { url: string }) | null
  >(null);
  const [notice, setNotice] = useState(''),
    [saved, setSaved] = useState('');
  const [directory, setDirectory] = useState<any>(null),
    [local, setLocal] = useState<Local | null>(null);
  const [quality, setQuality] = useState('1080'),
    [canChoose, setCanChoose] = useState(false);
  const session = useRef<CaptureSession | null>(null),
    mounted = useRef(true),
    resultUrl = useRef('');
  const active = phase === 'recording' || phase === 'paused';
  const locked = phase !== 'idle';
  useEffect(() => {
    mounted.current = true;
    setSupported(
      !!navigator.mediaDevices?.getDisplayMedia &&
        typeof MediaRecorder !== 'undefined',
    );
    if (typeof MediaRecorder !== 'undefined')
      setMime(recordingFormat((t) => MediaRecorder.isTypeSupported(t)));
    setCanChoose('showDirectoryPicker' in window);

    return () => {
      mounted.current = false;
      session.current?.stop();
      session.current?.stream.getTracks().forEach((t) => t.stop());
      if (resultUrl.current) URL.revokeObjectURL(resultUrl.current);
    };
  }, []);
  useEffect(() => {
    if (!active && phase !== 'saving') return;
    const timer = setInterval(() => {
      const s = session.current;
      if (!s) return;
      setSeconds(Math.floor(s.duration() / 1000));
      if (s.duration() >= RECORDING_MAX_MS) s.stop('limit');
    }, 250);
    const before = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', before);
    return () => {
      clearInterval(timer);
      window.removeEventListener('beforeunload', before);
    };
  }, [active, phase]);
  function download(r: RecordingResult & { url: string }) {
    const a = document.createElement('a');
    a.href = r.url;
    a.download = r.filename;
    a.click();
    setSaved('download');
  }
  async function save(r: RecordingResult & { url: string }) {
    try {
      if (directory) {
        const file = await directory.getFileHandle(r.filename, {
          create: true,
        });
        const writable = await file.createWritable();
        try {
          await writable.write(r.blob);
          await writable.close();
        } catch (e) {
          await writable.abort().catch(() => {});
          throw e;
        }
        setSaved(directory.name);
      } else if (local) {
        const response = await fetch('/api/recordings/save', {
          method: 'POST',
          headers: {
            'Content-Type': r.blob.type,
            'X-CARELab-Token': local.token,
          },
          body: r.blob,
        });
        if (!response.ok) throw Error('save');
        setSaved(local.folder);
      } else download(r);
    } catch {
      setNotice('save');
      // Preserve the recording and provide an explicit download retry.
    }
  }
  async function start() {
    if (locked) return;
    setPhase('choosing');
    setNotice('');
    setSaved('');
    let stream: MediaStream | null = null;
    try {
      const hd = quality === '1080';
      // Keep this call in the click activation; the browser owns source consent.
      stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          width: { max: hd ? 1920 : 1280 },
          height: { max: hd ? 1080 : 720 },
          frameRate: { max: 30 },
        },
        audio: false,
        preferCurrentTab: true,
        selfBrowserSurface: 'include',
      } as DisplayMediaStreamOptions);
      if (!mounted.current) {
        stream.getTracks().forEach((t) => t.stop());
        return;
      }
      const s = new CaptureSession(stream, mime, hd ? 4000000 : 2000000, () => {
        if (!mounted.current) return;
        setBytes(s.bytes);
        setPhase(
          s.stopped
            ? 'saving'
            : s.recorder.state === 'paused'
              ? 'paused'
              : 'recording',
        );
      });
      session.current = s;
      s.start();
      setSeconds(0);
      setBytes(0);
      setOpen(false);
      if (resultUrl.current) URL.revokeObjectURL(resultUrl.current);
      resultUrl.current = '';
      setResult(null);
      const recording = await s.done;
      if (!mounted.current) return;
      const next = { ...recording, url: URL.createObjectURL(recording.blob) };
      resultUrl.current = next.url;
      setResult(next);
      setOpen(true);
      setSeconds(Math.floor(recording.duration / 1000));
      if (recording.reason === 'limit' || recording.reason === 'encoder')
        setNotice(recording.reason);
      await save(next);
    } catch (e) {
      stream?.getTracks().forEach((t) => t.stop());
      if (mounted.current)
        setNotice(
          e instanceof DOMException && e.name === 'NotAllowedError'
            ? 'permission'
            : 'capture',
        );
    } finally {
      if (mounted.current) {
        setPhase('idle');
        setOpen(true);
      }
    }
  }
  async function chooseDirectory() {
    try {
      const dir = await (window as any).showDirectoryPicker({
        id: 'carelab-recordings',
        mode: 'readwrite',
        startIn: directory || 'videos',
      });
      setDirectory(dir);
      setNotice('');
    } catch (e) {
      if (!(e instanceof DOMException && e.name === 'AbortError'))
        setNotice('directory');
    }
  }
  async function openFolder() {
    if (!local || directory) return;
    try {
      const r = await fetch('/api/recordings/open', {
        method: 'POST',
        headers: { 'X-CARELab-Token': local.token },
      });
      if (!r.ok) throw Error('open');
    } catch {
      setNotice('folder');
    }
  }
  const message: Record<string, string> = {
    permission: txt(
      '未获得屏幕共享权限。请重试并选择当前标签页；若内置浏览器不支持，请在桌面 Chrome 或 Edge 中打开此网址。',
      'Screen sharing was not allowed. Retry and select this tab, or open this URL in desktop Chrome or Edge.',
    ),
    capture: txt(
      '未能完成录制。请在桌面 Chrome 或 Edge 中重试，并允许屏幕共享。',
      'Recording could not complete. Try desktop Chrome or Edge and allow screen sharing.',
    ),
    save: txt(
      '保存未完成，视频仍保留在此页面，请点击“下载视频”重试。',
      'Saving did not complete. Your video remains here; use Download video to retry.',
    ),
    directory: txt(
      '此浏览器未允许选择目录，将使用浏览器下载。',
      'Folder selection was not allowed. Browser downloads remain available.',
    ),
    folder: txt(
      '未能打开目录，请在文件管理器中打开下面显示的保存位置。',
      'Could not open the folder. Open the saved location below in your file manager.',
    ),
    limit: txt(
      '已达到单次 10 分钟或 200 MB 上限，录制自动结束。',
      'Recording stopped at the 10-minute or 200 MB limit.',
    ),
    encoder: txt(
      '录制编码中断，已保留收到的视频片段；请预览确认。',
      'Encoding was interrupted. Received video has been preserved; check the preview.',
    ),
  };
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          className={'record-trigger ' + (active ? 'is-recording' : '')}
          title={txt('录制整个界面', 'Record the entire interface')}
        >
          <Video size={16} />
          <span>
            {active ? txt('录制中', 'Recording') : txt('录屏', 'Record')}
          </span>
        </PopoverTrigger>
        <PopoverContent className="recorder-panel" align="end" sideOffset={10}>
          <div className="recorder-heading">
            <PopoverTitle>{txt('界面录屏', 'Screen recording')}</PopoverTitle>
            <button
              className="icon-button"
              aria-label={txt('收起录屏面板', 'Close recording panel')}
              onClick={() => setOpen(false)}
            >
              <X size={16} />
            </button>
          </div>
          <p>
            {txt(
              '选择当前标签页即可录下地球、参数与路由对比。录制画面，不采集麦克风。',
              'Choose this tab to capture the globe, controls and route comparison. Video only; no microphone.',
            )}
          </p>
          <div className="record-settings">
            <label>
              {txt('画面质量', 'Quality')}
              <select
                value={quality}
                disabled={locked}
                onChange={(e) => setQuality(e.target.value)}
              >
                <option value="1080">
                  {txt('清晰 · 1080p', 'Clear · 1080p')}
                </option>
                <option value="720">
                  {txt('轻量 · 720p', 'Compact · 720p')}
                </option>
              </select>
            </label>
            <span className="record-format">
              {mime.startsWith('video/mp4')
                ? 'MP4 · H.264'
                : mime
                  ? 'WebM'
                  : '—'}
              <small>≤ 30 FPS</small>
            </span>
          </div>
          {(!supported || !mime) && (
            <p className="record-alert">
              {txt(
                '当前环境不支持网页录屏，请在桌面 Chrome 或 Edge 中打开此网址。',
                'Recording is unavailable here. Open this URL in desktop Chrome or Edge.',
              )}
            </p>
          )}
          {mime && !mime.startsWith('video/mp4') && (
            <p className="record-alert">
              {txt(
                '此浏览器只能录制 WebM。为方便微信播放，建议改用支持 MP4 录制的桌面 Chrome 或 Edge；本地包也附有转换工具。',
                'This browser records WebM only. For WeChat playback, use desktop Chrome or Edge with MP4 recording support. The local package also includes a conversion helper.',
              )}
            </p>
          )}
          <div className="record-buttons">
            {!active ? (
              <button
                className="primary"
                disabled={locked || !supported || !mime}
                onClick={start}
              >
                <Circle size={14} />
                {phase === 'choosing'
                  ? txt('等待选择画面…', 'Choose a screen…')
                  : phase === 'saving'
                    ? txt('正在保存…', 'Saving…')
                    : txt('开始录制', 'Start recording')}
              </button>
            ) : (
              <>
                <button
                  onClick={() =>
                    phase === 'paused'
                      ? session.current?.resume()
                      : session.current?.pause()
                  }
                >
                  {phase === 'paused' ? (
                    <Play size={14} />
                  ) : (
                    <Pause size={14} />
                  )}{' '}
                  {phase === 'paused'
                    ? txt('继续', 'Resume')
                    : txt('暂停', 'Pause')}
                </button>
                <button
                  className="record-stop"
                  onClick={() => session.current?.stop()}
                >
                  <Square size={13} />
                  {txt('结束并保存', 'Stop & save')}
                </button>
              </>
            )}
          </div>
          <p className="record-footnote">
            {txt(
              '单段最多 10 分钟或约 200 MB，达到上限自动结束保存。',
              'Each clip ends automatically at 10 minutes or about 200 MB.',
            )}
          </p>
          <div className="record-destination">
            <span>{txt('保存位置', 'Save location')}</span>
            <strong>
              {directory?.name ||
                (local
                  ? local.folder
                  : txt('浏览器下载目录', 'Browser downloads'))}
            </strong>
          </div>
          <div className="record-folder-actions">
            {canChoose && !local && (
              <button disabled={locked} onClick={chooseDirectory}>
                <FolderOpen size={14} />
                {txt('选择保存目录', 'Choose folder')}
              </button>
            )}
            {local?.can_open && !directory && (
              <button onClick={openFolder}>
                <FolderOpen size={14} />
                {txt('打开保存目录', 'Open saved folder')}
              </button>
            )}
            {directory && (
              <button disabled={locked} onClick={() => setDirectory(null)}>
                {txt('恢复默认位置', 'Use default location')}
              </button>
            )}
          </div>
          {!local && (
            <p className="record-footnote">
              {txt(
                '在线版保存后，可在浏览器下载列表中点击“在文件夹中显示”。本地 Python 版支持直接打开保存目录。',
                'After downloading, use “Show in folder” in your browser’s downloads. The local Python version can open its saved folder directly.',
              )}
            </p>
          )}
          {notice && (
            <p role="status" className="record-alert">
              {message[notice]}
            </p>
          )}
          {result && (
            <div className="record-result">
              <video
                src={result.url}
                controls
                playsInline
                preload="metadata"
                aria-label={txt('录屏预览', 'Recording preview')}
              />
              <div>
                {result.filename}
                <small>
                  {(result.blob.size / 1048576).toFixed(1)} MB ·{' '}
                  {Math.floor(result.duration / 1000)} s
                </small>
              </div>
              {saved && (
                <p className="record-saved">
                  {saved === 'download'
                    ? txt(
                        '已发起下载，请在下载列表确认。',
                        'Download requested; check your downloads.',
                      )
                    : txt('已保存至：', 'Saved to: ') + saved}
                </p>
              )}
              <button onClick={() => download(result)}>
                <Download size={14} />
                {txt('下载视频', 'Download video')}
              </button>
            </div>
          )}
        </PopoverContent>
      </Popover>
      {active && (
        <div
          className="record-dock"
          role="group"
          aria-label={txt('录制控制', 'Recording controls')}
        >
          <i className={phase === 'paused' ? 'paused' : ''} />
          <span>{phase === 'paused' ? txt('已暂停', 'Paused') : 'REC'}</span>
          <strong>
            {Math.floor(seconds / 60)
              .toString()
              .padStart(2, '0')}
            :{(seconds % 60).toString().padStart(2, '0')}
          </strong>
          <small>{(bytes / 1048576).toFixed(1)} MB</small>
          <button
            title={
              phase === 'paused'
                ? txt('继续录制', 'Resume recording')
                : txt('暂停录制', 'Pause recording')
            }
            onClick={() =>
              phase === 'paused'
                ? session.current?.resume()
                : session.current?.pause()
            }
          >
            {phase === 'paused' ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <button
            className="record-stop"
            onClick={() => session.current?.stop()}
          >
            <Square size={12} />
            {txt('结束', 'Stop')}
          </button>
        </div>
      )}
    </>
  );
}
