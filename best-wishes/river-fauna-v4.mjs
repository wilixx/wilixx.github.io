/**
 * Lingxi water, Chinese dragon and phoenix. Y-up; entrance faces +Z.
 * Standalone procedural asset: no imports, textures, DOM or renderer ownership.
 * createMountainLife(THREE, {seed}) -> {group, update(dt,time), dispose(), stats}.
 * A fixed seed gives identical motion. Omitting seed varies the initial flight.
 * dt is seconds; dt <= 0 holds every pose and shader uniform. The caller's time
 * is deliberately not used, so pausing cannot skip the flight ahead on resume.
 */
export function createMountainLife(THREE, { seed = Math.floor(Math.random() * 0xffffffff) } = {}) {
  const group = new THREE.Group();
  group.name = 'Lingxi · flowing streams · dragon and phoenix';
  const geometries = new Set(), materials = new Set();
  const own = g => (geometries.add(g), g);
  const mat = (color, extra = {}) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness: .64, metalness: .22, flatShading: true, ...extra });
    materials.add(m); return m;
  };
  const M = {
    jade: mat(0x427f72, { emissive: 0x143f36, emissiveIntensity: .28 }),
    paleJade: mat(0x7faaa0, { emissive: 0x224c40, emissiveIntensity: .18 }),
    gold: mat(0xc4a565, { metalness: .57, roughness: .43, emissive: 0x5a3814, emissiveIntensity: .23 }),
    dark: mat(0x182a29, { metalness: .15 }),
    red: mat(0xa34936, { emissive: 0x4f180e, emissiveIntensity: .29 }),
    vermilion: mat(0xd07143, { emissive: 0x683217, emissiveIntensity: .3 }),
  };
  const sphere = own(new THREE.SphereGeometry(1, 10, 6));
  const cone = own(new THREE.ConeGeometry(1, 1, 6));
  const cylinder = own(new THREE.CylinderGeometry(1, 1, 1, 6, 1));
  const position = new THREE.Vector3(), scaling = new THREE.Vector3(), quaternion = new THREE.Quaternion();
  const matrix = new THREE.Matrix4(), normalMatrix = new THREE.Matrix3();
  const transformed = new THREE.Vector3(), transformedNormal = new THREE.Vector3();
  const axisY = new THREE.Vector3(0, 1, 0), axisZ = new THREE.Vector3(0, 0, 1);
  const euler = new THREE.Euler();
  // Batching is local to each articulated part, never one draw per feather.
  function batch(owner) {
    const buckets = new Map();
    function add(geometry, material, p = [0, 0, 0], s = [1, 1, 1], rotation = [0, 0, 0]) {
      own(geometry);
      let bucket = buckets.get(material);
      if (!bucket) { bucket = { positions: [], normals: [] }; buckets.set(material, bucket); }
      position.set(...p); scaling.set(...s);
      if (rotation.isQuaternion) quaternion.copy(rotation); else quaternion.setFromEuler(euler.set(...rotation));
      matrix.compose(position, quaternion, scaling); normalMatrix.getNormalMatrix(matrix);
      const a = geometry.attributes.position, n = geometry.attributes.normal, index = geometry.index;
      const count = index ? index.count : a.count;
      for (let k = 0; k < count; k++) {
        const j = index ? index.getX(k) : k;
        transformed.fromBufferAttribute(a, j).applyMatrix4(matrix);
        transformedNormal.fromBufferAttribute(n, j).applyMatrix3(normalMatrix).normalize();
        bucket.positions.push(transformed.x, transformed.y, transformed.z);
        bucket.normals.push(transformedNormal.x, transformedNormal.y, transformedNormal.z);
      }
    }
    function tube(points, radius, material, tubularSegments = 10, sides = 5) {
      add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))), tubularSegments, radius, sides, false), material);
    }
    function beam(a, b, radius, material, pointed = false) {
      const av = new THREE.Vector3(...a), bv = new THREE.Vector3(...b), direction = bv.clone().sub(av);
      const rot = new THREE.Quaternion().setFromUnitVectors(axisY, direction.clone().normalize());
      add(pointed ? cone : cylinder, material, av.add(bv).multiplyScalar(.5).toArray(), [radius, direction.length(), radius], rot);
    }
    function feather(a, b, width, material, arch = .11, divisions = 8) {
      const av = new THREE.Vector3(...a), bv = new THREE.Vector3(...b), delta = bv.clone().sub(av), length = delta.length();
      const rot = new THREE.Quaternion().setFromUnitVectors(axisZ, delta.normalize());
      const verts = [], rings = [];
      for (let i = 0; i <= divisions; i++) {
        const t = i / divisions;
        const w = width * Math.pow(Math.sin(Math.PI * t), .72) * (1 - .28 * t) + .003;
        const y = Math.sin(Math.PI * t) * arch;
        rings.push([[-w, y, t * length], [0, y + .045 * Math.sin(Math.PI * t), t * length], [w, y, t * length], [0, y - .022, t * length]]);
      }
      for (let i = 0; i < divisions; i++) for (let j = 0; j < 4; j++) {
        const k = (j + 1) % 4;
        verts.push(...rings[i][j], ...rings[i + 1][j], ...rings[i][k], ...rings[i][k], ...rings[i + 1][j], ...rings[i + 1][k]);
      }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3)); geo.computeVertexNormals();
      add(geo, material, a, [1, 1, 1], rot);
    }
    function finish() {
      const result = [];
      for (const [material, b] of buckets) {
        const geo = own(new THREE.BufferGeometry());
        geo.setAttribute('position', new THREE.Float32BufferAttribute(b.positions, 3));
        geo.setAttribute('normal', new THREE.Float32BufferAttribute(b.normals, 3));
        geo.computeBoundingSphere();
        const mesh = new THREE.Mesh(geo, material); owner.add(mesh); result.push(mesh);
      }
      return result;
    }
    return { add, tube, beam, feather, finish };
  }

  const dragon = new THREE.Group(); dragon.name = 'jade-gold-chinese-dragon'; group.add(dragon);
  const segmentCount = 24;
  const body = new THREE.InstancedMesh(sphere, M.jade, segmentCount);
  body.name = 'continuous-sinuous-dragon-body'; body.frustumCulled = false; dragon.add(body);
  const belly = new THREE.InstancedMesh(sphere, M.gold, segmentCount - 3);
  belly.name = 'overlapping-gold-belly-scales'; belly.frustumCulled = false; dragon.add(belly);
  const spine = new THREE.InstancedMesh(cone, M.gold, segmentCount - 2);
  spine.name = 'gold-dorsal-spine'; spine.frustumCulled = false; dragon.add(spine);
  for (const mesh of [body, belly, spine]) mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

  const head = new THREE.Group(); head.name = 'antlers-whiskers-and-long-muzzle'; dragon.add(head);
  const h = batch(head);
  h.add(sphere, M.jade, [0, .05, .27], [.56, .43, .72]);
  h.add(sphere, M.paleJade, [0, -.035, .95], [.34, .25, .69]);
  h.add(sphere, M.gold, [0, -.2, .97], [.33, .075, .57]);
  h.add(sphere, M.dark, [0, -.087, 1.5], [.245, .022, .09]);
  for (const side of [-1, 1]) {
    h.add(sphere, M.gold, [side * .43, .24, .56], [.115, .1, .16]);
    h.add(sphere, M.dark, [side * .502, .25, .60], [.035, .048, .077]);
    h.add(sphere, M.dark, [side * .155, .07, 1.53], [.055, .043, .037]);
    h.tube([[side * .32, .33, .10], [side * .46, .77, -.10], [side * .63, 1.13, -.43], [side * .68, 1.30, -.74]], .073, M.gold, 10);
    h.beam([side * .49, .83, -.13], [side * .81, 1.13, .03], .063, M.gold, true);
    h.beam([side * .59, 1.02, -.33], [side * .9, 1.19, -.29], .047, M.gold, true);
    h.tube([[side * .27, -.02, 1.19], [side * .77, -.01, 1.25], [side * 1.22, .13, .86], [side * 1.52, .36, .14], [side * 1.72, .48, -.18]], .024, M.gold, 16, 4);
    h.tube([[side * .24, -.16, 1.04], [side * .56, -.36, .78], [side * .69, -.41, .19]], .021, M.paleJade, 9, 4);
    for (let i = 0; i < 5; i++) h.feather([side * .31, .12 - i * .068, .02 - i * .055], [side * (.72 + i * .035), .32 - i * .12, -.48 - i * .08], .1, M.gold, .025, 4);
  }
  h.tube([[0, -.22, 1.10], [0, -.49, .87], [.03, -.5, .48]], .05, M.gold, 9);
  h.finish();

  // Four compact, bent limbs with three splayed talons each.
  const limbPrototype = new THREE.Group(), lb = batch(limbPrototype);
  lb.tube([[0, 0, 0], [.27, -.23, .05], [.49, -.39, -.22], [.57, -.53, .02]], .105, M.jade, 8);
  lb.add(sphere, M.gold, [.57, -.54, .08], [.15, .08, .18]);
  for (let i = 0; i < 3; i++) lb.tube([[.5 + i * .07, -.56, .13], [.43 + i * .115, -.60, .32], [.43 + i * .115, -.69, .38]], .028, M.gold, 5, 4);
  const limbMeshes = [];
  for (const mesh of lb.finish()) for (const side of [-1, 1]) {
    let geometry = mesh.geometry;
    if (side < 0) {
      geometry = own(geometry.clone()); geometry.scale(-1, 1, 1);
      // Reflection is baked with corrected winding; instance scales stay positive.
      for (const attribute of [geometry.attributes.position, geometry.attributes.normal]) {
        const values = attribute.array;
        for (let i = 0; i < values.length; i += 9) for (let k = 0; k < 3; k++) {
          const value = values[i + 3 + k]; values[i + 3 + k] = values[i + 6 + k]; values[i + 6 + k] = value;
        }
      }
      geometry.computeBoundingSphere();
    }
    const instance = new THREE.InstancedMesh(geometry, mesh.material, 2);
    instance.name = side < 0 ? 'dragon-left-legs' : 'dragon-right-legs';
    instance.instanceMatrix.setUsage(THREE.DynamicDrawUsage); instance.frustumCulled = false; dragon.add(instance); limbMeshes.push({ mesh: instance, side });
  }

  const phoenix = new THREE.Group(); phoenix.name = 'vermilion-gold-phoenix'; group.add(phoenix);
  const p = batch(phoenix);
  p.add(sphere, M.red, [0, .05, -.08], [.46, .47, .94]);
  p.add(sphere, M.gold, [0, -.12, .35], [.34, .34, .53]);
  p.tube([[0, .14, .50], [0, .49, .79], [0, .95, 1.06], [0, 1.10, 1.34]], .195, M.red, 12, 7);
  p.add(sphere, M.vermilion, [0, 1.10, 1.38], [.26, .28, .4]);
  p.beam([0, 1.07, 1.66], [0, 1.0, 2.05], .105, M.gold, true);
  for (const s of [-1, 1]) {
    p.add(sphere, M.dark, [s * .237, 1.155, 1.49], [.024, .034, .047]);
    p.feather([s * .16, 1.28, 1.18], [s * .39, 1.83, .73], .065, M.gold, .03, 5);
    p.tube([[s * .20, -.26, -.25], [s * .24, -.55, -.61], [s * .29, -.53, -.94]], .035, M.gold, 6, 4);
  }
  p.feather([0, 1.31, 1.24], [0, 1.99, .73], .08, M.gold, .025, 6);
  for (let i = 0; i < 7; i++) p.feather([-.30 + i * .10, .30, .28], [-.20 + i * .067, .19, -1.2], .095, i % 2 ? M.gold : M.vermilion, .08);
  p.finish();
  const wings = [];
  for (const side of [-1, 1]) {
    const shoulder = new THREE.Group(); shoulder.position.set(side * .30, .17, .23); shoulder.scale.x = side; phoenix.add(shoulder);
    shoulder.name = side < 0 ? 'phoenix-left-shoulder' : 'phoenix-right-shoulder';
    const inner = batch(shoulder);
    inner.feather([0, 0, .08], [1.72, .06, .20], .35, M.red, .06);
    for (let i = 0; i < 7; i++) inner.feather([.16 + i * .17, .01, .16 - i * .09], [.64 + i * .19, .015, -.92 - i * .045], .18, i % 3 === 0 ? M.gold : M.vermilion, .09);
    inner.finish();
    const wrist = new THREE.Group(); wrist.name = 'phoenix-articulated-outer-wing'; wrist.position.set(1.57, .035, .04); shoulder.add(wrist);
    const outer = batch(wrist);
    for (let i = 0; i < 10; i++) outer.feather([.03 + i * .046, .01, -.025 - i * .065], [2.13 - i * .095, .075, .42 - i * .24], .19, i % 3 === 0 ? M.gold : M.red, .15, 10);
    for (let i = 0; i < 6; i++) outer.feather([.02, .055, -.02 - i * .09], [1.10 - i * .06, .095, .17 - i * .22], .15, M.vermilion, .09, 6);
    outer.finish();
    wings.push({ shoulder, wrist, side });
  }
  const tails = [];
  for (let i = 0; i < 5; i++) {
    const tail = new THREE.Group(); tail.name = 'phoenix-streaming-tail-' + i;
    tail.position.set((i - 2) * .16, .025, -.73); phoenix.add(tail);
    const b = batch(tail), length = 5.1 + (2 - Math.abs(i - 2)) * .65, side = (i - 2) * .27;
    const v = [], n = 30;
    for (let j = 0; j < n; j++) {
      const ring = t => {
        const width = .09 + .19 * Math.pow(Math.sin(Math.PI * t), 1.4);
        const x = side * t * 1.7 + .21 * Math.sin(t * Math.PI * 2 + i * .42) * t;
        const y = -.33 * Math.sin(t * Math.PI) + .46 * t * t;
        return [[x - width, y, -t * length], [x, y + .035, -t * length], [x + width, y, -t * length]];
      };
      const a = ring(j / n), c = ring((j + 1) / n);
      for (let k = 0; k < 2; k++) v.push(...a[k], ...c[k], ...a[k + 1], ...a[k + 1], ...c[k], ...c[k + 1]);
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); geo.computeVertexNormals();
    b.add(geo, i % 2 ? M.gold : M.red);
    b.feather([side * 1.5, .29, -length + 1.02], [side * 1.7, .49, -length - .18], .27, M.gold, .02, 8);
    b.finish(); tails.push(tail);
  }
  // Thin tail feathers can be seen from both sides during the flight.
  M.red.side = THREE.DoubleSide; M.gold.side = THREE.DoubleSide; M.vermilion.side = THREE.DoubleSide;

  // Reconstruct only the mountain's original rock surfaces, including its exact
  // seeded facets/boulders. No dependency on temple construction or mesh names.
  const terrainTriangles = [];
  function randomGenerator(s) { let state = s >>> 0; return () => ((state = (1664525 * state + 1013904223) >>> 0) / 4294967296); }
  function terrainMountain(cx, cz, rx, rz, height, terrainSeed, central = false) {
    const random = randomGenerator(terrainSeed), count = central ? 40 : 24;
    const phases = Array.from({ length: count }, () => .89 + random() * .2);
    const profiles = central ? [[0, 1.02], [.11, 1], [.34, .85], [.57, .64], [.8, .47], [1, .355]] : [[0, 1.03], [.14, 1], [.37, .84], [.68, .64], [.91, .52], [1, .5]];
    const rings = profiles.map(([level, radius], j) => Array.from({ length: count }, (_, i) => {
      const a = i * Math.PI * 2 / count, wobble = phases[i] * (1 + Math.sin(i * 1.83 + j * .7) * .035);
      const yy = level === 1 ? height : Math.max(0, height * level + (random() - .5) * height * .065);
      return [cx + Math.cos(a) * rx * radius * wobble + Math.sin(j * 1.7) * .2, yy, cz + Math.sin(a) * rz * radius * wobble];
    }));
    for (let j = 0; j < rings.length - 1; j++) for (let i = 0; i < count; i++) {
      const k = (i + 1) % count;
      terrainTriangles.push(...rings[j][i], ...rings[j + 1][i], ...rings[j][k], ...rings[j][k], ...rings[j + 1][i], ...rings[j + 1][k]);
    }
    const rim = rings[rings.length - 1];
    for (let i = 0; i < count; i++) terrainTriangles.push(cx, height, cz, ...rim[(i + 1) % count], ...rim[i]);
  }
  const destinations = [
    { id: 'shrine', x: 0, z: 0, y: 8 }, { id: 'character', x: -12, z: 5, y: 5.9 },
    { id: 'birthday', x: 9, z: -9, y: 7.1 }, { id: 'palm', x: 12, z: 8, y: 4.6 }, { id: 'tree', x: -10, z: -11, y: 6.3 },
  ];
  terrainMountain(0, 0, 22, 19.5, 8, 807, true);
  for (const d of destinations.slice(1)) terrainMountain(d.x, d.z, d.id === 'tree' ? 7.25 : 6.25, 5.7, d.y, d.id.length * 291 + d.x * 19);
  const rr = randomGenerator(1971), rock = new THREE.DodecahedronGeometry(1, 0), rockPositions = rock.attributes.position, rockIndex = rock.index;
  for (let i = 0; i < 35; i++) {
    const angle = i * 2.39996, ring = 12 + rr() * 7.8, x = Math.cos(angle) * ring, z = Math.sin(angle) * ring * .88;
    if (destinations.some(d => ((x - d.x) / 4.5) ** 2 + ((z - d.z) / 4) ** 2 < 1.2)) continue;
    if (Math.abs(x) < 2 && z > 5.5) continue;
    position.set(x, Math.max(.6, 5.6 - (ring - 12) * .54), z); scaling.set(1.15 + rr() * 1.65, 1.05 + rr() * 2.1, .8 + rr() * 1.45);
    quaternion.setFromEuler(euler.set(.13, angle, .12)); matrix.compose(position, quaternion, scaling);
    for (let j = 0; j < (rockIndex ? rockIndex.count : rockPositions.count); j++) {
      transformed.fromBufferAttribute(rockPositions, rockIndex ? rockIndex.getX(j) : j).applyMatrix4(matrix);
      terrainTriangles.push(transformed.x, Math.max(0, transformed.y), transformed.z);
    }
  }
  rock.dispose();
  function terrainHeight(x, z) {
    let highest = 0;
    const t = terrainTriangles;
    for (let i = 0; i < t.length; i += 9) {
      const ax = t[i], az = t[i + 2], bx = t[i + 3], bz = t[i + 5], cx = t[i + 6], cz = t[i + 8];
      if (x < Math.min(ax, bx, cx) || x > Math.max(ax, bx, cx) || z < Math.min(az, bz, cz) || z > Math.max(az, bz, cz)) continue;
      const den = (bz - cz) * (ax - cx) + (cx - bx) * (az - cz);
      if (Math.abs(den) < 1e-7) continue;
      const u = ((bz - cz) * (x - cx) + (cx - bx) * (z - cz)) / den, v = ((cz - az) * (x - cx) + (ax - cx) * (z - cz)) / den;
      if (u >= -.001 && v >= -.001 && u + v <= 1.001) highest = Math.max(highest, u * t[i + 1] + v * t[i + 4] + (1 - u - v) * t[i + 7]);
    }
    return highest;
  }
  const water = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0x4da89b) } },
    vertexShader: 'varying vec2 vUv; varying vec3 vPosition; void main(){vUv=uv;vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `uniform float uTime; uniform vec3 uColor; varying vec2 vUv; varying vec3 vPosition;
      void main(){float center=pow(max(0.,1.-abs(vUv.x-.5)*2.),.32);
      float thread=pow(.5+.5*sin(vUv.y*42.-uTime*3.1+sin(vUv.x*19.)*.6),10.);
      float glint=pow(.5+.5*sin(vUv.y*121.-uTime*5.3+vUv.x*31.),20.);
      vec3 color=uColor*(.69+center*.34)+vec3(.41,.57,.48)*(thread*.33+glint*.23);
      gl_FragColor=vec4(color, .70+center*.17); }`,
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
  });
  materials.add(water);
  const streams = [
    [[5.0, 4.15], [4.2, 6.5], [3.0, 8.5], [2.3, 10.6], [2.2, 12.7], [2.2, 14.8], [5.35, 17], [6.25, 19.5], [6.9, 21.8]],
    [[-4.95, 4.2], [-4.2, 6.5], [-3.5, 8.35], [-3.7, 10.8], [-3.0, 12.9], [-2.7, 15.1], [-2.65, 18.2], [-4.7, 20.2], [-7.15, 21.8]],
  ];
  const riverPositions = [], riverUV = [], samplePaths = [], cascadeOrigins = [];
  let minDestinationDistance = Infinity, maxUpwardStep = 0, maxTerrainFill = 0;
  for (let routeIndex = 0; routeIndex < streams.length; routeIndex++) {
    const route = streams[routeIndex], curve = new THREE.CatmullRomCurve3(route.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'centripetal');
    const steps = 150, samples = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps, point = curve.getPoint(t), tangent = curve.getTangent(t), halfWidth = .20 + .10 * t + .035 * Math.sin(t * 14);
      const nx = -tangent.z, nz = tangent.x;
      const left = [point.x + nx * halfWidth, 0, point.z + nz * halfWidth], right = [point.x - nx * halfWidth, 0, point.z - nz * halfWidth];
      const surface = Math.max(terrainHeight(...[left[0], left[2]]), terrainHeight(point.x, point.z), terrainHeight(...[right[0], right[2]]));
      left[1] = right[1] = Math.max(.20, surface + .085);
      samples.push({ left, right, center: [point.x, left[1], point.z], t });
      for (const d of destinations) minDestinationDistance = Math.min(minDestinationDistance, Math.hypot(point.x - d.x, point.z - d.z));
    }
    // The final falls leave the bank and meet the still basin at y=.20.
    const end = samples[samples.length - 1]; end.left[1] = end.right[1] = end.center[1] = .20;
    // Fill tiny facet hollows to their spill level (under .04 world units),
    // producing a genuinely descending stream without intersecting the rock.
    for (let i = samples.length - 2; i >= 0; i--) {
      const level = Math.max(samples[i].center[1], samples[i + 1].center[1]);
      maxTerrainFill = Math.max(maxTerrainFill, level - samples[i].center[1]);
      samples[i].left[1] = samples[i].right[1] = samples[i].center[1] = level;
    }
    for (let i = 0; i < steps; i++) {
      const a = samples[i], b = samples[i + 1];
      maxUpwardStep = Math.max(maxUpwardStep, b.center[1] - a.center[1]);
      riverPositions.push(...a.left, ...b.left, ...a.right, ...a.right, ...b.left, ...b.right);
      riverUV.push(0, a.t * 8, 0, b.t * 8, 1, a.t * 8, 1, a.t * 8, 0, b.t * 8, 1, b.t * 8);
      const drop = a.center[1] - b.center[1];
      if (drop > .18 && cascadeOrigins.length < 10) cascadeOrigins.push({ x: b.center[0], y: b.center[1] + .08, z: b.center[2], drop: Math.min(drop, 1.5) });
    }
    samplePaths.push(samples.map(s => s.center));
    // Small organic pool at each stream mouth, joined to the final ribbon.
    const cx = route[route.length - 1][0], cz = route[route.length - 1][1] + .52, sectors = 52;
    for (let i = 0; i < sectors; i++) {
      const a = i * Math.PI * 2 / sectors, b = (i + 1) * Math.PI * 2 / sectors;
      const edge = angle => [cx + Math.cos(angle) * 1.55 * (1 + .09 * Math.sin(angle * 3)), .20, cz + Math.sin(angle) * 1.08];
      riverPositions.push(cx, .20, cz, ...edge(b), ...edge(a));
      riverUV.push(.5, .5, .5 + Math.cos(b) * .47, .5 + Math.sin(b) * .47, .5 + Math.cos(a) * .47, .5 + Math.sin(a) * .47);
    }
  }
  const riverGeometry = own(new THREE.BufferGeometry());
  riverGeometry.setAttribute('position', new THREE.Float32BufferAttribute(riverPositions, 3));
  riverGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(riverUV, 2));
  const rivers = new THREE.Mesh(riverGeometry, water); rivers.name = 'terrain-fitted-turquoise-streams-and-basins'; rivers.renderOrder = 2; group.add(rivers);
  const rippleMaterial = new THREE.MeshBasicMaterial({ color: 0x9dd2bf, transparent: true, opacity: .19, side: THREE.DoubleSide, depthWrite: false }); materials.add(rippleMaterial);
  const rippleGeo = own(new THREE.RingGeometry(.95, 1, 40)); rippleGeo.rotateX(-Math.PI / 2);
  const ripples = new THREE.InstancedMesh(rippleGeo, rippleMaterial, 10); ripples.name = 'gentle-basin-ripples'; ripples.instanceMatrix.setUsage(THREE.DynamicDrawUsage); group.add(ripples);
  const particleCount = 80, sprayPositions = new Float32Array(particleCount * 3);
  const sprayGeo = own(new THREE.BufferGeometry()); sprayGeo.setAttribute('position', new THREE.BufferAttribute(sprayPositions, 3).setUsage(THREE.DynamicDrawUsage));
  const sprayMaterial = new THREE.PointsMaterial({ color: 0xb9e6d2, size: .048, transparent: true, opacity: .34, depthWrite: false, sizeAttenuation: true }); materials.add(sprayMaterial);
  const spray = new THREE.Points(sprayGeo, sprayMaterial); spray.name = 'cascade-spray-80-points'; spray.frustumCulled = false; group.add(spray);
  if (!cascadeOrigins.length) cascadeOrigins.push({ x: 6.8, y: .24, z: 21.5, drop: .4 }, { x: -7, y: .24, z: 21.5, drop: .4 });

  const random = randomGenerator(seed), phase = random() * Math.PI * 2, pathPhase = random() * Math.PI * 2;
  const bodyPositions = Array.from({ length: segmentCount }, () => new THREE.Vector3());
  const bodyRotations = Array.from({ length: segmentCount }, () => new THREE.Quaternion());
  const a = new THREE.Vector3(), b = new THREE.Vector3(), tangent = new THREE.Vector3(), localOffset = new THREE.Vector3();
  const frame = new THREE.Matrix4(), up = new THREE.Vector3(0, 1, 0), xAxis = new THREE.Vector3(), yAxis = new THREE.Vector3();
  let clock = 0, disposed = false;
  function dragonPoint(time, segment, out) {
    const theta = phase + .128 * time + .14 * Math.sin(time * .085 + pathPhase) - segment * .030;
    const wave = Math.min(1, Math.max(0, segment) / 3);
    const radius = 23 + .62 * Math.sin(time * .12 + pathPhase) + .68 * Math.sin(segment * .55 - time * .90) * wave;
    out.set(Math.cos(theta) * radius, 17.5 + .65 * Math.sin(time * .22 + pathPhase) + .54 * Math.sin(segment * .46 - time * .9) * wave, Math.sin(theta) * radius * .96);
  }
  function phoenixPoint(time, out) {
    const theta = phase + Math.PI + .103 * time + .12 * Math.sin(time * .11 + pathPhase);
    const radius = 25.9 + .65 * Math.sin(time * .14 + pathPhase + 1.1);
    out.set(Math.cos(theta) * radius, 22.45 + .35 * Math.sin(time * .24 + pathPhase + .7), Math.sin(theta) * radius * .98);
  }
  function orient(direction, output) {
    xAxis.crossVectors(up, direction).normalize(); yAxis.crossVectors(direction, xAxis).normalize();
    frame.makeBasis(xAxis, yAxis, direction); output.setFromRotationMatrix(frame);
  }
  function pose(time) {
    for (let i = 0; i < segmentCount; i++) {
      dragonPoint(time, i, bodyPositions[i]); dragonPoint(time, i - .035, a); dragonPoint(time, i + .035, b);
      tangent.subVectors(a, b).normalize(); orient(tangent, bodyRotations[i]);
      const taper = 1 - Math.pow(i / (segmentCount - 1), 2.6), radius = .055 + .32 * taper;
      scaling.set(radius, radius * .91, .57 * (.47 + .53 * taper));
      matrix.compose(bodyPositions[i], bodyRotations[i], scaling); body.setMatrixAt(i, matrix);
      if (i < segmentCount - 3) {
        localOffset.set(0, -radius * .77, .03).applyQuaternion(bodyRotations[i]); position.copy(bodyPositions[i]).add(localOffset);
        scaling.set(radius * .71, .065, .43); matrix.compose(position, bodyRotations[i], scaling); belly.setMatrixAt(i, matrix);
      }
      if (i < segmentCount - 2) {
        localOffset.set(0, radius * .97 + .11 * taper, -.06).applyQuaternion(bodyRotations[i]); position.copy(bodyPositions[i]).add(localOffset);
        scaling.set(.08 + .05 * taper, .12 + .32 * taper, .20); matrix.compose(position, bodyRotations[i], scaling); spine.setMatrixAt(i, matrix);
      }
    }
    for (const mesh of [body, belly, spine]) mesh.instanceMatrix.needsUpdate = true;
    head.position.copy(bodyPositions[0]); head.quaternion.copy(bodyRotations[0]);
    for (const limb of limbMeshes) for (let i = 0; i < 2; i++) {
      const segment = i === 0 ? 5 : 13;
      localOffset.set(limb.side * .25, -.10, 0).applyQuaternion(bodyRotations[segment]); position.copy(bodyPositions[segment]).add(localOffset);
      scaling.set(1, 1, 1); matrix.compose(position, bodyRotations[segment], scaling); limb.mesh.setMatrixAt(i, matrix);
    }
    for (const limb of limbMeshes) limb.mesh.instanceMatrix.needsUpdate = true;
    phoenixPoint(time, phoenix.position); phoenixPoint(time + .015, a); phoenixPoint(time - .015, b);
    tangent.subVectors(a, b).normalize(); orient(tangent, phoenix.quaternion);
    const flap = Math.sin(time * 2.0 + pathPhase);
    for (const wing of wings) {
      wing.shoulder.rotation.z = wing.side * (-.14 + .36 * flap);
      wing.shoulder.rotation.y = .10 + .065 * Math.cos(time * 2.0 + pathPhase);
      wing.wrist.rotation.z = -.04 + .23 * Math.sin(time * 2.0 + pathPhase - .48);
      wing.wrist.rotation.y = .065 * Math.sin(time * 2.0 + pathPhase - .2);
    }
    for (let i = 0; i < tails.length; i++) {
      tails[i].rotation.x = .08 * Math.sin(time * 1.32 - i * .35 + pathPhase);
      tails[i].rotation.y = .055 * Math.sin(time * 1.05 - i * .42 + pathPhase);
      tails[i].rotation.z = .055 * Math.sin(time * 1.3 - i * .28);
    }
    water.uniforms.uTime.value = time;
    quaternion.identity();
    for (let i = 0; i < 10; i++) {
      const t = (time * .10 + (i % 5) / 5) % 1, pool = streams[i < 5 ? 0 : 1];
      position.set(pool[pool.length - 1][0], .212 + (i % 5) * .001, pool[pool.length - 1][1] + .45);
      scaling.set(.20 + t * 1.1, 1, (.20 + t * 1.1) * .69); matrix.compose(position, quaternion, scaling); ripples.setMatrixAt(i, matrix);
    }
    ripples.instanceMatrix.needsUpdate = true;
    for (let i = 0; i < particleCount; i++) {
      const origin = cascadeOrigins[i % cascadeOrigins.length], t = (time * .48 + i * .61803398875) % 1;
      const angle = i * 2.39996, speed = .12 + (i % 7) * .022;
      sprayPositions[i * 3] = origin.x + Math.cos(angle) * speed * t;
      sprayPositions[i * 3 + 1] = origin.y + Math.sin(t * Math.PI) * (.14 + origin.drop * .18);
      sprayPositions[i * 3 + 2] = origin.z + Math.sin(angle) * speed * t + t * .14;
    }
    sprayGeo.attributes.position.needsUpdate = true;
  }
  pose(0); group.updateMatrixWorld(true);
  let triangles = 0, meshDraws = 0, pointDraws = 0;
  group.traverse(object => {
    if (object.isMesh) { triangles += (object.geometry.index ? object.geometry.index.count : object.geometry.attributes.position.count) / 3 * (object.isInstancedMesh ? object.count : 1); meshDraws++; }
    if (object.isPoints) pointDraws++;
  });
  const stats = {
    triangles, meshDraws, pointDraws, drawCalls: meshDraws + pointDraws, materialCount: materials.size,
    dragonSegments: segmentCount, sprayPoints: particleCount, seed: seed >>> 0,
    coordinateSystem: 'Y-up; mountain origin [0,0,0]; entrance +Z; local forward +Z',
    dragonCenterBounds: { radiusXZ: [20.83, 24.3], y: [16.31, 18.69] },
    phoenixCenterBounds: { radiusXZ: [24.7, 26.55], y: [22.10, 22.80] },
    basins: [[6.9, .20, 22.32], [-7.15, .20, 22.32]],
    terrain: { source: 'mountain-model.mjs original seeded rock surfaces', streamSamples: samplePaths, minDestinationDistance, maxUpwardStep, maxTerrainFill },
    motion: { phase, pathPhase, internalSeconds: true, zeroDeltaFreezes: true, perFrameGeometryAllocations: 0 },
  };
  group.userData.asset = 'river-fauna-v4'; group.userData.stats = stats;
  function update(dt, _time) {
    if (disposed || !Number.isFinite(dt) || dt <= 0) return;
    clock += Math.min(dt, .1); pose(clock);
  }
  function dispose() {
    if (disposed) return; disposed = true;
    for (const geometry of geometries) geometry.dispose();
    for (const material of materials) material.dispose();
  }
  return { group, update, dispose, stats };
}

export default createMountainLife;
