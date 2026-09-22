/**
 * Four self-contained, procedurally modelled companion dioramas.
 * No imports, DOM, textures, network access, or renderer ownership.
 * Usage: const models = createCompanionModels(THREE);
 *        scene.add(models.scenes.character.group);
 *        models.scenes.character.update(dtInSeconds, elapsedSeconds);
 *        models.dispose();
 * Only one diorama is intended to be visible at a time. All motion is a pure
 * function of elapsedSeconds; dt <= 0 holds the current pose for reduced motion.
 */
export function createCompanionModels(THREE) {
  const geometries = new Set();
  const materials = new Set();
  let disposed = false;
  const own = (g) => { geometries.add(g); return g; };
  const material = (color, roughness = 0.8, metalness = 0, extra = {}) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
    materials.add(m);
    return m;
  };
  const M = {
    basalt: material(0x27332f, 0.94),
    stone: material(0x54635c, 0.93),
    paleStone: material(0x8d998b, 0.88),
    handStone: material(0x829187, 0.79),
    stoneCut: material(0x5a6c62, 0.96),
    jade: material(0x31584a, 0.92),
    jadeLight: material(0x4a6b52, 0.94),
    jadeDark: material(0x1c3a31, 0.94),
    moss: material(0x697653, 0.97),
    bronze: material(0x967647, 0.47, 0.69),
    darkBronze: material(0x55533a, 0.62, 0.58),
    wood: material(0x4c3c2f, 0.94),
    woodLight: material(0x705541, 0.9),
    bark: material(0x514e3b, 0.98),
    barkLight: material(0x6b6750, 0.97),
    slate: material(0x374b4b, 0.98),
    slateLight: material(0x586b66, 0.99),
    skin: material(0xbca78c, 0.91),
    ivory: material(0xd5d3c3, 0.99),
    hairShade: material(0xa3ada0, 0.99),
    ink: material(0x17251f, 0.79),
    paper: material(0xcfc3a5, 0.98, 0, { side: THREE.DoubleSide }),
    ribbon: material(0x895846, 0.96, 0, { side: THREE.DoubleSide }),
    sageRibbon: material(0x99a080, 0.97, 0, { side: THREE.DoubleSide }),
    ember: material(0xc09b60, 0.45, 0.12, { emissive: 0xd99a43, emissiveIntensity: 1.05 }),
    pearl: material(0xe0cf9f, 0.54, 0.06, { emissive: 0xe8bd6b, emissiveIntensity: 1.5 }),
    orbitGlow: material(0xc4c7a0, 0.52, 0.1, { emissive: 0x96b3a0, emissiveIntensity: 0.74 }),
  };
  const G = {
    box: own(new THREE.BoxGeometry(1, 1, 1)),
    cylinder: own(new THREE.CylinderGeometry(1, 1, 1, 24, 1)),
    rod: own(new THREE.CylinderGeometry(1, 1, 1, 8, 1)),
    octagon: own(new THREE.CylinderGeometry(1, 1, 1, 8, 1)),
    cone: own(new THREE.ConeGeometry(1, 1, 20, 1)),
    sphere: own(new THREE.SphereGeometry(1, 16, 10)),
    detailSphere: own(new THREE.SphereGeometry(1, 10, 6)),
    foliage: own(new THREE.IcosahedronGeometry(1, 2)),
    rock: own(new THREE.IcosahedronGeometry(1, 1)),
  };
  const ringCache = new Map();
  function torus(radius, tube, segments = 64) {
    const key = `${radius}/${tube}/${segments}`;
    if (!ringCache.has(key)) ringCache.set(key, own(new THREE.TorusGeometry(radius, tube, 5, segments)));
    return ringCache.get(key);
  }

  // Static pieces share one merged mesh per material within their parent group.
  // This also keeps the small animated assemblies inexpensive to render.
  function batch(parent, label) {
    const bins = new Map();
    const matrix = new THREE.Matrix4();
    const normal = new THREE.Matrix3();
    const position = new THREE.Vector3();
    const scale = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const euler = new THREE.Euler();
    const direction = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    function transformed(geometry, mat, transform) {
      let bin = bins.get(mat);
      if (!bin) { bin = { p: [], n: [] }; bins.set(mat, bin); }
      const p = geometry.getAttribute('position');
      const n = geometry.getAttribute('normal');
      const idx = geometry.index;
      normal.getNormalMatrix(transform);
      const a = transform.elements;
      const b = normal.elements;
      const count = idx ? idx.count : p.count;
      for (let j = 0; j < count; j++) {
        const i = idx ? idx.getX(j) : j;
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        bin.p.push(a[0]*x+a[4]*y+a[8]*z+a[12], a[1]*x+a[5]*y+a[9]*z+a[13], a[2]*x+a[6]*y+a[10]*z+a[14]);
        const nx = n.getX(i), ny = n.getY(i), nz = n.getZ(i);
        const u = b[0]*nx+b[3]*ny+b[6]*nz;
        const v = b[1]*nx+b[4]*ny+b[7]*nz;
        const w = b[2]*nx+b[5]*ny+b[8]*nz;
        const inverse = 1 / (Math.hypot(u, v, w) || 1);
        bin.n.push(u*inverse, v*inverse, w*inverse);
      }
    }
    const api = {
      add(geometry, mat, p = [0,0,0], s = [1,1,1], r = [0,0,0]) {
        position.set(p[0], p[1], p[2]);
        scale.set(s[0], s[1], s[2]);
        quat.setFromEuler(euler.set(r[0], r[1], r[2]));
        matrix.compose(position, quat, scale);
        transformed(geometry, mat, matrix);
        return api;
      },
      rod(mat, from, to, radius) {
        position.set((from[0]+to[0])/2, (from[1]+to[1])/2, (from[2]+to[2])/2);
        direction.set(to[0]-from[0], to[1]-from[1], to[2]-from[2]);
        const length = direction.length();
        if (length < 0.00001) return api;
        direction.multiplyScalar(1/length);
        quat.setFromUnitVectors(up, direction);
        scale.set(radius, length, radius);
        matrix.compose(position, quat, scale);
        transformed(G.rod, mat, matrix);
        return api;
      },
      finish() {
        for (const [mat, bin] of bins) {
          const geometry = own(new THREE.BufferGeometry());
          geometry.setAttribute('position', new THREE.Float32BufferAttribute(bin.p, 3));
          geometry.setAttribute('normal', new THREE.Float32BufferAttribute(bin.n, 3));
          geometry.computeBoundingSphere();
          const mesh = new THREE.Mesh(geometry, mat);
          mesh.name = `${label}-${mat.uuid.slice(0,8)}`;
          mesh.castShadow = mat !== M.pearl && mat !== M.ember && mat !== M.orbitGlow;
          mesh.receiveShadow = true;
          parent.add(mesh);
        }
        bins.clear();
      },
    };
    return api;
  }
  function group(name, parent, p = [0,0,0], r = [0,0,0]) {
    const g = new THREE.Group();
    g.name = name;
    g.position.set(p[0],p[1],p[2]);
    g.rotation.set(r[0],r[1],r[2]);
    if (parent) parent.add(g);
    return g;
  }
  function light(parent, p, intensity = 1.1, distance = 5) {
    const l = new THREE.PointLight(0xe6b668, intensity, distance, 2);
    l.position.set(p[0],p[1],p[2]);
    l.castShadow = false;
    parent.add(l);
    return l;
  }
  // Smooth tapered curves with an optional shallow bark/cloth relief.
  function tube(points, radii, steps = 20, sides = 10, relief = 0) {
    const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)), false, 'centripetal');
    const vertices = [], indices = [];
    const cross = new THREE.Vector3(), perpendicular = new THREE.Vector3();
    const reference = new THREE.Vector3();
    for (let i=0; i<=steps; i++) {
      const t = i/steps;
      const c = curve.getPoint(t), tangent = curve.getTangent(t).normalize();
      reference.set(Math.abs(tangent.y)>0.93 ? 1 : 0, Math.abs(tangent.y)>0.93 ? 0 : 1, 0);
      cross.crossVectors(tangent, reference).normalize();
      perpendicular.crossVectors(tangent,cross).normalize();
      const rIndex = t*(radii.length-1), low = Math.min(radii.length-2,Math.floor(rIndex));
      const radius = radii[low]+(radii[low+1]-radii[low])*(rIndex-low);
      for (let j=0; j<=sides; j++) {
        const a = j/sides*Math.PI*2;
        const rough = 1 + relief*(Math.sin(a*7+0.45*Math.sin(t*10)) + 0.3*Math.sin(a*3-t*13));
        const u = Math.cos(a)*radius*rough, v = Math.sin(a)*radius*rough;
        vertices.push(c.x+cross.x*u+perpendicular.x*v, c.y+cross.y*u+perpendicular.y*v, c.z+cross.z*u+perpendicular.z*v);
        if (i<steps && j<sides) {
          const k = i*(sides+1)+j;
          indices.push(k,k+1,k+sides+1,k+1,k+sides+2,k+sides+1);
        }
      }
    }
    const first = curve.getPoint(0), last = curve.getPoint(1);
    const firstIndex = vertices.length/3;
    vertices.push(first.x,first.y,first.z,last.x,last.y,last.z);
    for (let j=0;j<sides;j++) {
      indices.push(firstIndex,j+1,j);
      const k = steps*(sides+1)+j;
      indices.push(firstIndex+1,k,k+1);
    }
    const geo = own(new THREE.BufferGeometry());
    geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }
  function band(radius, width, depth, segments = 96) {
    const p = [], ix = [];
    for (let j=0;j<=segments;j++) {
      const a=j/segments*Math.PI*2, c=Math.cos(a), s=Math.sin(a);
      for (const [r,z] of [[radius-width/2,-depth/2],[radius+width/2,-depth/2],[radius+width/2,depth/2],[radius-width/2,depth/2]]) p.push(r*c,r*s,z);
      if(j<segments) for(let k=0;k<4;k++) {
        const a0=j*4+k, a1=j*4+(k+1)%4, b0=a0+4, b1=a1+4;
        ix.push(a0,b0,a1,a1,b0,b1);
      }
    }
    const g=own(new THREE.BufferGeometry());
    g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));
    g.setIndex(ix); g.computeVertexNormals();
    return g;
  }
  function foldedRobe() {
    const p=[],ix=[], sides=40, rows=15;
    for(let i=0;i<=rows;i++) {
      const t=i/rows, y=-0.88+t*1.62;
      const radius=0.77-0.25*t+0.13*Math.sin(t*Math.PI);
      for(let j=0;j<=sides;j++) {
        const a=j/sides*Math.PI*2;
        const fold=1+0.06*Math.sin(a*10+0.65*t)*(1-t*0.55);
        p.push(Math.cos(a)*radius*fold,y,Math.sin(a)*radius*fold*0.72);
        if(i<rows&&j<sides) { const k=i*(sides+1)+j; ix.push(k,k+sides+1,k+1,k+1,k+sides+1,k+sides+2); }
      }
    }
    const g=own(new THREE.BufferGeometry());
    g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));
    g.setIndex(ix); g.computeVertexNormals(); return g;
  }
  function roofGeometry() {
    const p=[], ix=[], nx=28,nz=14;
    for(let j=0;j<=nz;j++) for(let i=0;i<=nx;i++) {
      const x=-4.7+9.4*i/nx,z=-2.6+4.9*j/nz;
      const h=roofHeight(x,z);
      p.push(x,h,z);
      if(i<nx&&j<nz) { const k=j*(nx+1)+i; ix.push(k,k+nx+1,k+1,k+1,k+nx+1,k+nx+2); }
    }
    const g=own(new THREE.BufferGeometry());
    g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));
    g.setIndex(ix); g.computeVertexNormals(); return g;
  }
  function roofHeight(x,z) {
    const d=Math.abs(z+0.15)/2.45;
    return 7.14-0.66*d+0.48*Math.pow(Math.abs(x)/4.7,4)+0.16*Math.pow(d,6);
  }
  function cloth(length, width, phase) {
    const p=[], ix=[],rows=12;
    for(let i=0;i<=rows;i++) {
      const t=i/rows;
      for(let j=0;j<2;j++) p.push((j-.5)*width+0.055*Math.sin(t*5+phase)*t, -t*length, 0.065*Math.sin(t*6+phase)*t);
      if(i<rows) { const k=i*2; ix.push(k,k+2,k+1,k+1,k+2,k+3); }
    }
    const g=own(new THREE.BufferGeometry());
    g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));
    g.setIndex(ix); g.computeVertexNormals(); return g;
  }
  function lantern(parent, name, p, scale = 1, cord = 0.5) {
    const g=group(name,parent,p); g.scale.setScalar(scale);
    const b=batch(g,name);
    b.rod(M.darkBronze,[0,0,0],[0,-cord,0],0.015);
    const y=-cord-0.29;
    b.add(G.cylinder,M.ember,[0,y,0],[0.20,0.43,0.20]);
    b.add(G.octagon,M.bronze,[0,y+.25,0],[.27,.075,.27]);
    b.add(G.octagon,M.bronze,[0,y-.25,0],[.24,.065,.24]);
    b.add(G.cone,M.darkBronze,[0,y+.34,0],[.30,.16,.30]);
    for(let k=0;k<4;k++) {
      const a=k*Math.PI/2+Math.PI/4;
      b.rod(M.darkBronze,[Math.cos(a)*.20,y-.23,Math.sin(a)*.20],[Math.cos(a)*.20,y+.23,Math.sin(a)*.20],.018);
    }
    b.add(G.detailSphere,M.pearl,[0,y,0],[.08,.16,.08]);
    b.rod(M.bronze,[0,y-.29,0],[0,y-.48,0],.012);
    b.finish();
    return g;
  }

  function buildCharacter() {
    const root=group('companion-scholar-pavilion');
    const b=batch(root,'pavilion');
    b.add(G.octagon,M.basalt,[0,.16,0],[5.25,.32,4.55],[0,Math.PI/8,0]);
    b.add(G.box,M.stone,[0,.44,-.15],[8.3,.27,5.65]);
    b.add(G.box,M.paleStone,[0,.585,-.15],[8.12,.035,5.45]);
    b.add(G.box,M.stone,[0,.23,3.17],[3.65,.24,.91]);
    b.add(G.box,M.stone,[0,.11,3.81],[4.05,.22,.52]);
    for(const x of [-3.55,3.55]) for(const z of [-1.75,1.55]) {
      b.add(G.octagon,M.stone,[x,.81,z],[.36,.44,.36]);
      b.add(G.cylinder,M.wood,[x,3.58,z],[.19,5.24,.19]);
      b.add(G.cylinder,M.bronze,[x,1.11,z],[.21,.11,.21]);
      b.add(G.box,M.woodLight,[x,6.14,z],[.74,.22,.56]);
      b.add(G.box,M.wood,[x,6.41,z],[.96,.20,.73]);
      b.rod(M.wood,[x,5.59,z],[x+(x<0?.64:-.64),6.28,z],.095);
    }
    for(const z of [-1.75,1.55]) {
      b.add(G.box,M.wood,[0,6.35,z],[8.05,.32,.31]);
      b.add(G.box,M.bronze,[0,6.56,z],[7.95,.045,.35]);
    }
    for(const x of [-3.55,3.55]) b.add(G.box,M.wood,[x,6.35,-.10],[.30,.31,3.8]);
    // Rear lattice leaves a quiet open view around the seated figure.
    for(const x of [-2.9,-2.48,2.48,2.9]) b.add(G.box,M.woodLight,[x,3.38,-1.95],[.055,4.40,.07]);
    for(const y of [1.2,2.27,4.76,5.65]) {
      b.add(G.box,M.wood,[-2.7,y,-1.95],[1.12,.075,.08]);
      b.add(G.box,M.wood,[2.7,y,-1.95],[1.12,.075,.08]);
    }
    b.add(roofGeometry(),M.jadeDark);
    for(const z of [-2.6,2.3]) {
      const pts=[];for(let i=0;i<=12;i++) { const x=-4.7+9.4*i/12;pts.push([x,roofHeight(x,z),z]); }
      b.add(tube(pts,[.07,.07],30,6),M.darkBronze);
    }
    for(let i=0;i<19;i++) {
      const x=-4.5+i*.5, pts=[];
      for(let j=0;j<=10;j++) { const z=-2.6+j*.49;pts.push([x,roofHeight(x,z)+.024,z]); }
      b.add(tube(pts,[.024,.024],16,5),M.jade);
    }
    b.rod(M.darkBronze,[-4.62,7.19,-.15],[4.62,7.19,-.15],.068);
    // Low writing desk and carefully proportioned desktop objects.
    b.add(G.box,M.wood,[0,2.10,.97],[4.25,.18,1.90]);
    b.add(G.box,M.woodLight,[0,2.20,.97],[4.39,.045,2.02]);
    for(const x of [-1.77,1.77]) for(const z of [.26,1.68]) {
      b.add(G.box,M.wood,[x,1.38,z],[.16,1.43,.16]);
      b.add(G.box,M.darkBronze,[x,.79,z],[.18,.18,.18]);
    }
    b.add(G.box,M.wood,[0,1.88,1.73],[3.67,.26,.10]);
    b.add(G.box,M.wood,[-1.77,1.09,.97],[.10,.10,1.51]);
    b.add(G.box,M.wood,[1.77,1.09,.97],[.10,.10,1.51]);
    b.add(G.box,M.paper,[.02,2.235,.82],[2.16,.025,1.17],[0,-.08,0]);
    for(const x of [-1.06,1.09]) b.add(G.cylinder,M.paper,[x,2.277,.82],[.057,1.18,.057],[Math.PI/2,0,0]);
    b.add(G.box,M.ink,[-1.53,2.28,.67],[.47,.11,.37],[0,-.14,0]);
    b.add(G.box,M.darkBronze,[-1.53,2.34,.67],[.33,.012,.25],[0,-.14,0]);
    b.add(G.cylinder,M.jade,[1.56,2.38,1.28],[.16,.29,.16]);
    b.add(torus(.158,.018,32),M.darkBronze,[1.56,2.53,1.28],[1,1,1],[Math.PI/2,0,0]);
    b.add(G.cylinder,M.ink,[1.56,2.529,1.28],[.13,.005,.13]);
    b.rod(M.woodLight,[-1.32,2.32,1.38],[-.58,2.32,1.48],.024);
    // Quiet ink strokes are physical narrow strips, without lettering.
    for(let i=0;i<5;i++) b.add(G.box,M.ink,[-.49+i*.16,2.251,.46+i*.058],[.018,.006,.12+(i%2)*.055],[0,.18-i*.12,0]);
    b.add(G.cylinder,M.slateLight,[0,.79,-.92],[1.38,.32,1.03]);
    b.add(G.sphere,M.slate,[0,1.25,-.67],[1.44,.50,1.02]);
    b.add(G.sphere,M.slateLight,[-.60,1.15,.02],[.66,.25,.68],[0,-.30,0]);
    b.add(G.sphere,M.slate,[.65,1.16,.03],[.67,.28,.63],[0,.31,0]);
    for(const x of [-1.08,1.08]) b.add(G.sphere,M.ink,[x,.85,.30],[.29,.12,.43],[0,x<0?-.23:.23,0]);
    b.finish();

    const torso=group('scholar-breath',root,[0,2.44,-.78]);
    const rb=batch(torso,'robes');
    rb.add(foldedRobe(),M.slate);
    rb.add(G.sphere,M.slate,[0,.56,-.01],[.82,.33,.48]);
    rb.add(tube([[-.36,.75,.27],[-.24,.37,.48],[.10,-.22,.52],[.31,-.72,.45]],[.11,.095,.07,.05],18,8),M.slateLight);
    rb.add(tube([[.32,.75,.26],[.21,.39,.48],[-.02,.04,.55]],[.095,.07,.055],12,8),M.slateLight);
    rb.add(G.box,M.darkBronze,[0,-.31,.49],[.67,.045,.045]);
    rb.add(G.cylinder,M.skin,[0,.91,.0],[.22,.36,.22]);
    rb.finish();

    const head=group('scholar-head',torso,[0,1.26,.015],[.035,-.04,0]);
    const hb=batch(head,'scholar-face');
    hb.add(G.sphere,M.hairShade,[0,.04,-.075],[.43,.54,.38]);
    hb.add(G.sphere,M.skin,[0,-.015,.075],[.367,.456,.326]);
    hb.add(G.sphere,M.hairShade,[0,.46,-.04],[.25,.16,.25]);
    hb.add(G.sphere,M.ivory,[0,.61,-.085],[.20,.18,.18]);
    hb.rod(M.bronze,[-.39,.61,-.055],[.36,.65,-.095],.026);
    hb.add(G.sphere,M.skin,[-.38,-.005,.05],[.075,.14,.079]);
    hb.add(G.sphere,M.skin,[.38,-.005,.05],[.075,.14,.079]);
    hb.add(G.sphere,M.skin,[0,-.047,.394],[.073,.13,.063]);
    for(const x of [-.143,.143]) {
      hb.add(G.sphere,M.ink,[x,.072,.360],[.067,.014,.011],[0,0,x<0?-.045:.045]);
      hb.add(tube([[x-.083,.148,.348],[x,.169,.363],[x+.07,.144,.346]],[.022,.029,.012],8,6),M.ivory);
    }
    hb.add(tube([[-.035,-.192,.383],[-.14,-.205,.408],[-.28,-.267,.353]],[.065,.053,.012],10,7),M.ivory);
    hb.add(tube([[.035,-.192,.383],[.14,-.205,.408],[.28,-.267,.353]],[.065,.053,.012],10,7),M.ivory);
    hb.add(tube([[0,-.30,.28],[0,-.53,.40],[.045,-.88,.46],[.075,-1.08,.40]],[.28,.245,.135,.022],22,14,.035),M.ivory);
    for(let i=-3;i<=3;i++) {
      const x=i*.061;
      hb.add(tube([[x,-.39,.48],[x*.83+.014,-.68,.575],[x*.30+.062,-.99,.439]],[.009,.007,.003],12,5),M.hairShade);
    }
    hb.finish();

    const left=group('scholar-resting-arm',torso,[-.63,.49,.03]);
    const lb=batch(left,'resting-sleeve');
    lb.add(tube([[0,0,0],[-.31,-.36,.40],[-.19,-.59,.85]],[.28,.28,.16],18,12,.026),M.slate);
    lb.add(tube([[-.20,-.58,.83],[-.18,-.59,.95]],[.163,.155],4,10),M.slateLight);
    lb.add(G.sphere,M.skin,[-.15,-.59,1.06],[.15,.10,.26],[.10,-.08,0]);
    lb.finish();
    const upper=group('scholar-writing-shoulder',torso,[.65,.58,.09]);
    const ub=batch(upper,'writing-upper-sleeve');
    ub.add(tube([[0,0,0],[.21,-.17,.24],[.28,-.38,.52]],[.28,.27,.22],15,12,.025),M.slate);
    ub.finish();
    const forearm=group('scholar-writing-forearm',upper,[.28,-.38,.52]);
    const fb=batch(forearm,'writing-hand');
    fb.add(tube([[0,0,0],[-.16,-.15,.34],[-.09,-.27,.56]],[.23,.23,.115],16,12,.022),M.slate);
    fb.add(tube([[-.09,-.27,.54],[-.071,-.27,.62]],[.121,.116],4,10),M.slateLight);
    fb.add(G.sphere,M.skin,[-.060,-.255,.685],[.12,.105,.17],[.12,-.10,-.18]);
    fb.rod(M.woodLight,[.018,.075,.611],[-.143,-.339,.766],.021);
    fb.add(tube([[-.143,-.339,.766],[-.159,-.370,.777],[-.170,-.385,.782]],[.021,.016,.002],5,8),M.ink);
    for(let i=0;i<3;i++) fb.add(G.sphere,M.skin,[-.013-i*.033,-.247-i*.029,.747],[.053,.033,.042],[0,0,.18]);
    fb.finish();
    const lamp=lantern(root,'pavilion-lantern',[2.53,6.25,1.49],1.10,.50);
    light(root,[2.53,5.30,1.51],1.7,5.0);
    return {
      group:root,
      update(dt,time) {
        if (disposed || !(dt>0)) return;
        const t=Number.isFinite(time)?time:0;
        torso.scale.y=1+.005*Math.sin(t*.86);
        torso.rotation.z=.004*Math.sin(t*.43);
        head.rotation.x=.035+.019*Math.sin(t*.59);
        head.rotation.y=-.04+.023*Math.sin(t*.34);
        upper.rotation.z=.014*Math.sin(t*.93);
        forearm.rotation.y=.045*Math.sin(t*1.14);
        forearm.rotation.x=.014*Math.sin(t*1.83+.7);
        forearm.rotation.z=.012*Math.sin(t*.71);
        lamp.rotation.z=.016*Math.sin(t*.62);
      },
    };
  }

  function buildTree() {
    const root=group('companion-ancient-wishing-tree');
    const b=batch(root,'tree-island');
    b.add(G.octagon,M.basalt,[0,.22,0],[5.22,.44,4.82],[0,Math.PI/8,0]);
    b.add(G.cylinder,M.stone,[0,.46,0],[4.87,.23,4.46]);
    b.add(G.cylinder,M.jadeDark,[0,.586,0],[4.70,.025,4.30]);
    for(let i=0;i<17;i++) {
      const a=i/17*Math.PI*2;
      b.add(G.rock,i%3===0?M.paleStone:M.stone,[Math.cos(a)*4.58,.48,Math.sin(a)*4.18],[.55+(i%3)*.10,.30,.40],[.1*Math.sin(i),a,.14*Math.cos(i)]);
    }
    const trunk=[[-.70,.60,-.71],[-.99,1.48,-.76],[-.86,2.61,-.63],[-1.17,3.77,-.59],[-.81,4.89,-.53],[-.37,5.90,-.43]];
    b.add(tube(trunk,[.78,.64,.51,.43,.31,.11],32,14,.072),M.bark);
    const branches=[
      {p:[[-.97,2.57,-.63],[-1.95,3.48,-.42],[-2.85,4.29,-.04],[-4.07,5.29,.19]],r:[.39,.29,.18,.045]},
      {p:[[-1.07,3.66,-.59],[-.02,4.05,-.28],[1.63,4.70,.07],[3.68,5.48,.31]],r:[.38,.27,.17,.035]},
      {p:[[-.94,4.50,-.57],[-2.10,5.16,-1.43],[-3.01,5.89,-2.27]],r:[.28,.19,.030]},
      {p:[[-.57,5.23,-.46],[.32,5.76,-1.42],[2.26,6.38,-2.13]],r:[.25,.16,.025]},
      {p:[[-.80,4.65,-.52],[-.16,5.32,1.02],[1.57,5.91,2.15]],r:[.27,.17,.025]},
      {p:[[-1.72,3.48,-.34],[-2.41,4.76,1.14],[-2.92,5.65,2.04]],r:[.21,.15,.025]},
      {p:[[-.28,5.66,-.45],[-.32,6.76,-.10],[.20,7.45,.12]],r:[.16,.11,.022]},
      {p:[[1.67,4.70,.07],[2.52,5.14,1.18],[3.63,5.46,1.71]],r:[.16,.10,.018]},
    ];
    for(const branch of branches) b.add(tube(branch.p,branch.r,22,10,.055),M.bark);
    for(let i=0;i<9;i++) {
      const a=i/9*Math.PI*2, length=1.75+(i%3)*.4;
      b.add(tube([[-.77,1.1,-.71],[-.75+Math.cos(a)*.79,.71,-.71+Math.sin(a)*.76],[-.75+Math.cos(a)*length,.62,-.71+Math.sin(a)*length]],[.25,.19,.025],14,9,.06),M.bark);
    }
    // Raised shallow bark ridges give the old trunk a flowing, weathered grain.
    for(let i=0;i<7;i++) {
      const a=i/7*Math.PI*2;
      b.add(tube([[-.80+Math.cos(a)*.65,.74,-.70+Math.sin(a)*.65],[-.89+Math.cos(a)*.48,2.42,-.65+Math.sin(a)*.48],[-1.10+Math.cos(a+.12)*.37,3.76,-.59+Math.sin(a+.12)*.37],[-.81+Math.cos(a+.2)*.27,4.87,-.53+Math.sin(a+.2)*.27]],[.031,.026,.021,.009],21,5),M.barkLight);
    }
    const crowns=[
      [-3.90,5.92,.13,1.21,.79,1.18],[-3.02,6.43,-.35,1.66,1.13,1.39],
      [-2.90,6.57,-2.02,1.32,.92,1.05],[-1.47,7.02,-1.72,1.50,1.12,1.26],
      [.03,7.32,-.45,1.75,1.20,1.45],[1.72,6.99,-1.85,1.54,1.08,1.17],
      [3.32,6.26,.02,1.55,.97,1.31],[2.44,6.40,1.43,1.79,.91,1.42],
      [.76,6.63,1.89,1.36,1.08,1.15],[-1.03,6.69,1.23,1.38,.92,1.26],
      [-2.90,6.12,1.94,1.17,.79,1.03],[-.15,7.89,-.83,1.24,.81,1.05],
    ];
    for(let i=0;i<crowns.length;i++) {
      const c=crowns[i];
      b.add(G.foliage,[M.jade,M.jadeDark,M.jadeLight][i%3],[c[0],c[1],c[2]],[c[3],c[4],c[5]],[.10*Math.sin(i),i*.73,.1*Math.cos(i)]);
      b.add(G.foliage,i%3===0?M.moss:M.jadeLight,[c[0]-.24,c[1]+c[4]*.45,c[2]+.21],[c[3]*.62,c[4]*.64,c[5]*.63],[.12,i*.91,0]);
    }
    // Small perimeter leaves break up the silhouette without texture billboards.
    for(let i=0;i<38;i++) {
      const c=crowns[i%crowns.length], a=i*2.399963;
      b.add(G.rock,i%3===0?M.moss:M.jade,[c[0]+Math.cos(a)*c[3]*.85,c[1]+Math.sin(a*1.7)*c[4]*.45,c[2]+Math.sin(a)*c[5]*.85],[.24,.12,.42],[.15*Math.sin(i),a,.15]);
    }
    for(let i=0;i<5;i++) b.add(G.octagon,M.paleStone,[-.11+.16*Math.sin(i),.62,3.55-i*.60],[.49,.055,.27],[0,.25*Math.sin(i),0]);
    b.finish();
    const bench=group('tree-bench',root,[2.43,.60,2.08],[0,-.31,0]);
    const bb=batch(bench,'weathered-bench');
    for(const z of [-.26,0,.26]) bb.add(G.box,M.woodLight,[0,.66,z],[2.10,.13,.22]);
    for(const x of [-.74,.74]) {
      bb.add(G.box,M.stone,[x,.29,0],[.27,.58,.56]);
      bb.add(G.box,M.wood,[x,.90,-.30],[.09,1.1,.10],[.1,0,0]);
    }
    bb.add(G.box,M.woodLight,[0,1.19,-.35],[2.10,.22,.11],[.1,0,0]);
    bb.add(G.box,M.wood,[0,1.47,-.38],[2.10,.10,.12],[.1,0,0]);
    bb.finish();
    const hanging=[];
    const lanterns=[[-3.78,5.22,.18,.72,.26],[-2.50,5.81,1.30,.67,.35],[1.17,5.45,1.30,.73,.38],[3.40,5.60,.45,.70,.33]];
    for(let i=0;i<lanterns.length;i++) {
      const p=lanterns[i];
      hanging.push(lantern(root,`tree-lantern-${i}`,[p[0],p[1],p[2]],p[3],p[4]));
    }
    light(root,[-2.54,5.24,1.31],1.15,3.1);
    light(root,[2.62,5.04,.71],1.15,3.4);
    const ribbonPivots=[];
    const ribbons=[[-3.17,5.54,.60,.80],[-2.12,5.78,1.54,1.0],[-1.80,4.64,-.03,.75],[.77,5.27,.52,.91],[2.43,5.44,1.55,.82],[3.69,5.59,.92,.74],[1.76,6.14,-1.78,.91],[-3.17,5.90,-1.70,.85]];
    for(let i=0;i<ribbons.length;i++) {
      const p=ribbons[i], g=group(`wish-ribbon-${i}`,root,[p[0],p[1],p[2]],[0,i*.9,0]);
      const rb=batch(g,`wish-ribbon-${i}`);
      rb.add(cloth(p[3],.11,i*.7),i%3===1?M.sageRibbon:M.ribbon);
      rb.add(G.detailSphere,M.darkBronze,[0,.015,0],[.048,.039,.042]);
      rb.finish();ribbonPivots.push(g);
    }
    return {
      group:root,
      update(dt,time) {
        if(disposed||!(dt>0))return;
        const t=Number.isFinite(time)?time:0;
        for(let i=0;i<hanging.length;i++) {
          hanging[i].rotation.z=.035*Math.sin(t*.63+i*1.1);
          hanging[i].rotation.x=.023*Math.sin(t*.47+i*.8);
        }
        for(let i=0;i<ribbonPivots.length;i++) {
          ribbonPivots[i].rotation.z=.075*Math.sin(t*.88+i*.84)+.02*Math.sin(t*1.63+i);
          ribbonPivots[i].rotation.x=.055*Math.sin(t*.76+i*1.16);
        }
      },
    };
  }

  function buildBirthday() {
    const root=group('companion-bronze-armillary');
    const b=batch(root,'armillary-plinth');
    b.add(G.cylinder,M.basalt,[0,.16,0],[4.46,.32,4.46]);
    b.add(G.cylinder,M.stone,[0,.43,0],[3.88,.25,3.88]);
    b.add(G.cylinder,M.darkBronze,[0,.596,0],[3.89,.058,3.89]);
    b.add(G.cylinder,M.basalt,[0,.75,0],[3.30,.26,3.30]);
    b.add(torus(3.17,.026,96),M.bronze,[0,.898,0],[1,1,1],[Math.PI/2,0,0]);
    b.add(G.octagon,M.darkBronze,[0,1.02,0],[1.61,.24,1.61],[0,Math.PI/8,0]);
    b.add(G.octagon,M.bronze,[0,1.18,0],[1.34,.11,1.34],[0,Math.PI/8,0]);
    b.add(G.cylinder,M.darkBronze,[0,1.76,0],[.82,1.12,.82]);
    for(let i=0;i<16;i++) {
      const a=i/16*Math.PI*2;
      b.rod(M.bronze,[Math.cos(a)*.83,1.24,Math.sin(a)*.83],[Math.cos(a)*.69,2.26,Math.sin(a)*.69],.039);
    }
    b.add(G.cylinder,M.bronze,[0,2.34,0],[1.04,.14,1.04]);
    b.add(G.cylinder,M.darkBronze,[0,2.49,0],[.74,.17,.74]);
    for(let i=0;i<60;i++) {
      const a=i/60*Math.PI*2, major=i%5===0;
      b.add(G.box,major?M.bronze:M.darkBronze,[Math.sin(a)*2.91,.908,Math.cos(a)*2.91],[major?.038:.017,.012,major?.32:.16],[0,a,0]);
    }
    for(let i=0;i<12;i++) {
      const a=i/12*Math.PI*2;
      b.add(G.detailSphere,M.bronze,[Math.sin(a)*3.53,.594,Math.cos(a)*3.53],[.061,.026,.061]);
    }
    // A pair of sculpted cradle arms carry the vertical meridian.
    for(const s of [-1,1]) {
      b.add(tube([[s*.59,2.39,0],[s*1.56,2.42,0],[s*2.42,3.14,0],[s*2.80,4.36,0]],[.105,.105,.084,.059],24,10),M.darkBronze);
      b.add(G.sphere,M.bronze,[s*2.84,4.50,0],[.16,.16,.16]);
    }
    b.finish();
    const center=group('armillary-axis',root,[0,4.70,0],[0,0,-.27]);
    const cb=batch(center,'armillary-meridian');
    cb.add(band(2.89,.16,.085,112),M.bronze);
    cb.add(torus(2.978,.018,112),M.darkBronze);
    cb.add(torus(2.801,.018,112),M.darkBronze);
    cb.rod(M.darkBronze,[0,-3.19,0],[0,3.20,0],.048);
    cb.add(G.sphere,M.bronze,[0,3.12,0],[.13,.20,.13]);
    cb.add(G.sphere,M.bronze,[0,-3.10,0],[.14,.17,.14]);
    cb.add(G.cone,M.darkBronze,[0,3.39,0],[.064,.24,.064]);
    for(let i=0;i<48;i++) {
      const a=i/48*Math.PI*2, r=2.89;
      cb.add(G.box,M.darkBronze,[Math.cos(a)*r,Math.sin(a)*r,.051],[i%4===0?.13:.065,.016,.009],[0,0,a]);
    }
    cb.add(G.sphere,M.jade,[0,0,0],[.47,.47,.47]);
    cb.add(torus(.495,.022,48),M.bronze,[0,0,0],[1,1,1],[Math.PI/2,0,0]);
    cb.add(torus(.49,.014,48),M.bronze,[0,0,0],[1,1,1],[.29,.21,0]);
    cb.add(G.detailSphere,M.pearl,[0,0,.472],[.052,.052,.035]);
    cb.finish();
    const rotors=[];
    const orbitSpecs=[
      {r:2.53,x:1.12,y:.16,speed:.075,phase:.3,planet:.19,mat:M.ember},
      {r:2.11,x:-.64,y:.73,speed:-.105,phase:2.1,planet:.145,mat:M.orbitGlow},
      {r:1.67,x:.55,y:-.61,speed:.145,phase:4.25,planet:.112,mat:M.pearl},
    ];
    for(let i=0;i<orbitSpecs.length;i++) {
      const o=orbitSpecs[i];
      const anchor=group(`orbit-inclination-${i}`,center,[0,0,0],[o.x,o.y,0]);
      const rotor=group(`orbit-rotation-${i}`,anchor,[0,0,0],[0,0,o.phase]);
      const ob=batch(rotor,`orbital-band-${i}`);
      ob.add(band(o.r,i===0?.12:.080,.042,72),i===1?M.darkBronze:M.bronze);
      ob.add(torus(o.r-.063,.012,88),i===1?M.bronze:M.darkBronze);
      for(let k=0;k<24;k++) {
        const a=k/24*Math.PI*2;
        ob.add(G.box,i===1?M.bronze:M.darkBronze,[Math.cos(a)*o.r,Math.sin(a)*o.r,.029],[k%6===0?.10:.046,.012,.012],[0,0,a]);
      }
      ob.add(G.sphere,o.mat,[o.r,0,0],[o.planet,o.planet,o.planet]);
      ob.add(G.sphere,M.bronze,[-o.r,0,0],[.055,.055,.055]);
      ob.add(torus(o.planet*1.45,.012,32),M.darkBronze,[o.r,0,0],[1,1,1],[.42,.61,0]);
      ob.finish();rotors.push(rotor);
    }
    light(root,[0,4.70,1.3],.9,5.4);
    return {
      group:root,
      update(dt,time) {
        if(disposed||!(dt>0))return;
        const t=Number.isFinite(time)?time:0;
        for(let i=0;i<rotors.length;i++) rotors[i].rotation.z=orbitSpecs[i].phase+t*orbitSpecs[i].speed;
      },
    };
  }

  function buildPalm() {
    const root=group('companion-open-stone-palm');
    const b=batch(root,'palm-plinth');
    b.add(G.cylinder,M.basalt,[0,.16,0],[3.77,.32,3.77]);
    b.add(G.cylinder,M.stone,[0,.42,0],[3.38,.20,3.38]);
    b.add(G.cylinder,M.darkBronze,[0,.542,0],[3.37,.042,3.37]);
    b.add(G.octagon,M.basalt,[0,.74,0],[1.56,.35,1.41],[0,Math.PI/8,0]);
    b.add(G.octagon,M.stoneCut,[0,.963,0],[1.31,.10,1.18],[0,Math.PI/8,0]);
    b.add(torus(2.83,.019,88),M.darkBronze,[0,.539,0],[1,1,1],[Math.PI/2,0,0]);
    for(let i=0;i<7;i++) {
      const a=i*.85+.4;
      b.add(G.rock,i%2?M.stone:M.handStone,[Math.cos(a)*2.39,.64,Math.sin(a)*2.34],[.30+(i%3)*.10,.12+(i%2)*.08,.21],[.1,a,.15]);
    }
    b.finish();
    const sculpture=group('open-palm-sculpture',root,[0,0,-.26],[0,-.08,-.065]);
    const sb=batch(sculpture,'carved-stone-hand');
    sb.add(tube([[0,1.02,0],[.08,1.66,.03],[.01,2.33,.01],[-.03,2.91,0]],[.77,.65,.64,.86],22,16,.018),M.handStone,[0,0,0],[1,1,.68]);
    sb.add(G.sphere,M.handStone,[0,3.48,0],[1.10,1.30,.45],[.025,0,-.07]);
    sb.add(G.sphere,M.handStone,[-.66,3.09,.09],[.49,.66,.38],[0,0,-.24]);
    sb.add(G.sphere,M.handStone,[.64,3.19,-.015],[.49,.69,.38],[0,0,.13]);
    const digits=[
      {p:[[-.80,3.15,.06],[-1.29,3.49,.16],[-1.76,3.95,.12],[-1.98,4.43,.055]],r:[.38,.33,.27,.20]},
      {p:[[-.73,4.16,0],[-.90,5.03,.018],[-1.10,5.99,-.04],[-1.12,6.45,-.17]],r:[.285,.26,.225,.18]},
      {p:[[-.12,4.37,0],[-.10,5.42,.015],[-.16,6.42,-.065],[-.19,6.96,-.19]],r:[.29,.27,.23,.18]},
      {p:[[.48,4.22,-.01],[.66,5.25,0],[.78,6.10,-.075],[.78,6.58,-.21]],r:[.28,.25,.212,.166]},
      {p:[[.93,3.99,-.04],[1.28,4.72,-.01],[1.57,5.38,-.06],[1.65,5.75,-.18]],r:[.235,.21,.18,.145]},
    ];
    for(let i=0;i<digits.length;i++) {
      const d=digits[i];
      sb.add(tube(d.p,d.r,24,12,.009),M.handStone);
      const tip=d.p[d.p.length-1], radius=d.r[d.r.length-1];
      sb.add(G.sphere,M.handStone,tip,[radius,radius*1.04,radius]);
      // Slightly recessed stone nail planes on the back remain understated.
      sb.add(G.sphere,M.paleStone,[tip[0],tip[1]-.07,tip[2]-.135],[radius*.64,radius*1.05,.024],[.14,0,i===0?-.6:.05]);
    }
    // Sparse shallow crease inlays read as carved anatomy, without symbols.
    const creases=[
      [[-.73,3.88,.39],[-.27,3.99,.449],[.36,3.87,.405],[.83,3.67,.315]],
      [[-.67,3.65,.402],[-.39,3.38,.451],[-.18,3.00,.419],[-.29,2.74,.37]],
      [[-.40,3.40,.452],[.10,3.39,.452],[.55,3.48,.393]],
      [[-.47,2.08,.383],[.0,2.02,.43],[.45,2.06,.368]],
    ];
    for(const p of creases) sb.add(tube(p,[.009,.012,.009,.004],18,5),M.stoneCut);
    for(let i=1;i<digits.length;i++) {
      const d=digits[i], p=d.p[1], r=d.r[1];
      sb.add(tube([[p[0]-r*.65,p[1]-.045,p[2]+r*.79],[p[0],p[1]-.075,p[2]+r*.98],[p[0]+r*.65,p[1]-.037,p[2]+r*.78]],[.008,.01,.005],8,5),M.stoneCut);
    }
    sb.finish();
    const aura=group('palm-hover-orbit',root,[0,4.59,1.13],[.16,-.14,0]);
    const ab=batch(aura,'palm-orbit');
    ab.add(torus(1.66,.024,112),M.darkBronze);
    ab.add(torus(1.692,.013,112),M.orbitGlow);
    for(let i=0;i<12;i++) {
      const a=i/12*Math.PI*2;
      ab.add(G.detailSphere,i%3===0?M.pearl:M.bronze,[Math.cos(a)*1.69,Math.sin(a)*1.69,0],[i%3===0?.061:.036,i%3===0?.061:.036,i%3===0?.061:.036]);
    }
    ab.finish();
    const satellite=group('palm-fine-orbit',root,[0,4.59,1.13],[.34,1.10,.2]);
    const ob=batch(satellite,'palm-fine-orbit');
    ob.add(torus(1.39,.013,96),M.bronze);
    ob.add(G.sphere,M.pearl,[1.39,0,0],[.086,.086,.086]);
    ob.add(G.detailSphere,M.orbitGlow,[-1.39,0,0],[.045,.045,.045]);
    ob.finish();
    const core=group('palm-warm-center',root,[0,4.59,1.13]);
    const cb=batch(core,'palm-light-points');
    cb.add(G.sphere,M.ember,[0,0,0],[.145,.145,.145]);
    cb.add(torus(.272,.010,48),M.bronze,[0,0,0],[1,1,1],[.47,.24,0]);
    for(let i=0;i<9;i++) {
      const a=i*2.399963, r=.47+(i%4)*.21;
      cb.add(G.detailSphere,i%3===0?M.pearl:M.orbitGlow,[Math.cos(a)*r,Math.sin(a)*r*.87,.04*Math.sin(i)],[.021+(i%3)*.008,.021+(i%3)*.008,.021+(i%3)*.008]);
    }
    cb.finish();
    light(root,[0,4.53,1.39],1.12,4.1);
    return {
      group:root,
      update(dt,time) {
        if(disposed||!(dt>0))return;
        const t=Number.isFinite(time)?time:0;
        aura.position.y=4.59+.07*Math.sin(t*.47);
        aura.rotation.z=t*.047;
        satellite.position.y=aura.position.y;
        satellite.rotation.z=.2-t*.067;
        core.position.y=aura.position.y;
        core.rotation.z=t*.028;
      },
    };
  }
  const scenes = {
    character: buildCharacter(),
    tree: buildTree(),
    birthday: buildBirthday(),
    palm: buildPalm(),
  };
  for (const entry of Object.values(scenes)) {
    entry.group.userData.companionDiorama = true;
    entry.group.userData.suggestedCamera = [11,8,15];
    entry.group.userData.suggestedTarget = [0,3,0];
  }
  return {
    scenes,
    dispose() {
      if(disposed)return;
      disposed=true;
      for(const geometry of geometries) geometry.dispose();
      for(const mat of materials) mat.dispose();
      geometries.clear();materials.clear();ringCache.clear();
      for(const entry of Object.values(scenes)) entry.group.clear();
    },
  };
}
