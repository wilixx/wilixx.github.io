import {copy,giftWords,validWord,seasonalIndex,noteKind} from './content.mjs';
import {createMountainSound} from './soundscape.mjs';

const $=s=>document.querySelector(s), panel=$('#panel');
const routes=['shrine','character','birthday','palm','tree'];
let language='en',route='mountain',world=null,motion=!matchMedia('(prefers-reduced-motion: reduce)').matches,sound=null,soundPending=false;
let state={},photoURL=null,giftURL=null,giftIndex=-1,giftRevision=0,artPromise=null,timer=0,lastFrame=performance.now();
const text=()=>copy[language];
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const label=(id,value)=>`<label for="${id}">${value}</label>`;
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(timer);timer=setTimeout(()=>$('#toast').classList.remove('show'),3500);}
function freePhoto(){if(photoURL)URL.revokeObjectURL(photoURL);photoURL=null;}
function syncPause(){world?.setPaused(document.hidden||!!document.querySelector('dialog[open]'));}
function openRoute(id){if(id!==route){freePhoto();state={};world?.altar.reset();}route=id;document.body.dataset.mode=id;document.body.classList.remove('quiet-support');world?.setMode(id==='shrine'?'altar':id);render();if(id!=='mountain')panel.focus({preventScroll:true});}
function syncUI(){
 const t=text();document.documentElement.lang=language==='en'?'en':'zh-CN';document.title=t.pageTitle;$('meta[name=description]').content=t.description;
 $('.brand span:last-child').textContent=t.brand;$('#language').textContent=language==='en'?'中文':'English';$('#language').lang=language==='en'?'zh-CN':'en';
 $('#sound').textContent=sound?t.soundOn:t.soundOff;$('#sound').setAttribute('aria-pressed',String(!!sound));$('#motion').textContent=motion?t.motionOn:t.motionOff;$('#motion').setAttribute('aria-pressed',String(motion));
 $('#footer-note').textContent=t.footer;$('#about').textContent=t.about;$('.skip-link').textContent=t.skip;
 for(const [id,key] of [['zoom-in','zoomIn'],['zoom-out','zoomOut'],['rotate-world','rotate'],['reset-world','reset']])$('#'+id).setAttribute('aria-label',t[key]);
 $('#navigation-hint').textContent=window.innerWidth<761?t.touchHint:t.hint;$('#lucky-cat-widget span').textContent=t.cat;$('#lucky-cat-widget').setAttribute('aria-label',t.gift);$('#lucky-cat-widget').title=t.gift;
 $('#journeys').setAttribute('aria-label',t.journeys);$('#journeys').innerHTML=routes.map((id,i)=>`<button data-open="${id}" aria-current="${route===id}"><span>0${i+1}</span>${t.names[id]}</button>`).join('');
 document.querySelectorAll('[data-close]').forEach(b=>b.setAttribute('aria-label',t.close));$('#about-title').textContent=t.aboutTitle;$('#about-copy').replaceChildren(...t.aboutCopy.map(p=>{const e=document.createElement('p');e.textContent=p;return e;}));
 $('#gift-title').textContent=t.giftTitle;$('#gift-eyebrow').textContent=t.giftEyebrow;$('#another-gift').textContent=t.another;$('#save-gift').textContent=t.save;
 world?.setLanguage(language);if($('#gift-dialog').open)void paintGift();
}
function base(title,description){return `<button class="back" data-open="mountain">← ${text().home}</button><p class="eyebrow">${text().names[route]}</p><h2 id="panel-title">${title}</h2><p>${description}</p>`;}
function render(){
 const t=text();syncUI();
 if(route==='mountain'){panel.innerHTML=`<p class="eyebrow">${t.eyebrow}</p><h1 id="panel-title">${t.hero}</h1><p class="intro">${t.intro}</p><button class="primary primary-link" data-open="shrine">${t.enter}<span aria-hidden="true">↗</span></button><div class="home-meta"><b>01 — 05</b><span>${t.journeys}</span></div>`;return;}
 panel.innerHTML=base(t.subtitles[route],t.descriptions[route]);
 if(route==='shrine')renderWish();
 if(route==='character')renderWord();
 if(route==='birthday')renderSeason();
 if(route==='palm')renderHands();
 if(route==='tree')renderNote();
 if(state.result)showResult();
}
function renderWish(){
 const t=text();state.quantity??=3;state.wish??='';
 if(state.started){panel.insertAdjacentHTML('beforeend',`<div class="result"><h3 id="wish-caption"></h3><div class="progress-track"><span id="wish-progress"></span></div><div class="timer"><span id="wish-timer"></span><span aria-hidden="true">✧</span></div><button class="primary form-action" data-gift>${t.keep}</button><button id="restart" class="form-action">${t.again}</button></div>`);$('#restart').onclick=()=>{world?.altar.reset();state.started=false;state.elapsed=0;render();};updateWish();return;}
 panel.insertAdjacentHTML('beforeend',`<form id="wish-form"><div class="quantity-label">${label('quantity',t.quantity)}<output id="quantity-value" for="quantity">${state.quantity}</output></div><input id="quantity" type="range" min="1" max="12" step="1" value="${state.quantity}">${label('wish',t.wish)}<textarea id="wish" maxlength="200" placeholder="${t.wishPlaceholder}"></textarea><button class="primary form-action" type="submit">${t.begin}</button><p class="form-note">${t.incenseNote}</p></form>`);
 $('#wish').value=state.wish;$('#wish').oninput=e=>state.wish=e.target.value;$('#quantity').oninput=e=>{state.quantity=+e.target.value;$('#quantity-value').textContent=state.quantity;world?.altar.setQuantity(state.quantity);};
 $('#wish-form').onsubmit=e=>{e.preventDefault();state.started=true;state.elapsed=0;world?.altar.setQuantity(state.quantity);world?.altar.start();render();};
 world?.altar.setQuantity(state.quantity);
}
function updateWish(){if(route!=='shrine'||!state.started||!$('#wish-caption'))return;const t=text(),elapsed=state.elapsed||0,complete=elapsed>=95;$('#wish-caption').textContent=complete?t.complete:t.captions[Math.min(4,Math.floor(elapsed/19))];$('#wish-progress').style.width=Math.min(100,elapsed/95*100)+'%';$('#wish-timer').textContent=complete?'✓':`${Math.max(0,Math.ceil(95-elapsed))} ${t.timeLeft}`;}
function tick(dt){if(route==='shrine'&&state.started){state.elapsed=Math.min(95,(state.elapsed||0)+dt);updateWish();}}
// A text-only fallback keeps the experience usable when WebGL cannot start.
function fallbackClock(now){const dt=Math.min(.1,(now-lastFrame)/1000);lastFrame=now;if(!world?.available&&!document.hidden&&!document.querySelector('dialog[open]'))tick(dt);requestAnimationFrame(fallbackClock);}
requestAnimationFrame(fallbackClock);
function renderWord(){const t=text();state.word??='';state.topic??=0;panel.insertAdjacentHTML('beforeend',`<form id="word-form"><div class="chips">${t.chips.map((c,i)=>`<button type="button" data-word="${['安','明','光','爱'][i]}">${c}</button>`).join('')}</div>${label('word',t.word)}<input id="word" maxlength="24" placeholder="${t.wordPlaceholder}" autocomplete="off" required>${label('topic',t.topic)}<select id="topic">${t.topics.map((v,i)=>`<option value="${i}">${v}</option>`).join('')}</select><button class="primary form-action">${t.reflect}</button></form>`);$('#word').value=state.word;$('#topic').value=state.topic;$('#word').oninput=e=>{state.word=e.target.value;e.target.setCustomValidity('');};$('#topic').onchange=e=>state.topic=+e.target.value;panel.querySelectorAll('[data-word]').forEach(b=>b.onclick=()=>{$('#word').value=state.word=b.dataset.word;$('#word').setCustomValidity('');});$('#word-form').onsubmit=e=>{e.preventDefault();state.word=$('#word').value.trim();if(!validWord(state.word)){toast(t.wordError);return;}state.result='word';showResult(true);};}
function renderSeason(){const t=text();panel.insertAdjacentHTML('beforeend',`<form id="date-form">${label('date',t.date)}<input id="date" type="date" min="1900-01-01" max="2200-12-31" required><button class="primary form-action">${t.dateAction}</button><p class="form-note">${t.seasonNote}</p></form>`);$('#date').value=state.date||'';$('#date').oninput=e=>state.date=e.target.value;$('#date-form').onsubmit=e=>{e.preventDefault();state.season=seasonalIndex(state.date);if(state.season<0){toast(t.dateError);return;}state.result='season';showResult(true);};}
function renderHands(){const t=text();panel.insertAdjacentHTML('beforeend',`<form id="hands-form">${label('photo',t.photo)}<input id="photo" type="file" accept="image/jpeg,image/png,image/webp"><p class="form-note">${t.photoHint}</p><img id="photo-preview" class="photo-preview" alt="${t.photo}" hidden><button id="remove-photo" type="button" hidden>${t.removePhoto}</button>${label('effort',t.effort)}<textarea id="effort" maxlength="300" placeholder="${t.effortPlaceholder}"></textarea><button class="primary form-action">${t.effortAction}</button></form>`);$('#effort').value=state.effort||'';$('#effort').oninput=e=>state.effort=e.target.value;
 const preview=$('#photo-preview'),remove=$('#remove-photo');
 function bindPhoto(url){preview.onload=()=>{if(photoURL!==url||!preview.isConnected)return;preview.hidden=false;remove.hidden=false;};preview.onerror=()=>{if(photoURL!==url||!preview.isConnected)return;remove.click();toast(text().photoDecode);};preview.src=url;}
 if(photoURL){bindPhoto(photoURL);preview.hidden=false;remove.hidden=false;}
 remove.onclick=()=>{freePhoto();preview.removeAttribute('src');preview.hidden=true;remove.hidden=true;$('#photo').value='';};
 $('#photo').onchange=e=>{const f=e.target.files[0];if(!f)return;if(!['image/jpeg','image/png','image/webp'].includes(f.type)||f.size>8*1024*1024){e.target.value='';toast(text().photoError);return;}freePhoto();photoURL=URL.createObjectURL(f);bindPhoto(photoURL);};
 $('#hands-form').onsubmit=e=>{e.preventDefault();state.result='hands';showResult(true);};}
