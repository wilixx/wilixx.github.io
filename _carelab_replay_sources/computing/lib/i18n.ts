import { cloneElement, isValidElement } from 'react';
import type { ReactNode, ReactElement } from 'react';

export type Language = 'zh' | 'en';
export const platformName = 'CARELab in-orbit computing platform';
export const paperUrl = 'https://doi.org/10.1109/TVT.2025.3550806';

// Presentation-only translations. IDs, form values, simulation state and exports
// keep their original values, so changing language cannot change a route.
export const english: Record<string, string> = {
  '回放播放中':'Replay playing','正在加载场景…':'Loading scenario…','正在加载回放…':'Loading replay…','录制时求解耗时':'Recorded solver time','回放起点':'Replay start','导出当前回放帧':'Export replay frame','1× 回放':'1× replay',
  北京: 'Beijing',
  西安: 'Xi’an',
  三亚: 'Sanya',
  密云: 'Miyun',
  喀什: 'Kashgar',
  新加坡: 'Singapore',
  东京: 'Tokyo',
  悉尼: 'Sydney',
  '论文 Algorithm 3 · 带宽过滤后，正向 / 反向最短路联合选取计算节点，允许重复经过中继卫星。':
    'Paper Algorithm 3 · Filter links by bandwidth, then combine forward and reverse shortest paths to select a computing node. Relay satellites may be revisited.',
  '论文 Algorithm 2 · Yen K 最短简单路径，按传播时延依次检查算力；达到 K 或 180 ms 搜索预算会明确提示。':
    'Paper Algorithm 2 · Examine Yen’s K shortest simple paths in delay order for sufficient compute. A K limit or 180 ms search budget is reported explicitly.',
  '论文 baseline · 选距离源地面节点最近的可用计算卫星，再拼接两段最短路径。':
    'Paper baseline · Select the available computing satellite geometrically nearest to the source, then join two shortest paths.',
  '论文 baseline · 先选源至目的最短路径，路径上没有足够算力则拒绝任务。':
    'Paper baseline · Select the shortest source-to-destination path; reject the task if no satellite on it has sufficient compute.',
  '论文 baseline · 在可用计算卫星中固定种子随机选一个，再拼接两段最短路径。':
    'Paper baseline · Select an available computing satellite using a fixed random seed, then join two shortest paths.',
  '需要 CelesTrak OMM JSON 数组': 'A CelesTrak OMM JSON array is required',
  轨道缓存加载失败: 'Could not load the orbit cache',
  已接纳: 'Accepted',
  '请输入有效的 UTC 时间': 'Enter a valid UTC time',
  'Starlink · 计算感知路由': 'Starlink · Computing-aware routing',
  已暂停: 'Paused',
  卫星星座: 'Constellation',
  颗: ' sats',
  卫星数量: 'Satellite count',
  数量: 'Count',
  种子: 'Seed',
  目的节点: 'Destination',
  源节点: 'Source',
  '算力需求 Ca': 'Compute demand Ca',
  单位: ' units',
  '速率需求 Ra': 'Rate demand Ra',
  '时延上限 Da': 'Delay bound Da',
  资源预留比例: 'Reservation ratio',
  链路与算法参数: 'Link and algorithm settings',
  'ISL 最远距离': 'Max ISL range',
  '每星 ISL 上限': 'Max ISLs per satellite',
  '基于 IEEE TVT · 2025': 'Based on IEEE TVT · 2025',
  路由视图: 'route view',
  全屏演示: 'Fullscreen presentation',
  浏览器未允许全屏: 'The browser did not allow fullscreen',
  重置视角: 'Reset view',
  '显示全部链路，可点击查看距离':
    'Show all links; click a link to inspect its distance',
  切换路由卫星轨迹: 'Toggle trajectories of satellites on the route',
  叠加所有算法路径: 'Overlay all algorithm paths',
  通信卫星: 'Relay satellite',
  计算卫星: 'Computing satellite',
  已选计算节点: 'Selected computing node',
  距离: 'Distance',
  传播时延: 'Propagation delay',
  可用速率: 'Available rate ',
  'Mbps · 双向仿真链路': 'Mbps · Simulated bidirectional link',
  '该链路在当前快照已断开。':
    'This link is disconnected in the current snapshot.',
  当前卫星: 'Active satellites',
  可用计算节点: 'Eligible compute nodes',
  '星地 / 星间链路': 'GSL / ISL links',
  条: ' links',
  暂停: 'Pause',
  播放: 'Play',
  '仿真时间 / UTC': 'Simulation time / UTC',
  '仿真 UTC 时间': 'Simulation time in UTC',
  时间倍率: 'Playback speed',
  '拖动旋转 · 滚轮缩放 · 点击路径查看链路':
    'Drag to rotate · Scroll to zoom · Click a route to inspect links',
  快照: 'Snapshot ',
  初始化: 'Initializing',
  '同一网络，五种决策': 'One network. Five decisions.',
  '点击算法切换路径与计算节点。':
    'Select an algorithm to view its route and computing node.',
  '论文 KSP': 'PAPER KSP',
  计算中: 'Computing',
  '· 路由详情': '· Route details',
  '执行计算 ·': 'Computing · ',
  正在计算路径: 'Computing route',
  'KSP 已检查路径': 'KSP paths examined',
  算法接纳当前任务: 'algorithms accept this task',
  '当前浏览器无法启动 WebGL，请使用支持硬件加速的浏览器。':
    'WebGL is unavailable. Please use a browser with hardware acceleration.',
  可拖动旋转和缩放的三维卫星地球:
    'Interactive 3D satellite globe; drag to rotate and scroll to zoom',

};

