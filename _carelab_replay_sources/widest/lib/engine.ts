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
  reservation: number;
  lambda: number;
  range: number;
  elevation: number;
  degree: number;
  kmax: number;
  t1: boolean;
  t2: boolean;
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
  ground?: boolean;
};
export type Edge = {
  a: number;
  b: number;
  distance: number;
  delay: number;
  rate: number;
};
export type SearchStep = {
  iteration: number;
  threshold: number;
  lower: number;
  upper: number;
  nextLower: number;
  nextUpper: number;
  links: number;
  delay: number | null;
  width: number;
  feasible: boolean;
  reused: boolean;
  jumped: boolean;
  path: number[];
};
export type Route = {
  name: string;
  path: number[];
  delay: number | null;
  width: number;
  bottleneck: number | null;
  status: string;
  exact: boolean;
  calls: number;
  iterations: number;
  skipped: number;
  jumps: number;
  ms: number;
  trace: SearchStep[];
};
export type Snapshot = {
  time: number;
  nodes: Node[];
  edges: Edge[];
  routes: Route[];
  invalid: number;
  elapsed: number;
  tracks?: Record<string, Vec[]>;
};
export const names = ['GFO', 'Bisection', 'KSP', 'Shortest', 'Widest'];
export const colors = ['#64cfff', '#b49bff', '#ffca7a', '#71d6b5', '#ff8fae'];
export const defaults: Config = {
  count: 1200,
  seed: 42,
  reservation: 45,
  lambda: 30,
  t1: true,
  t2: true,
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