function renderNote(){const t=text();panel.insertAdjacentHTML('beforeend',`<form id="note-form">${label('note',t.note)}<textarea id="note" maxlength="2000" placeholder="${t.notePlaceholder}" required></textarea><button class="primary form-action">${t.noteAction}</button><p class="form-note">${t.noteDisclosure}</p></form>`);$('#note').value=state.note||'';$('#note').oninput=e=>state.note=e.target.value;$('#note-form').onsubmit=e=>{e.preventDefault();if(!state.note?.trim()){toast(t.noteError);return;}state.kind=noteKind(state.note);state.result='note';showResult(true);};}
function showResult(focus=false){const t=text();let title='',body='',step='',urgent=false;
 if(state.result==='word'){title=state.word;body=t.reflection;step=t.steps[state.topic];}
 if(state.result==='season'){title=t.seasons[state.season];body=t.seasonTexts[state.season];}
 if(state.result==='hands'){title=t.subtitles.palm;body=t.effortResponse;step=t.effortStep;}
 if(state.result==='note'){urgent=state.kind==='urgent';title=urgent?t.urgentTitle:t.responseTitle;body=urgent?t.urgent:state.kind==='general'?t.response:t[state.kind+'Response'];step=urgent?'':t.responseStep;}
 document.body.classList.toggle('quiet-support',urgent);panel.querySelector('.result')?.remove();const result=document.createElement('div');result.className='result';result.setAttribute('role','status');result.setAttribute('aria-live','polite');const h=document.createElement('h3');h.textContent=title;const p=document.createElement('p');p.textContent=body;result.append(h,p);if(step){const s=document.createElement('p');s.className='result-action';s.textContent=step;result.append(s);}if(!urgent){const b=document.createElement('button');b.className='primary';b.dataset.gift='';b.textContent=t.keep;result.append(b);}panel.append(result);if(focus){h.tabIndex=-1;h.focus({preventScroll:true});}}
