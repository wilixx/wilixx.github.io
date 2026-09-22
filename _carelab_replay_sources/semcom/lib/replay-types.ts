// Public display types and recorded scenario labels. No simulation or routing implementation.
export const models = [
  '文本 · Text-KB',
  '音频 · Audio-KB',
  '图像 · Image-KB',
  '视频 · Video-KB',
];
export const cities = [
  { name: '西安', lat: 34.34, lon: 108.94 },
  { name: '三亚', lat: 18.25, lon: 109.5 },
  { name: '喀什', lat: 39.47, lon: 75.99 },
  { name: '阿姆斯特丹', lat: 52.37, lon: 4.9 },
  { name: '雅典', lat: 37.98, lon: 23.73 },
  { name: '巴塞罗那', lat: 41.39, lon: 2.17 },
  { name: '迪拜', lat: 25.2, lon: 55.27 },
  { name: '吉隆坡', lat: 3.14, lon: 101.69 },
  { name: '米兰', lat: 45.46, lon: 9.19 },
  { name: '新加坡', lat: 1.35, lon: 103.82 },
];
export type Node = {
  name: string;
  id: number;
  lat: number;
  lon: number;
  alt: number;
  xyz: number[];
  enc: number[];
  dec: number[];
  ground?: boolean;
};
export type Edge = {
  to: number;
  delay: number;
  cap: number;
  propagation?: number;
  distance?: number;
};
export type Config = {
  count: number;
  rho: number;
  modelCount: number;
  slots: number;
  model: number;
  rate: number;
  sigma: number;
  source: number;
  dest: number;
  us: boolean;
  ud: boolean;
  seed: number;
  offset: number;
  window: number;
  elevation: number;
  maxLink: number;
  delayMode: string;
  codecMs: number;
  manualEnc: number;
  manualDec: number;
  k: number;
  timeMs?: number;
};
export const defaults: Config = {
  count: 1000,
  rho: 20,
  modelCount: 3,
  slots: 5,
  model: 0,
  rate: 50,
  sigma: 0.25,
  source: 0,
  dest: 6,
  us: false,
  ud: false,
  seed: 2026,
  offset: 0,
  window: 60,
  elevation: 0,
  maxLink: 4500,
  delayMode: 'physical',
  codecMs: 8,
  manualEnc: -1,
  manualDec: -1,
  k: 20,
};
export type Result = {
  name: string;
  path: number[];
  enc: number;
  dec: number;
  encIndex: number;
  decIndex: number;
  delay: number;
  bandwidth: number;
  computeMs: number;
  reason?: string;
  raw?: boolean;
  propagationMs?: number;
  totalMs?: number;
  status?: string;
};
export const methods = [
  'SemCom-CSP',
  '最近语义节点',
  '随机语义节点',
  'KSP · Yen',
  'BitCom (CGR)',
  '分层图 · 校验',
];
export type Network = { nodes: Node[]; adj: Edge[][]; s: number; d: number; time: string; epoch: string; edges: number; window: number; };
export type ReplayFrame = { net: Network; results: Result[]; buildMs: number; frameMs: number; };
export type ReplayData = { schemaVersion: 1; config: Config; frames: ReplayFrame[]; source: { epoch: string; description: string; }; };
