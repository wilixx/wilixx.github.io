import {copy} from './content.mjs';
import * as THREE from './three.module.js';
import {OrbitControls} from './OrbitControls.js';
import {createMountainModel} from './mountain-model.mjs';
import {createMountainLife} from './river-fauna-v4.mjs';
import {createIncenseAltar} from './incense-model.mjs';
import {createCompanionModels} from './companions-v3.mjs';
import {createLuckyCat,createBlessingHalo} from './ornaments-v3.mjs';


export function createWorld({mount,labels,onEnter,onTick,onError}){
 let locale='en',NAMES=copy.en.names;
 const words=()=>copy[locale];
 let mode='mountain',paused=false,contextLost=false,disposed=false,frameTime=0,lastTime=0,elapsed=0,transition=null;
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;let motion=!reduce,decorTime=0,haloLevel=.4;
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
 renderer.autoClear=false;
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
 renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.35;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 mount.appendChild(renderer.domElement);renderer.domElement.tabIndex=0;
 renderer.domElement.setAttribute('aria-label',words().canvas);
 const camera=new THREE.PerspectiveCamera(43,1,.2,220);
 const controls=new OrbitControls(camera,renderer.domElement);
 controls.enableDamping=!reduce;controls.dampingFactor=.075;controls.rotateSpeed=.5;controls.zoomSpeed=.8;controls.panSpeed=.6;controls.screenSpacePanning=true;controls.maxPolarAngle=Math.PI*.47;controls.minPolarAngle=Math.PI*.12;controls.autoRotateSpeed=.3;
 const landscape=new THREE.Scene();landscape.fog=new THREE.FogExp2(0x112226,.01);
 landscape.add(new THREE.HemisphereLight(0xd5e9e1,0x243630,2.6));
 const sun=new THREE.DirectionalLight(0xf8ddaf,3.4);sun.position.set(18,36,24);sun.castShadow=true;
 sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:95});sun.shadow.normalBias=.08;landscape.add(sun);
 const rim=new THREE.DirectionalLight(0x8bb6c0,1.6);rim.position.set(-25,19,-24);landscape.add(rim);
 const mountain=createMountainModel(THREE);landscape.add(mountain.group);
 const mountainLife=createMountainLife(THREE);landscape.add(mountainLife.group);
 const fogGeo=new THREE.PlaneGeometry(130,130,1,1);
 const fogMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{time:{value:0}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec2 vUv;uniform float time;void main(){vec2 p=vUv-.5;float r=length(p);float waves=sin(p.x*36.+sin(p.y*29.+time*.035)*1.7+time*.07)*.5+.5;float haze=smoothstep(.12,.24,r)*(1.-smoothstep(.38,.55,r));gl_FragColor=vec4(.16,.23,.24,haze*(.075+waves*.08));}`});
 const cloud=new THREE.Mesh(fogGeo,fogMaterial);cloud.rotation.x=-Math.PI/2;cloud.position.y=1.4;landscape.add(cloud);
 const sanctuary=new THREE.Scene();sanctuary.fog=new THREE.FogExp2(0x121715,.018);
 sanctuary.add(new THREE.HemisphereLight(0xf0dfbd,0x34413a,3));
 const altarKey=new THREE.DirectionalLight(0xffdfaa,4.2);altarKey.position.set(4,10,8);altarKey.castShadow=true;altarKey.shadow.mapSize.set(1024,1024);Object.assign(altarKey.shadow.camera,{left:-7,right:7,top:11,bottom:-4,near:1,far:30});altarKey.shadow.normalBias=.025;sanctuary.add(altarKey);
 const altarRim=new THREE.DirectionalLight(0x98b7b1,2.5);altarRim.position.set(-6,7,-4);sanctuary.add(altarRim);
 const softLight=new THREE.PointLight(0xffa753,45,22,2);softLight.position.set(1,5,6);sanctuary.add(softLight);
 const altar=createIncenseAltar(THREE);sanctuary.add(altar.group);
 const floor=new THREE.Mesh(new THREE.CircleGeometry(13,64),new THREE.MeshStandardMaterial({color:0x101918,roughness:.8,metalness:.14,transparent:true,opacity:.65}));floor.rotation.x=-Math.PI/2;floor.position.y=-.39;floor.receiveShadow=true;sanctuary.add(floor);

 const halo=createBlessingHalo(THREE);sanctuary.add(halo.group);halo.update(0,0,.3);
 const companions=createCompanionModels(THREE),companionScenes={};
 for(const [id,entry] of Object.entries(companions.scenes)){
  const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x10231f,.006);
  scene.add(new THREE.HemisphereLight(0xe2edd6,0x233d35,3));
  const key=new THREE.DirectionalLight(0xffdfaf,3.5);key.position.set(8,16,12);key.castShadow=true;key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-9,right:9,top:11,bottom:-9,near:1,far:42});key.shadow.normalBias=.03;scene.add(key);
  const rim=new THREE.DirectionalLight(0x95c1bf,2.1);rim.position.set(-9,8,-5);scene.add(rim);scene.add(entry.group);companionScenes[id]=scene;
 }
 const cat=createLuckyCat(THREE);
 const huds=[{model:cat,element:document.querySelector('#lucky-cat-widget'),half:1.72,target:1.43}].map(h=>{
  h.scene=new THREE.Scene();h.scene.add(h.model.group,new THREE.HemisphereLight(0xffedcc,0x345b4b,3));
  const key=new THREE.DirectionalLight(0xffe6b7,3.4);key.position.set(3,5,6);h.scene.add(key);
  h.camera=new THREE.OrthographicCamera(-h.half,h.half,h.half,-h.half,.1,30);h.camera.position.set(0,h.target,10);h.camera.lookAt(0,h.target,0);return h;
 });
 function cacheHud(){const base=mount.getBoundingClientRect();for(const h of huds){const r=h.element.getBoundingClientRect();const height=Math.max(0,r.height-19);h.rect={x:r.left-base.left,y:base.height-(r.top-base.top)-height,w:r.width,h:height};h.shown=r.width>0&&height>0&&h.rect.y>=0;h.camera.left=-h.half*r.width/(height||1);h.camera.right=-h.camera.left;h.camera.updateProjectionMatrix();}}
 function renderHud(){for(const h of huds){if(!h.shown||(h.model===cat&&document.body.classList.contains('quiet-support')))continue;const r=h.rect;renderer.setViewport(r.x,r.y,r.w,r.h);renderer.setScissor(r.x,r.y,r.w,r.h);renderer.setScissorTest(true);renderer.clearDepth();renderer.render(h.scene,h.camera);}renderer.setScissorTest(false);}
 const nodes=mountain.destinations.map((d,i)=>{const button=document.createElement('button');button.className='destination-label';button.dataset.open=d.id;button.setAttribute('aria-label',NAMES[d.id]);const eyebrow=document.createElement('span');eyebrow.textContent=d.id==='shrine'?words().featured:words().explore;button.append(eyebrow,document.createTextNode(NAMES[d.id]));labels.appendChild(button);return {button,point:new THREE.Vector3(...d.position),id:d.id};});
 const pointer=new THREE.Vector2(),raycaster=new THREE.Raycaster(),projection=new THREE.Vector3();
 const picks=mountain.destinations.flatMap(d=>d.hitObjects);
 const defaultViews=()=>{const mobile=mount.clientWidth<761;if(mode==='mountain')return mobile?{position:[43,30,50],target:[0,7,0]}:{position:[32,24,38],target:[0,7,0]};if(mode==='altar')return mobile?{position:[8,7.8,17],target:[0,4.1,0]}:{position:[8,6.8,12],target:[0,3.9,0]};return mobile?{position:[14,10,23],target:[0,3.4,0]}:{position:[12,9,18],target:[0,3.5,0]};};
 function resize(){if(disposed)return;const w=Math.max(mount.clientWidth,1),h=Math.max(mount.clientHeight,1);renderer.setSize(w,h,false);camera.aspect=w/h;camera.fov=mode==='mountain'?(w<761?51:43):(w<761?46:43);camera.setViewOffset(w,h,mode==='mountain'?(w<761?0:-w*.09):(w<761?0:mode==='altar'?w*.06:w*.14),mode==='mountain'&&w<761?-h*.11:0,w,h);camera.updateProjectionMatrix();cacheHud();}
 function reset(animate=false){const view=defaultViews();controls.autoRotate=false;document.querySelector('#rotate-world').setAttribute('aria-pressed','false');document.querySelector('#rotate-world').setAttribute('aria-label',words().rotate);if(animate&&motion){transition={from:camera.position.clone(),to:new THREE.Vector3(...view.position),fromTarget:controls.target.clone(),toTarget:new THREE.Vector3(...view.target),time:0};}else{transition=null;camera.position.set(...view.position);controls.target.set(...view.target);}controls.minDistance=mode==='mountain'?24:9;controls.maxDistance=mode==='mountain'?102:mode==='altar'?27:42;controls.minPolarAngle=mode==='mountain'?.25:.55;controls.maxPolarAngle=mode==='mountain'?1.45:1.47;resize();controls.update();}
 const observer=new ResizeObserver(()=>{resize();});observer.observe(mount);reset();
 function projectLabels(){const w=mount.clientWidth,h=mount.clientHeight,placed=[];for(const n of [...nodes].sort((a,b)=>(b.id==='shrine')-(a.id==='shrine'))){projection.copy(n.point).project(camera);const x=(projection.x*.5+.5)*w;let y=(-projection.y*.5+.5)*h;const width=n.button.offsetWidth||120;for(let pass=0;pass<5;pass++){const overlap=placed.find(p=>Math.abs(x-p.x)<(width+p.w)/2+5&&Math.abs(y-p.y)<51);if(!overlap)break;y=overlap.y+54;}const shown=projection.z<1&&projection.z>-1&&x>width/2+10&&x<w-width/2-10&&y>100&&y<h-155;n.button.style.left=x+'px';n.button.style.top=y+'px';n.button.style.display=shown?'':'none';if(shown)placed.push({x,y,w:width});}}

 let down=null,multiTouch=false;const activePointers=new Set();
 renderer.domElement.addEventListener('pointerdown',e=>{activePointers.add(e.pointerId);if(activePointers.size===1){multiTouch=false;down={x:e.clientX,y:e.clientY,at:performance.now(),button:e.button};}else multiTouch=true;});
 renderer.domElement.addEventListener('pointerup',e=>{activePointers.delete(e.pointerId);const click=!multiTouch&&down&&down.button===0&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<6&&performance.now()-down.at<700;if(activePointers.size===0)down=null;if(mode!=='mountain'||paused||contextLost||!click)return;const box=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-box.left)/box.width*2-1,-(e.clientY-box.top)/box.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(picks,false)[0];if(hit?.object.userData.destination)onEnter(hit.object.userData.destination);});
 renderer.domElement.addEventListener('pointercancel',e=>{activePointers.delete(e.pointerId);down=null;});
 controls.addEventListener('start',()=>{transition=null;controls.autoRotate=false;document.querySelector('#rotate-world').setAttribute('aria-pressed','false');document.querySelector('#rotate-world').setAttribute('aria-label',words().rotate);});
 function zoomBy(factor){const offset=camera.position.clone().sub(controls.target);const distance=Math.max(controls.minDistance,Math.min(controls.maxDistance,offset.length()*factor));camera.position.copy(controls.target).add(offset.setLength(distance));controls.update();}
 renderer.domElement.addEventListener('keydown',e=>{if(['+','=','-','r','R','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(e.key==='+'||e.key==='=')zoomBy(.88);else if(e.key==='-')zoomBy(1.12);else if(e.key.toLowerCase()==='r')reset(true);else{const o=camera.position.clone().sub(controls.target),s=new THREE.Spherical().setFromVector3(o);if(e.key==='ArrowLeft')s.theta-=.10;if(e.key==='ArrowRight')s.theta+=.10;if(e.key==='ArrowUp')s.phi=Math.max(controls.minPolarAngle,s.phi-.08);if(e.key==='ArrowDown')s.phi=Math.min(controls.maxPolarAngle,s.phi+.08);camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(s));controls.update();}}});
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();contextLost=true;controls.enabled=false;document.body.classList.remove('webgl-ready');onError(words().fallback);});
 renderer.setAnimationLoop(now=>{
  if(disposed)return;if(document.hidden||paused||contextLost){lastTime=now;return;}if(now-frameTime<1000/40)return;
  frameTime=now;const dt=lastTime?Math.min((now-lastTime)/1000,.1):0;lastTime=now;elapsed+=dt;if(motion)decorTime+=dt;
  if(transition){transition.time+=dt;const t=Math.min(transition.time/.9,1),v=t*t*(3-2*t);camera.position.lerpVectors(transition.from,transition.to,v);controls.target.lerpVectors(transition.fromTarget,transition.toTarget,v);if(t===1)transition=null;}
  controls.update(dt);
  if(mode==='mountain'){fogMaterial.uniforms.time.value=decorTime;if(motion)mountainLife.update(dt,decorTime);projectLabels();}
  else if(mode==='altar'){onTick(dt);altar.update(dt);const strength=['inserting','burning'].includes(altar.state)?1.4:.4;haloLevel+=(strength-haloLevel)*Math.min(dt*.7,1);halo.update(motion?dt:0,decorTime,haloLevel);softLight.intensity=45+(motion?Math.sin(decorTime*1.7)*2:0);}
  else if(motion)companions.scenes[mode]?.update(dt,decorTime);
  if(motion){cat.update(dt,decorTime);}
  renderer.setScissorTest(false);renderer.setViewport(0,0,mount.clientWidth,mount.clientHeight);renderer.clear();renderer.render(mode==='mountain'?landscape:mode==='altar'?sanctuary:companionScenes[mode],camera);renderHud();
 });
 document.body.classList.add('webgl-ready');
 if(mount.clientWidth<761)document.querySelector('#navigation-hint').textContent=words().touchHint;
 return {
  setLanguage(value){locale=value==='zh'?'zh':'en';NAMES=words().names;renderer.domElement.setAttribute('aria-label',words().canvas);for(const n of nodes){n.button.setAttribute('aria-label',NAMES[n.id]);n.button.querySelector('span').textContent=n.id==='shrine'?words().featured:words().explore;n.button.lastChild.textContent=NAMES[n.id];}},
  altar,stats:mountain.stats,get available(){return !contextLost&&!disposed;},
  setMode(next){if(!['mountain','altar',...Object.keys(companionScenes)].includes(next))return;mode=next;paused=false;controls.enabled=!contextLost;reset();},
  setPaused(value){paused=!!value;controls.enabled=!paused&&!contextLost;lastTime=0;},
  setMotion(value){motion=!!value;altar.setMotion(motion);controls.enableDamping=motion;if(!motion){controls.autoRotate=false;transition=null;document.querySelector('#rotate-world').setAttribute('aria-pressed','false');document.querySelector('#rotate-world').setAttribute('aria-label',words().rotate);}},
  reset(){reset(true);},
  zoomBy,
  toggleRotation(){controls.autoRotate=motion&&!controls.autoRotate;return controls.autoRotate;},
  dispose(){disposed=true;renderer.setAnimationLoop(null);observer.disconnect();controls.dispose();landscape.remove(mountainLife.group);mountainLife.dispose();altar.dispose();halo.dispose();companions.dispose();cat.dispose();const geometries=new Set(),materials=new Set();landscape.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());floor.geometry.dispose();floor.material.dispose();renderer.dispose();nodes.forEach(n=>n.button.remove());renderer.domElement.remove();}
 };
}
