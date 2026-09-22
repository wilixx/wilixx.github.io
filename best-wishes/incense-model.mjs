/** Self-contained Three.js incense altar. No DOM, textures, imports or network. */
export const INCENSE_DURATION = 95;
const ASH_Y = 2.65;
const STICK_LENGTH = 4.5;
const INSERT_TIME = 0.62;
const INSERT_STEP = 0.33;
const MAX_STICKS = 12;
const PARTICLES_PER_STICK = 60;

const boundedCount = (value) => Math.max(1, Math.min(MAX_STICKS, Math.round(Number(value)) || 1));
const clamp01 = (value) => Math.max(0, Math.min(1, value));

/** Rear-to-front rows, centered and slightly staggered to preserve separation. */
export function incenseLayout(count) {
  const total = boundedCount(count);
  const rows = Math.ceil(total / 4);
  const common = Math.floor(total / rows);
  const surplus = total % rows;
  const result = [];
  for (let row = 0; row < rows; row += 1) {
    const columns = common + (row < surplus ? 1 : 0);
    for (let column = 0; column < columns; column += 1) {
      const index = result.length;
      result.push({
        index,
        row,
        column,
        x: (column - (columns - 1) / 2) * 0.49 + (row - (rows - 1) / 2) * 0.055,
        z: (row - (rows - 1) / 2) * 0.39,
        delay: index * INSERT_STEP,
      });
    }
  }
  return result;
}

const noiseGLSL = /* glsl */ `
  float altarHash(vec3 p) {
    p = fract(p * .3183099 + vec3(.17, .31, .73));
    p *= 17.;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float altarNoise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3. - 2. * f);
    return mix(
      mix(mix(altarHash(i), altarHash(i+vec3(1,0,0)), f.x),
          mix(altarHash(i+vec3(0,1,0)), altarHash(i+vec3(1,1,0)), f.x), f.y),
      mix(mix(altarHash(i+vec3(0,0,1)), altarHash(i+vec3(1,0,1)), f.x),
          mix(altarHash(i+vec3(0,1,1)), altarHash(i+vec3(1,1,1)), f.x), f.y), f.z);
  }
`;

/**
 * update(dt) accepts seconds and advances only its own clock, so omitting update
 * pauses placement, burn and smoke together. The optional elapsed argument is
 * intentionally ignored: a caller's global elapsed clock may keep running.
 */
