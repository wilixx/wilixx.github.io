import React from 'react';
import {MousePointer2,ChevronLeft,ChevronRight} from 'lucide-react';
import {Radar,ResourceBars,COLORS} from './Visuals.jsx';
import {pct} from './useStudio.js';
import './learning-details.css';

export default function LearningDetails({selection,history,model,dimensions,lang,onSelect}){
 const t=(en,zh)=>lang==='en'?en:zh;
 const item=selection?.kind==='vm'?history[selection.index]:selection?.kind==='pattern'?model?.patterns[selection.index]:selection?.kind==='rule'?model?.rules[selection.index]:null;
 const kind=selection?.kind;
 const values=item&&(kind==='vm'?item.values:kind==='pattern'?item.rep:item.util);
 const dominant=Array.isArray(values)&&values.length?values.indexOf(Math.max(...values)):0;
 const color=kind==='pattern'?COLORS[selection.index%COLORS.length]:kind==='vm'?COLORS[dominant%COLORS.length]:'#53ecc0';
 const title=!item?t('Select a profile','选择一个画像'):kind==='vm'?`VM ${item.id+1}`:kind==='pattern'?`${t('Pattern','模式')} P${selection.index+1}`:`${t('Combination','优质组合')} ${String(selection.index+1).padStart(2,'0')}`;
 const previous=()=>onSelect({...selection,index:selection.index-1});
 const next=()=>onSelect({...selection,index:selection.index+1});
 const count=kind==='vm'?history.length:kind==='pattern'?model?.patterns.length:model?.rules.length;
 return <aside className="learning-inspection" aria-label={t('Selected resource profile','选中的资源画像')}>
  <div className="learning-inspection-heading"><MousePointer2 size={14}/><span>{t('LIVE INSPECTOR','资源详情')}</span><i/></div>
  <div className="learning-inspection-title"><h3>{title}</h3>{item&&<div className="inspection-pager"><button className="icon-button" disabled={selection.index===0} aria-label={t('Previous profile','上一个画像')} onClick={previous}><ChevronLeft size={15}/></button><button className="icon-button" disabled={selection.index>=count-1} aria-label={t('Next profile','下一个画像')} onClick={next}><ChevronRight size={15}/></button></div>}</div>
  <p className="learning-inspection-hint">{t('Select any card. Details update here.','随时点击其他卡片，详情在这里更新。')}</p>
  {!item?<div className="learning-inspection-empty"><MousePointer2 size={24}/><span>{t('History, patterns and combinations stay available while you inspect.','查看详情时，仍可自由选择历史业务、模式与组合。')}</span></div>:<>
   <div className="learning-inspection-stats">{kind==='vm'?<span>{t('Historical workload','历史业务')}<b>{dimensions.length} {t('resources','维资源')}</b></span>:kind==='pattern'?<><span>{t('Historical VMs','历史 VM')}<b>{item.count}</b></span><span>{t('Share of history','历史占比')}<b>{pct(item.count/Math.max(1,history.length))}</b></span></>:<><span>{t('VMs together','VM 总数')}<b>{item.counts.reduce((a,b)=>a+b,0)}</b></span><span>{t('Pattern types','模式种类')}<b>{item.counts.filter(Boolean).length}</b></span></>}</div>
   <Radar values={values} second={kind==='pattern'?item.centroid:undefined} color={color} dimensions={dimensions} size={235}/>
   {kind==='pattern'&&<div className="learning-radar-key"><span><i/>{t('Upper envelope','保守需求上界')}</span><span><i className="dashed"/>{t('Centroid','聚类中心')}</span></div>}
   {kind==='rule'&&<div className="learning-combination-types">{item.counts.map((n,h)=>n?<button key={h} style={{'--pattern-color':COLORS[h%COLORS.length]}} onClick={()=>onSelect({kind:'pattern',index:h})}>{n} × P{h+1}</button>:null)}</div>}
   <div className="learning-resource-caption">{kind==='rule'?t('Combined utilization','组合资源利用率'):t('Demand / server capacity','需求 / 单台服务器容量')}</div>
   <ResourceBars values={values} dimensions={dimensions} compact lang={lang}/>
   <dl className="learning-actual-demand">{dimensions.map((d,i)=><div key={d.name}><dt>{d.name}</dt><dd>{(values[i]*d.capacity).toLocaleString(lang==='en'?'en-US':'zh-CN',{maximumFractionDigits:2})} <small>{d.unit}</small></dd></div>)}</dl>
  </>}
 </aside>;
}
