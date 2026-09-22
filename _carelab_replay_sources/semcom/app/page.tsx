'use client';
import { useEffect, useState, useRef, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Satellite,
  Play,
  Pause,
  Download,
  ArrowUpRight,
  RotateCcw,
  Settings2,
  Network as NetworkIcon,
  ChevronRight,
  Info,
  Expand,
} from 'lucide-react';
import Globe from './globe';
import SingaporeClock from './singapore-clock';
import ScreenRecorder from './screen-recorder';
import { Checkbox } from '@/components/ui/checkbox';
import { pathColors } from '@/lib/path-style';
import { linkLoad } from '@/lib/link-load';
import { useLanguage } from './use-language';
import { platformName, paperTitle } from '@/lib/i18n';
import {
  models,
  cities,
  defaults,
  methods,
  type Config,
  type Network,
  type Result,
  type ReplayData,
} from '@/lib/replay-types';
const modes = [
  ['端到端编解码', '终端 → 终端', true, true],
  ['星上编码', '卫星 → 终端', false, true],
  ['星上解码', '终端 → 卫星', true, false],
  ['星上编解码', '卫星 → 卫星', false, false],
] as const;
const fmt = (v: number | undefined, d = 1) =>
  v !== undefined && Number.isFinite(v) ? v.toFixed(d) : '—';
