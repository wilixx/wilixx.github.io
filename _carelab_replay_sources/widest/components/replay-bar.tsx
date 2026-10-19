import { useEffect, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import type { Config } from '../lib/engine';
export const REPLAY_START = Date.parse('2026-09-07T13:00:00Z');
export const REPLAY_END = REPLAY_START + 360000;
export const wrapTime = (t: number) => REPLAY_START + ((t - REPLAY_START) % 360000 + 360000) % 360000;
type Scenario = { id: string; zh: string; en: string; config: Config };
type Props = {
  language: string; scenario: string; time: number; running: boolean; started: boolean; ready: boolean;
  onSeek: (time: number) => void; onScenario: (config: Config) => void;
  onDemo: (config: Config) => void; onToggle: () => void;
};
export function ReplayBar({ language, scenario, time, running, started, ready, onSeek, onScenario, onDemo, onToggle }: Props) {
  const [items, setItems] = useState<Scenario[]>([]);
  const [error, setError] = useState(false);
  const zh = language === 'zh';
  const selected = items.find(item => item.id === scenario) || items[0];
  useEffect(() => {
    fetch('./replay/manifest.json')
      .then(r => { if (!r.ok) throw Error(); return r.json(); })
      .then(m => setItems(m.scenarios))
      .catch(() => setError(true));
  }, []);
  return <div className="replay-bar">
    <div className="demo-actions">
      <button className="one-click-demo" disabled={!selected || !ready} onClick={() => selected && onDemo(selected.config)}>
        {started ? <RotateCcw size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        {started ? (zh ? '重新演示' : 'Restart demo') : (zh ? '一键演示' : 'One-click demo')}
      </button>
      {started && <button className="demo-toggle" onClick={onToggle} aria-label={running ? (zh ? '暂停演示' : 'Pause demo') : (zh ? '继续演示' : 'Resume demo')}>
        {running ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
        {running ? (zh ? '暂停' : 'Pause') : (zh ? '继续' : 'Resume')}
      </button>}
    </div>
    <label>{zh ? '场景' : 'Scenario'}<select aria-label={zh ? '场景' : 'Scenario'} value={scenario} disabled={!items.length} onChange={e => {
      const next = items.find(item => item.id === e.target.value);
      if (next) onScenario(next.config);
    }}>{items.map(item => <option key={item.id} value={item.id}>{zh ? item.zh : item.en}</option>)}</select></label>
    <label className="demo-timeline">{zh ? '进度' : 'Timeline'}<input aria-label={zh ? '演示进度' : 'Demo timeline'} type="range" min={0} max={11} step={1}
      value={Math.max(0, Math.min(11, Math.floor((time - REPLAY_START) / 30000)))}
      onChange={e => onSeek(REPLAY_START + Number(e.target.value) * 30000)} /></label>
    {error && <p role="alert">{zh ? '场景加载失败，请刷新重试。' : 'Scenario unavailable. Please reload.'}</p>}
    <a className="demo-home" href="/">{zh ? '返回主页' : 'Homepage'} ↗</a>
  </div>;
}
