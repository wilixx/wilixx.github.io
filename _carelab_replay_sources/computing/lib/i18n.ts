import { cloneElement, isValidElement } from 'react';
import type { ReactNode, ReactElement } from 'react';

export type Language = 'zh' | 'en';
export const platformName = 'CARELab in-orbit computing platform';
export const paperUrl = 'https://doi.org/10.1109/TVT.2025.3550806';

// Presentation-only translations. IDs, form values, simulation state and exports
// keep their original values, so changing language cannot change a route.
export const english: Record<string, string> = {
  '回放播放中':'Replay playing','轨道与路径 / 预录回放':'ORBITS & ROUTES / RECORDED REPLAY','正在加载预录场景…':'Loading recorded scenario…','正在加载回放…':'Loading replay…','录制时求解耗时':'Recorded solver time','回放起点':'Replay start','导出当前回放帧':'Export replay frame','1× 回放':'1× replay','本场景的地面节点固定；请在上方选择预录场景。':'Ground nodes are fixed; choose a recorded scenario above.','回放预录轨道与路径，探索在轨计算。':'Explore in-orbit computing through recorded scenarios.',
  '连通时段为采样近似 [开始, 结束)，边界误差最多一个采样间隔，可能漏掉更短接触。当前规模最多':
    'Contacts use sampled intervals [start, end). Boundary uncertainty is up to one interval; shorter contacts may be missed. At this scale, the limit is',
  '全选当前星座 ·': 'Use full constellation ·',
  搜索目的城市: 'Search destination city',
  搜索源城市: 'Search source city',
  '城市库暂不可用，可输入经纬度或球面选点。':
    'City database unavailable. Enter coordinates or pick on the globe.',
  '中英文搜索城市；点击定位图标可在地球上选点。':
    'Search city names; use the pin button to pick on the globe.',
  '城市圆点或任意经纬度 ·': 'Pick a city dot or any coordinates ·',
  '请缩短导出时间范围或增大采样间隔。当前采样步数上限：':
    'Shorten the export range or increase the sample interval. Current sample limit: ',
  '结束)，边界误差最多一个采样间隔，可能漏掉更短接触。当前规模最多':
    'end). Boundary uncertainty is up to one sample interval; shorter contacts may be missed. At this scale, the limit is',
  '步；较长时间范围请增大采样间隔。':
    'samples; increase the interval for a longer time range.',
  '卫星上限随可用轨道目录更新，目录数量不等于已核实的运营卫星数量。城市坐标表示中心位置。':
    'The satellite limit follows the available orbital catalog, whose count is not a verified operational fleet count. City coordinates represent central locations.',
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
  '轨道源每两小时更新一次，请稍后再试；当前缓存仍可使用。':
    'The orbit source updates every two hours. Please try later; the current cache remains available.',
  数据源暂时不可用: 'The data source is temporarily unavailable',
  '在线更新暂不可用，仍使用当前轨道缓存。可从 CelesTrak 下载 OMM JSON 后导入，或使用本地 Python 服务更新。':
    'Online refresh is unavailable. The current orbit cache is still in use. Import an OMM JSON file from CelesTrak, or refresh through the local Python server.',
  '请选择有效时间范围，结束晚于开始，总采样步数不超过 720。':
    'Choose a valid time range with the end after the start and no more than 720 samples.',
  'ORBIT 首页': 'CARELab home',
  'Starlink · 计算感知路由': 'Starlink · Computing-aware routing',
  轨道推演中: 'Propagating',
  已暂停: 'Paused',
  方法与数据说明: 'Methods and data',
  导出连接关系: 'Export contacts',
  构建你的星地网络: 'Build your satellite network',
  '从真实轨道出发，探索在轨计算。':
    'Explore in-orbit computing with real orbital data.',
  卫星星座: 'Constellation',
  随机选取卫星: 'Random satellite sample',
  颗: ' sats',
  卫星数量: 'Satellite count',
  数量: 'Count',
  种子: 'Seed',
  更换随机卫星样本: 'Choose a new random satellite sample',
  重选: 'Resample',
  条可用: ' available',
  '地面节点 / Cell': 'Ground nodes / cells',
  目的节点: 'Destination',
  源节点: 'Source',
  自定义: 'Custom',
  纬度: 'Latitude',
  经度: 'Longitude',
  在地球上选取位置: 'Pick a location on the globe',
  随机地面节点: 'Randomize ground nodes',
  计算与服务约束: 'Compute and service constraints',
  '计算卫星部署比例 ρ': 'Computing satellite share ρ',
  计算卫星部署比例: 'Computing satellite share',
  '算力需求 Ca': 'Compute demand Ca',
  单位: ' units',
  '速率需求 Ra': 'Rate demand Ra',
  '时延上限 Da': 'Delay bound Da',
  资源预留比例: 'Reservation ratio',
  链路与算法参数: 'Link and algorithm settings',
  'ISL 最远距离': 'Max ISL range',
  '每星 ISL 上限': 'Max ISLs per satellite',
  '最低仰角 °': 'Min elevation °',
  'KSP 最大 K': 'KSP max K',
  'ISL 单位 km。链路取视线可达的近邻，最多':
    'ISL range in km. Connect visible nearest neighbors, up to ',
  '条；资源预留每 60 秒更新。':
    ' links per satellite; reservations update every 60 seconds.',
  '基于 IEEE TVT · 2025': 'Based on IEEE TVT · 2025',
  '让计算，沿最优路径发生。': 'Route intelligently. Compute in orbit.',
  路由视图: 'route view',
  全屏演示: 'Fullscreen presentation',
  浏览器未允许全屏: 'The browser did not allow fullscreen',
  '正在传播轨道并构建网络…': 'Propagating orbits and building the network…',
  点击地球设置: 'Click the globe to set the ',
  取消: 'Cancel',
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
  '1× 实时': '1× Live',
  回到现在: 'Now',
  '拖动旋转 · 滚轮缩放 · 点击路径查看链路':
    'Drag to rotate · Scroll to zoom · Click a route to inspect links',
  '重新计算中…': 'Recomputing…',
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
  '可增加卫星数量或调整地面位置、服务约束。':
    'Try more satellites, different ground locations, or adjusted service constraints.',
  算法求解耗时: 'Solver runtime',
  'KSP 已检查路径': 'KSP paths examined',
  算法接纳当前任务: 'algorithms accept this task',
  '同一快照独立比较，不相互扣减资源。':
    'Independent comparisons on one snapshot; no shared resource deductions.',
  '真实轨道推演 · 链路 / 算力仿真':
    'Real orbit propagation · Simulated links / compute',
  轨道中位历元: 'Median orbit epoch ',
  加载中: 'Loading',
  '· ⚠ 历元偏离超过 3 天': '· ⚠ More than 3 days from orbit epoch',
  更新中: 'Refreshing',
  更新轨道: 'Refresh orbits',
  '导入 OMM': 'Import OMM',
  '导入失败，请使用有效的 CelesTrak OMM JSON 数组。':
    'Import failed. Use a valid CelesTrak OMM JSON array.',
  方法说明: 'Method notes',
  '把动态网络，带入你的研究。': 'Bring the dynamic network into your research.',
  '导出当前卫星样本与地面节点在指定时间段内的双向连接关系。':
    'Export bidirectional contacts for the selected satellites and ground nodes over a specified time range.',
  '开始时间（UTC）': 'Start time (UTC)',
  '结束时间（UTC）': 'End time (UTC)',
  采样间隔: 'Sampling interval',
  秒: ' seconds',
  'JSON.gz · 可直接用 Python 读取或转换为 pickle':
    'JSON.gz · Read directly in Python or convert to pickle',
  '包含 NORAD ID、起止 UTC、每个采样点的距离、传播时延、剩余速率与节点算力，附原始 OMM 和场景参数。':
    'Includes NORAD IDs, start/end UTC, per-sample distance, propagation delay, available rate and compute, plus original OMM records and scenario settings.',
  '连通时段为采样近似 [开始, 结束)，边界误差最多一个采样间隔，可能漏掉更短接触。最多 720 步，长时间 / 小步长导出会较慢。':
    'Contacts use sampled [start, end) intervals. Boundaries may differ by one sample step, and shorter contacts may be missed. Up to 720 steps; long ranges or small steps take longer.',
  生成并下载连接计划: 'Generate and download contact plan',
  正在生成: 'Generating ',
  从论文到可交互实验: 'From paper to interactive experiment',
  'CASP 对应论文 Algorithm 3，KSP 对应 Algorithm 2；Nearest、Shortest、Random 对应 VI-A 三个 baseline。':
    'CASP implements Algorithm 3 and KSP implements Algorithm 2. Nearest, Shortest and Random are the three baselines in Section VI-A.',
  时延口径: 'Delay definition',
  '端到端传播时延 = 每次经过链路的距离 ÷ 光速之和，包含上 / 下行；不包含排队、序列化及任务执行时间。算法求解耗时单独展示。':
    'End-to-end propagation delay sums distance / speed of light for each link traversal, including uplink and downlink. It excludes queueing, serialization and task execution. Solver runtime is shown separately.',
  轨道与网络: 'Orbits and network',
  'CelesTrak 公开 OMM 数据 + satellite.js SGP4 推演。不是实时遥测。球形地球半径 6371 km，ISL 视线避开地表以上 80 km，按距离构建有度数上限的双向近邻图；GSL 由最低仰角决定。Cell 用中心点表示。':
    'Public CelesTrak OMM data is propagated with satellite.js SGP4; this is not live telemetry. The spherical Earth radius is 6,371 km. ISLs clear Earth by 80 km and form a bidirectional nearest-neighbor graph with a degree limit. GSLs use a minimum elevation angle. Cells are represented by center points.',
  资源与复现边界: 'Resources and reproduction scope',
  '算力归一化为 100，链路初始速率 300–350 Mbps；按配置预留比例随机乘以 0、1/8、1/4、1/2、1。资源每 60 秒变化。界面按快照独立比较单个任务，未复现 STK、无线链路预算、ILP 和论文批量请求实验。连接导出采用定步长采样，并非 Algorithm 1 的精确事件分割。':
    'Compute capacity is normalized to 100; initial link rates are 300–350 Mbps. Reservations randomly multiply resources by 0, 1/8, 1/4, 1/2 or 1 every 60 seconds. Each snapshot compares a single task independently. STK, full radio link budgets, ILP and the paper’s batch-request experiments are not reproduced. Contact exports use fixed sampling steps, not the exact event partitioning of Algorithm 1.',
  'Nearest 的“最近”按几何距离解释；如果选中的计算节点不可达则拒绝。KSP 达到上限不代表网络无解。图上没有路径时不会伪造连接。':
    'Nearest uses geometric distance and rejects the task if the selected computing node is unreachable. A KSP search limit does not prove infeasibility. Disconnected routes are not artificially connected.',
  'CelesTrak 数据': 'CelesTrak data',
  '当前浏览器无法启动 WebGL，请使用支持硬件加速的浏览器。':
    'WebGL is unavailable. Please use a browser with hardware acceleration.',
  可拖动旋转和缩放的三维卫星地球:
    'Interactive 3D satellite globe; drag to rotate and scroll to zoom',
  无可行路径: 'No feasible route',
  超过时延上限: 'Delay bound exceeded',
  '搜索上限 · 未证明不可行': 'Search limit · Feasibility unknown',
  最短路径无足够算力: 'Insufficient compute on shortest path',
  '导出范围必须为 1–720 个采样步，步长至少 5 秒，卫星不超过 2400。':
    'Export 1–720 sample steps, at least 5 seconds per step, with no more than 2,400 satellites.',
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