export function createIncenseAltar(THREE) {
  if (!THREE?.Group || !THREE?.ShaderMaterial) throw new TypeError('A Three.js namespace is required.');
  const group = new THREE.Group();
  group.name = 'Incense altar';
  const geometries = new Set();
  const materials = new Set();
  const ownGeometry = (geometry) => { geometries.add(geometry); return geometry; };
  const ownMaterial = (material) => { materials.add(material); return material; };
  const color = (value) => new THREE.Color(value);

  function surface(base, metalness, roughness, patina = 0) {
    const material = ownMaterial(new THREE.MeshStandardMaterial({ color: base, metalness, roughness }));
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vAltarPosition;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvAltarPosition = position;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vAltarPosition;\n${noiseGLSL}`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          float altarGrain = altarNoise(vAltarPosition * 92.);
          float altarWear = altarNoise(vAltarPosition * 4.2) * .65 + altarNoise(vAltarPosition * 15.) * .35;
          diffuseColor.rgb *= mix(.82, 1.16, altarGrain);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.022, .047, .035), smoothstep(.49, .81, altarWear) * ${patina.toFixed(3)});
        `);
    };
    material.customProgramCacheKey = () => `altar-surface-v1-${patina}`;
    return material;
  }

  const bronze = surface('#54402b', 0.82, 0.57, 0.72);
  const bronzeDark = surface('#342e22', 0.77, 0.67, 0.55);
  const gold = surface('#9c7840', 0.83, 0.46, 0.30);
  const stone = surface('#252824', 0.08, 0.96, 0.08);
  const stoneEdge = surface('#34362f', 0.09, 0.92, 0.06);
  const ashMaterial = surface('#7e7564', 0.0, 1.0, 0.0);
  const bambooMaterial = surface('#823b29', 0.05, 0.8, 0.0);
  const incenseMaterial = surface('#68482f', 0.0, 0.98, 0.0);
  const burnedMaterial = surface('#aaa38e', 0.0, 1.0, 0.0);
  const emberMaterial = ownMaterial(new THREE.MeshBasicMaterial({ color: '#ff5727', toneMapped: false }));

  function mesh(geometry, material, name, position) {
    const object = new THREE.Mesh(ownGeometry(geometry), material);
    object.name = name;
    if (position) object.position.set(...position);
    object.castShadow = true;
    object.receiveShadow = true;
    group.add(object);
    return object;
  }

  function ring(radius, tube, y, material = gold, name = 'Cast bronze ring') {
    const object = mesh(new THREE.TorusGeometry(radius, tube, 8, 96), material, name, [0, y, 0]);
    object.rotation.x = Math.PI / 2;
    return object;
  }

  // A low stone dais supplies weight without enclosing or dominating the scene.
  mesh(new THREE.CylinderGeometry(3.67, 3.76, 0.27, 96), stone, 'Round stone altar', [0, -0.105, 0]);
  mesh(new THREE.CylinderGeometry(3.81, 3.85, 0.105, 96), stoneEdge, 'Stone plinth edge', [0, -0.275, 0]);
  ring(3.56, 0.014, 0.032, stoneEdge, 'Stone incised border');
  ring(3.46, 0.008, 0.034, bronzeDark, 'Fine stone inlay');

  // Closed lathe profile includes the inner wall and substantial rolled lip.
  const profile = [
    [0, .81], [.80, .81], [1.34, .91], [1.87, 1.14], [2.25, 1.46],
    [2.53, 1.91], [2.70, 2.38], [2.78, 2.72], [2.79, 2.80],
    [2.76, 2.89], [2.66, 2.91], [2.57, 2.85], [2.56, 2.77],
    [2.52, 2.63], [2.43, 2.21], [2.22, 1.77], [1.86, 1.42],
    [1.29, 1.19], [.70, 1.12], [0, 1.12],
  ].map(([radius, y]) => new THREE.Vector2(radius, y));
  mesh(new THREE.LatheGeometry(profile, 96), bronze, 'Aged bronze ding');
  ring(2.753, 0.033, 2.871, gold, 'Polished outer lip');
  ring(2.592, 0.020, 2.835, gold, 'Worn inner lip');
  ring(2.765, 0.028, 2.681, bronzeDark, 'Shadow under the rolled rim');
  ring(2.675, 0.019, 2.328, gold, 'Upper engraved band');
  ring(2.646, 0.014, 2.248, gold, 'Lower engraved band');
  ring(1.426, 0.026, .947, bronzeDark, 'Bowl foot casting');

  // Small cast studs follow the belly band, all in a single instanced draw.
  const stampGeometry = ownGeometry(new THREE.BoxGeometry(.045, .082, .029));
  const stamps = new THREE.InstancedMesh(stampGeometry, gold, 40);
  stamps.name = 'Cast band detailing';
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 40; i += 1) {
    const angle = i / 40 * Math.PI * 2;
    dummy.position.set(Math.sin(angle) * 2.663, 2.288, Math.cos(angle) * 2.663);
    dummy.rotation.set(0, angle, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    stamps.setMatrixAt(i, dummy.matrix);
  }
  stamps.castShadow = true;
  group.add(stamps);

  // Two open ear handles, visibly hollow from an oblique camera.
  for (const side of [-1, 1]) {
    const points = [
      [2.60, 2.60, 0], [3.00, 2.67, 0], [3.19, 2.91, 0],
      [3.21, 3.40, 0], [3.07, 3.60, 0], [2.76, 3.61, 0],
      [2.58, 3.43, 0], [2.59, 2.97, 0],
    ].map(([x, y, z]) => new THREE.Vector3(x * side, y, z));
    const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
    mesh(new THREE.TubeGeometry(curve, 42, .097, 10, false), bronze, side < 0 ? 'Left open ear handle' : 'Right open ear handle');
    mesh(new THREE.SphereGeometry(.139, 12, 10), gold, 'Handle casting socket', [2.60 * side, 2.66, 0]);
    mesh(new THREE.SphereGeometry(.125, 12, 10), bronzeDark, 'Handle upper socket', [2.59 * side, 2.91, 0]);
  }

  // Three splayed feet support the actual bottom of the bowl.
  for (let i = 0; i < 3; i += 1) {
    const angle = Math.PI / 2 + i * Math.PI * 2 / 3;
    const radial = (radius, y) => new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    const curve = new THREE.CatmullRomCurve3([
      radial(1.28, 1.02), radial(1.38, .82), radial(1.54, .37), radial(1.75, .13),
    ]);
    mesh(new THREE.TubeGeometry(curve, 20, .168, 12, false), bronzeDark, `Tripod foot ${i + 1}`);
    const foot = mesh(new THREE.SphereGeometry(1, 16, 10), bronze, 'Worn bronze foot pad');
    foot.position.copy(radial(1.76, .109));
    foot.scale.set(.265, .10, .205);
    foot.rotation.y = -angle;
    const collar = mesh(new THREE.TorusGeometry(.168, .022, 7, 20), gold, 'Leg collar');
    collar.position.copy(radial(1.37, .80));
    collar.rotation.set(Math.PI / 2, 0, -Math.sin(angle) * .2);
  }

  const ash = mesh(new THREE.CylinderGeometry(2.504, 2.495, .070, 96, 1), ashMaterial, 'Fine ash surface', [0, ASH_Y - .035, 0]);
  ash.castShadow = false;

  // Fixed-capacity meshes: quantity changes never allocate GPU resources.
  function instance(geometry, material, name) {
    const object = new THREE.InstancedMesh(ownGeometry(geometry), material, MAX_STICKS);
    object.name = name;
    object.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    object.frustumCulled = false;
    object.castShadow = true;
    group.add(object);
    return object;
  }
  const bamboo = instance(new THREE.CylinderGeometry(.021, .024, 1, 8), bambooMaterial, 'Individual red bamboo sticks');
  const coating = instance(new THREE.CylinderGeometry(.032, .033, 1, 9), incenseMaterial, 'Incense powder');
  const ashTips = instance(new THREE.CylinderGeometry(.032, .032, 1, 9), burnedMaterial, 'Pale ash tips');
  const embers = instance(new THREE.SphereGeometry(1, 10, 7), emberMaterial, 'Glowing incense embers');
  embers.castShadow = false;
  const allInstances = [bamboo, coating, ashTips, embers];

  const sources = Array.from({ length: MAX_STICKS }, () => new THREE.Vector4(0, 0, 0, -1));
  const particleCount = MAX_STICKS * PARTICLES_PER_STICK;
  const smokeGeometry = ownGeometry(new THREE.BufferGeometry());
  const pointPositions = new Float32Array(particleCount * 3);
  const particleData = new Float32Array(particleCount * 3);
  const random = (n) => { const v = Math.sin(n * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };
  for (let i = 0; i < particleCount; i += 1) {
    particleData[i * 3] = Math.floor(i / PARTICLES_PER_STICK);
    particleData[i * 3 + 1] = (i % PARTICLES_PER_STICK + random(i + 8) * .3) / PARTICLES_PER_STICK;
    particleData[i * 3 + 2] = random(i + 17);
  }
  smokeGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
  smokeGeometry.setAttribute('aParticle', new THREE.BufferAttribute(particleData, 3));
  const smokeMaterial = ownMaterial(new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.NormalBlending,
    uniforms: {
      uSources: { value: sources },
      uTime: { value: 0 },
      uFade: { value: 0 },
      uTint: { value: color('#c2c8bd') },
      uPointScale: { value: 690 },
    },
    vertexShader: /* glsl */ `
      attribute vec3 aParticle;
      uniform vec4 uSources[12];
      uniform float uTime;
      uniform float uFade;
      uniform float uPointScale;
      varying float vOpacity;
      varying float vAge;
      varying float vSeed;
      void main() {
        int sourceIndex = int(aParticle.x + .5);
        vec4 source = uSources[sourceIndex];
        float seed = aParticle.z;
        float lifetime = 5.9;
        float emittedAge = source.w - aParticle.y * lifetime;
        float age = mod(max(emittedAge, 0.), lifetime) / lifetime;
        float height = age * 4.55;
        float phase = uTime * .55 - height * 1.48 + aParticle.x * .39;
        float strandWidth = .011 + pow(age, 1.6) * .22;
        vec3 p = source.xyz;
        p.y += .025 + height;
        p.x += sin(phase) * (.012 + age * .24) + sin(phase * 1.71 + .4) * age * .16;
        p.z += cos(phase * .83 + 1.3) * (.006 + age * .19);
        p.x += sin(seed * 23.7 + phase) * strandWidth;
        p.z += cos(seed * 17.1 + phase) * strandWidth;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.);
        gl_Position = projectionMatrix * mvPosition;
        float size = .115 + age * .33;
        gl_PointSize = clamp(size * uPointScale / max(.1, -mvPosition.z), 1., 88.);
        float fadeIn = smoothstep(0., .045, age);
        float fadeOut = 1. - smoothstep(.57, 1., age);
        vOpacity = step(0., emittedAge) * fadeIn * fadeOut * uFade * (.14 - age * .025);
        vAge = age;
        vSeed = seed;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uTint;
      varying float vOpacity;
      varying float vAge;
      varying float vSeed;
      float softNoise(vec2 p) {
        return sin(p.x * 5.1 + sin(p.y * 4.7)) * sin(p.y * 5.7 + sin(p.x * 3.9));
      }
      void main() {
        vec2 p = gl_PointCoord * 2. - 1.;
        float radial = dot(p, p);
        if (radial > 1. || vOpacity < .0001) discard;
        float softDisc = exp(-radial * 4.7) * (1. - smoothstep(.46, 1., radial));
        float textureNoise = .80 + .20 * softNoise(p * 1.7 + vSeed * 19. + vAge);
        float alpha = softDisc * textureNoise * vOpacity;
        gl_FragColor = vec4(uTint, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  }));
  const smoke = new THREE.Points(smokeGeometry, smokeMaterial);
  smoke.name = 'Soft rising incense smoke';
  smoke.frustumCulled = false;
  smoke.renderOrder = 4;
  group.add(smoke);

  const haloGeometry = ownGeometry(new THREE.BufferGeometry());
  const haloPositions = new Float32Array(MAX_STICKS * 3);
  const haloStrengths = new Float32Array(MAX_STICKS);
  haloGeometry.setAttribute('position', new THREE.BufferAttribute(haloPositions, 3).setUsage(THREE.DynamicDrawUsage));
  haloGeometry.setAttribute('aStrength', new THREE.BufferAttribute(haloStrengths, 1).setUsage(THREE.DynamicDrawUsage));
  const haloMaterial = ownMaterial(new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uColor: { value: color('#ff6929') } },
    vertexShader: /* glsl */ `
      attribute float aStrength;
      varying float vStrength;
      void main() {
        vec4 p = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * p;
        gl_PointSize = clamp(170. / max(.1, -p.z), 1., 42.);
        vStrength = aStrength;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      varying float vStrength;
      void main() {
        vec2 p = gl_PointCoord * 2. - 1.;
        float r = dot(p, p);
        float alpha = exp(-r * 5.5) * (1. - smoothstep(.50, 1., r)) * vStrength * .52;
        if (alpha < .001) discard;
        gl_FragColor = vec4(uColor, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  }));
  const halos = new THREE.Points(haloGeometry, haloMaterial);
  halos.name = 'Small ember halos';
  halos.frustumCulled = false;
  halos.renderOrder = 3;
  group.add(halos);

  let visualMotion = true;
  let quantity = 3;
  let layout = incenseLayout(quantity);
  let time = 0;
  let active = false;
  let paused = false;
  let disposed = false;
  let phase = 'ready';

  function matrix(object, index, x, y, z, sx, sy, sz) {
    dummy.position.set(x, y, z);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.set(sx, Math.max(sy, .0001), sz);
    dummy.updateMatrix();
    object.setMatrixAt(index, dummy.matrix);
  }

  function refresh() {
    const ritualEndFade = active ? 1 - clamp01((time - (INCENSE_DURATION - 2.5)) / 2.5) : 0;
    smokeMaterial.uniforms.uTime.value = time;
    smokeMaterial.uniforms.uFade.value = ritualEndFade;
    for (const place of layout) {
      const i = place.index;
      const insertProgress = active ? clamp01((time - place.delay) / INSERT_TIME) : 1;
      const insertionOffset = active && visualMotion ? Math.pow(1 - insertProgress, 3) * (.83 + i * .013) : 0;
      const ignitionTime = place.delay + INSERT_TIME;
      const lit = active && time >= ignitionTime && time < INCENSE_DURATION;
      const burnProgress = active ? clamp01((time - ignitionTime) / (INCENSE_DURATION - ignitionTime)) : 0;
      const remaining = STICK_LENGTH - burnProgress * 3.03;
      const base = ASH_Y - .16 + insertionOffset;
      const tip = base + remaining;
      const powderStart = 1.38;
      const powderLength = Math.max(.03, remaining - powderStart - .07);
      matrix(bamboo, i, place.x, base + remaining / 2, place.z, 1, remaining, 1);
      matrix(coating, i, place.x, base + powderStart + powderLength / 2, place.z, 1, powderLength, 1);
      matrix(ashTips, i, place.x, tip - .038, place.z, 1, active && time >= ignitionTime ? .072 : .0001, 1);
      const flicker = lit ? (.82 + (visualMotion ? Math.sin(time * 5.1 + i * 2.3) * .11 + Math.sin(time * 11.9 + i) * .04 : 0)) * ritualEndFade : 0;
      const emberScale = lit ? .031 * Math.max(.3, ritualEndFade) : .00001;
      matrix(embers, i, place.x, tip - .002, place.z, emberScale, emberScale * .55, emberScale);
      haloPositions.set([place.x, tip, place.z], i * 3);
      haloStrengths[i] = flicker;
      sources[i].set(place.x, tip + .026, place.z, lit ? time - ignitionTime : -1);
    }
    allInstances.forEach((object) => { object.instanceMatrix.needsUpdate = true; });
    haloGeometry.attributes.position.needsUpdate = true;
    haloGeometry.attributes.aStrength.needsUpdate = true;
    smoke.visible = visualMotion && active && time > INSERT_TIME && time < INCENSE_DURATION;
    halos.visible = active && time >= INSERT_TIME && time < INCENSE_DURATION;
    embers.visible = halos.visible;
    ashTips.visible = active;
  }

  function reset() {
    if (disposed) return;
    time = 0;
    active = false;
    paused = false;
    phase = 'ready';
    refresh();
  }

  function setQuantity(value) {
    if (disposed) return quantity;
    quantity = boundedCount(value);
    layout = incenseLayout(quantity);
    allInstances.forEach((object) => { object.count = quantity; });
    smokeGeometry.setDrawRange(0, quantity * PARTICLES_PER_STICK);
    haloGeometry.setDrawRange(0, quantity);
    sources.forEach((source) => source.set(0, 0, 0, -1));
    reset();
    return quantity;
  }

  function start() {
    if (disposed) return;
    active = true;
    paused = false;
    time = 0;
    phase = 'inserting';
    refresh();
  }

  function update(dt, _elapsed) {
    if (disposed || paused || !active) return;
    const delta = Number(dt);
    if (!Number.isFinite(delta) || delta <= 0) return;
    time = Math.min(INCENSE_DURATION, time + delta);
    phase = time >= INCENSE_DURATION ? 'complete' : time >= (quantity - 1) * INSERT_STEP + INSERT_TIME ? 'burning' : 'inserting';
    refresh();
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    allInstances.forEach((object) => object.dispose());
    stamps.dispose();
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    group.removeFromParent();
    group.clear();
    geometries.clear();
    materials.clear();
  }

  setQuantity(quantity);
  return {
    group,
    setMotion(value) { visualMotion = Boolean(value); refresh(); },
    setQuantity,
    update,
    start,
    pause(value = true) { paused = Boolean(value); },
    reset,
    dispose,
    duration: INCENSE_DURATION,
    get quantity() { return quantity; },
    get elapsed() { return time; },
    get state() { return phase; },
    get insertionDuration() { return (quantity - 1) * INSERT_STEP + INSERT_TIME; },
  };
}
