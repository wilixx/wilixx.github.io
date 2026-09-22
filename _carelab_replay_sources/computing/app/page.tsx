'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Satellite,
  Shuffle,
  Play,
  Pause,
  RotateCcw,
  Download,
  ChevronRight,
  MapPin,
  Layers,
  Radio,
  Maximize2,
  Info,
  RefreshCw,
  X,
  ArrowUpRight,
  Orbit,
  Link2,
  Languages,
} from 'lucide-react';
import Globe from '../components/globe';
import CityPicker from '../components/city-picker';
import Recorder from '../components/recorder';
import { City, cityName, fallbackCities, globeCities } from '../lib/cities';
import { exportStepLimit } from '../lib/export-budget';
import { localizeView, platformName, paperUrl } from '../lib/i18n';
import type { Language } from '../lib/i18n';
import SimulationWorker from '../lib/replay.worker?worker';
import { ReplayBar, REPLAY_START, REPLAY_END, wrapTime } from '../components/replay-bar';
import {
  Config,
  Snapshot,
  defaults,
  colors,
  names,
  random,
  Ground,
} from '../lib/engine';
const details: Record<string, string> = {
  CASP: '论文 Algorithm 3 · 带宽过滤后，正向 / 反向最短路联合选取计算节点，允许重复经过中继卫星。',
  KSP: '论文 Algorithm 2 · Yen K 最短简单路径，按传播时延依次检查算力；达到 K 或 180 ms 搜索预算会明确提示。',
  Nearest:
    '论文 baseline · 选距离源地面节点最近的可用计算卫星，再拼接两段最短路径。',
  Shortest:
    '论文 baseline · 先选源至目的最短路径，路径上没有足够算力则拒绝任务。',
  Random:
    '论文 baseline · 在可用计算卫星中固定种子随机选一个，再拼接两段最短路径。',
};
function isoLocal(t: number) {
  return new Date(t).toISOString().slice(0, 19);
}
function number(v: string, min: number, max: number, fallback: number) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : fallback;
}
function save(data: Blob, name: string) {
  const url = URL.createObjectURL(data),
    a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}
