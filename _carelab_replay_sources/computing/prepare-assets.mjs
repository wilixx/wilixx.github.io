import fs from 'node:fs';
const base=new URL('../../demos/carelab-in-orbit-computing/',import.meta.url);
fs.mkdirSync(new URL('./public/',import.meta.url),{recursive:true});
for(const item of ['replay','cities.json','land.json','favicon.svg','THIRD_PARTY_NOTICES.txt']) fs.cpSync(new URL(item,base),new URL('./public/'+item,import.meta.url),{recursive:true});
