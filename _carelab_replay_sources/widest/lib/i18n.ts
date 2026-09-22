export type Language = 'zh' | 'en';
export const platformName = 'CARELab Widest-Inter Satellite Routing Platform';
export const paperUrl = 'https://doi.org/10.1109/TVT.2024.3516779';
const english: Record<string, string> = {
  自定义: 'Custom location',
  '当前浏览器无法启动 WebGL，请使用支持硬件加速的浏览器。':
    'WebGL is unavailable. Please use a browser with hardware acceleration.',
  可拖动旋转和缩放的三维卫星地球:
    'Interactive 3D satellite globe; drag to rotate and scroll to zoom',
  '请缩短导出时间范围或增大采样间隔。当前采样步数上限：':
    'Shorten the export range or increase the sample interval. Current sample limit: ',
};
const chinese: Record<string, string> = {
  'Invalid CelesTrak OMM JSON': 'CelesTrak OMM JSON 格式无效',
  'No usable Starlink orbit records': '没有可用的 Starlink 轨道记录',
  'Simulation worker could not start. Please reload.':
    '轨道工作进程未能启动，请刷新页面。',
  'Orbit cache unavailable': '轨道缓存暂不可用',
  'Export could not be saved. Please retry a shorter interval.':
    '导出未能保存，请缩短时间范围后重试。',
};
export function translate(text: string, language: Language) {
  const map = language === 'en' ? english : chinese;
  const key = Object.keys(map)
    .sort((a, b) => b.length - a.length)
    .find((k) => text.includes(k));
  return key ? text.replace(key, map[key]) : text;
}