export default function Home() {
  const [language, setLanguage] = useState<Language>('zh');
  const [cities, setCities] = useState<City[]>(fallbackCities);
  const [cityError, setCityError] = useState(false);
  const markers = useMemo(() => globeCities(cities), [cities]);
  useEffect(() => {
    fetch('./cities.json')
      .then((r) => {
        if (!r.ok) throw Error('Cities unavailable');
        return r.json() as Promise<City[]>;
      })
      .then((rows: City[]) =>
        setCities([
          ...rows,
          ...fallbackCities.filter((c) => !rows.some((r) => r.id === c.id)),
        ]),
      )
      .catch(() => setCityError(true));
  }, []);
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('carelab-computing-replay-language');
    } catch {}
    const preferred =
      saved === 'en' || saved === 'zh'
        ? saved
        : navigator.language.toLowerCase().startsWith('zh')
          ? 'zh'
          : 'en';
    setLanguage(preferred);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = platformName;
  }, [language]);
  function chooseLanguage(value: string) {
    if (value !== 'zh' && value !== 'en') return;
    setLanguage(value);
    try {
      localStorage.setItem('carelab-computing-replay-language', value);
    } catch {}
  }

  const [config, setConfig] = useState<Config>(defaults),
    [snap, setSnap] = useState<Snapshot | null>(null),
    [selected, setSelected] = useState('CASP'),
    [overlay, setOverlay] = useState(false),
    [links, setLinks] = useState(false),
    [trails, setTrails] = useState(true),
    [running, setRunning] = useState(true),
    [speed, setSpeed] = useState(1),
    [time, setTime] = useState(0),
    [reset, setReset] = useState(0),
    [pick, setPick] = useState<'source' | 'destination' | null>(null),
    [edgeKey, setEdgeKey] = useState<string | null>(null),
    [modal, setModal] = useState<'export' | 'about' | null>(null),
    [error, setError] = useState(''),
    [ready, setReady] = useState(false),
    [catalogCount, setCatalogCount] = useState(0),
    [epoch, setEpoch] = useState(''),
    [busy, setBusy] = useState(false),
    [progress, setProgress] = useState<number | null>(null),
    [exportStart, setExportStart] = useState(''),
    [exportEnd, setExportEnd] = useState(''),
    [exportStep, setExportStep] = useState(30),
    [refreshing, setRefreshing] = useState(false);
  const worker = useRef<Worker | null>(null),
    cfg = useRef(config),
    clock = useRef(REPLAY_START),
    flags = useRef({ running, speed, exporting: false }),
    pending = useRef(false),
    version = useRef(0),
    catalog = useRef<any[]>([]),
    lastTick = useRef(Date.now()),
    lastOrbitAttempt = useRef(0);
  cfg.current = config;
  flags.current.running = running;
  flags.current.speed = speed;
  function request() {
    if (!worker.current || pending.current || flags.current.exporting) return;
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
      throw Error('需要 CelesTrak OMM JSON 数组');
    catalog.current = data;
    const epochs = data
      .map((x) =>
        Date.parse(
          /[zZ]|[+-]\d\d:\d\d$/.test(x.EPOCH) ? x.EPOCH : x.EPOCH + 'Z',
        ),
      )
      .filter(Number.isFinite)
      .sort((a, b) => a - b);
    setEpoch(
      new Date(epochs[Math.floor(epochs.length / 2)])
        .toISOString()
        .slice(0, 16)
        .replace('T', ' '),
    );
    worker.current?.postMessage({ type: 'init', base: document.baseURI });
  }
  useEffect(() => {
    clock.current = REPLAY_START;
    setTime(clock.current);
    const w = new SimulationWorker();
    worker.current = w;
    w.onmessage = async ({ data }) => {
      if (data.type === 'ready') {
        setCatalogCount(data.count);
        if (cfg.current.count > data.count && data.count > 0) {
          cfg.current = { ...cfg.current, count: data.count };
          setConfig(cfg.current);
        }
        setReady(data.count > 0);
        pending.current = false;
        request();
      }
      if (data.type === 'snapshot') {
        pending.current = false;
        if (data.id === version.current) {
          setSnap(data.snapshot);
          setBusy(false);
        } else request();
      }
      if (data.type === 'progress') setProgress(data.progress);
      if (data.type === 'error') {
        setError(data.message);
        pending.current = false;
        setBusy(false);
        setProgress(null);
        flags.current.exporting = false;
      }
      if (data.type === 'exported') {
        try {
          const blob = new Blob([JSON.stringify(data.payload)], {
            type: 'application/json',
          });
          if (typeof CompressionStream !== 'undefined') {
            const zipped = await new Response(
              blob.stream().pipeThrough(new CompressionStream('gzip')),
            ).blob();
            save(zipped, 'starlink-contacts.json.gz');
          } else save(blob, 'starlink-contacts.json');
        } finally {
          setProgress(null);
          flags.current.exporting = false;
        }
      }
    };
    fetch('./replay/manifest.json')
      .then((r) => {
        if (!r.ok) throw Error('轨道缓存加载失败');
        return r.json();
      })
      .then(() => init([{EPOCH: '2026-09-07T13:00:00Z'}]))
      .catch((e) => setError(String(e)));
    const interval = setInterval(() => {
      const now = Date.now(),
        dt = now - lastTick.current;
      lastTick.current = now;
      if (flags.current.running && !flags.current.exporting) {
        clock.current = wrapTime(clock.current + dt * flags.current.speed);
        setTime(clock.current);
      }
      request();
    }, 1000);
    return () => {
      clearInterval(interval);
      w.terminate();
    };
  }, []);
  useEffect(() => {
    version.current++;
    setBusy(true);
    if (ready) request();
  }, [config]);
  const update = (key: keyof Config, value: any) =>
    setConfig((c) => ({ ...c, [key]: value }));
  const route = snap?.routes.find((r) => r.name === selected),
    edge = snap?.edges.find(
      (e) =>
        [snap.nodes[e.a].id, snap.nodes[e.b].id].sort().join(':') === edgeKey,
    ),
    accepted = snap?.routes.filter((r) => r.status === '已接纳').length || 0;
  const displayedTime = snap?.time || time;
  const maxSatellites = catalogCount || defaults.count;
  const maxExportSteps = exportStepLimit(config.count, config.degree);
  const groundName = (ground: Ground) => {
    const city = cities.find(
      (c) =>
        c.id === ground.cityId ||
        c.zh === ground.name ||
        c.name === ground.name,
    );
    return city ? cityName(city, language) : ground.name;
  };
  const selectCity = (key: 'source' | 'destination', city: City) => {
    update(key, {
      name: city.name,
      lat: city.lat,
      lon: city.lon,
      cityId: city.id,
    });
    setPick(null);
  };
  function changeTime(t: number) {
    if (!Number.isFinite(t)) {
      setError('请输入有效的 UTC 时间');
      return;
    }
    clock.current = Math.max(REPLAY_START, Math.min(REPLAY_END-1,t));
    setTime(t);
    version.current++;
    request();
  }
  async function refresh() { setError(language === 'zh' ? '回放版使用预录数据，请在上方切换场景。' : 'Replay uses recorded data. Choose a scenario above.'); }
  function exportNow() { if (snap) save(new Blob([JSON.stringify({schema:'carelab-replay-frame/1', config, snapshot:snap})],{type:'application/json'}), 'carelab-replay-frame.json'); }
  const maxDelay = Math.max(
    config.da,
    ...(snap?.routes.map((r) => r.delay || 0) || []),
  );
  return localizeView(
    <main data-language={language}>
      <header className="topbar">
        <a className="brand" href="/" aria-label={platformName}>
          <span className="brandmark">
            <Orbit size={25} />
          </span>
          <strong>
            CARELab<span>in-orbit computing platform</span>
          </strong>
        </a>
        <div className="header-middle">
          <span className="tiny-label">RESEARCH DEMONSTRATOR</span>
          <span>Starlink · 计算感知路由</span>
        </div>
        <div className="header-actions">
          <Recorder language={language} />
          <label className="language-picker" title="语言 / Language">
            <Languages size={16} aria-hidden="true" />
            <select
              aria-label="语言 / Language"
              value={language}
              onChange={(e) => chooseLanguage(e.target.value)}
            >
              <option value="zh">中文</option>
              <option value="en">English</option>
            </select>
          </label>
          <span className="tag">
            <i />
            {running ? '回放播放中' : '已暂停'}
          </span>
          <button
            className="icon-button"
            title="方法与数据说明"
            onClick={() => setModal('about')}
          >
            <Info size={18} />
          </button>
          <button
            className="export-button"
            onClick={() => {
              setExportStart(isoLocal(clock.current));
              setExportEnd(isoLocal(clock.current + 600000));
              exportNow();
            }}
          >
            <Download size={15} /> 导出当前回放帧
          </button>
        </div>
      </header>
      <ReplayBar language={language} scenario={config.replayScenario || '0'} time={snap?.time || REPLAY_START} onSeek={changeTime} onScenario={(c: Config) => {setConfig(c); setError(''); changeTime(REPLAY_START);}} />
      <div className="workspace">
        <aside className="left-panel"><fieldset disabled className="replay-locked" title="Recorded settings / 预录场景参数">
          <div className="panel-heading">
            <span className="eyebrow">01 / SCENARIO</span>
            <h2>构建你的星地网络</h2>
            <p>回放预录轨道与路径，探索在轨计算。</p>
          </div>
          <section>
            <div className="section-title">
              <Satellite size={16} />
              <h3>卫星星座</h3>
              <span className="subtle">STARLINK</span>
            </div>
            <label className="field-label">
              随机选取卫星 <span>{config.count.toLocaleString()} 颗</span>
            </label>
            <input
              aria-label="卫星数量"
              type="range"
              min="1"
              max={maxSatellites}
              step="1"
              disabled={!ready}
              value={config.count}
              onChange={(e) => update('count', +e.target.value)}
            />
            <div className="range-ends">
              <span>1</span>
              <span>{maxSatellites.toLocaleString()}</span>
            </div>
            <div className="inline-controls">
              <label>
                数量
                <input
                  type="number"
                  min="1"
                  max={maxSatellites}
                  disabled={!ready}
                  value={config.count}
                  onChange={(e) =>
                    update(
                      'count',
                      Math.round(
                        number(e.target.value, 1, maxSatellites, config.count),
                      ),
                    )
                  }
                />
              </label>
              <label>
                种子
                <input
                  type="number"
                  min="0"
                  max="999999"
                  value={config.seed}
                  onChange={(e) =>
                    update(
                      'seed',
                      Math.round(number(e.target.value, 0, 999999, 42)),
                    )
                  }
                />
              </label>
              <button
                title="更换随机卫星样本"
                onClick={() => update('seed', (config.seed + 1) % 1000000)}
              >
                <Shuffle size={15} /> 重选
              </button>
            </div>
            <button
              className="text-button full"
              disabled={!ready}
              onClick={() => update('count', maxSatellites)}
            >
              <Satellite size={13} /> 全选当前星座 ·{' '}
              {maxSatellites.toLocaleString()}
            </button>
            <div className="data-caption">
              <i /> CelesTrak / SGP4{' '}
              <span>{catalogCount.toLocaleString()} 条可用</span>
            </div>
          </section>
          <section>
            <div className="section-title">
              <MapPin size={16} />
              <h3>地面节点 / Cell</h3>
            </div>
            {(['source', 'destination'] as const).map((key, i) => (
              <div className="ground-control" key={key}>
                <div className={'ground-dot ' + (i ? 'destination' : '')}>
                  {i ? 'D' : 'S'}
                </div>
                <div className="ground-fields">
                  <label>
                    {i ? '目的节点' : '源节点'}
                    <CityPicker
                      key={language}
                      cities={cities}
                      language={language}
                      cityId={
                        config[key].cityId ||
                        cities.find(
                          (c) =>
                            c.zh === config[key].name ||
                            c.name === config[key].name,
                        )?.id
                      }
                      label={
                        language === 'zh'
                          ? i
                            ? '搜索目的城市'
                            : '搜索源城市'
                          : i
                            ? 'Search destination city'
                            : 'Search source city'
                      }
                      onSelect={(city) => selectCity(key, city)}
                    />
                  </label>
                  <div className="coordinates">
                    <input
                      aria-label={key + ' 纬度'}
                      type="number"
                      step=".1"
                      min="-90"
                      max="90"
                      value={+config[key].lat.toFixed(3)}
                      onChange={(e) =>
                        update(key, {
                          ...config[key],
                          name: '自定义',
                          cityId: undefined,
                          lat: number(e.target.value, -90, 90, 0),
                        })
                      }
                    />
                    <span>°N</span>
                    <input
                      aria-label={key + ' 经度'}
                      type="number"
                      step=".1"
                      min="-180"
                      max="180"
                      value={+config[key].lon.toFixed(3)}
                      onChange={(e) =>
                        update(key, {
                          ...config[key],
                          name: '自定义',
                          cityId: undefined,
                          lon: number(e.target.value, -180, 180, 0),
                        })
                      }
                    />
                    <span>°E</span>
                  </div>
                </div>
                <button
                  className={'icon-button ' + (pick === key ? 'active' : '')}
                  title="在地球上选取位置"
                  onClick={() => setPick(pick === key ? null : key)}
                >
                  <MapPin size={15} />
                </button>
              </div>
            ))}
            <p className="hint city-hint">
              {cityError
                ? '城市库暂不可用，可输入经纬度或球面选点。'
                : '本场景的地面节点固定；请在上方选择预录场景。'}
            </p>
            <button
              className="text-button full"
              onClick={() => {
                const rng = random(
                  config.seed + Math.floor(clock.current / 1000),
                );
                setConfig((c) => ({
                  ...c,
                  source: {
                    name: '自定义',
                    lat: rng() * 80 - 40,
                    lon: rng() * 360 - 180,
                  },
                  destination: {
                    name: '自定义',
                    lat: rng() * 80 - 40,
                    lon: rng() * 360 - 180,
                  },
                }));
              }}
            >
              <Shuffle size={13} /> 随机地面节点
            </button>
          </section>
          <section>
            <div className="section-title">
              <Radio size={16} />
              <h3>计算与服务约束</h3>
            </div>
            <label className="field-label">
              计算卫星部署比例 ρ <span>{config.rho}%</span>
            </label>
            <input
              aria-label="计算卫星部署比例"
              type="range"
              min="0"
              max="100"
              value={config.rho}
              onChange={(e) => update('rho', +e.target.value)}
            />
            <div className="param-grid">
              {[
                ['ca', '算力需求 Ca', '单位', 1, 100],
                ['ra', '速率需求 Ra', 'Mbps', 1, 350],
                ['da', '时延上限 Da', 'ms', 1, 500],
                ['reservation', '资源预留比例', '%', 0, 100],
              ].map(([key, label, unit, min, max]) => (
                <label key={key}>
                  {label}
                  <div>
                    <input
                      aria-label={String(label)}
                      type="number"
                      min={min}
                      max={max}
                      value={config[key as keyof Config] as number}
                      onChange={(e) =>
                        update(
                          key as keyof Config,
                          number(e.target.value, +min, +max, 0),
                        )
                      }
                    />
                    <span>{unit}</span>
                  </div>
                </label>
              ))}
            </div>
            <details>
              <summary>
                链路与算法参数 <ChevronRight size={12} />
              </summary>
              <div className="param-grid">
                {[
                  ['range', 'ISL 最远距离', 500, 5000],
                  ['degree', '每星 ISL 上限', 2, 12],
                  ['elevation', '最低仰角 °', 0, 60],
                  ['kmax', 'KSP 最大 K', 1, 100],
                ].map(([key, label, min, max]) => (
                  <label key={key}>
                    {label}
                    <input
                      type="number"
                      min={min}
                      max={max}
                      value={config[key as keyof Config] as number}
                      onChange={(e) =>
                        update(
                          key as keyof Config,
                          number(e.target.value, +min, +max, +min),
                        )
                      }
                    />
                  </label>
                ))}
              </div>
              <p className="hint">
                ISL 单位 km。链路取视线可达的近邻，最多 {config.degree}{' '}
                条；资源预留每 60 秒更新。
              </p>
            </details>
          </section>
          <div className="paper-note">
            <span>基于 IEEE TVT · 2025</span>
            <p>
              Enabling Real-Time Computing and Transmission Services in
              Large-Scale LEO Satellite Networks
            </p>
            <a
              className="paper-doi"
              href={paperUrl}
              target="_blank"
              rel="noreferrer"
            >
              {paperUrl} <ArrowUpRight size={12} />
            </a>
          </div>
        </fieldset></aside>
        <div className="center-panel">
          <div className="scene-top">
            <div>
              <span className="eyebrow">LIVE ORBIT / SIMULATED NETWORK</span>
              <h1>
                Networking for In-orbit Computing for everywhere on earth.
              </h1>
              <p>
                {groundName(config.source)} <span>→</span>{' '}
                {groundName(config.destination)} <span> / </span> {selected}{' '}
                路由视图
              </p>
            </div>
            <button
              className="icon-button"
              title="全屏演示"
              onClick={() => {
                if (document.fullscreenElement) document.exitFullscreen();
                else
                  document.documentElement
                    .requestFullscreen()
                    .catch(() => setError('浏览器未允许全屏'));
              }}
            >
              <Maximize2 size={17} />
            </button>
          </div>
          <Globe
            language={language}
            snapshot={snap}
            selected={selected}
            overlay={overlay}
            links={links}
            trails={trails}
            reset={reset}
            picking={!!pick}
            cities={markers}
            onGround={(lat, lon, city) => {
              if (pick) {
                if (city) selectCity(pick, city);
                else update(pick, { name: '自定义', lat, lon });
              }
              setPick(null);
            }}
            onLink={(i) => {
              if (snap && i >= 0) {
                const e = snap.edges[i];
                setEdgeKey(
                  [snap.nodes[e.a].id, snap.nodes[e.b].id].sort().join(':'),
                );
              }
            }}
          />
          {!snap && <div className="loading">正在加载预录场景…</div>}
          {pick && (
            <div className="pick-banner">
              城市圆点或任意经纬度 · {pick === 'source' ? '源节点' : '目的节点'}{' '}
              <button onClick={() => setPick(null)}>取消</button>
            </div>
          )}
          <div className="globe-tools">
            <button title="重置视角" onClick={() => setReset((r) => r + 1)}>
              <RotateCcw size={17} />
            </button>
            <button
              className={links ? 'active' : ''}
              title="显示全部链路，可点击查看距离"
              onClick={() => setLinks(!links)}
            >
              <Link2 size={17} />
            </button>
            <button
              className={trails ? 'active' : ''}
              title="切换路由卫星轨迹"
              onClick={() => setTrails(!trails)}
            >
              <Orbit size={17} />
            </button>
            <button
              className={overlay ? 'active' : ''}
              title="叠加所有算法路径"
              onClick={() => setOverlay(!overlay)}
            >
              <Layers size={17} />
            </button>
          </div>
          <div className="scene-legend">
            <span>
              <i className="sat" /> 通信卫星
            </span>
            <span>
              <i className="compute" /> 计算卫星
            </span>
            <span>
              <i className="chosen" /> 已选计算节点
            </span>
          </div>
          {edgeKey && (
            <div className="link-popover">
              <button className="close" onClick={() => setEdgeKey(null)}>
                <X size={15} />
              </button>
              <span className="eyebrow">LINK INSPECTOR</span>
              {edge && snap ? (
                <>
                  <h3>
                    {snap.nodes[edge.a].name}
                    <br />
                    <span>↔</span> {snap.nodes[edge.b].name}
                  </h3>
                  <div>
                    <label>
                      距离
                      <strong>
                        {edge.distance.toFixed(1)} <small>km</small>
                      </strong>
                    </label>
                    <label>
                      传播时延
                      <strong>
                        {edge.delay.toFixed(3)} <small>ms</small>
                      </strong>
                    </label>
                  </div>
                  <p>可用速率 {edge.rate.toFixed(1)} Mbps · 双向仿真链路</p>
                </>
              ) : (
                <p>该链路在当前快照已断开。</p>
              )}
            </div>
          )}
          <div className="scene-bottom">
            <div className="metrics">
              <div>
                <span>当前卫星</span>
                <strong>
                  {snap ? (snap.nodes.length - 2).toLocaleString() : '—'}
                  <small>颗</small>
                </strong>
              </div>
              <div>
                <span>可用计算节点</span>
                <strong>
                  {snap?.eligible ?? '—'}
                  <small>颗</small>
                </strong>
              </div>
              <div>
                <span>星地 / 星间链路</span>
                <strong>
                  {snap?.edges.length.toLocaleString() ?? '—'}
                  <small>条</small>
                </strong>
              </div>
              <div>
                <span>{selected} 传播时延</span>
                <strong style={{ color: colors[names.indexOf(selected)] }}>
                  {route?.delay?.toFixed(2) ?? '—'}
                  <small>ms</small>
                </strong>
              </div>
            </div>
            <div className="timeline">
              <button
                className="play"
                title={running ? '暂停' : '播放'}
                onClick={() => setRunning(!running)}
              >
                {running ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <div className="utc">
                <span>仿真时间 / UTC</span>
                <input
                  aria-label="仿真 UTC 时间"
                  type="datetime-local"
                  step="1"
                  value={time ? isoLocal(time) : ''}
                  onChange={(e) => {
                    setRunning(false);
                    changeTime(Date.parse(e.target.value + 'Z'));
                  }}
                />
              </div>
              <select
                aria-label="时间倍率"
                value={speed}
                onChange={(e) => setSpeed(+e.target.value)}
              >
                <option value="1">1× 回放</option>
                <option value="10">10×</option>
                <option value="60">60×</option>
              </select>
              <button
                className="now-button"
                onClick={() => {
                  setSpeed(1);
                  setRunning(true);
                  changeTime(REPLAY_START);
                }}
              >
                回放起点
              </button>
            </div>
            <p className="scene-help">
              拖动旋转 · 滚轮缩放 · 点击路径查看链路{' '}
              <span>
                {busy
                  ? '正在加载回放…'
                  : snap
                    ? `快照 ${new Date(displayedTime).toISOString().slice(11, 19)} UTC`
                    : '初始化'}
              </span>
            </p>
          </div>
        </div>
        <aside className="right-panel">
          <div className="panel-heading">
            <span className="eyebrow">02 / ROUTING INTELLIGENCE</span>
            <h2>同一网络，五种决策</h2>
            <p>点击算法切换路径与计算节点。</p>
          </div>
          <div className="algorithm-list">
            {names.map((name, i) => {
              const r = snap?.routes.find((x) => x.name === name);
              return (
                <button
                  className={
                    'algorithm ' + (selected === name ? 'selected' : '')
                  }
                  style={{ '--accent': colors[i] } as any}
                  key={name}
                  onClick={() => setSelected(name)}
                >
                  <div>
                    <span className="algorithm-dot" />
                    <strong>{name}</strong>
                    {i === 0 ? (
                      <em>PROPOSED</em>
                    ) : i === 1 ? (
                      <em>论文 KSP</em>
                    ) : (
                      <em>BASELINE</em>
                    )}
                    <ChevronRight size={14} />
                  </div>
                  <div className="algorithm-result">
                    <span>{r?.status || '计算中'}</span>
                    <b>
                      {r?.delay?.toFixed(2) ?? '—'} <small>ms</small>
                    </b>
                  </div>
                  <div className="delay-track">
                    <span
                      style={{
                        width: r?.delay
                          ? `${Math.min(100, (r.delay / maxDelay) * 100)}%`
                          : '0%',
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
          <section className="route-section">
            <div className="section-title">
              <h3>{selected} · 路由详情</h3>
              <span className="subtle">
                {route?.path.length ? route.path.length - 1 : 0} HOPS
              </span>
            </div>
            <p className="method-description">{details[selected]}</p>
            <div className="path-scroll">
              {route?.path.length ? (
                route.path.map((i, k) => (
                  <button
                    key={k}
                    className={
                      'path-node ' + (i === route.compute ? 'compute-node' : '')
                    }
                    onClick={() => {
                      if (k && snap) {
                        setEdgeKey(
                          [snap.nodes[route.path[k - 1]].id, snap.nodes[i].id]
                            .sort()
                            .join(':'),
                        );
                      }
                    }}
                  >
                    <span>{String(k + 1).padStart(2, '0')}</span>
                    <div>
                      {snap!.nodes[i].ground
                        ? groundName(
                            snap!.nodes[i].id === 'GT-S'
                              ? config.source
                              : config.destination,
                          )
                        : snap!.nodes[i].name}
                      {i === route.compute && (
                        <em>执行计算 · {snap!.nodes[i].compute} 单位</em>
                      )}
                    </div>
                    {i === route.compute ? (
                      <Satellite size={15} />
                    ) : (
                      <span className="node-point" />
                    )}
                  </button>
                ))
              ) : (
                <div className="empty-path">
                  {route?.status || '正在计算路径'}
                  <p>可增加卫星数量或调整地面位置、服务约束。</p>
                </div>
              )}
            </div>
            <div className="runtime">
              <span>录制时求解耗时</span>
              <strong>{route?.ms.toFixed(2) ?? '—'} ms</strong>
            </div>
            {route?.examined && (
              <div className="runtime">
                <span>KSP 已检查路径</span>
                <strong>{route.examined}</strong>
              </div>
            )}
          </section>
          <div className="comparison-note">
            <span>{accepted} / 5</span>
            <div>
              算法接纳当前任务<p>同一快照独立比较，不相互扣减资源。</p>
            </div>
          </div>
        </aside>
      </div>
      <footer><span>CARELab · {language === 'zh' ? '公开预录演示 · 非实时计算' : 'Public recorded demonstration · No live solving'}</span><span>2026-09-07 13:00–13:06 UTC · 30 s / frame</span></footer>
      {error && (
        <div className="toast" role="alert">
          <span>{error}</span>
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
            aria-label={modal === 'export' ? '导出当前回放帧' : '方法说明'}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              disabled={progress !== null}
              onClick={() => setModal(null)}
            >
              <X size={19} />
            </button>
            {modal === 'export' ? (
              <>
                <span className="eyebrow">CONTACT PLAN EXPORT</span>
                <h2>把动态网络，带入你的研究。</h2>
                <p>导出当前卫星样本与地面节点在指定时间段内的双向连接关系。</p>
                <label className="modal-field">
                  开始时间（UTC）
                  <input
                    type="datetime-local"
                    step="1"
                    value={exportStart}
                    onChange={(e) => setExportStart(e.target.value)}
                  />
                </label>
                <label className="modal-field">
                  结束时间（UTC）
                  <input
                    type="datetime-local"
                    step="1"
                    value={exportEnd}
                    onChange={(e) => setExportEnd(e.target.value)}
                  />
                </label>
                <label className="modal-field">
                  采样间隔
                  <select
                    value={exportStep}
                    onChange={(e) => setExportStep(+e.target.value)}
                  >
                    {[5, 10, 30, 60, 120, 300].map((n) => (
                      <option value={n} key={n}>
                        {n} 秒
                      </option>
                    ))}
                  </select>
                </label>
                <div className="export-info">
                  JSON.gz · 可直接用 Python 读取或转换为 pickle
                  <br />
                  包含 NORAD ID、起止
                  UTC、每个采样点的距离、传播时延、剩余速率与节点算力，附原始
                  OMM 和场景参数。
                </div>
                <p className="hint">
                  连通时段为采样近似 [开始,
                  结束)，边界误差最多一个采样间隔，可能漏掉更短接触。当前规模最多{' '}
                  {maxExportSteps} 步；较长时间范围请增大采样间隔。
                </p>
                <button
                  className="primary"
                  disabled={progress !== null}
                  onClick={exportNow}
                >
                  <Download size={16} />
                  {progress === null
                    ? '生成并下载连接计划'
                    : `正在生成 ${progress}%`}
                </button>
              </>
            ) : (
              <>
                <span className="eyebrow">METHOD & PROVENANCE</span>
                <h2>从论文到可交互实验</h2>
                <p>
                  CASP 对应论文 Algorithm 3，KSP 对应 Algorithm
                  2；Nearest、Shortest、Random 对应 VI-A 三个 baseline。
                </p>
                <h3>时延口径</h3>
                <p>
                  端到端传播时延 = 每次经过链路的距离 ÷ 光速之和，包含上 /
                  下行；不包含排队、序列化及任务执行时间。录制时求解耗时单独展示。
                </p>
                <h3>轨道与网络</h3>
                <p>
                  CelesTrak 公开 OMM 数据 + satellite.js SGP4
                  推演。不是实时遥测。球形地球半径 6371 km，ISL 视线避开地表以上
                  80 km，按距离构建有度数上限的双向近邻图；GSL
                  由最低仰角决定。Cell 用中心点表示。
                </p>
                <h3>资源与复现边界</h3>
                <p>
                  算力归一化为 100，链路初始速率 300–350
                  Mbps；按配置预留比例随机乘以 0、1/8、1/4、1/2、1。资源每 60
                  秒变化。界面按快照独立比较单个任务，未复现
                  STK、无线链路预算、ILP
                  和论文批量请求实验。连接导出采用定步长采样，并非 Algorithm 1
                  的精确事件分割。
                </p>
                <p className="hint">
                  Nearest
                  的“最近”按几何距离解释；如果选中的计算节点不可达则拒绝。KSP
                  达到上限不代表网络无解。图上没有路径时不会伪造连接。
                </p>
                <p className="hint">
                  卫星上限随可用轨道目录更新，目录数量不等于已核实的运营卫星数量。城市坐标表示中心位置。
                </p>
                <div className="source-links">
                  <a
                    href="https://www.geonames.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GeoNames · CC BY 4.0
                  </a>
                  <a
                    href="https://celestrak.org/NORAD/documentation/gp-data-formats.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CelesTrak 数据
                  </a>
                  <a
                    href="https://github.com/shashwatak/satellite-js"
                    target="_blank"
                    rel="noreferrer"
                  >
                    satellite.js
                  </a>
                  <a
                    href="https://www.naturalearthdata.com/about/terms-of-use/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Natural Earth
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>,
    language,
  );
}

