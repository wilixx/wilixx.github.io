// Prefer H.264 MP4 for sharing; never disguise WebM as an MP4 file.
export function recordingMime(supports: (mime: string) => boolean) {
  return (
    [
      'video/mp4;codecs=avc1.424028',
      'video/mp4;codecs=avc1',
      'video/mp4',
      'video/webm;codecs=vp8',
      'video/webm',
    ].find(supports) ?? ''
  );
}
export function recordingName(mime: string, date = new Date()) {
  return `CARELab-SemCom-${date.toISOString().replace(/[:.]/g, '-')}.${mime.includes('mp4') ? 'mp4' : 'webm'}`;
}
