'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Orbit,
  Satellite,
  Play,
  Pause,
  RotateCcw,
  Download,
  MapPin,
  Layers,
  Maximize2,
  RefreshCw,
  X,
  ArrowUpRight,
  Link2,
  Languages,
  ChevronRight,
  ChevronLeft,
  Filter,
  Gauge,
} from 'lucide-react';
import Globe from '../components/globe';
import Recorder from '../components/recorder';
import { City, cityName, fallbackCities, globeCities } from '../lib/cities';
import { defaults, colors, names, random } from '../lib/engine';
import type { Config, Ground, Snapshot } from '../lib/engine';
import { platformName, paperUrl, translate } from '../lib/i18n';
import type { Language } from '../lib/i18n';
import { exportStepLimit } from '../lib/export-budget';
import SimulationWorker from '../lib/replay.worker?worker';
import { ReplayBar, REPLAY_START, REPLAY_END, wrapTime } from '../components/replay-bar';
function utc(t: number) {
  return new Date(t).toISOString().slice(0, 19);
}
function clamp(v: string, low: number, high: number) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(high, Math.max(low, n)) : low;
}
function download(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob),
    a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
export default function Home() {
  const [language, setLanguage] = useState<Language>('zh');
  const t = (zh: string, en: string) => (language === 'zh' ? zh : en);
  const [config, setConfig] = useState<Config>(defaults),
    [snap, setSnap] = useState<Snapshot | null>(null),
    [cities, setCities] = useState<City[]>(fallbackCities),
    [catalogCount, setCatalogCount] = useState(0),
    [epoch, setEpoch] = useState('');
  const [selected, setSelected] = useState('GFO'),
    [running, setRunning] = useState(false),
    [demoStarted, setDemoStarted] = useState(false),
    [speed, setSpeed] = useState(1),
    [time, setTime] = useState(0),
    [overlay, setOverlay] = useState(false),
    [links, setLinks] = useState(false),
    [trails, setTrails] = useState(true),
    [reset, setReset] = useState(0);
  const [pick, setPick] = useState<'source' | 'destination' | null>(null),
    [edgeKey, setEdgeKey] = useState<string | null>(null),
    [step, setStep] = useState(-1),
    [error, setError] = useState(''),
    [busy, setBusy] = useState(true),
    [refreshing, setRefreshing] = useState(false);
  const [progress, setProgress] = useState<number | null>(null),
    [exportStart, setExportStart] = useState(''),
    [exportEnd, setExportEnd] = useState(''),
    [exportStep, setExportStep] = useState(30);
  const worker = useRef<Worker | null>(null),
    cfg = useRef(config),
    clock = useRef(0),
    flags = useRef({ running, speed, exporting: false }),
    pending = useRef(false),
    version = useRef(0),
    ready = useRef(false),
    hold = useRef(false),
    lastAttempt = useRef(0);
  cfg.current = config;
  flags.current.running = running;
  flags.current.speed = speed;
  const markers = useMemo(() => globeCities(cities), [cities]);
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('carelab-widest-replay-language');
    } catch {}
    setLanguage(
      saved === 'en' || saved === 'zh'
        ? saved
        : navigator.language.startsWith('zh')
          ? 'zh'
          : 'en',
    );
    fetch('./cities.json')
      .then((r) => r.json())
      .then((data: any) =>
        setCities([
          ...data,
          ...fallbackCities.filter(
            (c) => !data.some((d: City) => d.id === c.id),
          ),
        ]),
      )
      .catch(() => {});
  }, []);
  useEffect(() => {
    document.title = platformName;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);
  function request() {
    if (
      !worker.current ||
      !ready.current ||
      pending.current ||
      flags.current.exporting ||
      hold.current
    )
      return;
    pending.current = true;
    worker.current.postMessage({
      type: 'snapshot',
      id: version.current,
      config: cfg.current,
      time: clock.current,
    });
  }
  function init(data: any[]) {
    if (!Array.isArray(data) || !data.length || !data[0].EPOCH)
      throw Error('Invalid CelesTrak OMM JSON');
    const epochs = data
      .map((x) =>
        Date.parse(
          /[zZ]|[+-]\d\d:\d\d$/.test(x.EPOCH) ? x.EPOCH : x.EPOCH + 'Z',
        ),
      )
      .filter(Number.isFinite)
      .sort((a, b) => a - b);
    setEpoch(utc(epochs[Math.floor(epochs.length / 2)]).replace('T', ' '));
    ready.current = false;
    hold.current = false;
    version.current++;
    setBusy(true);
    setStep(-1);
    worker.current?.postMessage({ type: 'init', base: document.baseURI });
  }
  useEffect(() => {
    clock.current = REPLAY_START;
    setTime(clock.current);
    const w = new SimulationWorker();
    worker.current = w;
    w.onmessage = async ({ data }) => {
      if (data.type === 'ready') {
        ready.current = data.count > 0;
        setCatalogCount(data.count);
        pending.current = false;
        if (cfg.current.count > data.count && data.count > 0) {
          cfg.current = { ...cfg.current, count: data.count };
          setConfig(cfg.current);
        }
        if (!data.count) {
          setError('No usable Starlink orbit records');
          setBusy(false);
        } else request();
      }
      if (data.type === 'snapshot') {
        pending.current = false;
        if (data.id === version.current && !hold.current) {
          setSnap(data.snapshot);
          setBusy(false);
          setStep(-1);
        } else request();
      }
      if (data.type === 'progress') setProgress(data.progress);
      if (data.type === 'error') {
        setError(data.message);
        setBusy(false);
        pending.current = false;
        flags.current.exporting = false;
        setProgress(null);
      }
      if (data.type === 'exported') {
        try {
          const blob = new Blob([JSON.stringify(data.payload)], {
            type: 'application/json',
          });
          if (typeof CompressionStream !== 'undefined')
            download(
              await new Response(
                blob.stream().pipeThrough(new CompressionStream('gzip')),
              ).blob(),
              'carelab-widest-contacts.json.gz',
            );
          else download(blob, 'carelab-widest-contacts.json');
        } catch {
          setError(
            'Export could not be saved. Please retry a shorter interval.',
          );
        } finally {
          flags.current.exporting = false;
          setProgress(null);
        }
      }
    };
    w.onerror = () => {
      setError('Simulation worker could not start. Please reload.');
      setBusy(false);
      pending.current = false;
    };
    fetch('./replay/manifest.json')
      .then((r) => {
        if (!r.ok) throw Error('Orbit cache unavailable');
        return r.json();
      })
      .then(() => init([{EPOCH: '2026-09-07T13:00:00Z'}]))
      .catch((e) => setError(String(e)));
    let last = Date.now();
    const timer = setInterval(() => {
      const now = Date.now(),
        delta = now - last;
      last = now;
      if (flags.current.running && !flags.current.exporting && !hold.current) {
        clock.current = wrapTime(clock.current + delta * flags.current.speed);
        setTime(clock.current);
        request();
      }
    }, 1000);
    return () => {
      clearInterval(timer);
      w.terminate();
    };
  }, []);
  useEffect(() => {
    version.current++;
    hold.current = false;
    setStep(-1);
    setBusy(true);
    request();
  }, [config]);
  function update<K extends keyof Config>(key: K, value: Config[K]) {
    setConfig((c) => ({ ...c, [key]: value }));
  }
  function groundName(g: Ground) {
    const city = cities.find(
      (c) => c.id === g.cityId || c.zh === g.name || c.name === g.name,
    );
    return city ? cityName(city, language) : translate(g.name, language);
  }
  function changeTime(value: number) {
    if (!Number.isFinite(value)) return;
    hold.current = false;
    clock.current = Math.max(REPLAY_START, Math.min(REPLAY_END-1,value));
    setTime(value);
    version.current++;
    setStep(-1);
    setBusy(true);
    request();
  }
  function inspect(index: number) {
    hold.current = true;
    setRunning(false);
    setStep(index);
    if (index >= 0) setLinks(true);
  }
  function resume() {
    hold.current = false;
    setStep(-1);
    setRunning(true);
  }
  const route = snap?.routes.find((r) => r.name === selected),
    gfo = snap?.routes[0],
    raw = snap?.routes[1],
    currentStep = gfo?.trace[step];
  const edge = snap?.edges.find(
      (e) =>
        [snap.nodes[e.a].id, snap.nodes[e.b].id].sort().join(':') === edgeKey,
    ),
    countLimit = catalogCount || defaults.count,
    stepLimit = exportStepLimit(config.count, config.degree);
  const status = (v?: string) =>
    ({
      optimal: t('最优解已证实', 'Proven optimal'),
      bounded: t('当前最好 · 搜索受限', 'Best found · search limited'),
      feasible: t('满足时延约束', 'Delay-feasible'),
      'over-delay': t('超过时延上限', 'Delay bound exceeded'),
      'no-path': t('无可行路径', 'No feasible path'),
    })[v || ''] || t('计算中', 'Computing');
  const methods: Record<string, string> = {
    GFO: t(
      '论文 Algorithm 4：容量界估计 → 图过滤 → 加速二分。T1 复用相同子图，T2 将下界跳到可行路径的实际容量。',
      'Paper Algorithm 4: estimate bounds, filter, then bisect. T1 reuses unchanged subgraphs; T2 jumps to the feasible path’s actual capacity.',
    ),
    Bisection: t(
      '消融：使用相同上下界和图过滤，关闭 T1、T2。',
      'Ablation: the same bounds and graph filtering, with T1 and T2 disabled.',
    ),
    KSP: t(
      '论文 Algorithm 2：按时延枚举简单路径，保留时限内容量最大者。达到 K 或 200 ms 预算时仅报告当前最好解。',
      'Paper Algorithm 2: enumerate paths by delay and retain the widest feasible one. The K or 200 ms limit yields a best-found result.',
    ),
    Shortest: t(
      '解释性参照：选择传播时延最小的路径，不主动优化瓶颈容量。',
      'Reference: choose the minimum-delay path without optimizing bottleneck capacity.',
    ),
    Widest: t(
      '解释性参照：忽略时延上限，选择最大容量路径；同容量下选最短时延。',
      'Reference: maximize capacity without a delay bound; break ties by delay.',
    ),
  };
  function startDemo(next: Config) {
    cfg.current = next;
    setConfig(next);
    setSelected('GFO');
    setOverlay(false);
    setLinks(false);
    setTrails(true);
    setPick(null);
    setEdgeKey(null);
    setReset(value => value + 1);
    setError('');
    setSpeed(10);
    setRunning(true);
    setDemoStarted(true);
    flags.current.running = true;
    flags.current.speed = 10;
    hold.current = false;
    setStep(-1);
    changeTime(REPLAY_START);
    if (window.innerWidth <= 1000) {
      document.querySelector('.center-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  function exportNow() { if (snap) download(new Blob([JSON.stringify({schema:'carelab-replay-frame/1', config, snapshot:snap})],{type:'application/json'}), 'carelab-replay-frame.json'); }
  return (
    <main data-language={language} className="widest-app">
      <header className="topbar">
        <a className="brand" href="/" aria-label={platformName}>
          <span className="brandmark">
            <Orbit size={25} />
          </span>
          <strong>
            CARELab<span>Widest-Inter Satellite Routing Platform</span>
          </strong>
        </a>
        <div className="header-middle">
          <span className="tiny-label">IEEE TVT / RESEARCH DEMO</span>
          <span>
            {t(
              '时延约束 · 最大容量路由',
              'Delay-bounded maximum-capacity routing',
            )}
          </span>
        </div>
        <div className="header-actions">
          <Recorder language={language} />
          <label className="language-picker">
            <Languages size={15} />
            <select
              aria-label="Language / 语言"
              value={language}
              onChange={(e) => {
                const l = e.target.value as Language;
                setLanguage(l);
                try {
                  localStorage.setItem('carelab-widest-replay-language', l);
                } catch {}
              }}
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
            </select>
          </label>
          <button
            className="export-button"
            onClick={() => {
              setExportStart(utc(clock.current));
              setExportEnd(
                utc(clock.current + Math.min(600000, stepLimit * 30000)),
              );
              exportNow();
            }}
          >
            <Download size={15} />
            {t('导出回放帧', 'Export')}
          </button>
        </div>
      </header>
      <ReplayBar language={language} scenario={config.replayScenario || '0'} time={snap?.time || REPLAY_START}
        running={running} started={demoStarted} ready={!!snap} onDemo={startDemo} onToggle={() => running ? setRunning(false) : resume()}
        onSeek={value => { setRunning(false); changeTime(value); }}
        onScenario={(next: Config) => {cfg.current = next; setConfig(next); setError(''); changeTime(REPLAY_START);}} />
      <div className="workspace">
        <aside className="left-panel">
          <div className="panel-heading">
            <span className="eyebrow">01 / SCENARIO</span>
            <h2>{t('场景参数', 'Scenario parameters')}</h2>
          </div>
          <section>
            <div className="section-title"><Satellite size={16} /><h3>{t('卫星星座', 'Constellation')}</h3><span className="subtle">STARLINK</span></div>
            <dl className="scenario-values">
              <div><dt>{t('卫星数量', 'Satellites')}</dt><dd>{config.count.toLocaleString()}</dd></div>
              <div><dt>{t('样本种子', 'Sample seed')}</dt><dd>{config.seed}</dd></div>
            </dl>
          </section>
          <section>
            <div className="section-title"><MapPin size={16} /><h3>{t('地面节点', 'Ground terminals')}</h3></div>
            {(['source', 'destination'] as const).map((key, index) => (
              <div className="scenario-terminal" key={key}>
                <span className={'ground-dot ' + (index ? 'destination' : '')}>{index ? 'D' : 'S'}</span>
                <div><span>{index ? t('目的节点', 'Destination') : t('源节点', 'Source')}</span><strong>{groundName(config[key])}</strong>
                  <small>{Math.abs(config[key].lat).toFixed(2)}°{config[key].lat >= 0 ? 'N' : 'S'} · {Math.abs(config[key].lon).toFixed(2)}°{config[key].lon >= 0 ? 'E' : 'W'}</small>
                </div>
              </div>
            ))}
          </section>
          <section>
            <div className="section-title"><Layers size={16} /><h3>{t('服务约束', 'Service constraints')}</h3></div>
            <dl className="scenario-values">
              <div><dt>{t('时延上限 λ', 'Delay bound λ')}</dt><dd>{config.lambda} ms</dd></div>
              <div><dt>{t('资源预留比例', 'Resource reservation')}</dt><dd>{config.reservation}%</dd></div>
            </dl>
            <p className="hint">{t('容量 = 最小剩余速率；时延 = 各跳传播时延之和。', 'Capacity = minimum residual rate; delay = sum of propagation delays.')}</p>
            <details>
              <summary>{t('链路与算法参数', 'Link & algorithm settings')} <ChevronRight size={12} /></summary>
              <dl className="scenario-values">
                <div><dt>{t('ISL 最远距离', 'Max ISL range')}</dt><dd>{config.range.toLocaleString()} km</dd></div>
                <div><dt>{t('每星 ISL 上限', 'Max ISLs / satellite')}</dt><dd>{config.degree}</dd></div>
                <div><dt>{t('最低仰角', 'Minimum elevation')}</dt><dd>{config.elevation}°</dd></div>
                <div><dt>KSP max K</dt><dd>{config.kmax}</dd></div>
                <div><dt>{t('T1 复用子图', 'T1 Reuse subgraphs')}</dt><dd>{config.t1 ? t('开启', 'On') : t('关闭', 'Off')}</dd></div>
                <div><dt>{t('T2 容量跳跃', 'T2 Capacity jumps')}</dt><dd>{config.t2 ? t('开启', 'On') : t('关闭', 'Off')}</dd></div>
              </dl>
            </details>
          </section>
          <div className="paper-note">
            <span>IEEE TVT · 2025 · 74(4), 6573–6585</span>
            <p>
              Lightweight Maximum-Capacity Path Selection for Delay-Sensitive
              Applications in Large-Scale LEO Satellite Networks
            </p>
            <a
              className="paper-doi"
              href={paperUrl}
              target="_blank"
              rel="noreferrer"
            >
              {paperUrl}
              <ArrowUpRight size={12} />
            </a>
          </div>
        </aside>
        <div className="center-panel">
          <div className="scene-top">
            <div>
              <span className="eyebrow">
                WIDEST PATH / WITHIN A DELAY BOUND
              </span>
              <h1>
                {t(
                  '在时限内，找到更宽的路径。',
                  'Find the widest path within the deadline.',
                )}
              </h1>
              <p>
                {groundName(config.source)} → {groundName(config.destination)}{' '}
                <span> / {selected}</span>
              </p>
            </div>
            <button
              className="icon-button"
              title={t('全屏', 'Fullscreen')}
              onClick={() => {
                if (document.fullscreenElement) document.exitFullscreen();
                else
                  document.documentElement.requestFullscreen().catch(() => {});
              }}
            >
              <Maximize2 size={17} />
            </button>
          </div>
          <Globe
            language={language}
            cities={markers}
            snapshot={snap}
            selected={selected}
            overlay={overlay}
            links={links}
            trails={trails}
            picking={false}
            reset={reset}
            filterThreshold={currentStep?.threshold || 0}
            tracePath={currentStep?.path}
            onGround={() => {}}
            onLink={(i) => {
              if (snap?.edges[i]) {
                const e = snap.edges[i];
                setEdgeKey(
                  [snap.nodes[e.a].id, snap.nodes[e.b].id].sort().join(':'),
                );
              }
            }}
          />
          {!snap && (
            <div className="loading">
              {t(
                '正在加载场景…',
                'Loading scenario…',
              )}
            </div>
          )}
          <div className="scene-legend">
            <span>
              <i style={{ background: '#78bac9' }} />
              {t('卫星', 'Satellites')}
            </span>
            <span>
              <i style={{ background: '#64cfff' }} />
              {t('选中路径', 'Selected path')}
            </span>
            <span>
              <i style={{ background: '#ffcc86' }} />
              {t('瓶颈链路', 'Bottleneck link')}
            </span>
            {currentStep && (
              <span>{t('白线：试探路径', 'White: trial path')}</span>
            )}
          </div>
          <div className="globe-tools">
            <button
              className={'icon-button ' + (overlay ? 'active' : '')}
              title={t('叠加路径', 'Overlay routes')}
              onClick={() => {
                inspect(-1);
                setOverlay(!overlay);
              }}
            >
              <Layers size={17} />
            </button>
            <button
              className={'icon-button ' + (links ? 'active' : '')}
              title={t('显示网络链路', 'Show network links')}
              onClick={() => setLinks(!links)}
            >
              <Link2 size={17} />
            </button>
            <button
              className={'icon-button ' + (trails ? 'active' : '')}
              title={t('轨道轨迹', 'Orbit tracks')}
              onClick={() => setTrails(!trails)}
            >
              <Orbit size={17} />
            </button>
            <button
              className="icon-button"
              title={t('重置视角', 'Reset view')}
              onClick={() => setReset(reset + 1)}
            >
              <RotateCcw size={17} />
            </button>
          </div>
          {edge && snap && (
            <div className="link-card">
              <button className="close" onClick={() => setEdgeKey(null)}>
                <X size={14} />
              </button>
              <span className="eyebrow">LINK INSPECTOR</span>
              <h3>
                {snap.nodes[edge.a].name} ↔ {snap.nodes[edge.b].name}
              </h3>
              <div>
                <span>{t('距离', 'Distance')}</span>
                <b>{edge.distance.toFixed(1)} km</b>
              </div>
              <div>
                <span>{t('传播时延', 'Propagation')}</span>
                <b>{edge.delay.toFixed(3)} ms</b>
              </div>
              <div>
                <span>{t('剩余容量', 'Residual capacity')}</span>
                <b>{edge.rate.toFixed(3)} Mbps</b>
              </div>
            </div>
          )}
          <div className="widest-bottom">
            <div className="widest-metrics">
              <div>
                <span>{t('路径容量', 'PATH CAPACITY')}</span>
                <strong>
                  {route?.path.length ? route.width.toFixed(2) : '—'}
                  <small>Mbps</small>
                </strong>
              </div>
              <div>
                <span>{t('传播时延 / 上限', 'DELAY / BOUND')}</span>
                <strong
                  className={route?.status === 'over-delay' ? 'warn-value' : ''}
                >
                  {route?.delay?.toFixed(2) ?? '—'}
                  <small>/ {config.lambda} ms</small>
                </strong>
              </div>
              <div>
                <span>{t('网络规模', 'NETWORK')}</span>
                <strong>
                  {snap ? (snap.nodes.length - 2).toLocaleString() : '—'}
                  <small>{t('星', 'sats')}</small>
                </strong>
              </div>
            </div>
            <div className="search-lab">
              <div className="search-heading">
                <div>
                  <span className="eyebrow">INSIDE THE ALGORITHM</span>
                  <h3>
                    {t(
                      '图过滤与加速二分',
                      'Graph filtering & accelerated bisection',
                    )}
                  </h3>
                </div>
                <button
                  className="text-button"
                  disabled={!gfo?.trace.length}
                  onClick={() => inspect(step < 0 ? 0 : -1)}
                >
                  {step < 0
                    ? t('逐步查看', 'Inspect steps')
                    : t('显示最终路径', 'Final route')}
                </button>
              </div>
              <div className="search-stats">
                <span>
                  {t('GFO 求解调用', 'GFO solver calls')}{' '}
                  <b>{gfo?.calls ?? '—'}</b>
                </span>
                <span>
                  {t('普通二分', 'Plain bisection')} <b>{raw?.calls ?? '—'}</b>
                </span>
                <span>
                  T1 <b>{gfo?.skipped ?? 0}</b> {t('次复用', 'reuses')}
                </span>
                <span>
                  T2 <b>{gfo?.jumps ?? 0}</b> {t('次跳跃', 'jumps')}
                </span>
              </div>
              {currentStep ? (
                <>
                  <div className="bound-track">
                    <span
                      style={{
                        left: `${(100 * currentStep.lower) / Math.max(1, currentStep.upper)}%`,
                        width: `${(100 * (currentStep.upper - currentStep.lower)) / Math.max(1, currentStep.upper)}%`,
                      }}
                    />
                    <i
                      style={{
                        left: `${(100 * currentStep.threshold) / Math.max(1, currentStep.upper)}%`,
                      }}
                    />
                  </div>
                  <div className="step-summary">
                    <span>
                      rσ <b>{currentStep.threshold.toFixed(3)} Mbps</b>
                    </span>
                    <span>
                      {t('保留链路', 'Retained links')}{' '}
                      <b>{currentStep.links.toLocaleString()}</b>
                    </span>
                    <span
                      className={currentStep.feasible ? 'step-yes' : 'step-no'}
                    >
                      {currentStep.reused
                        ? 'T1 · '
                        : currentStep.jumped
                          ? 'T2 · '
                          : ''}
                      {currentStep.feasible
                        ? t('时延可行', 'Delay-feasible')
                        : t('不可行', 'Infeasible')}
                    </span>
                  </div>
                  <p className="step-explain">
                    [{currentStep.lower.toFixed(3)},{' '}
                    {currentStep.upper.toFixed(3)}] → [
                    {currentStep.nextLower.toFixed(3)},{' '}
                    {currentStep.nextUpper.toFixed(3)}] Mbps ·{' '}
                    {currentStep.delay === null
                      ? t('无连通路径', 'Disconnected')
                      : currentStep.delay.toFixed(3) + ' ms'}
                  </p>
                </>
              ) : (
                <p className="search-intro">
                  {t(
                    '提高阈值会移除低速链路；仅在满足 λ 时继续提高容量下界。点击逐步查看，在地球上观察筛选过程。',
                    'Raise the threshold to remove slower links. Raise the lower bound only when a delay-feasible path exists. Inspect the steps on the globe.',
                  )}
                </p>
              )}
              <div className="step-controls">
                <button
                  disabled={!gfo?.trace.length || step <= 0}
                  onClick={() => inspect(step - 1)}
                  aria-label={t('上一步', 'Previous step')}
                >
                  <ChevronLeft size={14} />
                </button>
                <input
                  aria-label={t('搜索步骤', 'Search step')}
                  type="range"
                  min="0"
                  max={Math.max(0, (gfo?.trace.length || 1) - 1)}
                  value={Math.max(0, step)}
                  disabled={!gfo?.trace.length}
                  onChange={(e) => inspect(+e.target.value)}
                />
                <span>
                  {step < 0 ? '—' : step + 1} / {gfo?.trace.length ?? 0}
                </span>
                <button
                  disabled={!gfo?.trace.length || step >= gfo.trace.length - 1}
                  onClick={() => inspect(step < 0 ? 0 : step + 1)}
                  aria-label={t('下一步', 'Next step')}
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
            <div className="time-bar">
              <button
                className="play-button" aria-label={running ? t('暂停回放', 'Pause replay') : t('播放回放', 'Play replay')}
                disabled={progress !== null}
                onClick={() => (running ? setRunning(false) : resume())}
              >
                {running ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <input
                aria-label="UTC time"
                type="datetime-local"
                step="1"
                value={time ? utc(snap?.time || time) : ''}
                onChange={(e) => {
                  setRunning(false);
                  changeTime(Date.parse(e.target.value + 'Z'));
                }}
              />
              <span>UTC</span>
              <select
                aria-label={t('播放速度', 'Playback speed')}
                value={speed}
                onChange={(e) => setSpeed(+e.target.value)}
              >
                {[1, 10, 60].map((n) => (
                  <option key={n} value={n}>
                    {n}×
                  </option>
                ))}
              </select>
              <button
                title={t('回放起点', 'Replay start')}
                onClick={() => {
                  setSpeed(1);
                  changeTime(REPLAY_START);
                  resume();
                }}
              >
                <RefreshCw size={14} />
              </button>
              <span className="snapshot-state">
                {busy ? t('更新中', 'Updating') : t('快照', 'Snapshot')} ·{' '}
                {snap?.elapsed.toFixed(0) ?? '—'} ms
              </span>
            </div>
          </div>
        </div>
        <aside className="right-panel">
          <div className="panel-heading">
            <span className="eyebrow">02 / ROUTING COMPARISON</span>
            <h2>
              {t('相同网络，不同路径。', 'One network. Different paths.')}
            </h2>
            <p>
              {t(
                '比较容量、传播时延与搜索代价。',
                'Compare capacity, delay and search effort.',
              )}
            </p>
          </div>
          <div className="algorithm-list">
            {names.map((name, i) => {
              const r = snap?.routes[i];
              return (
                <button
                  className={
                    'algorithm ' + (selected === name ? 'selected' : '')
                  }
                  key={name}
                  style={{ '--accent': colors[i] } as any}
                  onClick={() => {
                    setSelected(name);
                    inspect(-1);
                  }}
                >
                  <div>
                    <span className="algorithm-dot" />
                    <strong>{name}</strong>
                    <em>
                      {i === 0
                        ? t('所提方法', 'PROPOSED')
                        : i === 1
                          ? t('消融', 'ABLATION')
                          : i === 2
                            ? t('论文对比', 'PAPER')
                            : t('参照', 'REFERENCE')}
                    </em>
                    <ChevronRight size={13} />
                  </div>
                  <div className="algorithm-result">
                    <span>{status(r?.status)}</span>
                    <b>
                      {r?.path.length ? r.width.toFixed(2) : '—'}
                      <small> Mbps</small>
                    </b>
                  </div>
                  <div className="delay-track">
                    <span
                      style={{
                        width: `${Math.min(100, ((r?.width || 0) / 350) * 100)}%`,
                      }}
                    />
                  </div>
                  <div className="algorithm-meta">
                    <span>{r?.delay?.toFixed(2) ?? '—'} ms</span>
                    <span>
                      {r?.calls ?? '—'} {t('次求解', 'solves')}
                    </span>
                    <span>{r?.ms.toFixed(2) ?? '—'} ms CPU</span>
                  </div>
                </button>
              );
            })}
          </div>
          <section className="route-section">
            <div className="section-title">
              <h3>
                {selected} · {t('路径详情', 'Path details')}
              </h3>
              <span className="subtle">
                {route?.path.length ? route.path.length - 1 : 0} HOPS
              </span>
            </div>
            <p className="method-description">{methods[selected]}</p>
            <div className="path-scroll">
              {route?.path.length && snap ? (
                route.path.map((index, k) => {
                  const previous = route.path[k - 1],
                    e = k
                      ? snap.edges.find(
                          (e) =>
                            (e.a === previous && e.b === index) ||
                            (e.b === previous && e.a === index),
                        )
                      : undefined,
                    bottleneck = e && Math.abs(e.rate - route.width) < 0.0005;
                  return (
                    <button
                      key={k}
                      className={
                        'path-node ' + (bottleneck ? 'bottleneck-node' : '')
                      }
                      onClick={() => {
                        if (e)
                          setEdgeKey(
                            [snap.nodes[e.a].id, snap.nodes[e.b].id]
                              .sort()
                              .join(':'),
                          );
                      }}
                    >
                      <span>{String(k + 1).padStart(2, '0')}</span>
                      <div>
                        {snap.nodes[index].ground
                          ? groundName(
                              snap.nodes[index].id === 'GT-S'
                                ? config.source
                                : config.destination,
                            )
                          : snap.nodes[index].name}
                        {e && (
                          <em>
                            {e.rate.toFixed(3)} Mbps · {e.delay.toFixed(3)} ms{' '}
                            {bottleneck ? '◆' : ''}
                          </em>
                        )}
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="empty-path">
                  {status(route?.status)}

                </div>
              )}
            </div>
          </section>
          <div className="comparison-note">
            <span>λ</span>
            <div>
              {t(
                '先满足时延，再最大化容量',
                'Meet the delay bound, then maximize capacity',
              )}

            </div>
          </div>
        </aside>
      </div>
      <footer><span>CARELab · Widest-path routing</span><a href="./THIRD_PARTY_NOTICES.txt">Credits</a></footer>
      {error && (
        <div className="toast" role="alert">
          <span>{translate(error, language)}</span>
          <button onClick={() => setError('')}>
            <X size={15} />
          </button>
        </div>
      )}
    </main>
  );
}


