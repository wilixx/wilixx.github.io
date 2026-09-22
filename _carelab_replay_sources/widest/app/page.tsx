'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Orbit,
  Satellite,
  Shuffle,
  Play,
  Pause,
  RotateCcw,
  Download,
  MapPin,
  Layers,
  Maximize2,
  Info,
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
import CityPicker from '../components/city-picker';
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
    [running, setRunning] = useState(true),
    [speed, setSpeed] = useState(1),
    [time, setTime] = useState(0),
    [overlay, setOverlay] = useState(false),
    [links, setLinks] = useState(false),
    [trails, setTrails] = useState(true),
    [reset, setReset] = useState(0);
  const [pick, setPick] = useState<'source' | 'destination' | null>(null),
    [edgeKey, setEdgeKey] = useState<string | null>(null),
    [step, setStep] = useState(-1),
    [modal, setModal] = useState<'about' | 'export' | null>(null),
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
  async function refresh() { setError(language === 'zh' ? '回放版使用预录数据，请在上方切换场景。' : 'Replay uses recorded data. Choose a scenario above.'); }
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
  function exportNow() { if (snap) save(new Blob([JSON.stringify({schema:'carelab-replay-frame/1', config, snapshot:snap})],{type:'application/json'}), 'carelab-replay-frame.json'); }
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
            className="icon-button"
            title={t('方法说明', 'Methods')}
            onClick={() => setModal('about')}
          >
            <Info size={18} />
          </button>
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
      <ReplayBar language={language} scenario={config.replayScenario || '0'} time={snap?.time || REPLAY_START} onSeek={changeTime} onScenario={(c: Config) => {setConfig(c); setError(''); changeTime(REPLAY_START);}} />
      <div className="workspace">
        <aside className="left-panel"><fieldset disabled className="replay-locked" title="Recorded settings / 预录场景参数">
          <div className="panel-heading">
            <span className="eyebrow">01 / NETWORK & SERVICE</span>
            <h2>
              {t('让带宽，满足时限。', 'More capacity. Within the deadline.')}
            </h2>
            <p>
              {t(
                '查看预录网络与服务时延上限。',
                'Recorded network and service constraints.',
              )}
            </p>
          </div>
          <section>
            <div className="section-title">
              <Satellite size={16} />
              <h3>{t('Starlink 星座', 'Starlink constellation')}</h3>
            </div>
            <label className="field-label">
              {t('随机卫星样本', 'Random satellite sample')}
              <span>{config.count.toLocaleString()}</span>
            </label>
            <input
              aria-label={t('卫星数量', 'Satellite count')}
              type="range"
              min="1"
              max={countLimit}
              value={config.count}
              disabled={!catalogCount}
              onChange={(e) => update('count', +e.target.value)}
            />
            <div className="range-ends">
              <span>1</span>
              <span>{countLimit.toLocaleString()}</span>
            </div>
            <div className="inline-controls">
              <label>
                {t('数量', 'Count')}
                <input
                  type="number"
                  min="1"
                  max={countLimit}
                  value={config.count}
                  onChange={(e) =>
                    update(
                      'count',
                      Math.round(clamp(e.target.value, 1, countLimit)),
                    )
                  }
                />
              </label>
              <label>
                {t('种子', 'Seed')}
                <input
                  type="number"
                  min="0"
                  max="999999"
                  value={config.seed}
                  onChange={(e) =>
                    update('seed', Math.round(clamp(e.target.value, 0, 999999)))
                  }
                />
              </label>
              <button
                title={t('更换样本', 'Resample')}
                onClick={() => update('seed', (config.seed + 1) % 1000000)}
              >
                <Shuffle size={14} />
              </button>
            </div>
            <button
              className="text-button full"
              disabled={!catalogCount}
              onClick={() => update('count', catalogCount)}
            >
              {t('全选当前星座', 'Use full constellation')} ·{' '}
              {catalogCount.toLocaleString()}
            </button>
          </section>
          <section>
            <div className="section-title">
              <MapPin size={16} />
              <h3>{t('地面终端 / Cell', 'Ground terminals / cells')}</h3>
            </div>
            {(['source', 'destination'] as const).map((key, i) => (
              <div className="ground-control" key={key}>
                <div className={'ground-dot ' + (i ? 'destination' : '')}>
                  {i ? 'D' : 'S'}
                </div>
                <div className="ground-fields">
                  <label>
                    {i ? t('目的终端', 'Destination') : t('源终端', 'Source')}
                    <CityPicker
                      key={language}
                      cities={cities}
                      cityId={
                        config[key].cityId ||
                        cities.find(
                          (c) =>
                            c.name === config[key].name ||
                            c.zh === config[key].name,
                        )?.id
                      }
                      language={language}
                      label={
                        i
                          ? t('搜索目的城市', 'Search destination city')
                          : t('搜索源城市', 'Search source city')
                      }
                      onSelect={(city) => {
                        update(key, {
                          name: city.name,
                          lat: city.lat,
                          lon: city.lon,
                          cityId: city.id,
                        });
                        setPick(null);
                      }}
                    />
                  </label>
                  <div className="coordinates">
                    {(['lat', 'lon'] as const).map((k) => (
                      <input
                        key={k}
                        aria-label={`${key} ${k}`}
                        type="number"
                        step=".1"
                        min={k === 'lat' ? -90 : -180}
                        max={k === 'lat' ? 90 : 180}
                        value={+config[key][k].toFixed(3)}
                        onChange={(e) =>
                          update(key, {
                            ...config[key],
                            name: '自定义',
                            cityId: undefined,
                            [k]: clamp(
                              e.target.value,
                              k === 'lat' ? -90 : -180,
                              k === 'lat' ? 90 : 180,
                            ),
                          })
                        }
                      />
                    ))}
                    <span>°</span>
                  </div>
                </div>
                <button
                  className={'icon-button ' + (pick === key ? 'active' : '')}
                  title={t('球面选点', 'Pick on globe')}
                  onClick={() => setPick(pick === key ? null : key)}
                >
                  <MapPin size={15} />
                </button>
              </div>
            ))}
            <button
              className="text-button full"
              onClick={() => {
                const rng = random(
                    config.seed + Math.floor(clock.current / 1000),
                  ),
                  a = cities[Math.floor(rng() * cities.length)],
                  b = cities[Math.floor(rng() * cities.length)];
                setConfig((c) => ({
                  ...c,
                  source: {
                    name: a.name,
                    cityId: a.id,
                    lat: a.lat,
                    lon: a.lon,
                  },
                  destination: {
                    name: b.name,
                    cityId: b.id,
                    lat: b.lat,
                    lon: b.lon,
                  },
                }));
              }}
            >
              <Shuffle size={13} />
              {t('随机全球城市', 'Random global cities')}
            </button>
          </section>
          <section>
            <div className="section-title">
              <Gauge size={16} />
              <h3>{t('时延与链路容量', 'Delay & link capacity')}</h3>
            </div>
            <label className="field-label">
              {t('时延上限 λ', 'Delay bound λ')}
              <span>{config.lambda} ms</span>
            </label>
            <input
              aria-label="Delay bound"
              type="range"
              min="1"
              max="180"
              value={Math.min(180, config.lambda)}
              onChange={(e) => update('lambda', +e.target.value)}
            />
            <div className="param-grid">
              <label>
                λ (ms)
                <input
                  type="number"
                  min=".1"
                  max="1000"
                  step=".1"
                  value={config.lambda}
                  onChange={(e) =>
                    update('lambda', clamp(e.target.value, 0.1, 1000))
                  }
                />
              </label>
              <label>
                {t('资源预留比例 %', 'Reserved links %')}
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={config.reservation}
                  onChange={(e) =>
                    update('reservation', clamp(e.target.value, 0, 100))
                  }
                />
              </label>
            </div>
            <p className="hint">
              {t(
                '容量 = 路径中最小剩余速率；时延 = 各跳传播时延之和。',
                'Capacity = minimum residual rate; delay = sum of per-hop propagation delays.',
              )}
            </p>
            <details>
              <summary>
                {t('链路与搜索参数', 'Link & search settings')}
                <ChevronRight size={12} />
              </summary>
              <div className="param-grid">
                {(
                  [
                    ['range', 'ISL km', 500, 5000],
                    ['degree', t('每星 ISL', 'ISLs / satellite'), 2, 12],
                    ['elevation', t('最低仰角 °', 'Elevation °'), 0, 60],
                    ['kmax', 'KSP max K', 1, 200],
                  ] as const
                ).map(([key, label, min, max]) => (
                  <label key={key}>
                    {label}
                    <input
                      type="number"
                      min={min}
                      max={max}
                      value={config[key]}
                      onChange={(e) =>
                        update(key, Math.round(clamp(e.target.value, min, max)))
                      }
                    />
                  </label>
                ))}
              </div>
            </details>
          </section>
          <section>
            <div className="section-title">
              <Filter size={16} />
              <h3>{t('GFO 加速开关', 'GFO acceleration')}</h3>
            </div>
            <label className="acceleration">
              <input
                type="checkbox"
                checked={config.t1}
                onChange={(e) => update('t1', e.target.checked)}
              />
              <span>
                <b>T1</b>
                {t('复用相同子图', 'Reuse unchanged subgraphs')}
              </span>
            </label>
            <label className="acceleration">
              <input
                type="checkbox"
                checked={config.t2}
                onChange={(e) => update('t2', e.target.checked)}
              />
              <span>
                <b>T2</b>
                {t('跳到实际容量', 'Jump to actual capacity')}
              </span>
            </label>
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
        </fieldset></aside>
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
            picking={!!pick}
            reset={reset}
            filterThreshold={currentStep?.threshold || 0}
            tracePath={currentStep?.path}
            onGround={(lat, lon, city) => {
              if (pick)
                update(
                  pick,
                  city
                    ? { name: city.name, cityId: city.id, lat, lon }
                    : { name: '自定义', lat, lon },
                );
              setPick(null);
            }}
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
                '正在推演轨道并构建网络…',
                'Loading recorded scenario…',
              )}
            </div>
          )}
          {pick && (
            <div className="pick-banner">
              {t(
                '点击城市圆点或任意地表位置',
                'Pick a city dot or any surface location',
              )}
              <button onClick={() => setPick(null)}>
                <X size={13} />
              </button>
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
                  <p>
                    {t(
                      '可放宽时延上限、增加卫星或调整终端位置。',
                      'Try a larger delay bound, more satellites, or other terminals.',
                    )}
                  </p>
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
              <p>
                {t(
                  '各方法独立使用同一快照。',
                  'All methods use the same snapshot independently.',
                )}
              </p>
            </div>
          </div>
        </aside>
      </div>
      <footer><span>CARELab · {language === 'zh' ? '公开预录演示 · 非实时计算' : 'Public recorded demonstration · No live solving'}</span><span>2026-09-07 13:00–13:06 UTC · 30 s / frame</span></footer>
      {error && (
        <div className="toast" role="alert">
          <span>{translate(error, language)}</span>
          <button onClick={() => setError('')}>
            <X size={15} />
          </button>
        </div>
      )}
      {modal && (
        <div
          className="modal-backdrop"
          onClick={() => {
            if (progress === null) setModal(null);
          }}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={
              modal === 'about'
                ? t('方法说明', 'Methods')
                : t('导出回放帧', 'Export contacts')
            }
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              disabled={progress !== null}
              onClick={() => setModal(null)}
            >
              <X size={18} />
            </button>
            {modal === 'about' ? (
              <>
                <span className="eyebrow">METHOD & PROVENANCE</span>
                <h2>
                  {t(
                    '从论文到动态路径演示',
                    'From the paper to dynamic routes',
                  )}
                </h2>
                <p>
                  {t(
                    'GFO 对应 Algorithm 3–4；KSP 对应 Algorithm 2。Bisection 为关闭 T1/T2 的消融；Shortest、Widest 是解释性参照，不是论文的 ILP。',
                    'GFO implements Algorithms 3–4; KSP implements Algorithm 2. Bisection disables T1/T2. Shortest and Widest are illustrative references, not the paper’s ILP.',
                  )}
                </p>
                <h3>{t('目标与精度', 'Objective & precision')}</h3>
                <p>
                  {t(
                    '在总传播时延 ≤ λ 下，最大化路径最小剩余容量。速率量化为 0.001 Mbps，整数阈值二分在此模型上给出精确最优容量；保留初始最短路，正确处理上下界相等的情况。',
                    'Maximize the minimum residual capacity subject to total propagation delay ≤ λ. Rates are quantized to 0.001 Mbps; integer threshold bisection gives the exact optimum for this model. The initial shortest path is retained, including equal-bound cases.',
                  )}
                </p>
                <h3>{t('模型与实验边界', 'Model & experiment boundaries')}</h3>
                <p>
                  {t(
                    '公开 CelesTrak OMM + SGP4 推演，不是遥测或实际 Starlink 链路。ISL 为有度数约束的视线近邻图，USL 由仰角决定。基础速率 300–350 Mbps，预留因子 0、1/8、1/4、1/2、1，每分钟更新。',
                    'Public CelesTrak OMM and SGP4, not telemetry or actual Starlink links. ISLs form a degree-limited visible-neighbor graph; USLs use elevation. Base rates are 300–350 Mbps with reservation factors 0, 1/8, 1/4, 1/2, 1, updated each minute.',
                  )}
                </p>
                <p>
                  {t(
                    '传播时延按距离/光速计算，不采用论文实验的每链路 5–15 ms 设置。不含排队、序列化或计算时间。未复现 STK、Gurobi ILP 和整日批量统计；采样连接导出不等同于 Algorithm 1 的精确事件分割。',
                    'Delay is distance/light-speed, not the paper’s experimental 5–15 ms per-link setting. Queueing, serialization and computation are excluded. STK, Gurobi ILP and full-day statistics are not reproduced; sampled contact export is not the exact event partition of Algorithm 1.',
                  )}
                </p>
                <p>
                  {t(
                    'KSP 的“当前最好”不能当作最优性证明。设备求解耗时不是论文性能数据。',
                    'KSP best-found results are not proof of optimality. Device runtime measurements are not paper performance results.',
                  )}
                </p>
                <div className="source-links">
                  <a href={paperUrl} target="_blank" rel="noreferrer">
                    IEEE TVT paper
                  </a>
                  <a
                    href="https://celestrak.org/NORAD/documentation/gp-data-formats.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CelesTrak
                  </a>
                  <a
                    href="https://www.geonames.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GeoNames · CC BY 4.0
                  </a>
                </div>
              </>
            ) : (
              <>
                <span className="eyebrow">CONTACT PLAN EXPORT</span>
                <h2>{t('保存动态网络连接', 'Export network contacts')}</h2>
                <p>
                  {t(
                    '保存距离、传播时延、剩余容量与采样连通时段。',
                    'Save distances, propagation delays, residual capacities and sampled contact intervals.',
                  )}
                </p>
                <label className="modal-field">
                  {t('开始时间 UTC', 'Start UTC')}
                  <input
                    type="datetime-local"
                    step="1"
                    value={exportStart}
                    onChange={(e) => setExportStart(e.target.value)}
                  />
                </label>
                <label className="modal-field">
                  {t('结束时间 UTC', 'End UTC')}
                  <input
                    type="datetime-local"
                    step="1"
                    value={exportEnd}
                    onChange={(e) => setExportEnd(e.target.value)}
                  />
                </label>
                <label className="modal-field">
                  {t('采样间隔', 'Sample interval')}
                  <select
                    value={exportStep}
                    onChange={(e) => setExportStep(+e.target.value)}
                  >
                    {[5, 10, 30, 60, 120, 300].map((n) => (
                      <option value={n} key={n}>
                        {n} s
                      </option>
                    ))}
                  </select>
                </label>
                <p className="export-info">
                  JSON.gz · Python / pickle · {t('当前最多', 'Maximum')}{' '}
                  {stepLimit} {t('步', 'samples')}
                </p>
                <p className="hint">
                  {t(
                    '时段为 [开始, 结束) 采样近似，可能漏掉短于步长的接触；边界误差最多一步。',
                    'Intervals are sampled approximations [start, end); shorter contacts may be missed and boundary uncertainty is up to one step.',
                  )}
                </p>
                <button
                  className="primary"
                  disabled={progress !== null || !snap}
                  onClick={exportNow}
                >
                  <Download size={16} />
                  {progress === null
                    ? t('生成并下载', 'Generate & download')
                    : progress + '%'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}


