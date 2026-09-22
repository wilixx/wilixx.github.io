/**
 * Lingxi mountain sanctuary. Pure Three.js geometry: no DOM, renderer or network.
 * const { group, destinations, stats } = createMountainModel(THREE);
 * scene.add(group); // Y-up, entrance +Z. Suggested camera (32,24,38), target (0,7,0).
 * Merged meshes retain userData.destination; label positions are group-local.
 */
export function createMountainModel(THREE) {
  const group = new THREE.Group();
  group.name = 'Lingxi · mountain sanctuary';
  const destinationSpecs = [
    { id: 'shrine', label: '明心殿', x: 0, y: 8, z: 0, labelY: 17.15 },
    { id: 'character', label: '问字书院', x: -12, y: 5.9, z: 5, labelY: 11.6 },
    { id: 'birthday', label: '时光阁', x: 9, y: 7.1, z: -9, labelY: 12.65 },
    { id: 'palm', label: '观心亭', x: 12, y: 4.6, z: 8, labelY: 10.3 },
    { id: 'tree', label: '山间树洞', x: -10, y: 6.3, z: -11, labelY: 13.25 },
  ];
  const destinations = destinationSpecs.map(d => ({
    id: d.id, label: d.label, position: [d.x, d.labelY, d.z], hitObjects: [],
  }));
  const lookup = Object.fromEntries(destinations.map(d => [d.id, d]));
  const groups = { landscape: new THREE.Group() };
  groups.landscape.name = 'mountains · paths · pines';
  group.add(groups.landscape);
  for (const d of destinationSpecs) {
    const root = new THREE.Group();
    root.name = d.label;
    root.userData.destination = d.id;
    groups[d.id] = root;
    group.add(root);
  }

  const materials = {
    rock: new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: .98, metalness: .02, flatShading: true }),
    stone: new THREE.MeshStandardMaterial({ color: 0x535b58, roughness: .94, metalness: .03 }),
    stoneDark: new THREE.MeshStandardMaterial({ color: 0x303c3c, roughness: .97 }),
    moss: new THREE.MeshStandardMaterial({ color: 0x344a3f, roughness: 1, flatShading: true }),
    roof: new THREE.MeshStandardMaterial({ color: 0x304b45, roughness: .72, metalness: .13 }),
    roofEdge: new THREE.MeshStandardMaterial({ color: 0x233932, roughness: .76, metalness: .1 }),
    ridge: new THREE.MeshStandardMaterial({ color: 0x526358, roughness: .74, metalness: .15 }),
    timber: new THREE.MeshStandardMaterial({ color: 0x423e36, roughness: .85 }),
    wall: new THREE.MeshStandardMaterial({ color: 0x68675b, roughness: .95 }),
    brass: new THREE.MeshStandardMaterial({ color: 0x938064, roughness: .57, metalness: .5 }),
    window: new THREE.MeshStandardMaterial({ color: 0xd0a768, emissive: 0xbc7c33, emissiveIntensity: .24, roughness: .7 }),
    bark: new THREE.MeshStandardMaterial({ color: 0x45483c, roughness: 1, flatShading: true }),
    pine: new THREE.MeshStandardMaterial({ color: 0x243f34, roughness: 1, flatShading: true }),
    pineLight: new THREE.MeshStandardMaterial({ color: 0x3d5241, roughness: 1, flatShading: true }),
    foliage: new THREE.MeshStandardMaterial({ color: 0x586346, roughness: 1, flatShading: true }),
    ribbon: new THREE.MeshStandardMaterial({ color: 0x8a6651, roughness: .9, side: THREE.DoubleSide }),
  };
  const buckets = new Map();
  const sourceGeometries = new Set();
  const matrix = new THREE.Matrix4();
  const quaternion = new THREE.Quaternion();
  const translation = new THREE.Vector3();
  const size = new THREE.Vector3();
  const euler = new THREE.Euler();
  const normalMatrix = new THREE.Matrix3();
  const pv = new THREE.Vector3();
  const nv = new THREE.Vector3();
  const defaultRockColor = new THREE.Color(0x29383b);
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  const cylinderGeo = new THREE.CylinderGeometry(1, 1, 1, 8, 1, false);
  const thinCylinderGeo = new THREE.CylinderGeometry(1, 1, 1, 4, 1, true);
  const boulderGeo = new THREE.DodecahedronGeometry(1, 0);
  sourceGeometries.add(boxGeo); sourceGeometries.add(cylinderGeo); sourceGeometries.add(thinCylinderGeo); sourceGeometries.add(boulderGeo);

  // Transform and merge once, retaining one GPU mesh per material/destination.
  function add(geo, material, p = [0, 0, 0], s = [1, 1, 1], r = [0, 0, 0], owner = 'landscape', tint = null) {
    sourceGeometries.add(geo);
    const key = owner + '/' + material;
    let b = buckets.get(key);
    if (!b) {
      b = { owner, material, positions: [], normals: [], colors: [] };
      buckets.set(key, b);
    }
    translation.set(...p); size.set(...s); euler.set(...r);
    quaternion.setFromEuler(euler);
    matrix.compose(translation, quaternion, size);
    normalMatrix.getNormalMatrix(matrix);
    const pos = geo.getAttribute('position');
    if (!geo.getAttribute('normal')) geo.computeVertexNormals();
    const normal = geo.getAttribute('normal');
    const color = geo.getAttribute('color');
    const index = geo.getIndex();
    const count = index ? index.count : pos.count;
    const fallback = tint ? new THREE.Color(tint) : defaultRockColor;
    for (let n = 0; n < count; n++) {
      const i = index ? index.getX(n) : n;
      pv.fromBufferAttribute(pos, i).applyMatrix4(matrix);
      if (material === 'rock') pv.y = Math.max(0, pv.y);
      nv.fromBufferAttribute(normal, i).applyMatrix3(normalMatrix).normalize();
      b.positions.push(pv.x, pv.y, pv.z);
      b.normals.push(nv.x, nv.y, nv.z);
      if (material === 'rock') b.colors.push(color ? color.getX(i) : fallback.r, color ? color.getY(i) : fallback.g, color ? color.getZ(i) : fallback.b);
    }
  }
  const box = (p, s, mat, owner = 'landscape', r = [0, 0, 0]) => add(boxGeo, mat, p, s, r, owner);
  function beam(a, b, radius, mat, owner = 'landscape', radiusTop = radius) {
    const av = new THREE.Vector3(...a), bv = new THREE.Vector3(...b);
    const delta = bv.clone().sub(av);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.clone().normalize());
    const rot = new THREE.Euler().setFromQuaternion(q);
    let geo = radius <= .045 ? thinCylinderGeo : cylinderGeo;
    if (radiusTop !== radius) geo = new THREE.CylinderGeometry(radiusTop / radius, 1, 1, 7, 1, false);
    add(geo, mat, av.add(bv).multiplyScalar(.5).toArray(), [radius, delta.length(), radius], [rot.x, rot.y, rot.z], owner);
  }
  function meshFrom(positions, colors = null) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    if (colors) geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    return geo;
  }
  function rng(seed) {
    let state = seed >>> 0;
    return () => { state = (1664525 * state + 1013904223) >>> 0; return state / 4294967296; };
  }

  // Broad connected massif with offset strata and a quiet level summit.
  function mountain(cx, cz, radiusX, radiusZ, height, seed, owner = 'landscape', central = false) {
    const random = rng(seed);
    const count = central ? 40 : 24;
    const phases = Array.from({ length: count }, () => .89 + random() * .2);
    const profiles = central
      ? [[0,1.02],[.11,1],[.34,.85],[.57,.64],[.8,.47],[1,.355]]
      : [[0,1.03],[.14,1],[.37,.84],[.68,.64],[.91,.52],[1,.5]];
    const rings = profiles.map(([level, radius], j) => Array.from({ length: count }, (_, i) => {
      const a = i * Math.PI * 2 / count;
      const wobble = phases[i] * (1 + Math.sin(i * 1.83 + j * .7) * .035);
      const yy = level === 1 ? height : Math.max(0, height * level + (random() - .5) * height * .065);
      return [cx + Math.cos(a) * radiusX * radius * wobble + Math.sin(j * 1.7) * .2, yy, cz + Math.sin(a) * radiusZ * radius * wobble];
    }));
    const positions = [], colors = [];
    const palette = [0x233238,0x29383b,0x334247,0x27363a,0x3b4847,0x30403f].map(c => new THREE.Color(c));
    const topPalette = [0x3a4842,0x424d46,0x384841].map(c => new THREE.Color(c));
    function tri(a,b,c,col) { positions.push(...a,...b,...c); for(let k=0;k<3;k++) colors.push(col.r,col.g,col.b); }
    for (let j = 0; j < rings.length - 1; j++) for (let i = 0; i < count; i++) {
      const next = (i + 1) % count;
      const col = palette[Math.floor(random() * palette.length)];
      tri(rings[j][i], rings[j + 1][i], rings[j][next], col);
      tri(rings[j][next], rings[j + 1][i], rings[j + 1][next], palette[Math.floor(random() * palette.length)]);
    }
    const rim = rings[rings.length - 1];
    for (let i = 0; i < count; i++) tri([cx,height,cz],rim[(i+1)%count],rim[i],topPalette[i%3]);
    add(meshFrom(positions,colors),'rock',[0,0,0],[1,1,1],[0,0,0],owner);
  }
  mountain(0, 0, 22, 19.5, 8, 807, 'landscape', true);
  for (const d of destinationSpecs.slice(1)) mountain(d.x, d.z, d.id === 'tree' ? 7.25 : 6.25, 5.7, d.y, d.id.length * 291 + d.x * 19, d.id);

  // Long rock facets and moss shelves break the ring silhouette without noise.
  const rockRandom = rng(1971);
  for (let i = 0; i < 35; i++) {
    const a = i * 2.39996;
    const ring = 12 + rockRandom() * 7.8;
    const px = Math.cos(a)*ring, pz=Math.sin(a)*ring*.88;
    if (destinationSpecs.some(d => Math.pow((px-d.x)/4.5,2)+Math.pow((pz-d.z)/4.0,2)<1.2)) continue;
    if (Math.abs(px)<2.0 && pz>5.5) continue;
    const py = Math.max(.6, 5.6 - (ring-12)*.54);
    const color = [0x29373b,0x344144,0x233237,0x3c4947][i%4];
    add(boulderGeo,'rock',[px,py,pz],[1.15+rockRandom()*1.65,1.05+rockRandom()*2.1,.8+rockRandom()*1.45],[.13, a,.12], 'landscape',color);
    if (i % 4 === 0) add(boulderGeo,'moss',[px,py+1.0,pz],[1.1,.17,.7],[.08,a,.1]);
  }

  // Sample the actual faceted surface, so stairs and planting never float or sink.
  function terrainHeight(x,z) {
    let highest=0;
    for(const b of buckets.values()) {
      if(b.material!=='rock')continue;
      const p=b.positions;
      for(let i=0;i<p.length;i+=9) {
        const ax=p[i],az=p[i+2],bx=p[i+3],bz=p[i+5],cx=p[i+6],cz=p[i+8];
        if(x<Math.min(ax,bx,cx)||x>Math.max(ax,bx,cx)||z<Math.min(az,bz,cz)||z>Math.max(az,bz,cz))continue;
        const den=(bz-cz)*(ax-cx)+(cx-bx)*(az-cz);
        if(Math.abs(den)<1e-7)continue;
        const u=((bz-cz)*(x-cx)+(cx-bx)*(z-cz))/den;
        const v=((cz-az)*(x-cx)+(ax-cx)*(z-cz))/den;
        if(u>=-.001&&v>=-.001&&u+v<=1.001)highest=Math.max(highest,u*p[i+1]+v*p[i+4]+(1-u-v)*p[i+7]);
      }
    }
    return highest;
  }

  // A genuinely swept hip roof: five curved rings, raised corners, ribbed tiles.
  const roofProfiles = [[.50,.045,1,0],[.63,.29,.74,.025],[.79,.60,.40,.10],[.94,.87,.10,.21],[1,1,.015,.31]];
  function roofPoint(x, z, ring, w, d, h) {
    const [rx,rz,y,lift] = roofProfiles[ring];
    const corner = Math.pow(Math.abs(x*z), 3);
    return [x*w*.5*rx, h*y + lift*h*corner, z*d*.5*rz];
  }
  function roof(cx, y, cz, w, d, h, owner) {
    const perimeter = [];
    const n = 10;
    for(let side=0;side<4;side++) for(let i=0;i<n;i++) {
      const t = i/n*2-1;
      perimeter.push(side===0?[t,-1]:side===1?[1,t]:side===2?[-t,1]:[-1,-t]);
    }
    const rings = roofProfiles.map((_,j)=>perimeter.map(([x,z])=>roofPoint(x,z,j,w,d,h)));
    const pos=[];
    const tri=(a,b,c)=>pos.push(...a,...b,...c);
    for(let j=0;j<rings.length-1;j++) for(let i=0;i<perimeter.length;i++) {
      const next=(i+1)%perimeter.length;
      tri(rings[j][i],rings[j][next],rings[j+1][i]);
      tri(rings[j][next],rings[j+1][next],rings[j+1][i]);
    }
    const top=rings[0],outer=rings[rings.length-1];
    for(let i=0;i<top.length;i++) tri([0,h,0],top[(i+1)%top.length],top[i]);
    add(meshFrom(pos),'roof',[cx,y,cz],[1,1,1],[0,0,0],owner);
    // A substantial dark fascia follows the exact upturned perimeter.
    const edge=[];
    for(let i=0;i<outer.length;i++) {
      const a=outer[i],b=outer[(i+1)%outer.length],aa=[a[0],a[1]-.14,a[2]],bb=[b[0],b[1]-.14,b[2]];
      edge.push(...a,...b,...aa,...aa,...b,...bb);
      beam([cx+a[0],y+a[1]+.012,cz+a[2]],[cx+b[0],y+b[1]+.012,cz+b[2]],.029,'ridge',owner);
    }
    add(meshFrom(edge),'roofEdge',[cx,y,cz],[1,1,1],[0,0,0],owner);
    box([cx,y+.02,cz],[w*.82,.12,d*.78],'roofEdge',owner);
    // Slim tile ribs, each following the slope rather than floating flat.
    for(let side=0;side<4;side++) {
      const ribCount = side%2===0 ? Math.round(w*2.5) : Math.round(d*1.5);
      for(let i=1;i<ribCount;i++) {
        const t=i/ribCount*2-1;
        const u=side===0?[t,-1]:side===1?[1,t]:side===2?[t,1]:[-1,t];
        for(let j=0;j<roofProfiles.length-1;j++) {
          const a=roofPoint(...u,j,w,d,h), b=roofPoint(...u,j+1,w,d,h);
          beam([cx+a[0],y+a[1]+.026,cz+a[2]],[cx+b[0],y+b[1]+.026,cz+b[2]],.021,'ridge',owner);
        }
      }
    }
    beam([cx-w*.27,y+h+.09,cz],[cx+w*.27,y+h+.09,cz],.09,'ridge',owner);
    for(const sign of [-1,1]) {
      const pts=[new THREE.Vector3(cx+sign*w*.22,y+h+.07,cz),new THREE.Vector3(cx+sign*w*.28,y+h+.13,cz),new THREE.Vector3(cx+sign*w*.31,y+h+.34,cz)];
      add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),6,.065,5,false),'brass',[0,0,0],[1,1,1],[0,0,0],owner);
    }
  }

  function rail(x,y,z,w,d,owner,frontOpen=true) {
    const barY=y+.47,postH=.67;
    for(const side of [-1,1]) {
      beam([x-w*.5,barY,z+side*d*.5],[x+w*.5,barY,z+side*d*.5],.045,'stoneDark',owner);
      beam([x+side*w*.5,barY,z-d*.5],[x+side*w*.5,barY,z+d*.5],.045,'stoneDark',owner);
    }
    for(let i=0;i<=Math.round(w/1.1);i++) {
      const xx=x-w*.5+i*w/Math.round(w/1.1);
      for(const side of [-1,1]) {
        if(frontOpen&&side===1&&Math.abs(xx-x)<1)continue;
        box([xx,y+postH*.5,z+side*d*.5],[.1,postH,.1],'stone',owner);
        box([xx,y+postH,z+side*d*.5],[.17,.1,.17],'stone',owner);
      }
    }
    for(let i=1;i<Math.round(d/1.1);i++) for(const side of [-1,1]) box([x+side*w*.5,y+postH*.5,z-d*.5+i*d/Math.round(d/1.1)],[.1,postH,.1],'stone',owner);
  }
  function foundation(x,y,z,w,d,owner) {
    box([x,y+.12,z],[w+.72,.24,d+.65],'stoneDark',owner);
    box([x,y+.31,z],[w+.5,.19,d+.45],'stone',owner);
    box([x,y+.45,z],[w+.64,.1,d+.59],'stoneDark',owner);
    for(let i=0;i<4;i++) box([x,y+.06+i*.115,z+d*.5+.95-i*.18],[w*.38,.12,.42],'stone',owner);
    // Relief blocks in the base are geometry and stay legible at a distance.
    for(const side of [-1,1]) for(let i=0;i<4;i++) box([x-w*.34+i*w*.225,y+.3,z+side*(d*.5+.24)],[w*.19,.15,.035],'stoneDark',owner);
    return y+.51;
  }
  function hall(x,y,z,w,d,height,owner,twoStorey=false,open=false) {
    const floor=foundation(x,y,z,w,d,owner);
    const colY=floor+height*.5;
    if(!open) {
      box([x,floor+height*.46,z-.12],[w*.88,height*.9,d*.7],'wall',owner);
      // Inset doors, with windows on all four sides of the actual building.
      box([x,floor+height*.41,z+d*.354],[w*.35,height*.79,.10],'timber',owner);
      for(const side of [-1,1]) {
        box([x+side*w*.30,floor+height*.53,z+d*.36],[w*.20,height*.47,.075],'window',owner);
        box([x+side*w*.30,floor+height*.53,z-d*.48],[w*.20,height*.47,.075],'window',owner);
        for(let i=-1;i<=1;i++) {
          box([x+side*w*.30+i*w*.051,floor+height*.53,z+d*.37],[.035,height*.52,.075],'timber',owner);
          box([x+side*w*.30+i*w*.051,floor+height*.53,z-d*.49],[.035,height*.52,.075],'timber',owner);
        }
        for(const zz of [-.2,.2]) {
          box([x+side*w*.451,floor+height*.53,z+zz*d],[.07,height*.47,d*.22],'window',owner);
          for(let j=-1;j<=1;j++) box([x+side*w*.463,floor+height*.53,z+zz*d+j*d*.055],[.08,height*.51,.035],'timber',owner);
        }
      }
      // Pane transoms, door stile and muted brass handle pair.
      box([x,floor+height*.53,z+d*.39],[w*.89,.055,.06],'timber',owner);
      box([x,floor+height*.42,z+d*.414],[.05,height*.82,.07],'brass',owner);
      for(const s of [-1,1]) box([x+s*.13,floor+height*.4,z+d*.424],[.035,.16,.06],'brass',owner);
    }
    for(const side of [-1,1]) for(const xx of [-.44,0,.44]) {
      const px=x+xx*w,pz=z+side*d*.44;
      beam([px,floor,pz],[px,floor+height,pz],w*.023,'timber',owner);
      box([px,floor+.08,pz],[w*.065,.16,w*.065],'stone',owner);
      box([px,floor+height-.13,pz],[w*.091,.14,w*.086],'brass',owner);
      for(const off of [-1,1]) box([px+off*w*.038,floor+height-.025,pz],[w*.13,.13,w*.06],'timber',owner,[0,0,off*.18]);
    }
    for(const side of [-1,1]) box([x,floor+height-.02,z+side*d*.44],[w*.99,.17,.17],'timber',owner);
    roof(x,floor+height+.03,z,w*1.34,d*1.42,twoStorey?1.55:1.13,owner);
    if(twoStorey) {
      const up=floor+height+.95,uw=w*.61,ud=d*.64,uh=1.62;
      box([x,up+uh*.43,z],[uw,uh*.86,ud],'timber',owner);
      for(const side of [-1,1]) {
        box([x,up+uh*.52,z+side*ud*.51],[uw*.81,uh*.45,.07],'window',owner);
        box([x+side*uw*.51,up+uh*.52,z],[.07,uh*.45,ud*.75],'window',owner);
        for(let i=-3;i<=3;i++) box([x+i*uw*.12,up+uh*.51,z+side*ud*.53],[.05,uh*.54,.10],'timber',owner);
        for(let i=-2;i<=2;i++) box([x+side*uw*.53,up+uh*.51,z+i*ud*.15],[.10,uh*.54,.05],'timber',owner);
        for(const sx of [-1,1]) beam([x+sx*uw*.51,up,z+side*ud*.52],[x+sx*uw*.51,up+uh,z+side*ud*.52],.1,'timber',owner);
      }
      roof(x,up+uh,z,w*1.07,d*1.14,1.8,owner);
    }
    return floor+height;
  }

  hall(0,8,0,7.1,5.6,2.55,'shrine',true);
  hall(-12,5.9,5,3.55,2.9,1.95,'character');
  hall(9,7.1,-9,3.6,2.85,1.9,'birthday');
  hall(12,4.6,8,3.3,3.0,2.08,'palm',false,true);
  hall(-11.0,6.3,-12.1,2.75,2.45,1.65,'tree',false,true);
  rail(0,8.06,0,11.1,8.9,'shrine',true);

  // Front gate and two stone lanterns keep the arrival sequence readable.
  for(const s of [-1,1]) {
    const x=s*1.24,z=5.28;
    box([x,8.2,z],[.56,.4,.6],'stoneDark','shrine');
    beam([x,8.32,z],[x,10.38,z],.14,'timber','shrine');
    box([x,9.95,z],[.4,.16,.3],'brass','shrine');
  }
  box([0,10.17,5.28],[3.08,.22,.27],'timber','shrine');
  roof(0,10.33,5.28,3.55,1.57,.70,'shrine');
  function lantern(x,y,z,owner) {
    box([x,y+.07,z],[.5,.14,.5],'stone',owner);
    beam([x,y+.12,z],[x,y+.86,z],.085,'stoneDark',owner);
    box([x,y+.87,z],[.43,.14,.43],'stone',owner);
    box([x,y+1.13,z],[.25,.4,.25],'window',owner);
    for(const sx of [-1,1])for(const sz of [-1,1])box([x+sx*.16,y+1.1,z+sz*.16],[.035,.4,.035],'timber',owner);
    roof(x,y+1.33,z,.72,.72,.29,owner);
  }
  lantern(-2.9,8.49,3.4,'shrine'); lantern(2.9,8.49,3.4,'shrine');

  // Ceremonial stair and four modest timber links follow the terrace levels.
  const stepCount=44, stairTops=[];
  for(let i=0;i<stepCount;i++) {
    const z=20.6-i*.335;
    const y=Math.max(terrainHeight(0,z)+.115,i?stairTops[i-1][1]+.015:0);
    stairTops.push([z,y]);
    box([0,y-.16,z],[2.12,.34,.38],'stone');
    for(const s of [-1,1]) {
      box([s*1.18,y-.12,z],[.19,.32,.38],'stoneDark');
      if(i%4===0)box([s*1.18,y+.34,z],[.14,.72,.14],'stone');
    }
  }
  for(const s of [-1,1])for(let i=0;i<stairTops.length-1;i++) {
    const [za,ya]=stairTops[i],[zb,yb]=stairTops[i+1];
    beam([s*1.18,ya+.59,za],[s*1.18,yb+.59,zb],.042,'stoneDark');
  }
  function bridge(a,b,width=.98) {
    const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),v=bv.clone().sub(av);
    const horizontal=Math.hypot(v.x,v.z),count=Math.max(6,Math.ceil(horizontal/.28));
    const angle=Math.atan2(v.x,v.z),perp=new THREE.Vector3(Math.cos(angle),0,-Math.sin(angle));
    const points=Array.from({length:count+1},(_,i)=>{
      const p=av.clone().lerp(bv,i/count);
      p.y=Math.max(p.y,terrainHeight(p.x,p.z)+.19);
      return p;
    });
    for(let i=0;i<count;i++) {
      const p=points[i].clone().lerp(points[i+1],.5);
      box([p.x,p.y-.05,p.z],[width,.12,horizontal/count*.94],'timber','landscape',[0,angle,0]);
      if(i%4===0||i===count-1)for(const s of [-1,1]) {
        const edge=p.clone().addScaledVector(perp,s*width*.48);
        box([edge.x,edge.y+.3,edge.z],[.065,.64,.065],'timber');
      }
    }
    for(const s of [-1,1])for(let i=0;i<count;i++) {
      const aa=points[i].clone().addScaledVector(perp,s*width*.48),bb=points[i+1].clone().addScaledVector(perp,s*width*.48);
      beam([aa.x,aa.y+.58,aa.z],[bb.x,bb.y+.58,bb.z],.027,'brass');
      beam([aa.x,aa.y-.09,aa.z],[bb.x,bb.y-.09,bb.z],.075,'timber');
    }
  }
  bridge([-5.7,8.16,2.6],[-9.85,6.45,4.4],1.06);
  bridge([4.3,8.17,-4.2],[7.2,7.65,-7.5],.99);
  bridge([5.55,7.86,4.1],[10.05,5.14,6.7],1.02);
  bridge([-4.8,8.18,-4.4],[-8.65,6.86,-8.75],1.0);

  // Wind-shaped pines: branching trunks and irregular, horizontal needle pads.
  const foliageGeo=new THREE.IcosahedronGeometry(1,1);
  sourceGeometries.add(foliageGeo);
  function pine(x,y,z,height,seed,owner='landscape') {
    const random=rng(seed),lean=(random()-.5)*.5;
    const trunk=[[x,y,z],[x+lean*.35,y+height*.42,z+.08],[x+lean,y+height*.78,z-.08],[x+lean*1.1,y+height,z-.1]];
    for(let i=0;i<3;i++)beam(trunk[i],trunk[i+1],height*(.040-i*.010),'bark',owner,height*(.033-i*.010));
    for(let i=0;i<7;i++) {
      const level=.35+i*.083,a=i*2.399+random()*.55;
      const reach=height*(.32-i*.022),yy=y+height*level;
      const tip=[x+lean*level+Math.cos(a)*reach,yy+.1,z+Math.sin(a)*reach];
      beam([x+lean*level,yy-.1,z],tip,height*.014,'bark',owner,height*.007);
      add(foliageGeo,i%3===0?'pineLight':'pine',[tip[0],tip[1]+height*.025,tip[2]],[reach*.78,height*.075,reach*.53],[.05,a,.08],owner);
      if(i%2===0)add(foliageGeo,'pine',[tip[0]+Math.cos(a+.8)*reach*.27,tip[1]+height*.04,tip[2]+Math.sin(a+.8)*reach*.27],[reach*.60,height*.06,reach*.45],[.03,a+.5,-.1],owner);
    }
    add(foliageGeo,'pine',[x+lean*1.1,y+height*.99,z-.1],[height*.2,height*.09,height*.15],[0,.7,0],owner);
  }
  const pines=[[-6.1,8,-1.6,4.1],[-5.2,8,-3.3,3.35],[5.2,8,-2.1,3.65],[3.7,7.3,5.3,3.05],[-15.1,5.9,3.4,3.25],[-14.7,5.9,6.9,2.45],[11.1,7.1,-10.3,3.5],[7.6,7.1,-11.1,2.5],[14.2,4.6,7,3.2],[10.6,4.6,10.2,2.6],[-12.1,6.3,-9,3.0],[-8.9,6.3,-13.4,2.8],[-6.9,3.1,13.5,3.5],[7.4,2.8,14.3,3.0],[-17.1,2.2,-1.3,2.65],[16.6,1.8,-3.2,3.1],[1.1,4.3,-14.5,3.55]];
  pines.forEach(([x,y,z,h],i)=>pine(x,Math.max(y,terrainHeight(x,z)),z,h,211+i*17));

  // Ancient wishing tree on its own western terrace; ribbons are muted cloth.
  const tx=-8.6,ty=6.3,tz=-10.1;
  const treeBranches=[
    [[tx,ty,tz],[tx-.23,ty+1.7,tz+.12],.22,.16],
    [[tx-.23,ty+1.7,tz+.12],[tx+.13,ty+3.5,tz],.16,.09],
    [[tx-.12,ty+2.0,tz],[tx-1.25,ty+3.5,tz+.6],.13,.055],
    [[tx,ty+2.7,tz],[tx+1.5,ty+4.0,tz+.8],.10,.045],
    [[tx,ty+2.7,tz],[tx-.4,ty+4.4,tz-1.05],.10,.04],
  ];
  for(const [a,b,r1,r2]of treeBranches)beam(a,b,r1,'bark','tree',r2);
  const crowns=[[-1.15,3.65,.55,1.36,.58,1.0],[.1,4.15,0,1.55,.64,1.30],[1.15,4.2,.72,1.24,.6,1.02],[-.45,4.65,-.95,1.12,.52,1.0]];
  for(const [x,y,z,sx,sy,sz]of crowns)add(foliageGeo,'foliage',[tx+x,ty+y,tz+z],[sx,sy,sz],[.07,x,.04],'tree');
  for(let i=0;i<7;i++) {
    const x=tx-1.25+i*.42,z=tz+.7+Math.sin(i)*.35,y=ty+3.4+(i%3)*.12;
    beam([x,y,z],[x,y-.2,z],.009,'brass','tree');
    box([x,y-.48,z],[.085,.57,.019],'ribbon','tree',[0,.15*i,.04*Math.sin(i)]);
  }
  // Small stone seats / offertory tables distinguish the open pavilions.
  box([12,5.43,8],[1.12,.12,.72],'stone','palm');
  for(const s of [-1,1])box([12+s*.37,5.2,8],[.13,.4,.52],'stoneDark','palm');
  box([-10.9,7.11,-12.1],[.9,.14,.56],'timber','tree');
  for(const s of [-1,1])box([-10.9+s*.29,6.9,-12.1],[.09,.37,.45],'timber','tree');

  let triangles=0,vertices=0,drawCalls=0;
  for(const b of buckets.values()) {
    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position',new THREE.Float32BufferAttribute(b.positions,3));
    geo.setAttribute('normal',new THREE.Float32BufferAttribute(b.normals,3));
    if(b.colors.length)geo.setAttribute('color',new THREE.Float32BufferAttribute(b.colors,3));
    geo.computeBoundingBox(); geo.computeBoundingSphere();
    const mesh=new THREE.Mesh(geo,materials[b.material]);
    mesh.name=b.owner+' · '+b.material;
    mesh.castShadow=true; mesh.receiveShadow=true;
    if(b.owner!=='landscape') {
      mesh.userData.destination=b.owner;
      lookup[b.owner].hitObjects.push(mesh);
    }
    groups[b.owner].add(mesh);
    triangles+=b.positions.length/9;vertices+=b.positions.length/3;drawCalls++;
  }
  for(const geo of sourceGeometries)geo.dispose();
  const bounds=new THREE.Box3().setFromObject(group);
  const stats={triangles,vertices,drawCalls,materialCount:Object.keys(materials).length,bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()}};
  group.userData={...group.userData,asset:'lingxi-mountain-v1',stats};
  return {group,destinations,stats};
}

export default createMountainModel;
