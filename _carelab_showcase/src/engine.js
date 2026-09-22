// Read-only replay helpers. Placement decisions are already present in the recorded data.
export const METHOD_IDS=['pattern','random','k8s','bestfit'];
export const DEFAULT_CONFIG={servers:100,historyCount:1000,arrivalCount:600,groupSize:1,threshold:.8,methods:[...METHOD_IDS],dimensions:[{name:'CPU',capacity:64,unit:'vCPU'},{name:'Memory',capacity:256,unit:'GB'},{name:'GPU',capacity:8,unit:'slices'},{name:'Bandwidth',capacity:100,unit:'Gbps'}]};
const mean=values=>values.reduce((sum,v)=>sum+v,0)/Math.max(1,values.length);
export function emptyState(count,dimensions){return{servers:Array.from({length:count},(_,id)=>({id,util:Array(dimensions).fill(0),vms:[],stranded:false})),accepted:0,rejected:0,active:0,utilization:0,stranded:0,resources:Array(dimensions).fill(0)};}
export function applyEvents(state,events,profiles){
 const servers=state.servers.map(server=>({...server,util:[...server.util],vms:[...server.vms]}));
 let accepted=state.accepted,rejected=state.rejected;
 for(const event of events){
  if(event.accepted){accepted+=event.count;for(const placement of event.placements){const server=servers[placement.server];server.util=server.util.map((v,i)=>v+placement.values[i]);server.vms.push(placement.vm);}}
  else rejected+=event.count;
 }
 // This is a display metric over recorded placements, never a placement policy.
 servers.forEach(server=>{server.stranded=server.vms.length>0&&!profiles.some(profile=>server.util.every((v,i)=>v+profile.rep[i]<=1.0000001));});
 return{servers,accepted,rejected,active:servers.filter(server=>server.vms.length).length,utilization:mean(servers.map(server=>mean(server.util))),stranded:servers.filter(server=>server.stranded).reduce((sum,server)=>sum+mean(server.util.map(v=>1-v)),0)/servers.length,resources:servers[0].util.map((_,i)=>mean(servers.map(server=>server.util[i])))};
}
export function validateReplay(data){
 if(data?.schemaVersion!==1||data.kind!=='recorded-simulation'||!data.config||!data.result||!data.model)throw Error('This recorded scenario has an unsupported format.');
 const {config,result,history,model}=data;
 if(!Number.isInteger(config.servers)||config.servers<1||config.servers>1000||!Array.isArray(config.dimensions)||config.dimensions.length!==4||!Array.isArray(history)||!history.length)throw Error('The recorded scenario is incomplete.');
 if(!Array.isArray(result.arrivals)||!result.arrivals.length||result.arrivals.length>10000||!Array.isArray(model.patterns)||!Array.isArray(model.rules))throw Error('The recorded workload is incomplete.');
 for(const key of METHOD_IDS){const method=result.methods?.[key];if(!method||!Array.isArray(method.events)||method.events.length!==result.arrivals.length||method.servers?.length!==config.servers||method.metrics?.accepted+method.metrics?.rejected!==result.arrivals.length)throw Error('The comparison record is incomplete.');
  for(const event of method.events){if(!Array.isArray(event.placements)||event.count!==1)throw Error('The playback record is invalid.');for(const placement of event.placements){if(!Number.isInteger(placement.server)||placement.server<0||placement.server>=config.servers||!Number.isInteger(placement.vm)||!result.arrivals[placement.vm]||placement.values?.length!==4||placement.values.some(v=>!Number.isFinite(v)||v<0||v>1))throw Error('A recorded placement is invalid.');}}
 }
 return data;
}
