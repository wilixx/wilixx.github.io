// Created only after a deliberate sound-button click; no external audio requests.
export async function createMountainSound(){
 const Audio=window.AudioContext||window.webkitAudioContext;
 if(!Audio)throw new Error('此设备无法开启环境音');
 const context=new Audio(),nodes=[];
 try{
  await context.resume();
  const master=context.createGain();master.gain.value=.32;master.connect(context.destination);
  const length=context.sampleRate*8,buffer=context.createBuffer(1,length,context.sampleRate),data=buffer.getChannelData(0);let pink=0;
  for(let i=0;i<length;i++){pink=.97*pink+.03*(Math.random()*2-1);data[i]=pink*2.5;}
  const stream=context.createBufferSource();stream.buffer=buffer;stream.loop=true;
  const streamFilter=context.createBiquadFilter();streamFilter.type='bandpass';streamFilter.frequency.value=900;streamFilter.Q.value=.45;
  const streamVolume=context.createGain();streamVolume.gain.value=.7;stream.connect(streamFilter).connect(streamVolume).connect(master);stream.start();nodes.push(stream);
  const windFilter=context.createBiquadFilter();windFilter.type='lowpass';windFilter.frequency.value=290;
  const windVolume=context.createGain();windVolume.gain.value=.22;stream.connect(windFilter).connect(windVolume).connect(master);
  const flow=context.createOscillator(),flowDepth=context.createGain();flow.frequency.value=.17;flowDepth.gain.value=180;flow.connect(flowDepth).connect(streamFilter.frequency);flow.start();nodes.push(flow);
  // Quiet, overlapping resonances supply the gentle burbling texture of running water.
  for(let i=0;i<3;i++){
   const water=context.createBiquadFilter();water.type='bandpass';water.frequency.value=650+i*310;water.Q.value=7;
   const volume=context.createGain();volume.gain.value=.035;stream.connect(water).connect(volume).connect(master);
   const lfo=context.createOscillator(),depth=context.createGain();lfo.frequency.value=.7+i*.31;depth.gain.value=190; lfo.connect(depth).connect(water.frequency);lfo.start();nodes.push(lfo);
  }
  let stopped=false;
  return {async stop(){if(stopped)return;stopped=true;for(const node of nodes)try{node.stop();}catch{}await context.close();}};
 }catch(error){await context.close();throw error;}
}
