// Public playback only. No propagation, topology generation or route optimization.
const cache = new Map<string, Promise<any>>();
async function scenario(id: string, base: string) {
  if (!/^[0-2]$/.test(id)) throw Error('Unknown recorded scenario');
  if (!cache.has(id)) cache.set(id, fetch(new URL(`replay/scenario-${id}.json`,base)).then(r=>{if(!r.ok)throw Error('Replay file unavailable');return r.json();}).catch(e=>{cache.delete(id);throw e;}));
  return cache.get(id)!;
}
let base='';
self.onmessage=async({data})=>{
  try {
    if(data.type==='init'){base=data.base;self.postMessage({type:'ready',count:1200});}
    if(data.type==='snapshot'){
      const record=await scenario(String(data.config.replayScenario||'0'),base);
      const frames=record.frames,start=frames[0].time,step=frames[1].time-start;
      const index=Math.max(0,Math.min(frames.length-1,Math.floor((data.time-start)/step)));
      self.postMessage({type:'snapshot',id:data.id,snapshot:frames[index]});
    }
  } catch(e){self.postMessage({type:'error',message:String(e)});}
};

