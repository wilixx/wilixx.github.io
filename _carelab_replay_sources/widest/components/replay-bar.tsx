import {useEffect,useState} from 'react';
import type {Config} from '../lib/engine';
export const REPLAY_START=Date.parse('2026-09-07T13:00:00Z');
export const REPLAY_END=REPLAY_START+360000;
export const wrapTime=(t:number)=>REPLAY_START+((t-REPLAY_START)%360000+360000)%360000;
export function ReplayBar({language,scenario,time,onSeek,onScenario}:{language:string;scenario:string;time:number;onSeek:(t:number)=>void;onScenario:(c:Config)=>void}){
 const [items,setItems]=useState<any[]>([]),[error,setError]=useState(false);const zh=language==='zh';
 useEffect(()=>{fetch('./replay/manifest.json').then(r=>{if(!r.ok)throw Error();return r.json();}).then(m=>setItems(m.scenarios)).catch(()=>setError(true));},[]);
 return <div className="replay-bar"><strong>{zh?'预录演示 · REPLAY':'RECORDED DEMO · REPLAY'}</strong><label>{zh?'场景':'Scenario'}<select aria-label={zh?'回放场景':'Replay scenario'} value={scenario} disabled={!items.length} onChange={e=>onScenario(items.find(s=>s.id===e.target.value).config)}>{items.map(s=><option key={s.id} value={s.id}>{zh?s.zh:s.en}</option>)}</select></label><label>{zh?'回放进度':'Timeline'}<input aria-label={zh?'回放进度':'Replay timeline'} type="range" min={0} max={11} step={1} value={Math.max(0,Math.min(11,Math.floor((time-REPLAY_START)/30000)))} onChange={e=>onSeek(REPLAY_START+Number(e.target.value)*30000)}/></label><p role={error?'alert':undefined}>{error?(zh?'场景加载失败，请刷新重试。':'Scenario unavailable. Please reload.'):(zh?'预录结果；参数只读。非实时计算，耗时为录制值。':'Recorded results; settings are read-only. No live solving; timings are recorded.')}</p><a href="/">{zh?'返回主页':'Homepage'} ↗</a></div>
}
