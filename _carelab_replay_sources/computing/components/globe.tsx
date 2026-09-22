'use client';
import { useEffect, useRef, useState } from 'react';
import { translate } from '../lib/i18n';
import type { Language } from '../lib/i18n';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Snapshot, colors, Vec, groundVector } from '../lib/engine';
import { City, cityLabel } from '../lib/cities';
const v = (p: Vec) => new THREE.Vector3(p[0] / 6371, p[2] / 6371, -p[1] / 6371);
export default function Globe({
  language,
  cities,
  snapshot,
  selected,
  overlay,
  links,
  trails,
  onLink,
  onGround,
  picking,
  reset,
}: {
  language: Language;
  cities: City[];
  snapshot: Snapshot | null;
  selected: string;
  overlay: boolean;
  links: boolean;
  trails: boolean;
  onLink: (i: number) => void;
  onGround: (lat: number, lon: number, city?: City) => void;
  picking: boolean;
  reset: number;
}) {
  const [webglError, setWebglError] = useState(false);
  const [hoverCity, setHoverCity] = useState<City | null>(null);
  const host = useRef<HTMLDivElement>(null),
    state = useRef<any>(null),
    props = useRef({
      snapshot,
      cities,
      language,
      selected,
      overlay,
      links,
      trails,
      onLink,
      onGround,
      picking,
    });
  props.current = {
    snapshot,
    cities,
    language,
    selected,
    overlay,
    links,
    trails,
    onLink,
    onGround,
    picking,
  };
  useEffect(() => {
    const el = host.current!;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setWebglError(true);
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100);
    camera.position.set(-0.65, 1.5, -3.8);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 1.3;
    controls.maxDistance = 7;
    controls.enablePan = false;
    scene.add(new THREE.AmbientLight(0x9dbad1, 2));
    const sun = new THREE.DirectionalLight(0xc7e8ff, 2.3);
    sun.position.set(-3, 4, -5);
    scene.add(sun);
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 96, 64),
      new THREE.MeshPhongMaterial({ color: 0x163347, shininess: 12 }),
    );
    scene.add(earth);
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.027, 64, 48),
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        uniforms: {},
        vertexShader:
          'varying vec3 n; varying vec3 vp; void main(){ n=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.0); vp=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }',
        fragmentShader:
          'varying vec3 n; varying vec3 vp; void main(){float a=pow(1.0-abs(dot(n,vp)),3.0);gl_FragColor=vec4(0.16,0.64,0.82,a*0.48);}',
      }),
    );
    scene.add(atmosphere);
    const grid = new THREE.Group();
    for (let lat = -60; lat <= 60; lat += 30) {
      const points = [];
      for (let i = 0; i <= 180; i++) {
        const lon = (i * Math.PI) / 90;
        points.push(
          new THREE.Vector3(
            Math.cos((lat * Math.PI) / 180) * Math.cos(lon),
            Math.sin((lat * Math.PI) / 180),
            -Math.cos((lat * Math.PI) / 180) * Math.sin(lon),
          ).multiplyScalar(1.003),
        );
      }
      grid.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(points),
          new THREE.LineBasicMaterial({
            color: 0x426070,
            transparent: true,
            opacity: 0.18,
          }),
        ),
      );
    }
    scene.add(grid);
    let alive = true;
    fetch('./land.json')
      .then((r) => r.json())
      .then((data: any) => {
        if (!alive) return;
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d')!;
        ctx.fillStyle = '#0b1f30';
        ctx.fillRect(0, 0, 2048, 1024);
        ctx.fillStyle = '#29495b';
        ctx.strokeStyle = '#3b6578';
        ctx.lineWidth = 0.8;
        for (const feature of data.features) {
          const polys =
            feature.geometry.type === 'Polygon'
              ? [feature.geometry.coordinates]
              : feature.geometry.coordinates;
          for (const poly of polys) {
            ctx.beginPath();
            for (const ring of poly) {
              ring.forEach(([lon, lat]: number[], i: number) => {
                const x = ((lon + 180) / 360) * 2048,
                  y = ((90 - lat) / 180) * 1024;
                i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
              });
              ctx.closePath();
            }
            ctx.fill('evenodd');
            ctx.stroke();
          }
        }
        earth.material.map = new THREE.CanvasTexture(canvas);
        earth.material.color.set(0xffffff);
        earth.material.needsUpdate = true;
      })
      .catch(() => {});
    const starPoints = [];
    for (let i = 0; i < 700; i++) {
      const r = 10,
        phi = Math.acos(2 * ((i * 0.61803398875) % 1) - 1),
        theta = i * 2.39996;
      starPoints.push(
        Math.sin(phi) * Math.cos(theta) * r,
        Math.cos(phi) * r,
        Math.sin(phi) * Math.sin(theta) * r,
      );
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starPoints, 3),
    );
    scene.add(
      new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({
          color: 0x66869e,
          size: 0.014,
          transparent: true,
          opacity: 0.45,
        }),
      ),
    );
    const dynamic = new THREE.Group();
    scene.add(dynamic);
    const cityDots = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
        color: '#f7cd83',
        size: 5,
        sizeAttenuation: false,
      }),
    );
    cityDots.visible = false;
    scene.add(cityDots);
    const ray = new THREE.Raycaster();
    ray.params.Line = { threshold: 0.009 };
    ray.params.Points = { threshold: 0.014 };
    let down = [0, 0];
    const pointer = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      return new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        (-(event.clientY - rect.top) / rect.height) * 2 + 1,
      );
    };
    const onDown = (e: PointerEvent) => {
      down = [e.clientX, e.clientY];
    };
    const onUp = (e: PointerEvent) => {
      if (Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 5) return;
      ray.setFromCamera(pointer(e), camera);
      const surface = ray.intersectObject(earth)[0];
      if (props.current.picking) {
        const hit = ray
          .intersectObject(cityDots)
          .find(
            (h) =>
              h.index !== undefined &&
              (!surface || h.distance <= surface.distance + 0.015),
          );
        if (hit?.index !== undefined) {
          const city = props.current.cities[hit.index];
          props.current.onGround(city.lat, city.lon, city);
          setHoverCity(null);
          return;
        }
        if (!surface) return;
        const p = surface.point.normalize();
        props.current.onGround(
          (Math.asin(p.y) * 180) / Math.PI,
          (Math.atan2(-p.z, p.x) * 180) / Math.PI,
        );
        return;
      }
      const hits = ray
        .intersectObjects(dynamic.children, true)
        .filter(
          (h) =>
            (h.object.userData.edge !== undefined ||
              h.object.userData.edgeBatch) &&
            (!surface || h.distance < surface.distance + 0.01),
        );
      if (hits.length) {
        const hit = hits[0];
        props.current.onLink(
          hit.object.userData.edgeBatch
            ? Math.floor((hit.index ?? 0) / 2)
            : hit.object.userData.edge,
        );
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!props.current.picking) return;
      ray.setFromCamera(pointer(e), camera);
      const surface = ray.intersectObject(earth)[0];
      const hit = ray
        .intersectObject(cityDots)
        .find(
          (h) =>
            h.index !== undefined &&
            (!surface || h.distance <= surface.distance + 0.015),
        );
      setHoverCity(
        hit?.index !== undefined ? props.current.cities[hit.index] : null,
      );
    };
    const onLeave = () => setHoverCity(null);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointerup', onUp);
    const resize = () => {
      const w = el.clientWidth,
        h = el.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    resize();
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    state.current = { scene, camera, dynamic, controls, cityDots };
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      scene.traverse((obj: any) => {
        obj.geometry?.dispose();
        if (obj.material) {
          for (const mat of Array.isArray(obj.material)
            ? obj.material
            : [obj.material]) {
            mat.map?.dispose();
            mat.dispose();
          }
        }
      });
      renderer.dispose();
      el.removeChild(renderer.domElement);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      state.current = null;
    };
  }, []);
  useEffect(() => {
    if (state.current) {
      state.current.camera.position.set(-0.65, 1.5, -3.8);
      state.current.controls.target.set(0, 0, 0);
    }
  }, [reset]);
  useEffect(() => {
    if (!state.current) return;
    const dots = state.current.cityDots as THREE.Points;
    dots.geometry.dispose();
    dots.geometry = new THREE.BufferGeometry().setFromPoints(
      cities.map((c) => v(groundVector(c)).multiplyScalar(1.007)),
    );
    dots.visible = picking;
    if (!picking) setHoverCity(null);
  }, [cities, picking]);
  useEffect(() => {
    if (!state.current || !snapshot) return;
    const group = state.current.dynamic as THREE.Group;
    for (const child of [...group.children]) {
      child.traverse((o: any) => {
        o.geometry?.dispose();
        o.material?.dispose();
      });
      group.remove(child);
    }
    const points: number[] = [],
      cs: number[] = [];
    snapshot.nodes.forEach((n) => {
      points.push(...v(n.p).toArray());
      const color = new THREE.Color(
        n.ground ? '#ffffff' : n.compute > 0 ? '#ffcc86' : '#78bac9',
      );
      cs.push(color.r, color.g, color.b);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(points, 3),
    );
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(cs, 3));
    group.add(
      new THREE.Points(
        geometry,
        new THREE.PointsMaterial({
          size: 0.009,
          vertexColors: true,
          sizeAttenuation: true,
        }),
      ),
    );
    const draw = (
      a: number,
      b: number,
      color: string,
      opacity: number,
      index: number,
    ) => {
      const geo = new THREE.BufferGeometry().setFromPoints([
        v(snapshot.nodes[a].p),
        v(snapshot.nodes[b].p),
      ]);
      const line = new THREE.Line(
        geo,
        new THREE.LineBasicMaterial({ color, transparent: true, opacity }),
      );
      line.userData.edge = index;
      group.add(line);
    };
    if (links) {
      const positions = new Float32Array(snapshot.edges.length * 6);
      snapshot.edges.forEach((e, i) => {
        v(snapshot.nodes[e.a].p).toArray(positions, i * 6);
        v(snapshot.nodes[e.b].p).toArray(positions, i * 6 + 3);
      });
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const batch = new THREE.LineSegments(
        geo,
        new THREE.LineBasicMaterial({
          color: '#57869a',
          transparent: true,
          opacity: 0.18,
        }),
      );
      batch.userData.edgeBatch = true;
      group.add(batch);
    }
    const visible = snapshot.routes.filter(
      (r) => overlay || r.name === selected,
    );
    for (const route of visible) {
      const color = colors[snapshot.routes.indexOf(route)];
      for (let j = 1; j < route.path.length; j++) {
        const a = route.path[j - 1],
          b = route.path[j],
          index = snapshot.edges.findIndex(
            (e) => (e.a === a && e.b === b) || (e.a === b && e.b === a),
          );
        draw(a, b, color, route.name === selected ? 1 : 0.65, index);
      }
      if (route.compute !== null && route.path.length) {
        const marker = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.019),
          new THREE.MeshBasicMaterial({ color, wireframe: false }),
        );
        marker.position.copy(v(snapshot.nodes[route.compute].p));
        group.add(marker);
        const ring = new THREE.Mesh(
          new THREE.SphereGeometry(0.032, 12, 8),
          new THREE.MeshBasicMaterial({
            color,
            wireframe: true,
            transparent: true,
            opacity: 0.5,
          }),
        );
        ring.position.copy(marker.position);
        group.add(ring);
      }
    }
    snapshot.nodes.forEach((n) => {
      if (n.ground) {
        const marker = new THREE.Mesh(
          new THREE.SphereGeometry(0.014, 12, 8),
          new THREE.MeshBasicMaterial({
            color: n.id === 'GT-S' ? '#5de4c7' : '#ffffff',
          }),
        );
        marker.position.copy(v(n.p).multiplyScalar(1.005));
        group.add(marker);
      }
    });
    if (trails) {
      const route = snapshot.routes.find((r) => r.name === selected);
      const indices =
        route?.path.filter((i) => !snapshot.nodes[i].ground) ?? [];
      for (const i of [...new Set(indices)].slice(0, 12)) {
        const track = snapshot.tracks?.[snapshot.nodes[i].id];
        if (!track?.length) continue;
        group.add(
          new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(track.map(v)),
            new THREE.LineBasicMaterial({
              color: 0x9cbdce,
              transparent: true,
              opacity: 0.22,
            }),
          ),
        );
      }
    }
  }, [snapshot, selected, overlay, links, trails]);
  return (
    <div
      className={'globe ' + (picking ? 'picking' : '')}
      ref={host}
      aria-label={translate('可拖动旋转和缩放的三维卫星地球', language)}
    >
      {picking && hoverCity && (
        <div className="city-hover">
          {cityLabel(hoverCity, language)}{' '}
          <span>
            {hoverCity.lat.toFixed(2)}°, {hoverCity.lon.toFixed(2)}°
          </span>
        </div>
      )}
      {webglError
        ? translate(
            '当前浏览器无法启动 WebGL，请使用支持硬件加速的浏览器。',
            language,
          )
        : null}
    </div>
  );
}
