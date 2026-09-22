import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {X,RotateCcw,ChevronLeft,ChevronRight} from 'lucide-react';
import {COLORS,ResourceBars} from './Visuals.jsx';

function ServerModel({server,result,dimensions,reset}){
 const host=useRef();
 useEffect(()=>{
  const el=host.current;if(!el)return;let renderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});}catch{return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));el.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(40,1,.1,100);camera.position.set(5,3.6,6);
  const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.target.set(0,1.6,0);controls.minDistance=3;controls.maxDistance=14;controls.enablePan=false;
  scene.add(new THREE.HemisphereLight(0xdcf9ff,0x153443,3));const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(3,5,4);scene.add(light);
  const D=dimensions.length,width=Math.max(2.5,D*.6),rack=new THREE.BoxGeometry(width,3.25,1.3);
  const frame=new THREE.LineSegments(new THREE.EdgesGeometry(rack),new THREE.LineBasicMaterial({color:0x56808f}));frame.position.y=1.625;scene.add(frame);rack.dispose();
  for(let d=0;d<D;d++){
   let height=0;
   server.vms.forEach((id,j)=>{const v=result?.arrivals[id]?.values[d]||0;if(!v)return;const h=v*3,box=new THREE.Mesh(new THREE.BoxGeometry(.4,Math.max(.008,h-.018),.95),new THREE.MeshStandardMaterial({color:COLORS[j%8],roughness:.4,metalness:.2}));box.position.set((d-(D-1)/2)*.56,.1+height+h/2,0);scene.add(box);height+=h;});
   const left=Math.max(.008,3-height),free=new THREE.Mesh(new THREE.BoxGeometry(.4,left,.95),new THREE.MeshBasicMaterial({color:server.stranded?0xffbd69:0x3b657a,transparent:true,opacity:.17,wireframe:true}));free.position.set((d-(D-1)/2)*.56,.1+height+left/2,0);scene.add(free);
  }
  const ro=new ResizeObserver(()=>{renderer.setSize(el.clientWidth,el.clientHeight,false);camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();});ro.observe(el);let raf;
  const draw=()=>{controls.update();renderer.render(scene,camera);raf=requestAnimationFrame(draw);};draw();
  return()=>{cancelAnimationFrame(raf);ro.disconnect();controls.dispose();scene.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});renderer.dispose();renderer.domElement.remove();};
 },[server.id,server.vms.join(','),result,dimensions.length,reset]);
 return <div className="server-model" ref={host}/>;
}
export function ServerHover({s,hovered}){
 if(!hovered)return null;const server=s.current(hovered.method).servers[hovered.id];if(!server)return null;
 const mean=server.util.reduce((n,v)=>n+v,0)/server.util.length;
 return <div className="server-hover" style={{left:`clamp(8px, ${hovered.anchor.x*100}% + 14px, calc(100% - 182px))`,top:`clamp(38px, ${hovered.anchor.y*100}% - 88px, calc(100% - 110px))`}}><b>{s.labels[hovered.method]} · {String(hovered.id+1).padStart(3,'0')}</b><div><strong>{server.vms.length} VMs</strong><span>{(mean*100).toFixed(1)}% {s.t('used','已用')}</span></div><div className="hover-resources">{s.activeConfig.dimensions.map((d,i)=><span key={d.name}><i style={{background:COLORS[i%8]}}/>{d.name} <b>{(server.util[i]*100).toFixed(0)}%</b></span>)}</div><small>{s.t('Click to inspect below','点击，在下方连续查看')}</small></div>;
}
export default function ServerInspector({s}){
 const {t,activeConfig,result}=s,[reset,setReset]=useState(0),[focus,setFocus]=useState(null);
 const selected=s.selected||(s.modal==='servers'?{method:s.serverMethod,id:0}:null),server=selected?s.current(selected.method).servers[selected.id]:null;
 useEffect(()=>setFocus(null),[selected?.method,selected?.id]);
 if(!selected||!server)return null;
 const free=server.util.reduce((n,v)=>n+1-v,0)/server.util.length,values=focus!=null?result?.arrivals[focus]?.values:server.util;
 const choose=(method,id)=>{s.setSelected({method,id});s.setServerMethod(method);};
 return <aside className="server-detail-dock" aria-label={t('Server detail','服务器详情')}>
 <div className="dock-selector"><div><select aria-label={t('Server method','服务器对应方法')} value={selected.method} onChange={e=>choose(e.target.value,0)}>{s.config.methods.map(k=><option value={k} key={k}>{s.labels[k]}</option>)}</select><button className="icon-button" aria-label={t('Close server details','关闭服务器详情')} onClick={()=>{s.setSelected(null);if(s.modal==='servers')s.setModal(null);}}><X size={15}/></button></div><div className="server-id-switch"><button className="icon-button" disabled={selected.id===0} aria-label={t('Previous server','上一台服务器')} onClick={()=>choose(selected.method,selected.id-1)}><ChevronLeft size={13}/></button><label>{t('Server','服务器')}<input aria-label={t('Server number','服务器编号')} type="number" min="1" max={activeConfig.servers} value={selected.id+1} onChange={e=>{const id=+e.target.value-1;if(Number.isInteger(id)&&id>=0&&id<activeConfig.servers)choose(selected.method,id);}}/></label><button className="icon-button" disabled={selected.id===activeConfig.servers-1} aria-label={t('Next server','下一台服务器')} onClick={()=>choose(selected.method,selected.id+1)}><ChevronRight size={13}/></button></div><span><b>{server.vms.length} VMs</b> · {(free*100).toFixed(1)}% {server.stranded?t('stranded','碎片'):t('free','空闲')}</span></div>
 <div className="dock-model"><ServerModel server={server} result={result} dimensions={activeConfig.dimensions} reset={reset}/><button className="icon-button" title={t('Reset server view','重置服务器视角')} aria-label={t('Reset server view','重置服务器视角')} onClick={()=>setReset(n=>n+1)}><RotateCcw size={12}/></button></div>
 <div className="dock-resources"><ResourceBars values={values||server.util} dimensions={activeConfig.dimensions} compact lang={s.lang}/></div>
 <div className="dock-workloads"><span>{focus==null?t('Server resources','整机资源'):t(`VM ${focus+1} resources`,`VM ${focus+1} 资源`)}</span><div className="inspector-vms"><button className={focus==null?'active':''} onClick={()=>setFocus(null)}>{t('All','整机')}</button>{server.vms.map((id,i)=><button key={id} className={focus===id?'active':''} onClick={()=>setFocus(id)} style={{borderColor:COLORS[i%8]}}>VM {id+1}</button>)}</div><small>{t('Select another server directly. No need to close.','可直接选择其他服务器，无需关闭详情。')}</small></div>
 </aside>;
}
