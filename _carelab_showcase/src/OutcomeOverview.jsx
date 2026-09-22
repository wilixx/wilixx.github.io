import React from 'react';
import {Download,ChevronDown} from 'lucide-react';
import {LineChart,METHOD_COLORS} from './Visuals.jsx';
import {Results} from './Pages.jsx';
import {pct,fixed} from './useStudio.js';

export default function OutcomeOverview({s}){
 const {t,result,current,labels,config,lang,cursor,done}=s,keys=result?(result.config.methods||Object.keys(result.methods)):config.methods;
 const benefit=result?.methods.pattern&&result?.methods.bestfit?s.uplift:null;
 return <section className="outcome-overview" id="compare-outcomes"><div className="outcome-heading"><h2>{t('Compare outcomes','对比结果')}</h2>{benefit!=null&&<span className="outcome-benefit">{benefit>=0?'+':''}{fixed(benefit,1)}% <small>{t('VMs · Pattern Matching vs Best Fit','VM 接纳量 · 模式匹配 vs 最佳适应')}</small></span>}<div><button className="quiet" disabled={!result} onClick={s.exportResults}><Download size={13}/>{t('Summary','结果摘要')}</button><button className="quiet" disabled={!done} onClick={s.exportCSV}>CSV</button></div></div>
 <div className="outcome-grid"><div className="outcome-chart"><div className="outcome-chart-title"><span>{t('VMs accepted over time','业务接纳量变化')}</span><div>{keys.map(k=><i key={k} title={labels[k]} style={{background:METHOD_COLORS[k]}}/>)}</div></div>{result?<LineChart result={result} cursor={cursor} metric="accepted" lang={lang}/>:<div className="outcome-empty">{t('Load a recorded scenario to compare service capacity.','载入记录场景，比较同一批业务的承载效果。')}</div>}</div>
 <div className="outcome-table"><table><thead><tr><th>{t('Strategy','方法')}</th><th>{t('Accepted','接纳')}</th><th>{t('Rejected','拒绝')}</th><th>{t('Utilization','利用率')}</th><th>{t('Stranded','碎片')}</th></tr></thead><tbody>{keys.map(k=><tr key={k} className={k==='pattern'?'highlight-row':''}><td><i style={{background:METHOD_COLORS[k]}}/>{labels[k]}</td><td>{current(k).accepted}</td><td>{current(k).rejected}</td><td>{pct(current(k).utilization)}</td><td>{pct(current(k).stranded)}</td></tr>)}</tbody></table><small>{t('Same arrivals · same capacity','相同业务 · 相同容量')}{!done&&result?' · '+t('recorded playback','记录重播'):''}</small></div></div>
 <details className="outcome-expanded"><summary>{t('Decision timing, full metrics & model notes','决策时延、完整指标与模型说明')}<ChevronDown size={12}/></summary><Results s={s}/></details>
 </section>;
}
