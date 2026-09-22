/**
 * Standalone Three.js ornament factories. No imports, textures, DOM, or renderer.
 * Units are scene units; all front faces look toward +Z.
 * The caller owns placement, lighting, and calls update(dtSeconds, elapsedSeconds).
 */

function makeBuilder(THREE) {
  const batches = new Map();
  const matrix = new THREE.Matrix4();
  const quaternion = new THREE.Quaternion();
  const translation = new THREE.Vector3();
  const scaling = new THREE.Vector3();
  const euler = new THREE.Euler();
  function add(geometry, material, p = [0, 0, 0], s = [1, 1, 1], r = [0, 0, 0]) {
    quaternion.setFromEuler(euler.set(...r));
    matrix.compose(translation.set(...p), quaternion, scaling.set(...s));
    const flat = geometry.index ? geometry.toNonIndexed() : geometry.clone();
    flat.applyMatrix4(matrix);
    if (!batches.has(material)) batches.set(material, []);
    batches.get(material).push(flat);
    geometry.dispose();
  }
  function finish(parent, name) {
    for (const [material, parts] of batches) {
      const count = parts.reduce((n, p) => n + p.getAttribute('position').count, 0);
      const positions = new Float32Array(count * 3);
      const normals = new Float32Array(count * 3);
      const uvs = new Float32Array(count * 2);
      let offset = 0;
      for (const part of parts) {
        const p = part.getAttribute('position');
        positions.set(p.array, offset * 3);
        if (part.getAttribute('normal')) normals.set(part.getAttribute('normal').array, offset * 3);
        if (part.getAttribute('uv')) uvs.set(part.getAttribute('uv').array, offset * 2);
        offset += p.count;
        part.dispose();
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
      geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
      geometry.computeBoundingSphere();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = `${name}-${material.name || 'surface'}`;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
    }
    batches.clear();
  }
  return { add, finish };
}

function lifecycle(group, animate) {
  let elapsed = 0;
  let disposed = false;
  return {
    group,
    update(dt = 0, t, strength = 1) {
      if (disposed) return;
      elapsed = Number.isFinite(t) ? t : elapsed + Math.max(0, Number.isFinite(dt) ? dt : 0);
      animate(elapsed, Number.isFinite(strength) ? Math.max(0, Math.min(3, strength)) : 1);
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      const geometries = new Set();
      const materials = new Set();
      group.traverse((node) => {
        if (node.geometry) geometries.add(node.geometry);
        const list = Array.isArray(node.material) ? node.material : [node.material];
        for (const material of list) if (material) materials.add(material);
      });
      for (const geometry of geometries) geometry.dispose();
      for (const material of materials) material.dispose();
      group.removeFromParent();
      group.clear();
    },
  };
}

function tube(THREE, points, radius = 0.013, segments = 20) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  return new THREE.TubeGeometry(curve, segments, radius, 5, false);
}

function disk(THREE, radius, depth = 0.04, bevel = 0.012) {
  const shape = new THREE.Shape();
  shape.absarc(0, 0, radius, 0, Math.PI * 2, false);
  return new THREE.ExtrudeGeometry(shape, {
    depth, bevelEnabled: bevel > 0, bevelSegments: 2,
    steps: 1, bevelSize: bevel, bevelThickness: bevel, curveSegments: 48,
  });
}

