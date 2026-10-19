'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Satellite,
  Play,
  Pause,
  RotateCcw,
  Download,
  ChevronRight,
  MapPin,
  Layers,
  Radio,
  Maximize2,
  RefreshCw,
  X,
  ArrowUpRight,
  Orbit,
  Link2,
  Languages,
} from 'lucide-react';
import Globe from '../components/globe';
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
  const t = (zh: string, en: string) => language === 'zh' ? zh : en;
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
    [running, setRunning] = useState(false),
    [demoStarted, setDemoStarted] = useState(false),
    [speed, setSpeed] = useState(1),
    [time, setTime] = useState(0),
    [reset, setReset] = useState(0),
    [pick, setPick] = useState<'source' | 'destination' | null>(null),
    [edgeKey, setEdgeKey] = useState<string | null>(null),
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
  function startDemo(next: Config) {
    cfg.current = next;
    setConfig(next);
    setSelected('CASP');
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
    lastTick.current = Date.now();
    changeTime(REPLAY_START);
    if (window.innerWidth <= 1000) {
      document.querySelector('.center-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
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
      <ReplayBar language={language} scenario={config.replayScenario || '0'} time={snap?.time || REPLAY_START}
        running={running} started={demoStarted} ready={!!snap} onDemo={startDemo} onToggle={() => setRunning(value => !value)}
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
              <div><dt>{t('计算卫星比例 ρ', 'Computing satellites ρ')}</dt><dd>{config.rho}%</dd></div>
              <div><dt>{t('算力需求 Ca', 'Compute demand Ca')}</dt><dd>{config.ca} {t('单位', 'units')}</dd></div>
              <div><dt>{t('速率需求 Ra', 'Rate demand Ra')}</dt><dd>{config.ra} Mbps</dd></div>
              <div><dt>{t('时延上限 Da', 'Delay bound Da')}</dt><dd>{config.da} ms</dd></div>
              <div><dt>{t('资源预留比例', 'Resource reservation')}</dt><dd>{config.reservation}%</dd></div>
            </dl>
            <details>
              <summary>{t('链路与算法参数', 'Link & algorithm settings')} <ChevronRight size={12} /></summary>
              <dl className="scenario-values">
                <div><dt>{t('ISL 最远距离', 'Max ISL range')}</dt><dd>{config.range.toLocaleString()} km</dd></div>
                <div><dt>{t('每星 ISL 上限', 'Max ISLs / satellite')}</dt><dd>{config.degree}</dd></div>
                <div><dt>{t('最低仰角', 'Minimum elevation')}</dt><dd>{config.elevation}°</dd></div>
                <div><dt>KSP max K</dt><dd>{config.kmax}</dd></div>
              </dl>
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
        </aside>
        <div className="center-panel">
          <div className="scene-top">
            <div>
              <span className="eyebrow">IN-ORBIT COMPUTING</span>
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
            picking={false}
            cities={markers}
            onGround={() => {}}
            onLink={(i) => {
              if (snap && i >= 0) {
                const e = snap.edges[i];
                setEdgeKey(
                  [snap.nodes[e.a].id, snap.nodes[e.b].id].sort().join(':'),
                );
              }
            }}
          />
          {!snap && <div className="loading">正在加载场景…</div>}
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
              算法接纳当前任务
            </div>
          </div>
        </aside>
      </div>
      <footer><span>CARELab · In-orbit computing</span><a href="./THIRD_PARTY_NOTICES.txt">Credits</a></footer>
      {error && (
        <div className="toast" role="alert">
          <span>{error}</span>
          <button onClick={() => setError('')}>
            <X size={15} />
          </button>
        </div>
      )}
    </main>,
    language,
  );
}

