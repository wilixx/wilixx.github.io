import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {applyEvents,emptyState,validateReplay,METHOD_IDS} from '../src/engine.js';
const base=new URL('../public/scenarios/',import.meta.url),manifest=JSON.parse(await readFile(new URL('manifest.json',base),'utf8'));
const close=(actual,expected,tolerance=2e-7)=>assert.ok(Math.abs(actual-expected)<tolerance,`${actual} != ${expected}`);
for(const item of manifest.scenarios){
 const bytes=await readFile(new URL(item.file,base)),data=JSON.parse(bytes);
 test(`${item.id}: provenance and integrity`,()=>{assert.equal(createHash('sha256').update(bytes).digest('hex'),item.sha256);assert.equal(bytes.length,item.bytes);assert.equal(validateReplay(data),data);assert.equal(data.provenance.allMethodsShareArrivals,true);assert.equal(data.result.imported,true);assert.equal(data.config.servers,100);assert.equal(data.model.logs,undefined);assert.equal(data.model.rules.some(rule=>'weight'in rule),false);});
 for(const method of METHOD_IDS)test(`${item.id}: ${method} replay reconstructs every chart point and final outcome`,()=>{
  const recorded=data.result.methods[method];let state=emptyState(data.config.servers,4),next=0;
  for(const point of recorded.curve){state=applyEvents(state,recorded.events.slice(next,point.arrived),data.model.patterns);next=point.arrived;assert.equal(state.accepted,point.accepted);assert.equal(state.rejected,point.rejected);assert.equal(state.active,point.active);close(state.utilization,point.utilization);close(state.stranded,point.stranded);point.resources.forEach((value,i)=>close(state.resources[i],value));}
  assert.equal(next,data.result.arrivals.length);assert.equal(state.accepted,recorded.metrics.accepted);assert.equal(state.rejected,recorded.metrics.rejected);
  for(const server of state.servers){assert.deepEqual(server.vms,recorded.servers[server.id].vms);assert.equal(server.stranded,recorded.servers[server.id].stranded);server.util.forEach((value,i)=>{close(value,recorded.servers[server.id].util[i]);assert.ok(value<=1.000001);});}
 });
 test(`${item.id}: published combinations meet every recorded resource threshold`,()=>{for(const rule of data.model.rules)rule.util.forEach((value,i)=>assert.ok(value>=data.model.thresholds[i]-1e-7&&value<=1.0000001));});
}
test('invalid records fail safely before replay',()=>{const clone=structuredClone(JSON.parse(Buffer.from('{}')));assert.throws(()=>validateReplay(clone),/format/);});
test('public bundle contains no optimization runtime, private source, or backend endpoint',async()=>{
 const files=await readdir(new URL('../dist/assets/',import.meta.url));assert.equal(files.some(name=>/wasm|worker|solver|\.map$/.test(name)),false);
 const scripts=await Promise.all(files.filter(name=>name.endsWith('.js')).map(name=>readFile(new URL('../dist/assets/'+name,import.meta.url),'utf8')));
 for(const script of scripts){for(const forbidden of ['GLP_MAX','GLP_OPT','glpk.wasm','quality_pattern_pricing','history_coverage','/api/jobs','/api/video-exports','function kmeans','configFingerprint'])assert.equal(script.includes(forbidden),false,forbidden);}
 const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');assert.match(html,/\/demos\/carelab-green-cloud\/assets\//);assert.doesNotMatch(html,/src="\/assets\//);
});
