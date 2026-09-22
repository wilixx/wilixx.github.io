import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const METHOD_COLOR={pattern:'#53ecc0',random:'#ae94ff',k8s:'#59b7ff',bestfit:'#ffbd69',firstfit:'#f17fa5',balance:'#7ae0e8'};
export default function Scene({count=100,methods=['pattern','random','k8s','bestfit'],states={},labels={},onSelect,onHover,onControls,cameraMode='rotate',selected,pulses=[],rotate=false,topology=true,theme='aurora',resetKey=0,onCanvas}){
 const host=useRef(),live=useRef({states,onSelect,onHover,onControls,cameraMode,pulses,selected,labels,rotate,topology,onCanvas}),[bad,setBad]=useState(false);
 live.current={states,onSelect,onHover,onControls,cameraMode,pulses,selected,labels,rotate,topology,onCanvas};
 useEffect(()=>{
  const el=host.current;if(!el)return;let renderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});}catch{setBad(true);return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setClearColor(theme==='blueprint'?0x08172b:0x060e19);renderer.outputColorSpace=THREE.SRGBColorSpace;
  el.appendChild(renderer.domElement);live.current.onCanvas?.(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(43,1,.1,2500);
  const cols=Math.ceil(Math.sqrt(count)),rows=Math.ceil(count/cols),step=2.55,cw=cols*step+7,ch=rows*step+9;
  const multiple=methods.length>1,spreadX=cw+7,spreadZ=ch+12,across=Math.max(1,methods.length),tiers=1;
  const span=Math.max(across*spreadX,tiers*spreadZ);
  camera.position.set(span*.035,span*.65,span*.9);camera.lookAt(0,0,0);
  const control=new OrbitControls(camera,renderer.domElement);control.enableDamping=true;control.dampingFactor=.07;control.maxPolarAngle=Math.PI*.48;control.minDistance=12;control.maxDistance=span*3.8;control.target.set(0,0,0);control.autoRotateSpeed=.35;control.enableZoom=true;control.enablePan=true;control.screenSpacePanning=true;control.zoomSpeed=.8;control.panSpeed=.8;control.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.PAN};
  live.current.onControls?.({zoom:factor=>{camera.position.sub(control.target).multiplyScalar(factor).add(control.target);control.update();},pan:(dx,dy)=>{const offset=new THREE.Vector3(dx,dy,0).applyQuaternion(camera.quaternion).multiplyScalar(camera.position.distanceTo(control.target)*.08);camera.position.add(offset);control.target.add(offset);control.update();}});
  scene.add(new THREE.HemisphereLight(0xc8e8ff,0x182638,2.5));const key=new THREE.DirectionalLight(0xb9dcff,3);key.position.set(-20,50,30);scene.add(key);
  const bodyGeom=new THREE.BoxGeometry(1.5,1.8,1.6),barGeom=new THREE.BoxGeometry(.23,.055,1.32),topGeom=new THREE.BoxGeometry(1.2,.05,.055);
  const bodies=new THREE.InstancedMesh(bodyGeom,new THREE.MeshStandardMaterial({color:0xffffff,roughness:.6,metalness:.4}),methods.length*count);
  const bars=new THREE.InstancedMesh(barGeom,new THREE.MeshBasicMaterial({color:0xffffff}),methods.length*count*4);
  const wasteBars=new THREE.InstancedMesh(barGeom,new THREE.MeshBasicMaterial({color:0xeea559}),methods.length*count*4);scene.add(wasteBars);
  const leds=new THREE.InstancedMesh(topGeom,new THREE.MeshBasicMaterial({color:0xffffff}),methods.length*count);
  bodies.instanceMatrix.setUsage(THREE.DynamicDrawUsage);bars.instanceMatrix.setUsage(THREE.DynamicDrawUsage);scene.add(bodies,bars,leds);
  const dummy=new THREE.Object3D(),col=new THREE.Color(),locations=[],tags=[],graph=new THREE.Group();scene.add(graph);
  const resources=['#59b7ff','#ffcc70','#58e9bc','#ee91c0'];
  methods.forEach((method,m)=>{
   const ox=(m%across-(across-1)/2)*spreadX,oz=(Math.floor(m/across)-(tiers-1)/2)*spreadZ;
   const plane=new THREE.Mesh(new THREE.PlaneGeometry(cw,ch),new THREE.MeshStandardMaterial({color:theme==='blueprint'?0x0b2340:0x0b1c2c,transparent:true,opacity:.78,roughness:1}));plane.rotation.x=-Math.PI/2;plane.position.set(ox,-.06,oz);scene.add(plane);
   const grid=new THREE.GridHelper(Math.max(cw,ch),Math.max(cols,rows)+2,0x235268,0x153042);grid.position.set(ox,0,oz);scene.add(grid);
   const tag=document.createElement('div');tag.className='world-label';tag.style.setProperty('--accent',METHOD_COLOR[method]);el.appendChild(tag);tags.push({el:tag,point:new THREE.Vector3(ox,1,oz-ch/2-1),method});
   for(let i=0;i<count;i++){
    const x=ox+(i%cols-(cols-1)/2)*step,z=oz+(Math.floor(i/cols)-(rows-1)/2)*step;
    locations.push({x,z,method,id:i});dummy.position.set(x,.93,z);dummy.scale.set(1,1,1);dummy.updateMatrix();bodies.setMatrixAt(m*count+i,dummy.matrix);bodies.setColorAt(m*count+i,col.set('#18324a'));
    dummy.position.set(x,1.875,z+.67);dummy.updateMatrix();leds.setMatrixAt(m*count+i,dummy.matrix);leds.setColorAt(m*count+i,col.set('#29556b'));
   }
   const lines=[];const leafCount=Math.min(8,Math.ceil(count/16));
   for(let j=0;j<leafCount;j++){
    const lx=ox+(j-(leafCount-1)/2)*cw/leafCount,lz=oz-ch/2+2;
    const sw=new THREE.Mesh(new THREE.BoxGeometry(1.7,.24,.7),new THREE.MeshBasicMaterial({color:0x276778}));sw.position.set(lx,3.5,lz);graph.add(sw);
    lines.push(new THREE.Vector3(lx,3.5,lz),new THREE.Vector3(ox-3,6,oz-ch/2));lines.push(new THREE.Vector3(lx,3.5,lz),new THREE.Vector3(ox+3,6,oz-ch/2));
    for(let i=j;i<count;i+=leafCount){const p=locations[m*count+i];lines.push(new THREE.Vector3(lx,3.5,lz),new THREE.Vector3(p.x,1.7,p.z));}
   }
   const lg=new THREE.BufferGeometry().setFromPoints(lines);graph.add(new THREE.LineSegments(lg,new THREE.LineBasicMaterial({color:0x22617b,transparent:true,opacity:.17})));
   for(const sx of [-3,3]){const spine=new THREE.Mesh(new THREE.BoxGeometry(2.3,.3,.9),new THREE.MeshBasicMaterial({color:0x46888d}));spine.position.set(ox+sx,6,oz-ch/2);graph.add(spine);}
  });
  const halo=new THREE.Mesh(new THREE.TorusGeometry(1.2,.06,8,48),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.9}));halo.rotation.x=-Math.PI/2;halo.visible=false;scene.add(halo);
  const flying=new THREE.Group();scene.add(flying);const flyGeom=new THREE.BoxGeometry(.42,.42,.42),flyMat=new THREE.MeshBasicMaterial({color:0x61ffcd});const flyMeshes=Array.from({length:12},()=>{const m=new THREE.Mesh(flyGeom,flyMat);m.visible=false;flying.add(m);return m;});
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let down=null,lastHover=0;
  const pick=e=>{const b=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObject(bodies)[0];if(!hit)return null;return{...locations[hit.instanceId],anchor:{x:(e.clientX-b.left)/b.width,y:(e.clientY-b.top)/b.height}};};
  const pd=e=>{down=e.button===0?[e.clientX,e.clientY]:null;live.current.onHover?.(null);};
  const pu=e=>{if(e.button!==0||!down||Math.hypot(e.clientX-down[0],e.clientY-down[1])>5){down=null;return;}down=null;const p=pick(e);if(p)live.current.onSelect?.(p.method,p.id,p.anchor);};
  const hover=e=>{if(e.buttons||down||performance.now()-lastHover<65)return;lastHover=performance.now();const p=pick(e);renderer.domElement.style.cursor=p?'pointer':live.current.cameraMode==='pan'?'grab':'default';live.current.onHover?.(p?{method:p.method,id:p.id,anchor:p.anchor}:null);};
  const leave=()=>{down=null;live.current.onHover?.(null);};
  renderer.domElement.addEventListener('pointerdown',pd);renderer.domElement.addEventListener('pointerup',pu);renderer.domElement.addEventListener('pointermove',hover);renderer.domElement.addEventListener('pointerleave',leave);
  let previousFit=null;
  const ro=new ResizeObserver(()=>{const w=el.clientWidth,h=el.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;
   // Fit all rack corners inside the usable canvas, including the fabric above.
   const direction=new THREE.Vector3(.025,.8,1).normalize(),right=new THREE.Vector3().crossVectors(new THREE.Vector3(0,1,0),direction).normalize(),up=new THREE.Vector3().crossVectors(direction,right).normalize(),tan=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));let fit=0;
   for(const x of [-1,1])for(const y of [0,7])for(const z of [-1,1]){const p=new THREE.Vector3(x*(across*spreadX-4)/2,y,z*(tiers*spreadZ-2)/2);fit=Math.max(fit,p.dot(direction)+Math.max(Math.abs(p.dot(up))/(tan*.78),Math.abs(p.dot(right))/(tan*camera.aspect*.94)));}
   if(previousFit===null)camera.position.copy(direction.multiplyScalar(fit));else camera.position.sub(control.target).multiplyScalar(fit/previousFit).add(control.target);previousFit=fit;control.maxDistance=Math.max(span*4,fit*4);camera.updateProjectionMatrix();});ro.observe(el);
  let frame,last=-1,lastStates=null,lastPulses=null,flyStart=0;const clock=new THREE.Clock();
  const render=()=>{
   const now=clock.getElapsedTime(),cur=live.current;control.autoRotate=cur.rotate;control.mouseButtons.LEFT=cur.cameraMode==='pan'?THREE.MOUSE.PAN:THREE.MOUSE.ROTATE;control.update();graph.visible=cur.topology;
   if(cur.states!==lastStates){lastStates=cur.states;
    locations.forEach((p,i)=>{
     const s=cur.states[p.method]?.servers?.[p.id];const util=s?.util||[0,0,0,0];const mean=util.reduce((a,b)=>a+b,0)/Math.max(1,util.length);const blocked=!!s?.stranded;
     const c=mean===0?'#20394f':METHOD_COLOR[p.method];col.set(c);if(mean>0)col.multiplyScalar(.45+mean*.5);bodies.setColorAt(i,col);leds.setColorAt(i,col.set(mean===0?'#23465b':METHOD_COLOR[p.method]));
     for(let d=0;d<4;d++){const value=util[d%util.length]||0;dummy.position.set(p.x+(-.51+d*.34),1.85,p.z-.66+(1.32*Math.max(.02,value))/2);dummy.scale.set(1,1,Math.max(.02,value));dummy.updateMatrix();bars.setMatrixAt(i*4+d,dummy.matrix);bars.setColorAt(i*4+d,col.set(mean===0?'#1b3a51':resources[d]));dummy.position.set(p.x+(-.51+d*.34),1.852,p.z-.66+1.32*value+1.32*(1-value)/2);dummy.scale.set(1,1,blocked?Math.max(.001,1-value):.001);dummy.updateMatrix();wasteBars.setMatrixAt(i*4+d,dummy.matrix);}
    });bodies.instanceColor.needsUpdate=true;leds.instanceColor.needsUpdate=true;bars.instanceColor.needsUpdate=true;bars.instanceMatrix.needsUpdate=true;wasteBars.instanceMatrix.needsUpdate=true;
   }
   if(cur.pulses!==lastPulses){lastPulses=cur.pulses;flyStart=now;}
   flyMeshes.forEach((mesh,i)=>{const event=(cur.pulses||[])[i];const m=event?methods.indexOf(event.method):-1;const t=(now-flyStart)/.65;if(event&&m>=0&&event.server>=0&&t<1){const p=locations[m*count+event.server];mesh.visible=true;mesh.position.set(p.x+Math.sin(t*Math.PI)*2,2+(1-t)*8,p.z);mesh.rotation.set(t*2,t*2,0);}else mesh.visible=false;});
   if(cur.selected){const m=methods.indexOf(cur.selected.method);const p=locations[m*count+cur.selected.id];if(m>=0&&p){halo.visible=true;halo.position.set(p.x,1.94,p.z);halo.material.opacity=.65+.25*Math.sin(now*4);}else halo.visible=false;}else halo.visible=false;
   const rect=el.getBoundingClientRect();tags.forEach(t=>{const q=t.point.clone().project(camera);t.el.style.left=(q.x*.5+.5)*rect.width+'px';t.el.style.top=(-q.y*.5+.5)*rect.height+'px';t.el.style.display=q.z>1?'none':'';t.el.textContent=cur.labels[t.method]||t.method;});
   renderer.render(scene,camera);frame=requestAnimationFrame(render);
  };render();
  return()=>{cancelAnimationFrame(frame);ro.disconnect();control.dispose();live.current.onControls?.(null);renderer.domElement.removeEventListener('pointermove',hover);renderer.domElement.removeEventListener('pointerleave',leave);renderer.domElement.removeEventListener('pointerdown',pd);renderer.domElement.removeEventListener('pointerup',pu);tags.forEach(x=>x.el.remove());scene.traverse(o=>{o.geometry?.dispose();if(o.material){(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});renderer.dispose();renderer.domElement.remove();};
 },[count,methods.join(','),theme,resetKey]);
 return <div className="scene-host" ref={host}>{bad&&<div className="canvas-fallback">WebGL is unavailable. Use the server table to inspect every placement.</div>}</div>;
}
