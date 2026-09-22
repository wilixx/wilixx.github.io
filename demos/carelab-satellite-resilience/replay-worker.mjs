// Public replay player. Loads recorded outputs only; does not solve routes,
// propagate orbits or calculate temporal centrality.
let recording,coordinates,scenario='baseline',reroute=true,key='',queue=Promise.resolve();
const scenarios=new Map();
async function json(path){const r=await fetch(new URL(path,import.meta.url));if(!r.ok)throw Error(`Replay asset unavailable: ${path}`);return r.json()}
async function ready(){if(recording)return;recording=await json('./manifest.json');const r=await fetch(new URL('./positions.i16',import.meta.url));if(!r.ok)throw Error('Recorded positions unavailable');coordinates=new Int16Array(await r.arrayBuffer());if(coordinates.length!==recording.count*3*recording.frames)throw Error('Invalid recording length')}
const dense=entries=>{const a=new Uint16Array(recording.count);for(const [id,value]of entries)a[id]=value;return a};
function point(id,frame){const k=(frame*recording.count+id)*3;return [0,1,2].map(j=>coordinates[k+j]/recording.scale)}
async function handle(m){await ready();if(m.type==='init'){scenario='baseline';reroute=m.reroute??true;key=''}if(m.type==='configure'){reroute=m.reroute;key=''}if(m.type==='mutate'){const next=m.action==='restore'?'baseline':m.action;if(!recording.scenarios.some(x=>x.id===next))throw Error('This action is unavailable in recorded replay');if(next==='manual'&&(!m.ids?.length||m.ids.some(i=>i!==recording.target)))throw Error('Only the example satellite has a recorded individual failure');scenario=next;key=''}
 if(!scenarios.has(scenario))scenarios.set(scenario,await json(`./${scenario}.json`));
 const data=scenarios.get(scenario),time=Math.max(0,Math.min((recording.frames-1)*recording.step,m.time??0)),k=Math.floor(time/recording.step),next=Math.min(k+1,recording.frames-1),fraction=time/recording.step-k;
 const positions=new Float32Array(recording.count*3),stride=recording.count*3;for(let i=0;i<stride;i++)positions[i]=(coordinates[k*stride+i]*(1-fraction)+coordinates[next*stride+i]*fraction)/recording.scale;
 const currentKey=`${scenario}:${reroute}:${k}:${m.selected}`;
 if(currentKey!==key){key=currentKey;const f=data.frames[k],record=reroute?f:f.off,snapshot={...record,satb:dense(record.satb),baseSatb:dense(record.baseSatb)};delete snapshot.off;const failed=new Set(data.ids),spec={kind:'recorded-replay',startMs:recording.startMs,seed:0,planes:0,nodes:recording.nodes.map((n,id)=>({...n,status:failed.has(id)?1:0}))};const rows=data.frames.slice(k,k+21).map(f=>({time:f.time,satb:f.satb.find(x=>x[0]===m.selected)?.[1]??0,baseline:f.baseSatb.find(x=>x[0]===m.selected)?.[1]??0,eta:f.metrics.eta,baseEta:f.metrics.baselineEta,noRerouteEta:f.metrics.noRerouteEta,delay:f.metrics.delay}));self.postMessage({type:'snapshot',snapshot,spec,rows,requestId:m.requestId})}
 let orbit=null,detail=null;const id=m.selected;if(Number.isInteger(id)&&id>=0&&id<recording.count){const p=positions.slice(id*3,id*3+3),r=Math.hypot(...p),alt=(r-1)*6371;const path=[];for(let frame=k;frame<Math.min(k+21,recording.frames);frame++)path.push(...point(id,frame));orbit=new Float32Array(path);detail={id,alt,lat:Math.asin(p[1]/r)*180/Math.PI,lon:Math.atan2(-p[2],p[0])*180/Math.PI,period:recording.nodes[id].period/60,coverage:(Math.acos(Math.cos(25*Math.PI/180)/r)-25*Math.PI/180)*6371}}
 self.postMessage({type:'frame',positions,time,orbit,detail,requestId:m.requestId},[positions.buffer]);
}
self.onmessage=({data})=>{queue=queue.then(()=>handle(data)).catch(error=>self.postMessage({type:'error',message:String(error),requestId:data.requestId}))};
