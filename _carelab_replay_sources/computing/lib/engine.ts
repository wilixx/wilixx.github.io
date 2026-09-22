export type Vec = [number, number, number];
export type Ground = {
  name: string;
  lat: number;
  lon: number;
  cityId?: string;
};
export type Config = {
  replayScenario?: string;
  count: number;
  seed: number;
  rho: number;
  reservation: number;
  ca: number;
  ra: number;
  da: number;
  range: number;
  elevation: number;
  degree: number;
  kmax: number;
  source: Ground;
  destination: Ground;
};
export type Node = {
  id: string;
  name: string;
  p: Vec;
  lat: number;
  lon: number;
  alt: number;
  compute: number;
  ground?: boolean;
};
export type Edge = {
  a: number;
  b: number;
  distance: number;
  delay: number;
  rate: number;
};
export type Route = {
  name: string;
  path: number[];
  compute: number | null;
  delay: number | null;
  status: string;
  ms: number;
  examined?: number;
};
export type Snapshot = {
  time: number;
  nodes: Node[];
  edges: Edge[];
  routes: Route[];
  eligible: number;
  invalid: number;
  elapsed: number;
  tracks?: Record<string, Vec[]>;
};
export const names = ['CASP', 'KSP', 'Nearest', 'Shortest', 'Random'];
export const colors = ['#5de4c7', '#b49bff', '#ffca7a', '#73aaff', '#ff8fae'];
export const defaults: Config = {
  count: 1200,
  seed: 42,
  rho: 15,
  reservation: 10,
  ca: 50,
  ra: 100,
  da: 100,
  range: 3000,
  elevation: 10,
  degree: 6,
  kmax: 30,
  source: { name: '喀什', lat: 39.5, lon: 76 },
  destination: { name: '北京', lat: 40, lon: 116 },
};
export function random(seed: number) {
  let a = seed | 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function distance(a: Vec, b: Vec) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}
export function groundVector(g: Ground): Vec {
  const lat = (g.lat * Math.PI) / 180,
    lon = (g.lon * Math.PI) / 180;
  return [
    6371 * Math.cos(lat) * Math.cos(lon),
    6371 * Math.cos(lat) * Math.sin(lon),
    6371 * Math.sin(lat),
  ];
}