function loadArt(){artPromise??=new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>{artPromise=null;reject(new Error('Image unavailable'));};img.src=new URL('./pendant.png',import.meta.url).href;});return artPromise;}
async function paintGift(){const revision=++giftRevision,t=text(),word=giftWords[giftIndex][language==='en'?0:1];$('#save-gift').disabled=true;try{const art=await loadArt();if(revision!==giftRevision)return;const canvas=$('#gift-canvas');canvas.width=canvas.height=1200;const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Canvas unavailable');ctx.drawImage(art,0,0,1200,1200);ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#80612e';
 if(language==='zh'){ctx.font='600 172px "KaiTi","SimSun",serif';Array.from(word).forEach((c,i)=>ctx.fillText(c,600,540+i*188));}else{let size=102;ctx.font=`500 ${size}px Georgia,serif`;while(ctx.measureText(word).width>470){size-=2;ctx.font=`500 ${size}px Georgia,serif`;}ctx.fillText(word,600,630);}
 ctx.font='28px Georgia,"SimSun",serif';ctx.fillText(t.signature,600,878);ctx.font='22px Georgia,"SimSun",serif';ctx.fillStyle='#c7b994';ctx.fillText(t.giftFooter,600,1100);canvas.setAttribute('aria-label',`${t.giftAlt}: ${word}`);$('#gift-caption').textContent=word+' · '+t.captions[4];
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(revision!==giftRevision||!blob)return;if(giftURL)URL.revokeObjectURL(giftURL);giftURL=URL.createObjectURL(blob);$('#save-gift').disabled=false;
 }catch{if(revision===giftRevision){$('#gift-caption').textContent=t.giftError;toast(t.giftError);}}}
