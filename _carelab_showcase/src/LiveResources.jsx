import React,{useEffect,useState} from 'react';
import {COLORS,METHOD_COLORS} from './Visuals.jsx';
import './resource-filters.css';
export default function LiveResources({s}){
 const {t,result,arrived,activeConfig,current,methodView,labels}=s;
 const dimensionKey=JSON.stringify(activeConfig.dimensions.map(d=>[d.name,d.unit,d.capacity]));
 const [visibility,setVisibility]=useState({key:dimensionKey,hidden:[]});
 useEffect(()=>setVisibility({key:dimensionKey,hidden:[]}),[dimensionKey]);
 const hidden=visibility.key===dimensionKey?visibility.hidden:[];
 const allHidden=hidden.length===activeConfig.dimensions.length;
 function toggleResource(index,visible){setVisibility(previous=>{
  const previousHidden=previous.key===dimensionKey?previous.hidden:[];
  return{key:dimensionKey,hidden:visible?previousHidden.filter(i=>i!==index):[...new Set([...previousHidden,index])]};
 });}
 return <div className="live-resources"><div className="live-chart-heading"><span>{t('RESOURCE UTILIZATION · LIVE','资源利用率 · 实时')}</span><div className="resource-filters" role="group" aria-label={t('Visible resource curves','选择显示的资源曲线')}>{activeConfig.dimensions.map((d,i)=><label key={`${i}-${d.name}`} className={hidden.includes(i)?'resource-filter is-hidden':'resource-filter'} style={{'--resource-color':COLORS[i%8]}}><input type="checkbox" checked={!hidden.includes(i)} onChange={e=>toggleResource(i,e.target.checked)} aria-label={t(`Show ${d.name} curve`, `显示 ${d.name} 曲线`)}/><span>{d.name}</span></label>)}</div><small>{t('Same scale · 0–100%','统一刻度 · 0–100%')}</small></div><div className="resource-small-multiples" style={{gridTemplateColumns:`repeat(${methodView.length},minmax(0,1fr))`}}>{methodView.map(k=>{
  const enabled=s.config.methods.includes(k),m=current(k),W=300,H=113,left=29,right=7,top=7,bottom=19,x=n=>left+n/(result?.arrivals.length||activeConfig.arrivalCount)*(W-left-right),y=n=>H-bottom-n*(H-top-bottom);
  const points=[{arrived:0,resources:activeConfig.dimensions.map(()=>0)},...(result?.methods[k]?.curve||[]).filter(p=>p.arrived<arrived),...(arrived?[{arrived,resources:m.resources}]:[])];
  return <section className={'resource-mini '+(!enabled?'muted-method':'')} key={k} style={{'--method-color':METHOD_COLORS[k]}}><div className="resource-mini-title"><b>{labels[k]}</b><span>{enabled?(m.utilization*100).toFixed(1)+'%':t('Hidden','已隐藏')}</span></div><svg role="img" aria-label={t(`${labels[k]} resource utilization over arrivals`,`${labels[k]}各资源利用率随业务到达变化`)} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">{[0,.5,1].map(v=><g key={v}><line x1={left} y1={y(v)} x2={W-right} y2={y(v)} stroke="#2a3f50" strokeDasharray="3 4"/><text x={left-5} y={y(v)+3} textAnchor="end" fill="#8099ae" fontSize="9">{v*100}%</text></g>)}{enabled&&activeConfig.dimensions.map((d,i)=>hidden.includes(i)?null:<path key={d.name} d={points.map((p,j)=>`${j?'L':'M'}${x(p.arrived)} ${y(p.resources?.[i]||0)}`).join(' ')} stroke={COLORS[i%8]} strokeWidth="1.8" fill="none"/>)}{allHidden&&<text x={(left+W-right)/2} y={H/2} textAnchor="middle" fill="#9db4c8" fontSize="11">{t('Select a resource above','勾选上方资源查看曲线')}</text>}<text x={left} y={H-3} fill="#6c8ca3" fontSize="9">0</text><text x={W-right} y={H-3} textAnchor="end" fill="#6c8ca3" fontSize="9">{result?.arrivals.length||activeConfig.arrivalCount} VMs</text></svg><div className="resource-mini-foot"><span>{t('Stranded','碎片')} <b>{(m.stranded*100).toFixed(1)}%</b></span><span>{t('Accepted','已接纳')} <b>{m.accepted}</b></span></div></section>;
 })}</div></div>;
}