export function createLuckyCat(THREE) {
  const group = new THREE.Group();
  group.name = 'lucky-cat';
  const body = new THREE.Group();
  body.name = 'ceramic-body';
  group.add(body);
  const ivory = new THREE.MeshPhysicalMaterial({
    color: 0xf7eddc, roughness: 0.19, metalness: 0.02,
    clearcoat: 1, clearcoatRoughness: 0.11, reflectivity: 0.6,
  });
  ivory.name = 'ivory-glaze';
  const jade = new THREE.MeshPhysicalMaterial({
    color: 0x23594c, roughness: 0.22, metalness: 0.22,
    clearcoat: 0.9, clearcoatRoughness: 0.18,
  });
  jade.name = 'deep-jade';
  const gold = new THREE.MeshStandardMaterial({ color: 0xdab15f, roughness: 0.24, metalness: 0.83 });
  gold.name = 'brushed-gold';
  const dark = new THREE.MeshStandardMaterial({ color: 0x302b26, roughness: 0.29, metalness: 0.06 });
  dark.name = 'ink-details';
  const coral = new THREE.MeshStandardMaterial({ color: 0xba6a55, roughness: 0.34, metalness: 0.06 });
  coral.name = 'ear-and-nose';
  const coinInset = new THREE.MeshStandardMaterial({ color: 0x87652e, roughness: 0.33, metalness: 0.65 });
  coinInset.name = 'coin-relief';

  const b = makeBuilder(THREE);
  const sphere = (m, p, s, r) => b.add(new THREE.SphereGeometry(1, 28, 20), m, p, s, r);
  const ring = (m, radius, thickness, p, s, r) => b.add(new THREE.TorusGeometry(radius, thickness, 7, 64), m, p, s, r);

  // A rounded jade plinth and a substantial pear-shaped ceramic body.
  sphere(jade, [0, -0.04, 0], [0.76, 0.10, 0.60]);
  ring(gold, 0.66, 0.019, [0, -0.04, 0], [1, 0.80, 1], [Math.PI / 2, 0, 0]);
  const profile = [
    [0, 0.05], [0.39, 0.05], [0.57, 0.18], [0.66, 0.43],
    [0.66, 0.73], [0.59, 1.01], [0.47, 1.24], [0.40, 1.35], [0, 1.35],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  b.add(new THREE.LatheGeometry(profile, 48), ivory, [0, 0, 0], [1, 1, 0.83]);
  sphere(ivory, [-0.38, 0.15, 0.32], [0.29, 0.18, 0.39]);
  sphere(ivory, [0.38, 0.15, 0.32], [0.29, 0.18, 0.39]);
  sphere(ivory, [0, 1.87, 0.08], [0.70, 0.61, 0.54]);
  sphere(ivory, [0, 1.57, 0.30], [0.45, 0.25, 0.33]);

  // Softly bevelled ears are tapered volumes, with inset warm enamel.
  const earShape = new THREE.Shape();
  earShape.moveTo(-0.22, -0.12);
  earShape.quadraticCurveTo(-0.26, 0.03, -0.12, 0.37);
  earShape.quadraticCurveTo(-0.075, 0.46, -0.01, 0.38);
  earShape.quadraticCurveTo(0.19, 0.17, 0.23, -0.11);
  earShape.quadraticCurveTo(0, -0.22, -0.22, -0.12);
  const earGeometry = () => new THREE.ExtrudeGeometry(earShape, {
    depth: 0.19, bevelEnabled: true, bevelSize: 0.065,
    bevelThickness: 0.055, bevelSegments: 3, curveSegments: 10,
  });
  for (const side of [-1, 1]) {
    const earX = side * 0.46;
    b.add(earGeometry(), ivory, [earX, 2.23, 0.03], [1, 1, 1], [0, 0, -side * 0.12]);
    b.add(earGeometry(), coral, [earX - side * 0.017, 2.27, 0.228], [0.52, 0.64, 0.10], [0, 0, -side * 0.12]);
  }

  // Relaxed, smiling eyes and fine three-dimensional whiskers.
  for (const side of [-1, 1]) {
    const x = side * 0.27;
    b.add(tube(THREE, [[x - 0.12, 1.90, 0.595], [x - 0.075, 1.965, 0.61],
      [x, 1.989, 0.618], [x + 0.075, 1.965, 0.61], [x + 0.12, 1.90, 0.595]], 0.021, 24), dark);
    for (let i = 0; i < 3; i++) {
      const y = 1.76 + (i - 1) * 0.075;
      b.add(tube(THREE, [[side * 0.40, y, 0.558],
        [side * 0.56, y + (i - 1) * 0.028, 0.519],
        [side * 0.67, y + (i - 1) * 0.060, 0.438]], 0.011, 12), dark);
    }
    sphere(coral, [side * 0.44, 1.77, 0.537], [0.073, 0.036, 0.021]);
  }
  const nose = new THREE.Shape();
  nose.moveTo(-0.077, 0.025);
  nose.quadraticCurveTo(0, 0.056, 0.077, 0.025);
  nose.quadraticCurveTo(0.027, -0.07, 0, -0.065);
  nose.quadraticCurveTo(-0.032, -0.06, -0.077, 0.025);
  b.add(new THREE.ExtrudeGeometry(nose, { depth: 0.015, bevelEnabled: true,
    bevelSize: 0.012, bevelThickness: 0.009, bevelSegments: 2, curveSegments: 8 }),
  coral, [0, 1.81, 0.624]);
  b.add(tube(THREE, [[0, 1.756, 0.643], [0, 1.708, 0.649], [-0.057, 1.675, 0.650],
    [-0.116, 1.701, 0.64]], 0.013, 18), dark);
  b.add(tube(THREE, [[0, 1.708, 0.649], [0.057, 1.675, 0.650],
    [0.116, 1.701, 0.64]], 0.013, 14), dark);

  // Jade collar, a tiny suspended bell, and an oval koban-style gold coin.
  ring(jade, 0.435, 0.072, [0, 1.352, 0.03], [1.13, 0.9, 1], [Math.PI / 2, 0, 0]);
  ring(gold, 0.443, 0.017, [0, 1.326, 0.03], [1.13, 0.9, 1], [Math.PI / 2, 0, 0]);
  sphere(gold, [0, 1.28, 0.49], [0.13, 0.14, 0.09]);
  ring(coinInset, 0.096, 0.007, [0, 1.28, 0.566], [1, 1, 1]);
  b.add(new THREE.BoxGeometry(0.070, 0.012, 0.013), dark, [0, 1.232, 0.58]);
  b.add(disk(THREE, 0.34, 0.065, 0.014), gold, [0.11, 0.64, 0.538], [1, 1.44, 1], [0, 0, -0.12]);
  ring(coinInset, 0.304, 0.014, [0.11, 0.64, 0.626], [1, 1.44, 1], [0, 0, -0.12]);
  // Raised square coin opening and simple relief bars remain legible at small size.
  b.add(new THREE.BoxGeometry(0.17, 0.17, 0.019), coinInset, [0.11, 0.64, 0.634], [1, 1, 1], [0, 0, -0.12]);
  b.add(new THREE.BoxGeometry(0.105, 0.105, 0.021), jade, [0.11, 0.64, 0.647], [1, 1, 1], [0, 0, -0.12]);
  for (const y of [0.38, 0.89]) {
    b.add(new THREE.BoxGeometry(0.18, 0.025, 0.018), coinInset, [0.11, y, 0.63], [1, 1, 1], [0, 0, -0.12]);
    b.add(new THREE.BoxGeometry(0.12, 0.021, 0.018), coinInset, [0.11, y + 0.057, 0.63], [1, 1, 1], [0, 0, -0.12]);
  }
  // Left paw (viewer right) rests against the coin.
  sphere(ivory, [0.48, 0.99, 0.34], [0.22, 0.42, 0.24], [0, 0, -0.32]);
  sphere(ivory, [0.39, 0.73, 0.59], [0.22, 0.22, 0.19]);
  for (let i = 0; i < 3; i++) {
    b.add(tube(THREE, [[0.29 + i * 0.07, 0.69, 0.760], [0.295 + i * 0.07, 0.63, 0.752]], 0.008, 5), coinInset);
  }
  for (const x of [-0.47, -0.37, 0.32, 0.42]) {
    b.add(tube(THREE, [[x, 0.19, 0.692], [x, 0.125, 0.704]], 0.008, 5), coinInset);
  }
  // A curled tail peeks out in silhouette behind the resting arm.
  b.add(tube(THREE, [[0.48, 0.33, -0.23], [0.74, 0.42, -0.25],
    [0.80, 0.69, -0.22], [0.72, 0.82, -0.18]], 0.105, 24), ivory);
  b.finish(body, 'cat');

  // Anatomical right paw is viewer-left: transform origin is the shoulder.
  const shoulder = new THREE.Group();
  shoulder.name = 'right-shoulder-pivot';
  shoulder.position.set(-0.56, 1.19, 0.06);
  body.add(shoulder);
  const paw = makeBuilder(THREE);
  paw.add(new THREE.SphereGeometry(1, 24, 18), ivory, [-0.15, 0.31, 0.01], [0.20, 0.43, 0.20], [0, 0, -0.22]);
  paw.add(new THREE.SphereGeometry(1, 24, 18), ivory, [-0.17, 0.72, 0.055], [0.235, 0.28, 0.19]);
  paw.add(new THREE.SphereGeometry(1, 16, 12), coral, [-0.17, 0.68, 0.233], [0.099, 0.11, 0.017]);
  for (let i = 0; i < 3; i++) {
    paw.add(new THREE.SphereGeometry(1, 12, 10), coral,
      [-0.25 + i * 0.08, 0.83 + (i === 1 ? 0.019 : 0), 0.215], [0.034, 0.041, 0.014]);
    paw.add(tube(THREE, [[-0.265 + i * 0.09, 0.936, 0.161],
      [-0.267 + i * 0.09, 0.88, 0.195]], 0.008, 5), coinInset);
  }
  paw.finish(shoulder, 'waving-paw');
  group.userData.height = 2.86;
  group.userData.front = '+Z';
  group.userData.wavingPaw = 'anatomical right; viewer left';
  return lifecycle(group, (t) => {
    shoulder.rotation.x = 0.13 + Math.sin(t * 2.35) * 0.24;
    shoulder.rotation.z = -0.045 + Math.sin(t * 2.35 + 0.48) * 0.075;
    body.rotation.y = Math.sin(t * 0.36) * 0.018;
  });
}

/**
 * Early Heaven reference pose: south top, north bottom, east left, west right.
 * Clockwise from 12 o'clock: Qian, Xun, Kan, Gen, Kun, Zhen, Li, Dui.
 * Bits are bottom-to-top (radially inner-to-outer), NOT top-to-bottom.
 * Source: Ming primary text 圖書編, 先天八卦方位圖説.
 * https://www.shidianguji.com/zh/book/SK1996/chapter/1lbez83rr4yrt
 */
export function createBaguaWheel(THREE) {
  const group = new THREE.Group();
  group.name = 'early-heaven-bagua';
  const wheel = new THREE.Group();
  wheel.name = 'rotating-bronze-wheel';
  group.add(wheel);
  const bronze = new THREE.MeshStandardMaterial({ color: 0xa78247, metalness: 0.79, roughness: 0.36 });
  bronze.name = 'aged-bronze';
  const gold = new THREE.MeshStandardMaterial({ color: 0xd3b577, metalness: 0.72, roughness: 0.31 });
  gold.name = 'trigram-gold';
  const ivory = new THREE.MeshPhysicalMaterial({ color: 0xece3cd, metalness: 0.10, roughness: 0.26, clearcoat: 0.7 });
  ivory.name = 'yang-ivory';
  const ink = new THREE.MeshPhysicalMaterial({ color: 0x142b29, metalness: 0.16, roughness: 0.24, clearcoat: 0.7 });
  ink.name = 'yin-jade';
  const b = makeBuilder(THREE);
  b.add(new THREE.TorusGeometry(2.40, 0.029, 7, 112), bronze);
  b.add(new THREE.TorusGeometry(2.49, 0.010, 5, 112), gold);
  b.add(new THREE.TorusGeometry(1.42, 0.017, 6, 96), bronze);
  b.add(new THREE.TorusGeometry(1.195, 0.028, 7, 96), bronze);
  const trigrams = [
    { name: '乾', roman: 'Qian', nature: '天', direction: 'S', bits: [1, 1, 1] },
    { name: '巽', roman: 'Xun', nature: '風', direction: 'SW', bits: [0, 1, 1] },
    { name: '坎', roman: 'Kan', nature: '水', direction: 'W', bits: [0, 1, 0] },
    { name: '艮', roman: 'Gen', nature: '山', direction: 'NW', bits: [0, 0, 1] },
    { name: '坤', roman: 'Kun', nature: '地', direction: 'N', bits: [0, 0, 0] },
    { name: '震', roman: 'Zhen', nature: '雷', direction: 'NE', bits: [1, 0, 0] },
    { name: '離', roman: 'Li', nature: '火', direction: 'E', bits: [1, 0, 1] },
    { name: '兌', roman: 'Dui', nature: '澤', direction: 'SE', bits: [1, 1, 0] },
  ];
  for (let i = 0; i < 8; i++) {
    const angle = -i * Math.PI / 4;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const place = (x, y) => [x * cos - y * sin, x * sin + y * cos, 0.026];
    for (let row = 0; row < 3; row++) {
      const radius = 1.70 + row * 0.18;
      if (trigrams[i].bits[row]) {
        b.add(new THREE.BoxGeometry(0.62, 0.078, 0.06), gold, place(0, radius), [1, 1, 1], [0, 0, angle]);
      } else {
        for (const side of [-1, 1]) {
          b.add(new THREE.BoxGeometry(0.235, 0.078, 0.06), gold, place(side * 0.1925, radius), [1, 1, 1], [0, 0, angle]);
        }
      }
    }
    // Quiet marks between the trigrams distinguish the octants.
    const a = angle + Math.PI / 8;
    b.add(new THREE.SphereGeometry(0.035, 8, 6), bronze, [-Math.sin(a) * 2.30, Math.cos(a) * 2.30, 0]);
  }
  const radius = 1.135;
  b.add(disk(THREE, radius, 0.062, 0.018), ivory, [0, 0, -0.022]);
  const yin = new THREE.Shape();
  yin.moveTo(0, radius);
  yin.absarc(0, 0, radius, Math.PI / 2, -Math.PI / 2, true);
  yin.absarc(0, -radius / 2, radius / 2, -Math.PI / 2, Math.PI / 2, true);
  yin.absarc(0, radius / 2, radius / 2, -Math.PI / 2, Math.PI / 2, false);
  yin.closePath();
  b.add(new THREE.ShapeGeometry(yin, 64), ink, [0, 0, 0.059]);
  b.add(disk(THREE, 0.153, 0.009, 0.006), ink, [0, radius / 2, 0.061]);
  b.add(disk(THREE, 0.153, 0.009, 0.006), ivory, [0, -radius / 2, 0.068]);
  b.finish(wheel, 'bagua');
  group.userData.orientation = 'At rest: south top, east left; line bits inner-to-outer = bottom-to-top.';
  group.userData.trigramsClockwiseFromTop = trigrams;
  group.userData.source = 'https://www.shidianguji.com/zh/book/SK1996/chapter/1lbez83rr4yrt';
  return lifecycle(group, (t) => {
    // Slow continuous rotation evokes passing time; reference orientation is at rest.
    wheel.rotation.z = -t * 0.07;
    wheel.rotation.y = Math.sin(t * 0.13) * 0.025;
  });
}

export function createBlessingHalo(THREE) {
  const group = new THREE.Group();
  group.name = 'blessing-halo';
  group.position.set(0, 5.5, -2.5);
  const uniforms = {
    uTime: { value: 0 }, uStrength: { value: 1 },
    uGold: { value: new THREE.Color(0xf0bd68) },
  };
  const ringMaterial = new THREE.ShaderMaterial({
    name: 'radial-golden-halo', uniforms,
    transparent: true, blending: THREE.AdditiveBlending,
    depthWrite: false, depthTest: true, side: THREE.DoubleSide,
    toneMapped: false,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uStrength;
      uniform vec3 uGold;
      varying vec2 vUv;
      float band(float r, float center, float width) {
        float d = (r - center) / width;
        return exp(-d * d);
      }
      void main() {
        vec2 p = (vUv - 0.5) * 2.0;
        float breathe = 1.0 + sin(uTime * 0.47) * 0.014;
        float r = length(p) / breathe;
        float angle = atan(p.y, p.x);
        float core = band(r, 0.7143, 0.0028) * 0.54;
        float inside = band(r, 0.659, 0.0018) * 0.26;
        float outside = band(r, 0.761, 0.0015) * 0.18;
        float soft = band(r, 0.7143, 0.024) * 0.11;
        float haze = band(r, 0.68, 0.16) * 0.024;
        float ticks = pow(max(0.0, cos(angle * 80.0 + uTime * 0.055)), 20.0);
        float filigree = ticks * band(r, 0.739, 0.006) * 0.18;
        float alpha = (core + inside + outside + soft + haze + filigree) * uStrength;
        alpha *= 0.94 + 0.06 * sin(uTime * 0.47);
        alpha *= 1.0 - smoothstep(0.88, 0.99, r);
        gl_FragColor = vec4(uGold, min(alpha, 0.86));
      }
    `,
  });
  const rings = new THREE.Mesh(new THREE.PlaneGeometry(8.4, 8.4), ringMaterial);
  rings.name = 'three-concentric-glow-rings';
  rings.renderOrder = 1;
  group.add(rings);

  const count = 180;
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count * 4);
  // Deterministic distribution: instances are reproducible and allocate once.
  let randomState = 74023;
  const random = () => {
    randomState = (Math.imul(randomState, 1664525) + 1013904223) >>> 0;
    return randomState / 4294967296;
  };
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (random() - 0.5) * 7.0;
    positions[i * 3 + 1] = (random() - 0.5) * 7.1;
    positions[i * 3 + 2] = random() * 0.5;
    seeds[i * 4] = random();
    seeds[i * 4 + 1] = 0.12 + random() * 0.18;
    seeds[i * 4 + 2] = 0.6 + random() * 1.15;
    seeds[i * 4 + 3] = random() * Math.PI * 2;
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 4));
  particleGeometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 6);
  const particleMaterial = new THREE.ShaderMaterial({
    name: 'ascending-gold-specks', uniforms,
    transparent: true, blending: THREE.AdditiveBlending,
    depthWrite: false, depthTest: true, toneMapped: false,
    vertexShader: `
      uniform float uTime;
      attribute vec4 aSeed;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        float y = mod(position.y + 3.55 + uTime * aSeed.y, 7.1) - 3.55;
        p.x += sin(uTime * 0.18 + aSeed.w) * 0.13;
        p.y = y;
        p.z += sin(uTime * 0.14 + aSeed.w) * 0.11;
        float fade = smoothstep(-3.55, -2.7, y) * (1.0 - smoothstep(2.4, 3.55, y));
        vAlpha = fade * (0.35 + aSeed.x * 0.40);
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        float attenuation = (projectionMatrix[3][3] == 0.0) ? 180.0 / max(1.0, -mvPosition.z) : 1.0;
        gl_PointSize = clamp(aSeed.z * attenuation, 1.2, 9.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 uGold;
      uniform float uStrength;
      varying float vAlpha;
      void main() {
        vec2 p = (gl_PointCoord - 0.5) * 2.0;
        float radius = dot(p, p);
        if (radius > 1.0) discard;
        float light = exp(-radius * 5.5) * (1.0 - smoothstep(0.64, 1.0, radius));
        gl_FragColor = vec4(mix(uGold, vec3(1.0, 0.9, 0.64), 0.22), light * vAlpha * uStrength);
      }
    `,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  particles.name = '180-ascending-light-specks';
  particles.renderOrder = 2;
  group.add(particles);
  group.userData.particleCount = count;
  group.userData.radius = 3;
  return lifecycle(group, (t, strength) => {
    uniforms.uTime.value = t;
    uniforms.uStrength.value = strength;
    group.visible = strength > 0.001;
  });
}