function chooseGift(){const bytes=crypto.getRandomValues(new Uint32Array(1));let n=bytes[0]%(giftWords.length-(giftIndex<0?0:1));if(giftIndex>=0&&n>=giftIndex)n++;giftIndex=n;void paintGift();}
function openGift(){if(!$('#gift-dialog').open)$('#gift-dialog').showModal();syncPause();chooseGift();}
document.addEventListener('click',e=>{const open=e.target.closest('[data-open]');if(open)openRoute(open.dataset.open);if(e.target.closest('[data-gift]'))openGift();const close=e.target.closest('[data-close]');if(close)$('#'+close.dataset.close).close();});
document.querySelectorAll('dialog').forEach(d=>{d.addEventListener('close',()=>{if(d.id==='gift-dialog'){giftRevision++;if(giftURL)URL.revokeObjectURL(giftURL);giftURL=null;}syncPause();});d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}});});
$('#language').onclick=()=>{language=language==='en'?'zh':'en';render();};$('#about').onclick=()=>{$('#about-dialog').showModal();syncPause();};$('#lucky-cat-widget').onclick=openGift;$('#another-gift').onclick=chooseGift;
$('#save-gift').onclick=()=>{if(!giftURL)return;const a=document.createElement('a');a.href=giftURL;a.download=`best-wishes-${language}-${giftWords[giftIndex][0].toLowerCase()}.png`;document.body.append(a);a.click();a.remove();toast(text().saved);};
$('#sound').onclick=async()=>{if(soundPending)return;soundPending=true;$('#sound').disabled=true;try{if(sound){await sound.stop();sound=null;}else sound=await createMountainSound();}catch{toast(text().soundError);}finally{soundPending=false;$('#sound').disabled=false;syncUI();}};
$('#motion').onclick=()=>{motion=!motion;world?.setMotion(motion);syncUI();};$('#zoom-in').onclick=()=>world?.zoomBy(.88);$('#zoom-out').onclick=()=>world?.zoomBy(1.12);$('#reset-world').onclick=()=>world?.reset();$('#rotate-world').onclick=()=>$('#rotate-world').setAttribute('aria-pressed',String(world?.toggleRotation()||false));
document.addEventListener('visibilitychange',syncPause);window.addEventListener('resize',()=>{$('#navigation-hint').textContent=innerWidth<761?text().touchHint:text().hint;});
render();
try{const {createWorld}=await import('./scene3d.mjs');world=createWorld({mount:$('#scene-mount'),labels:$('#scene-labels'),onEnter:openRoute,onTick:tick,onError:()=>toast(text().fallback)});world.setLanguage(language);world.setMotion(motion);world.setMode(route==='shrine'?'altar':route);if(route==='shrine'){world.altar.setQuantity(state.quantity||3);if(state.started){state.elapsed=0;world.altar.start();}}syncPause();}catch{toast(text().fallback);}