const chinese: Record<string, string> = {
  'RESEARCH DEMONSTRATOR': '科研演示平台',
  '01 / SCENARIO': '01 / 场景配置',
  'LIVE ORBIT / SIMULATED NETWORK': '轨道推演 / 网络仿真',
  '02 / ROUTING INTELLIGENCE': '02 / 路由决策',
  'LINK INSPECTOR': '链路详情',
  'CONTACT PLAN EXPORT': '连接计划导出',
  'METHOD & PROVENANCE': '方法与数据来源',
  PROPOSED: '所提方法',
  BASELINE: '基线方法',
  HOPS: '跳',
};
const chinesePattern = new RegExp(
  Object.keys(chinese)
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|'),
  'g',
);
const pattern = new RegExp(
  Object.keys(english)
    .sort((a, b) => b.length - a.length)
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|'),
  'g',
);

export function translate(text: string, language: Language): string {
  return language === 'en'
    ? text.replace(/\s+/g, ' ').replace(pattern, (s) => english[s])
    : text.replace(chinesePattern, (s) => chinese[s]);
}

/** Localize the explicit React presentation tree, never the DOM or form state. */
export function localizeView(node: ReactNode, language: Language): ReactNode {
  if (typeof node === 'string') return translate(node, language);
  if (Array.isArray(node))
    return node.map((child, index) => {
      const translated = localizeView(child, language);
      return isValidElement(translated) && translated.key === null
        ? cloneElement(translated, { key: index })
        : translated;
    });
  if (!isValidElement(node)) return node;
  const element = node as ReactElement<Record<string, any>>;
  const props: Record<string, any> = {};
  for (const key of ['title', 'aria-label', 'placeholder', 'alt']) {
    if (typeof element.props[key] === 'string')
      props[key] = translate(element.props[key], language);
  }
  // An option without an explicit value derives its value from its label.
  // Preserve the original value even when translating that label.
  if (
    element.type === 'option' &&
    element.props.value === undefined &&
    typeof element.props.children === 'string'
  ) {
    props.value = element.props.children;
  }
  if ('children' in element.props)
    props.children = localizeView(element.props.children, language);
  return cloneElement(element, props);
}