function Pick({
  value,
  onChange,
  options,
  label,
  disabled = true,
}: {
  disabled?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  label: string;
}) {
  return (
    <Select disabled={disabled} value={value} onValueChange={(v) => v !== null && onChange(v)}>
      <SelectTrigger aria-label={label} className="picker">
        <SelectValue>
          {options.find((o) => o.value === value)?.label ?? value}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem value={o.value} key={o.value}>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
function Range({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  unit = '',
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  unit?: string;
}) {
  return (
    <div className="range">
      <label>
        {label}
        <b>
          {value}
          {unit}
        </b>
      </label>
      <Slider
        disabled
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(v) => onChange(Array.isArray(v) ? v[0] : v)}
      />
    </div>
  );
}
function download(name: string, value: any) {
  let a = document.createElement('a'),
    url = URL.createObjectURL(
      new Blob(
        [typeof value === 'string' ? value : JSON.stringify(value, null, 2)],
        {
          type:
            typeof value === 'string'
              ? 'text/csv;charset=utf-8'
              : 'application/json',
        },
      ),
    );
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export default function Page() {
  const { language, setLanguage, tr } = useLanguage();
  const [mode, setMode] = useState(3);
  const [reload, setReload] = useState(0);
  const [replay, setReplay] = useState<ReplayData | null>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [running, setRunning] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [busy, setBusy] = useState(true);
  const [failure, setFailure] = useState('');
  const [active, setActive] = useState('SemCom-CSP');
  const [selected, setSelected] = useState<number | null>(null);
  const [tab, setTab] = useState('compare');
  const [showLinks, setShowLinks] = useState(false);
  const [visibleMethods, setVisibleMethods] = useState(['SemCom-CSP', 'BitCom (CGR)']);
  const [fullScreen, setFullScreen] = useState(false);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const cache = useRef(new Map<number, ReplayData>());
  const c: Config = replay?.config ?? defaults;
  const frame = replay?.frames[frameIndex];
  const net: Network | null = frame?.net ?? null;
  const results: Result[] = frame?.results ?? [];
  const frameInfo = { buildMs: frame?.buildMs ?? 0, frameMs: frame?.frameMs ?? 0 };
  const frameCount = frameIndex + 1;
  const catalogCount = c.count;
  const playing = running;
  const applied = { current: c };
  const dirty = false;
  const batchBusy = false;
  const overrides: Record<string, any> = {};
  const trials = replay?.frames.map((item, i) => ({ trial: i + 1, time: item.net.time, results: item.results })) ?? [];
  const message = tr('预录回放：图形、路径与指标来自同一录制帧；公开版本不执行路由或编解码算法。');
  const result = results.find((r) => r.name === active);
  const best = results.find((r) => r.name === 'SemCom-CSP');
  const raw = results.find((r) => r.name === 'BitCom (CGR)');
  const chosen = selected !== null ? net?.nodes[selected] : null;
  const visiblePaths = useMemo(() => results.filter((r) => visibleMethods.includes(r.name)), [results, visibleMethods]);

  useEffect(() => {
    const controller = new AbortController();
    let live = true;
    setBusy(true);
    setFailure('');
    setReplay(null);
    setFrameIndex(0);
    setSelected(null);
    const load = async () => {
      let incoming = cache.current.get(mode);
      if (!incoming) {
        const response = await fetch(import.meta.env.BASE_URL + `replay/mode-${mode}.json.gz`, { signal: controller.signal });
        if (!response.ok) throw new Error(String(response.status));
        if (!('DecompressionStream' in window) || !response.body) throw new Error('unsupported-browser');
        incoming = await new Response(response.body.pipeThrough(new DecompressionStream('gzip'))).json() as ReplayData;
        if (incoming.schemaVersion !== 1 || !incoming.config || !incoming.frames?.length ||
            incoming.frames.some((item) => !item.net?.nodes?.length || !Array.isArray(item.net.adj) || !Array.isArray(item.results))) {
          throw new Error('Invalid replay data');
        }
        cache.current.set(mode, incoming);
      }
      if (live) { setReplay(incoming); setFrameIndex(0); setRunning(true); }
    };
    load().catch((error) => {
      if (live && error.name !== 'AbortError') setFailure(error.message === 'unsupported-browser' ? '此浏览器不支持回放数据解压，请使用最新版 Chrome、Edge、Firefox 或 Safari。' : '回放数据暂时无法加载，请点击重新播放重试。');
    }).finally(() => { if (live) setBusy(false); });
    return () => { live = false; controller.abort(); };
  }, [mode, reload]);

  useEffect(() => {
    if (!running || busy || !replay) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setFrameIndex((i) => (i + 1) % replay.frames.length);
    }, 2000 / speed);
    return () => window.clearInterval(timer);
  }, [running, speed, busy, replay]);

  useEffect(() => {
    const update = () => setFullScreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', update);
    return () => document.removeEventListener('fullscreenchange', update);
  }, []);
  useEffect(() => {
    const measure = () => {
      const el = comparisonRef.current;
      if (el) el.style.setProperty('--presentation-top', Math.ceil(el.getBoundingClientRect().top + window.scrollY) + 'px');
    };
    const frame = requestAnimationFrame(measure);
    const observer = new ResizeObserver(measure);
    document.querySelectorAll('header,.intro,.dynamic-controls').forEach((el) => observer.observe(el));
    window.addEventListener('resize', measure);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('resize', measure); };
  }, [fullScreen, language]);
  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { setFailure('全屏显示不可用'); }
  }
  function pause() { setRunning(false); }
  function toggleRunning() { setRunning((v) => !v); }
  function run() {
    if (!replay) { setReload((v) => v + 1); return; }
    setFrameIndex(0); setSelected(null); setRunning(true);
  }
  function change(p: Partial<Config>) {
    if (p.us !== undefined && p.ud !== undefined) {
      const next = modes.findIndex(([, , us, ud]) => us === p.us && ud === p.ud);
      if (next >= 0) { setMode(next); setFrameIndex(0); setSelected(null); }
    }
  }
  function selectMethod(name: string) {
    setActive(name);
    setVisibleMethods((v) => v.includes(name) ? v : [...v, name]);
  }
  function editNode(_p: any) { /* Recorded node capabilities are read-only. */ }
  function batch() { setTab('batch'); }
  const exportResult = () => download('carelab-recorded-frame.json', {
    schemaVersion: 1,
    kind: 'recorded-replay',
    note: 'Pre-recorded illustrative simulation results, not live network measurements or computation in this browser.',
    source: replay?.source,
    config: c,
    frame,
  });
  return (
    <main>
      <header>
        <div className="brand">
          <Satellite size={29} />
          <b>
            CARELab <span>Satellite SemCom platform</span>
          </b>
        </div>
        <nav>
          {tr('卫星网络 ')}
          <i>/</i> {tr(' 语义通信实验室')}
        </nav>
        <span className="badge">{tr('公开回放 · Recorded replay')}</span>
        <div className="language-control">
          <span>{tr('语言')}</span>
          <Pick
            disabled={false}
            label="Language / 语言"
            value={language}
            onChange={(v) => setLanguage(v === 'en' ? 'en' : 'zh')}
            options={[
              { value: 'zh', label: '汉语 · 中文' },
              { value: 'en', label: 'English' },
            ]}
          />
        </div>
        <ScreenRecorder language={language} />
        <button className="ghost page-fullscreen" onClick={toggleFullscreen}>
          <Expand size={16} />
          {tr(fullScreen ? '退出全屏' : '全屏演示')}
        </button>
        <Dialog>
          <DialogTrigger
            className="icon-button"
            aria-label={tr('说明与数据来源')}
          >
            <Info size={17} />
          </DialogTrigger>
          <DialogContent className="docs">
            <DialogHeader>
              <DialogTitle>{tr('研究基础与演示边界')}</DialogTitle>
            </DialogHeader>
            <p>{tr('公开版本仅播放预录语义传输流程，不执行编码、解码或路径求解。核心算法与模型不包含在此公开仓库中。')}</p>
            <p>{tr('公开轨道来自 CelesTrak，地图来自 Natural Earth。容量、语义能力与链路均为实验假设，不代表 Starlink 内部网络。')}</p>
            <p>{tr('算法执行时间为录制时的测量值；此页面只加载数据和绘图，不能用于测量当前设备的算法性能。')}</p>
            <p><a href="https://ieeexplore.ieee.org/document/11437528/" target="_blank" rel="noopener noreferrer">IEEE TMC paper ↗</a> · <a href="https://ieeexplore.ieee.org/document/11206535/" target="_blank" rel="noopener noreferrer">IEEE Magazine paper ↗</a></p>
          </DialogContent>
        </Dialog>
      </header>
      <section className="intro">
        <div>
          <small>{tr('空间网络智能')}</small>
          <h1>
            {tr('赋能超大规模低轨星座语义通信')}
            <span className="demo-subtitle">{tr('基于 Starlink 的演示')}</span>
          </h1>
          <p>{tr('预录演示 · 同屏比较语义通信带宽节省与传播时延成本')}</p>
        </div>
        <div className="actions">
          <button className="ghost" onClick={exportResult} disabled={!net}>
            <Download size={15} /> {tr(' 导出实验')}
          </button>
          <button
            className="primary"
            disabled={busy}
            onClick={() => run()}
          >
            <Play size={14} />
            {busy
              ? tr('正在载入回放…')
              : dirty
                ? tr('应用配置并运行')
                : tr('重新播放')}
          </button>
        </div>
      </section>
      <div className="workspace">
        <aside className="panel config">
          <small>{tr('01 / 场景控制')}</small>
          <p className="replay-notice">{tr('预录场景参数 · 只读。切换地球上方四种模式以查看对应录制结果。')}</p>
          <h2>
            <Settings2 size={16} /> {tr(' 场景配置')}
          </h2>
          <Range
            label={tr('Starlink 卫星数量')}
            value={c.count}
            min={100}
            max={Math.max(100, catalogCount)}
            step={1}
            onChange={(count) =>
              change({ count, manualEnc: -1, manualDec: -1 })
            }
          />
          <div className="scale">
            <span>100</span>
            <span>
              {catalogCount.toLocaleString()} {tr('目录卫星')}
            </span>
          </div>
          <Range
            label={tr('语义能力部署比例')}
            value={c.rho}
            min={0}
            max={100}
            step={5}
            onChange={(rho) => change({ rho })}
            unit="%"
          />
          <hr />
          <label>{tr('应用源节点')}</label>
          <Pick
            label={tr('应用源节点')}
            value={String(c.source)}
            onChange={(v) => change({ source: +v })}
            options={cities.map((o, i) => ({
              value: String(i),
              label: tr(o.name),
            }))}
          />
          <label>{tr('应用目的节点')}</label>
          <Pick
            label={tr('应用目的节点')}
            value={String(c.dest)}
            onChange={(v) => change({ dest: +v })}
            options={cities.map((o, i) => ({
              value: String(i),
              label: tr(o.name),
            }))}
          />
          <label>
            {tr('源端支持编码')}
            <Switch
              disabled
              aria-label={tr('源端支持编码')}
              checked={c.us}
              onCheckedChange={(us) => change({ us, manualEnc: -1 })}
            />
          </label>
          <label>
            {tr('目的端支持解码')}
            <Switch
              disabled
              aria-label={tr('目的端支持解码')}
              checked={c.ud}
              onCheckedChange={(ud) => change({ ud, manualDec: -1 })}
            />
          </label>
          <hr />
          <label>{tr('应用语义模型 / 共享 KB')}</label>
          <Pick
            label={tr('语义模型')}
            value={String(c.model)}
            onChange={(v) => change({ model: +v })}
            options={models.map((label, i) => ({
              value: String(i),
              label: tr(label),
            }))}
          />
          <Range
            label={tr('网络支持模型类型数')}
            value={c.modelCount}
            min={1}
            max={4}
            onChange={(modelCount) => change({ modelCount })}
          />
          <Range
            label={tr('每模型最大并发槽位')}
            value={c.slots}
            min={1}
            max={10}
            onChange={(slots) => change({ slots })}
          />
          <Range
            label={tr('应用原始速率')}
            value={c.rate}
            min={5}
            max={400}
            step={5}
            unit=" Mbps"
            onChange={(rate) => change({ rate })}
          />
          <Range
            label={tr('语义压缩率 σ')}
            value={c.sigma}
            min={0.01}
            max={1}
            step={0.005}
            onChange={(sigma) => change({ sigma: Number(sigma.toFixed(3)) })}
          />
          <p className="note">
            {tr('语义速率')} {fmt(c.rate * c.sigma, 2)} Mbps ·{' '}
            {(c.sigma * 100).toFixed(1)}%
          </p>
          <details>
            <summary>{tr('更多实验参数')}</summary>
            <label>
              {tr('随机种子')}
              <input
                disabled
                aria-label={tr('随机种子')}
                type="number"
                value={c.seed}
                onChange={(e) => change({ seed: +e.target.value })}
              />
            </label>
            <label>
              {tr('轨道时间偏移 / 分钟')}
              <input
                disabled
                aria-label={tr('时间偏移')}
                type="number"
                min={-1440}
                max={1440}
                value={c.offset}
                onChange={(e) =>
                  change({
                    offset: Math.max(-1440, Math.min(1440, +e.target.value)),
                  })
                }
              />
            </label>
            <label>
              {tr('服务时窗 / 秒')}
              <input
                disabled
                aria-label={tr('服务时窗')}
                type="number"
                min={0}
                max={300}
                value={c.window}
                onChange={(e) =>
                  change({
                    window: Math.max(0, Math.min(300, +e.target.value)),
                  })
                }
              />
            </label>
            <Range
              label={tr('最低地面仰角')}
              value={c.elevation}
              min={0}
              max={40}
              unit="°"
              onChange={(elevation) => change({ elevation })}
            />
            <Range
              label={tr('最大星间距离')}
              value={c.maxLink}
              min={1000}
              max={5000}
              step={100}
              unit=" km"
              onChange={(maxLink) => change({ maxLink })}
            />
            <label>{tr('链路时延模型')}</label>
            <Pick
              label={tr('链路时延模型')}
              value={c.delayMode}
              onChange={(delayMode) => change({ delayMode })}
              options={[
                { value: 'paper', label: tr('论文实验 · 5–15 ms') },
                { value: 'physical', label: tr('物理距离 / 光速') },
              ]}
            />
            <Range
              label={tr('单次编解码处理时延')}
              value={c.codecMs}
              min={0}
              max={100}
              unit=" ms"
              onChange={(codecMs) => change({ codecMs })}
            />
            <Range
              label={tr('KSP 最大候选路径')}
              value={c.k}
              min={5}
              max={50}
              step={5}
              onChange={(k) => change({ k })}
            />
          </details>
          <button className="ghost full" onClick={() => { setMode(3); run(); }}>
            <RotateCcw size={13} /> {tr('回到默认录制场景')}
          </button>
          <div className="paper-link">
            <small>{tr('相关论文')}</small>
            <a href="https://ieeexplore.ieee.org/document/11437528/" title={paperTitle} target="_blank" rel="noopener noreferrer">IEEE TMC · SemCom-CSP <ArrowUpRight size={13} /></a>
            <a href="https://ieeexplore.ieee.org/document/11206535/" target="_blank" rel="noopener noreferrer">IEEE Magazine · Satellite SemCom <ArrowUpRight size={13} /></a>
          </div>
          <section
            className="research-contact"
            aria-label={tr('学术与产业合作')}
          >
            <small>{tr('学术与产业合作')}</small>
            <strong>Binquan Guo</strong>
            <div className="profile-links">
              <a
                href="https://wilixx.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tr('个人主页')} ↗
              </a>
              <a
                href="https://scholar.google.com/citations?user=NA8egm4AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar ↗
              </a>
              <a
                href="https://ieeexplore.ieee.org/author/37089678912"
                target="_blank"
                rel="noopener noreferrer"
              >
                IEEE Xplore ↗
              </a>
            </div>
            <details>
              <summary>{tr('邮箱与微信')}</summary>
              <a href="mailto:bqguo@stu.xidian.edu.cn">
                bqguo@stu.xidian.edu.cn
              </a>
              <p>
                {tr('微信')}：<span>QuantifyingAll</span>
              </p>
            </details>
            <p className="contact-note">
              {tr('学术交流与产业合作，请注明机构与来意。')}
            </p>
          </section>
        </aside>
        <div className="stage">
          <section className="dynamic-controls panel">
            <div className="actions">
              <button
                className="primary"
                onClick={toggleRunning}
                disabled={dirty || batchBusy || !net}
              >
                {running ? <Pause size={14} /> : <Play size={14} />}{' '}
                {tr(running ? '暂停回放' : '继续回放')}
              </button>
              <Pick
                disabled={false}
                label={tr('选择算法')}
                value={active}
                onChange={selectMethod}
                options={methods.map((m) => ({
                  value: m,
                  label: tr(m),
                }))}
              />
              <Pick
                disabled={false}
                label={tr('时间倍率')}
                value={String(speed)}
                onChange={(v) => setSpeed(+v)}
                options={[1, 2, 4].map((v) => ({
                  value: String(v),
                  label:
                    v + '× ' + tr('回放速度'),
                }))}
              />
              <button className="ghost" disabled={busy} onClick={run}>{tr('回到开头')}</button>
            </div>
            <div className="dynamic-meta">
              <span>
                {tr(running ? '正在回放' : '已暂停')} ·{' '}
                {net?.time.slice(11, 19)} UTC · {tr('录制帧')} {frameCount}/{replay?.frames.length ?? '—'} ·{' '}
                {tr('录制时计算周期')} {fmt(frameInfo.frameMs, 0)} ms
              </span>
              <span>
                {tr('预录轨道场景')} · {catalogCount.toLocaleString()}{' '}
                {tr('目录卫星')} · {tr('数据历元')}{' '}
                {net?.epoch.slice(0, 16).replace('T', ' ')} UTC
              </span>
            </div>
            <p>
              {tr(
                '公开回放：每帧间隔 30 秒，1× 每 2 秒播放一帧。轨道、路径与指标均为预录仿真，非实时遥测。',
              )}
            </p>
          </section>
          <div className="map-comparison" ref={comparisonRef}>
            <section className="globe-frame">
              <div className="mode-grid">
                {modes.map(([label, desc, us, ud], i) => (
                  <button
                    key={label}
                    title={tr(desc)}
                    aria-pressed={mode === i}
                    className={
                      'mode ' + (mode === i ? 'selected' : '')
                    }
                    onClick={() =>
                      change({ us, ud, manualEnc: -1, manualDec: -1 })
                    }
                  >
                    <small>0{i + 1}</small>
                    <strong>{tr(label)}</strong>
                  </button>
                ))}
              </div>
              <section className="map">
                <div className="map-title">
                  <span className="live" /> {tr('STARLINK / 网络映射')}{' '}
                  <span className="muted">
                    {net?.nodes.length
                      ? net.nodes.length -
                        2 +
                        tr(' 颗 · ') +
                        net.edges +
                        tr(' 条链路')
                      : tr('载入中')}
                  </span>
                </div>
                <Globe
                  language={language}
                  network={net}
                  config={applied.current}
                  showLinks={showLinks}
                  paths={visiblePaths}
                  nodes={net?.nodes ?? []}
                  path={result}
                  playing={playing && running && !dirty}
                  onSelect={(i) => {
                    pause();
                    setSelected(i);
                  }}
                />
                <div className="map-tools">
                  <button
                    className="icon-button"
                    onClick={() => setShowLinks(!showLinks)}
                    title={tr('显示拓扑链路')}
                    aria-pressed={showLinks}
                  >
                    <NetworkIcon size={16} />
                  </button>
                  <button
                    className="icon-button"
                    aria-label={tr(running ? '暂停回放' : '继续回放')}
                    onClick={toggleRunning}
                  >
                    {playing ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                  <button
                    className="icon-button"
                    aria-label={tr('全屏地图')}
                    onClick={(e) => {
                      const map = e.currentTarget.closest('.map');
                      if (document.fullscreenElement) document.exitFullscreen();
                      else map?.requestFullscreen();
                    }}
                  >
                    <Expand size={16} />
                  </button>
                </div>
                <div className="map-overlay">
                  <small>{tr('当前路径')}</small>
                  <strong>
                    {tr(cities[applied.current.source].name)} <span>→</span>{' '}
                    {tr(cities[applied.current.dest].name)}
                  </strong>
                  <span>
                    {tr(active)} ·{' '}
                    {result?.path.length
                      ? result.path.length - 1 + tr(' 跳')
                      : tr('无可行路径')}
                  </span>
                </div>
                <div className="map-footer">
                  <span>
                    {tr(
                      '链路标注：占用 / 总容量 Mbps · 传播时延 ms；悬停查看，完整明细见下表',
                    )}
                  </span>
                  {tr('拖动旋转 · 点击查看卫星 ')}
                  <span>
                    {tr('● 中继　')}
                    <span className="cyan">{tr('● 编码能力')}</span>　
                    <span className="amber">{tr('● 解码路径')}</span>
                  </span>
                </div>
              </section>
            </section>
            <aside className="path-controls panel">
              <h3>{tr('路径对比')}</h3>
              <p>{tr('勾选叠加路径，点击名称聚焦路径')}</p>
              {methods.map((m) => {
                const r = results.find((r) => r.name === m);
                return (
                  <div
                    key={m}
                    className={
                      'path-choice ' + (m === active ? 'selected' : '')
                    }
                  >
                    <Checkbox
                      aria-label={tr('显示路径') + ' ' + tr(m)}
                      checked={visibleMethods.includes(m)}
                      onCheckedChange={(checked) =>
                        setVisibleMethods((v) =>
                          checked ? [...v, m] : v.filter((x) => x !== m),
                        )
                      }
                    />
                    <button onClick={() => selectMethod(m)}>
                      <i style={{ background: pathColors[m] }} />
                      <span>{tr(m)}</span>
                      <small>
                        {r?.path.length
                          ? r.path.length - 1 + ' ' + tr('跳')
                          : tr(r ? '无可行路径' : '计算中…')}
                      </small>
                    </button>
                  </div>
                );
              })}
              <p>{tr('实线：语义方法 · 虚线：BitCom；重合路径错开显示')}</p>
              <p>{tr('源 / 目的与 ENC / DEC 标记对应当前指标方案')}</p>
            </aside>
            <div className="metrics comparison-metrics">
              {[
                {
                  title: '总带宽占用',
                  a: best?.path.length ? best.bandwidth : undefined,
                  b: raw?.path.length ? raw.bandwidth : undefined,
                  unit: 'Mbps·links',
                  delta: '带宽节省',
                  saving: true,
                },
                {
                  title: '端到端总传播时延',
                  a: best?.path.length ? best.propagationMs : undefined,
                  b: raw?.path.length ? raw.propagationMs : undefined,
                  unit: 'ms',
                  delta: '额外时延成本',
                },
                {
                  title: '路径跳数',
                  a: best?.path.length ? best.path.length - 1 : undefined,
                  b: raw?.path.length ? raw.path.length - 1 : undefined,
                  unit: tr('跳'),
                  delta: '额外跳数',
                },
                {
                  title: '录制时算法执行时间',
                  a: best?.computeMs,
                  b: raw?.computeMs,
                  unit: 'ms',
                  delta: '执行时间差异',
                },
              ].map((metric) => (
                <article key={metric.title}>
                  <small>
                    {tr(metric.title)}
                    <em>{metric.unit}</em>
                  </small>
                  <div className="metric-pair">
                    <span style={{ color: pathColors['SemCom-CSP'] }}>
                      SemCom-CSP
                    </span>
                    <strong>
                      {fmt(metric.a, metric.title === '路径跳数' ? 0 : 2)}
                    </strong>
                  </div>
                  <div className="metric-pair bitcom">
                    <span>BitCom (CGR)</span>
                    <strong>
                      {fmt(metric.b, metric.title === '路径跳数' ? 0 : 2)}
                    </strong>
                  </div>
                  <p>
                    {tr(metric.delta)}:{' '}
                    <b>
                      {metric.a !== undefined &&
                      metric.b !== undefined &&
                      metric.b > 0
                        ? fmt(
                            (metric.saving
                              ? 1 - metric.a / metric.b
                              : metric.a / metric.b - 1) * 100,
                            1,
                          )
                        : '—'}
                      %
                    </b>
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className={'status ' + (dirty ? 'warning' : '')} role="status">
            <span className="live" />
            {failure
              ? tr(failure)
              : dirty
                ? tr('配置已修改；地图与结果仍为上一次运行，请应用配置。')
                : tr(message)}
            <SingaporeClock />
          </div>
          <section className="panel flow">
            <div className="section-heading">
              <div>
                <small>{tr('02 / 语义传输流程')}</small>
                <h2>{tr('一条路径，三种数据状态')}</h2>
              </div>
              <span className="tag">{tr(models[applied.current.model])}</span>
            </div>
            <div className="flow-legend">
              <span>
                <i className="legend-raw" />
                {tr('原始数据')} · R
              </span>
              <span>
                <i className="legend-semantic" />
                {tr('语义传输')} · σR
              </span>
              <span>
                <i className="legend-restored" />
                {tr('恢复数据')} · R
              </span>
              <span>
                ENC: {tr('编码节点')} · DEC: {tr('解码节点')}
              </span>
            </div>
            <div className="pipeline">
              {[
                [
                  tr('原始数据'),
                  applied.current.rate + ' Mbps',
                  result && result.enc >= 0
                    ? net?.nodes[result.enc]?.name
                    : result?.raw
                      ? tr('无需编码')
                      : tr('待分配编码器'),
                ],
                [
                  result?.raw ? tr('原始转发') : tr('语义传输'),
                  fmt(
                    applied.current.rate *
                      (result?.raw ? 1 : applied.current.sigma),
                  ) + ' Mbps',
                  result && result.dec >= 0
                    ? net?.nodes[result.dec]?.name
                    : result?.raw
                      ? tr('无需解码')
                      : tr('待分配解码器'),
                ],
                [
                  tr('恢复数据'),
                  applied.current.rate + ' Mbps',
                  tr('目的节点接收'),
                ],
              ].map(([title, rate, node], i) => (
                <div className={'flow-step step-' + i} key={title}>
                  <small>
                    0{i + 1} / {title}
                  </small>
                  <strong>{rate}</strong>
                  <span>
                    <b>{i === 0 ? 'ENC' : i === 1 ? 'DEC' : tr('目的')}</b>
                    {' · '}
                    {tr(node)}
                  </span>
                </div>
              ))}
            </div>
            <div className="path-list">
              {result?.path.map((id, i) => (
                <button
                  key={i}
                  onClick={() => {
                    pause();
                    setSelected(id);
                  }}
                  className={
                    i === result.encIndex
                      ? 'enc'
                      : i === result.decIndex
                        ? 'dec'
                        : ''
                  }
                >
                  {tr(net?.nodes[id].name)}
                  {i === result.encIndex ? ' · ENC' : ''}
                  {i === result.decIndex ? ' · DEC' : ''}
                  {i < result.path.length - 1 && <ChevronRight size={12} />}
                </button>
              ))}
            </div>
          </section>
          {chosen && (
            <section className="panel node-editor">
              <div className="section-heading">
                <div>
                  <small>
                    {tr('选中节点')} / NORAD {chosen.id}
                  </small>
                  <h2>{tr(chosen.name)}</h2>
                </div>
                <button className="ghost" onClick={() => setSelected(null)}>
                  {tr('收起')}
                </button>
              </div>
              <p>
                {fmt(chosen.lat, 2)}
                {tr('° 纬度 / ')}
                {fmt(chosen.lon, 2)}
                {tr('° 经度 / ')}
                {fmt(chosen.alt)} {tr(' km 高度')}
              </p>
              {chosen.ground ? (
                <p>{tr('此处为录制时的终端能力，切换四种模式可查看其他场景。')}</p>
              ) : (
                <>
                  <div className="node-models">
                    {models.map((m, i) => (
                      <div key={m}>
                        <b>{tr(m)}</b>
                        <label>
                          {tr('编码并发')}
                          <input
                disabled
                            aria-label={tr(m) + tr('编码并发')}
                            type="number"
                            min={0}
                            max={10}
                            value={
                              overrides[chosen.id]?.enc?.[i] ?? chosen.enc[i]
                            }
                            onChange={(e) => {
                              const v = [
                                ...(overrides[chosen.id]?.enc ?? chosen.enc),
                              ];
                              v[i] = Math.max(0, Math.min(10, +e.target.value));
                              editNode({ enc: v });
                            }}
                          />
                        </label>
                        <label>
                          {tr('解码并发')}
                          <input
                disabled
                            aria-label={tr(m) + tr('解码并发')}
                            type="number"
                            min={0}
                            max={10}
                            value={
                              overrides[chosen.id]?.dec?.[i] ?? chosen.dec[i]
                            }
                            onChange={(e) => {
                              const v = [
                                ...(overrides[chosen.id]?.dec ?? chosen.dec),
                              ];
                              v[i] = Math.max(0, Math.min(10, +e.target.value));
                              editNode({ dec: v });
                            }}
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                  <p>
                    {tr(
                      '只读的录制节点能力：0 表示不支持或暂无空闲槽位。',
                    )}
                  </p>
                  <div className="actions">
                    <button
                      className="ghost"
                      disabled
                      onClick={() =>
                        change({ manualEnc: chosen.id, us: false })
                      }
                    >
                      {tr('固定为编码节点')}
                    </button>
                    <button
                      className="ghost"
                      disabled
                      onClick={() =>
                        change({ manualDec: chosen.id, ud: false })
                      }
                    >
                      {tr('固定为解码节点')}
                    </button>
                    <button
                      className="ghost"
                      disabled
                      onClick={() => change({ manualEnc: -1, manualDec: -1 })}
                    >
                      {tr('恢复自动选择')}
                    </button>
                  </div>
                </>
              )}
            </section>
          )}
          <section className="panel analysis">
            <div className="section-heading">
              <div>
                <small>{tr('03 / 性能分析')}</small>
                <h2>{tr('预录算法表现与逐链路指标')}</h2>
              </div>
              <button
                className="ghost"
                disabled={batchBusy || busy || !catalogCount}
                onClick={batch}
              >
                <NetworkIcon size={14} />
                {batchBusy
                  ? tr('实验 ') + trials.length + '/12'
                  : tr('查看录制帧汇总')}
              </button>
            </div>
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList>
                <TabsTrigger value="compare">{tr('算法对比')}</TabsTrigger>
                <TabsTrigger value="links">{tr('逐链路带宽')}</TabsTrigger>
                <TabsTrigger value="codec">{tr('编解码说明')}</TabsTrigger>
                <TabsTrigger value="batch">{tr('录制帧汇总')}</TabsTrigger>
              </TabsList>
              <TabsContent value="compare">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {[
                        tr('算法 / 路径选择'),
                        tr('总传播时延 ms'),
                        tr('占用 Mbps·链路'),
                        tr('跳数'),
                        tr('录制运行 ms'),
                        tr('状态'),
                      ].map((t) => (
                        <TableHead key={t}>{t}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((r) => (
                      <TableRow
                        key={r.name}
                        className={active === r.name ? 'active-row' : ''}
                        onClick={() => selectMethod(r.name)}
                      >
                        <TableCell>
                          <button className="algo-name">
                            {tr(r.name)}
                            {r.name === 'SemCom-CSP' && (
                              <span className="tag">{tr('所提方法')}</span>
                            )}
                          </button>
                        </TableCell>
                        <TableCell>{fmt(r.propagationMs)}</TableCell>
                        <TableCell>
                          <div className="band-cell">
                            {fmt(r.bandwidth)}
                            <div
                              style={{
                                width:
                                  Math.min(
                                    100,
                                    ((r.path.length ? r.bandwidth : 0) /
                                      (Math.max(
                                        ...results
                                          .filter((v) => v.path.length)
                                          .map((v) => v.bandwidth),
                                      ) || 1)) *
                                      100,
                                  ) + '%',
                              }}
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          {r.path.length ? r.path.length - 1 : '—'}
                        </TableCell>
                        <TableCell>
                          {r.status === 'skipped' ? '—' : fmt(r.computeMs, 2)}
                        </TableCell>
                        <TableCell>
                          <span
                            title={tr(r.reason)}
                            className={r.path.length ? 'cyan' : 'amber'}
                          >
                            {tr(
                              r.status === 'skipped'
                                ? '未运行'
                                : r.path.length
                                  ? r.status && r.status !== 'Optimal'
                                    ? '限时可行解'
                                    : '可行'
                                  : '无路径',
                            )}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <p className="note">
                  {tr('点击一行查看该算法的卫星路径。KSP 最多检查 ')}
                  {applied.current.k}{' '}
                  {tr(
                    ' 条简单候选路径；无路径不等于全局不可行。CGR 为原始数据快照基准。附加分层图用于交叉校验最短时延。',
                  )}
                </p>
                <p className="note">
                  {tr('算法执行时间为录制时的测量值；此页面只加载数据和绘图，不能用于测量当前设备的算法性能。')}
                </p>
              </TabsContent>
              <TabsContent value="links">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {[
                        tr('链路'),
                        tr('数据状态'),
                        tr('占用 Mbps'),
                        tr('容量 Mbps'),
                        tr('占用率'),
                        tr('传播时延 ms'),
                      ].map((t) => (
                        <TableHead key={t}>{t}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {result?.path.slice(0, -1).map((v, i) => {
                      let e = net!.adj[v].find(
                          (e) => e.to === result.path[i + 1],
                        )!,
                        semantic =
                          !result.raw &&
                          i >= result.encIndex &&
                          i < result.decIndex,
                        r = linkLoad(result, applied.current, v, e.to);
                      return (
                        <TableRow key={i}>
                          <TableCell>
                            {tr(net!.nodes[v].name)} →{' '}
                            {tr(net!.nodes[e.to].name)}
                          </TableCell>
                          <TableCell className={semantic ? 'cyan' : ''}>
                            {semantic ? tr('语义') : tr('原始')}
                          </TableCell>
                          <TableCell>{fmt(r)}</TableCell>
                          <TableCell>{fmt(e.cap)}</TableCell>
                          <TableCell>{fmt((r / e.cap) * 100)}%</TableCell>
                          <TableCell>{fmt(e.propagation ?? e.delay)}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                {!result?.path.length && (
                  <p>{tr('此录制帧中该算法无可行路径，可切换算法或继续播放。')}</p>
                )}
              </TabsContent>
              <TabsContent value="codec">
                <p className="replay-notice">{tr('公开版本仅播放预录语义传输流程，不执行编码、解码或路径求解。核心算法与模型不包含在此公开仓库中。')}</p>
                <div className="codec-output">
                  <article><small>{tr('原始数据')}</small><p>{applied.current.rate} Mbps · R</p></article>
                  <article><small>{tr('语义传输')}</small><p>{fmt(applied.current.rate * applied.current.sigma, 2)} Mbps · σR</p></article>
                </div>
              </TabsContent>
              <TabsContent value="batch">
                <div className="actions">
                  <p>
                    {tr(
                      '当前模式的全部录制帧汇总：沿时间轴变化的预录结果，非本次浏览器中新运行的独立实验。',
                    )}
                  </p>
                  <button
                    className="ghost"
                    disabled={!trials.length}
                    onClick={() => download('semcom-batch.json', trials)}
                  >
                    <Download size={14} /> {tr(' 导出原始记录')}
                  </button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{tr('算法')}</TableHead>
                      <TableHead>{tr('可行 / 总数')}</TableHead>
                      <TableHead>{tr('平均传播时延 ms')}</TableHead>
                      <TableHead>{tr('平均带宽占用')}</TableHead>
                      <TableHead>{tr('平均运行时间 ms')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {methods.map((m) => {
                      const all = trials
                          .map((t) =>
                            t.results.find((r: Result) => r.name === m),
                          )
                          .filter(
                            (r): r is Result =>
                              !!r &&
                              r.status !== 'skipped' &&
                              r.status !== 'error',
                          ),
                        ok = all.filter((r) => r?.path.length),
                        mean = (k: 'propagationMs' | 'bandwidth') =>
                          ok.length
                            ? ok.reduce((s, r) => s + (r[k] ?? 0), 0) / ok.length
                            : Infinity;
                      return (
                        <TableRow key={m}>
                          <TableCell>{tr(m)}</TableCell>
                          <TableCell>
                            {all.length
                              ? `${ok.length} / ${all.length}`
                              : tr('未运行')}
                          </TableCell>
                          <TableCell>{fmt(mean('propagationMs'))}</TableCell>
                          <TableCell>{fmt(mean('bandwidth'))}</TableCell>
                          <TableCell>
                            {fmt(
                              all.length
                                ? all.reduce((s, r) => s + r.computeMs, 0) /
                                    all.length
                                : Infinity,
                              2,
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                <p>
                  {tr(
                    '链路时延和带宽均值仅统计可行请求；运行时间统计全部请求。',
                  )}
                </p>
              </TabsContent>
            </Tabs>
          </section>
          <footer>
            <span>{platformName}</span>
            <span>
              {tr('公开轨道 · 预录仿真回放 · 非实时 Starlink 遥测')}
            </span>
          </footer>
        </div>
      </div>
    </main>
  );
}
