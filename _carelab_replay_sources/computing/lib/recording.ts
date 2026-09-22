export const RECORDING_MAX_BYTES = 200 * 1024 * 1024;
export const RECORDING_MAX_MS = 10 * 60 * 1000;
export function recordingFormat(supported: (mime: string) => boolean) {
  const types = [
    'video/mp4;codecs=avc1.42E028',
    'video/mp4;codecs=avc1',
    'video/mp4',
    'video/webm;codecs=vp8',
    'video/webm',
  ];
  return types.find(supported) ?? '';
}
export function recordingFilename(mime: string, date = new Date()) {
  return `CARELab-${date.toISOString().replace(/[:.]/g, '-')}.${mime.toLowerCase().startsWith('video/mp4') ? 'mp4' : 'webm'}`;
}
export type RecordingResult = {
  blob: Blob;
  filename: string;
  duration: number;
  reason: string;
};
export class CaptureSession {
  recorder: MediaRecorder;
  chunks: Blob[] = [];
  bytes = 0;
  elapsed = 0;
  since: number | null = null;
  reason = '';
  stopped = false;
  done: Promise<RecordingResult>;
  stream: MediaStream;
  private changed: () => void;
  private now: () => number;
  constructor(
    stream: MediaStream,
    mime: string,
    bits: number,
    changed: () => void = () => {},
    now: () => number = () => performance.now(),
    Recorder: typeof MediaRecorder = MediaRecorder,
  ) {
    this.stream = stream;
    this.changed = changed;
    this.now = now;
    this.recorder = new Recorder(stream, {
      mimeType: mime,
      videoBitsPerSecond: bits,
    });
    this.done = new Promise((resolve, reject) => {
      this.recorder.ondataavailable = (e) => {
        if (e.data.size) {
          this.chunks.push(e.data);
          this.bytes += e.data.size;
        }
        this.changed();
        if (this.bytes >= RECORDING_MAX_BYTES) this.stop('limit');
      };
      this.recorder.onerror = () => {
        this.reason = 'encoder';
      };
      this.recorder.onstop = () => {
        this.freezeClock();
        this.stopped = true;
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(this.chunks, {
          type: this.recorder.mimeType || mime,
        });
        this.chunks = [];
        this.changed();
        if (!blob.size) {
          reject(new Error('empty'));
          return;
        }
        resolve({
          blob,
          filename: recordingFilename(blob.type),
          duration: this.elapsed,
          reason: this.reason,
        });
      };
    });
    stream
      .getVideoTracks()
      .forEach((t) =>
        t.addEventListener('ended', () => this.stop('sharing-ended'), {
          once: true,
        }),
      );
  }
  start() {
    this.recorder.start(1000);
    this.since = this.now();
    this.changed();
  }
  private freezeClock() {
    if (this.since !== null) this.elapsed += this.now() - this.since;
    this.since = null;
  }
  duration() {
    return this.elapsed + (this.since !== null ? this.now() - this.since : 0);
  }
  pause() {
    if (this.recorder.state !== 'recording' || this.stopped) return;
    this.freezeClock();
    this.recorder.pause();
    this.changed();
  }
  resume() {
    if (this.recorder.state !== 'paused' || this.stopped) return;
    this.recorder.resume();
    this.since = this.now();
    this.changed();
  }
  stop(reason = '') {
    if (this.stopped) return;
    this.reason ||= reason;
    this.freezeClock();
    this.stopped = true;
    if (this.recorder.state !== 'inactive') this.recorder.stop();
    this.changed();
  }
}
