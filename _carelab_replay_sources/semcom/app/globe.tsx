'use client';
import { useEffect, useRef, useState } from 'react';
import { linkLoad } from '@/lib/link-load';
import { pathColors } from '@/lib/path-style';
import { translate, type Language } from '@/lib/i18n';
export default function Globe({
  nodes,
  path,
  paths,
  onSelect,
  playing = false,
  language = 'zh',
  network = null,
  config,
  showLinks = false,
}: {
  nodes: any[];
  path: any;
  paths: any[];
  onSelect?: (i: number) => void;
  playing?: boolean;
  language?: Language;
  network?: any;
  config?: any;
  showLinks?: boolean;
}) {
  const canvas = useRef<HTMLCanvasElement>(null),
    [detail, setDetail] = useState('');
  const state = useRef({
    nodes,
    path,
    paths,
    onSelect,
    playing,
    language,
    network,
    config,
    showLinks,
  });
  Object.assign(state.current, {
    nodes,
    path,
    paths,
    onSelect,
    playing,
    language,
    network,
    config,
    showLinks,
  });
  useEffect(() => {
    const c = canvas.current!,
      ctx = c.getContext('2d')!,
      cache = document.createElement('canvas'),
      base = cache.getContext('2d')!;
    let alive = true,
      raf = 0,
      lon = 75,
      lat = 22,
      zoom = 1,
      w = 0,
      h = 0,
      dpr = 1,
      dirty = true,
      land: any[] = [],
      last: any = {},
      drag = false,
      lx = 0,
      ly = 0,
      moved = 0,
      lastDraw = 0,
      inView = true,
      wasPlaying = false;
    let hits: any[] = [],
      segments: any[] = [],
      pinned = false;
    let pointer: { x: number; y: number } | null = null,
      pinnedKeys: string[] = [];
    const resize = new ResizeObserver((entries) => {
      const b = entries[0].contentRect;
      w = b.width;
      h = b.height;
      dpr = Math.min(devicePixelRatio, 1.5);
      c.width = cache.width = Math.round(w * dpr);
      c.height = cache.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      base.setTransform(dpr, 0, 0, dpr, 0, 0);
      dirty = true;
    });
    resize.observe(c);
    const visibility = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      dirty = true;
    });
    visibility.observe(c);
    fetch(import.meta.env.BASE_URL + 'land.json.gz')
      .then((r) => {
        if (!r.ok || !r.body) throw new Error('Map unavailable');
        return new Response(r.body.pipeThrough(new DecompressionStream('gzip'))).json();
      })
      .then((d) => {
        if (alive) {
          land = d as any[];
          dirty = true;
        }
      })
      .catch(() => {});
    const hitLink = (x: number, y: number) =>
      segments.filter((e) => {
        const dx = e.b.x - e.a.x,
          dy = e.b.y - e.a.y,
          f = Math.max(
            0,
            Math.min(
              1,
              ((x - e.a.x) * dx + (y - e.a.y) * dy) / (dx * dx + dy * dy || 1),
            ),
          );
        return Math.hypot(x - e.a.x - f * dx, y - e.a.y - f * dy) < 7;
      });
    const describe = (list: any[]) => list.map((e) => e.text).join('\n');
    const down = (e: PointerEvent) => {
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      moved = 0;
      c.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (drag) {
        const dx = e.clientX - lx,
          dy = e.clientY - ly;
        lon -= dx * 0.3;
        lat = Math.max(-80, Math.min(80, lat + dy * 0.3));
        moved += Math.abs(dx) + Math.abs(dy);
        lx = e.clientX;
        ly = e.clientY;
        dirty = true;
      } else if (!pinned) {
        const b = c.getBoundingClientRect();
        pointer = { x: e.clientX - b.left, y: e.clientY - b.top };
        setDetail(describe(hitLink(pointer.x, pointer.y)));
      }
    };
    const up = (e: PointerEvent) => {
      drag = false;
      if (moved < 5) {
        const b = c.getBoundingClientRect(),
          x = e.clientX - b.left,
          y = e.clientY - b.top,
          links = hitLink(x, y);
        if (links.length) {
          pinned = true;
          pinnedKeys = links.map((l) => l.key);
          setDetail(describe(links));
          return;
        }
        pinned = false;
        setDetail('');
        const hit = hits.reduce(
          (a, v) =>
            Math.hypot(v.x - x, v.y - y) < (a?.dist ?? 10)
              ? { ...v, dist: Math.hypot(v.x - x, v.y - y) }
              : a,
          null,
        );
        if (hit) state.current.onSelect?.(hit.i);
      }
    };
    const leave = () => {
      pointer = null;
      if (!pinned) setDetail('');
    };
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      zoom = Math.max(0.65, Math.min(2.4, zoom - e.deltaY * 0.001));
      dirty = true;
    };
    c.addEventListener('pointerdown', down);
    c.addEventListener('pointermove', move);
    c.addEventListener('pointerup', up);
    c.addEventListener('pointerleave', leave);
    c.addEventListener('wheel', wheel, { passive: false });
    const draw = (t: number) => {
      if (!alive) return;
      raf = requestAnimationFrame(draw);
      if (document.hidden || !inView || t - lastDraw < 33 || !w || !h) return;
      lastDraw = t;
      const s = state.current;
      if (
        s.network !== last.network ||
        s.paths !== last.paths ||
        s.path !== last.path ||
        s.showLinks !== last.showLinks ||
        s.language !== last.language
      ) {
        dirty = true;
        last = { ...s };
      }
      if (!dirty && !s.playing && !wasPlaying) return;
      wasPlaying = s.playing;
      if (dirty) {
        dirty = false;
        base.clearRect(0, 0, w, h);
        hits = [];
        segments = [];
        const r = Math.min(w * 0.44, h * 0.425) * zoom,
          cx = w / 2,
          cy = h / 2 + 8,
          rad = Math.PI / 180,
          cl = Math.cos(lat * rad),
          sl = Math.sin(lat * rad);
        const project = (lo: number, la: number, alt = 0) => {
          lo = (lo - lon) * rad;
          la *= rad;
          const x = Math.cos(la) * Math.sin(lo),
            y = Math.sin(la) * cl - Math.cos(la) * Math.cos(lo) * sl,
            z = Math.sin(la) * sl + Math.cos(la) * Math.cos(lo) * cl,
            rr = r * (1 + alt / 6371);
          return {
            x: cx + rr * x,
            y: cy - rr * y,
            z,
            visible: z > 0 || rr * Math.hypot(x, y) > r,
          };
        };
        base.fillStyle = '#52768f';
        for (let i = 0; i < 90; i++)
          base.fillRect(
            (((i * 7349) % 997) / 997) * w,
            (((i * 3719) % 991) / 991) * h,
            1,
            1,
          );
        const ocean = base.createRadialGradient(
          cx - r * 0.3,
          cy - r * 0.4,
          0,
          cx,
          cy,
          r,
        );
        ocean.addColorStop(0, '#153d51');
        ocean.addColorStop(1, '#071522');
        base.fillStyle = ocean;
        base.beginPath();
        base.arc(cx, cy, r, 0, 7);
        base.fill();
        const line = (points: number[][], color: string) => {
          base.strokeStyle = color;
          base.lineWidth = 0.7;
          base.beginPath();
          let pen = false;
          for (const v of points) {
            const p = project(v[0], v[1]);
            if (p.z > 0) {
              if (pen) base.lineTo(p.x, p.y);
              else base.moveTo(p.x, p.y);
              pen = true;
            } else pen = false;
          }
          base.stroke();
        };
        for (let la = -60; la <= 60; la += 30)
          line(
            Array.from({ length: 91 }, (_, i) => [i * 4 - 180, la]),
            '#47627d28',
          );
        for (let lo = -180; lo < 180; lo += 30)
          line(
            Array.from({ length: 46 }, (_, i) => [lo, i * 4 - 90]),
            '#47627d28',
          );
        for (const ring of land) line(ring, '#4c879075');
        const projected = s.nodes.map((n) =>
          project(n.lon, n.lat, n.alt ?? 550),
        );
        if (s.showLinks && s.network) {
          base.strokeStyle = '#4a7b9325';
          base.lineWidth = 0.6;
          base.beginPath();
          s.network.adj.forEach((es: any[], i: number) => {
            const a = projected[i];
            if (a.z < 0) return;
            for (const e of es) {
              const b = projected[e.to];
              if (e.to > i && b?.z >= 0) {
                base.moveTo(a.x, a.y);
                base.lineTo(b.x, b.y);
              }
            }
          });
          base.stroke();
        }
        // Batch satellite marks by capability, rather than a fill/stroke per satellite.
        for (const capable of [false, true]) {
          base.fillStyle = capable ? '#51c9b7' : '#688298';
          base.beginPath();
          s.nodes.forEach((n, i) => {
            const p = projected[i];
            if (!p.visible || !!n.enc?.some((v: number) => v > 0) !== capable)
              return;
            base.moveTo(p.x + 1.5, p.y);
            base.arc(p.x, p.y, n.ground ? 3 : 1.5, 0, 7);
          });
          base.fill();
        }
        projected.forEach((p, i) => {
          if (p.visible) hits.push({ ...p, i });
        });
        const routes = s.paths.filter((p) => p.path.length);
        routes.forEach((route, ri) => {
          const color = pathColors[route.name] ?? '#fff';
          for (let k = 0; k < route.path.length - 1; k++) {
            const u = route.path[k],
              v = route.path[k + 1],
              a = projected[u],
              b = projected[v];
            if (!a?.visible || !b?.visible) continue;
            // Small parallel lanes keep identical physical routes separately visible.
            const offset = (ri - (routes.length - 1) / 2) * 3,
              dx = b.x - a.x,
              dy = b.y - a.y,
              len = Math.hypot(dx, dy) || 1,
              sign = u < v ? 1 : -1,
              ox = (-dy / len) * offset * sign,
              oy = (dx / len) * offset * sign,
              pa = { x: a.x + ox, y: a.y + oy },
              pb = { x: b.x + ox, y: b.y + oy };
            base.strokeStyle = color;
            base.lineWidth = route.name === s.path?.name ? 2.6 : 1.9;
            base.setLineDash(route.raw ? [6, 4] : []);
            base.beginPath();
            base.moveTo(pa.x, pa.y);
            base.lineTo(pb.x, pb.y);
            base.stroke();
            base.setLineDash([]);
            const edge = s.network?.adj[u].find((e: any) => e.to === v);
            segments.push({
              a: pa,
              b: pb,
              color,
              key: route.name + ':' + s.nodes[u].id + ':' + s.nodes[v].id,
              text:
                translate(route.name, s.language) +
                ' · ' +
                s.nodes[u].name +
                ' → ' +
                s.nodes[v].name +
                '\n' +
                (edge
                  ? linkLoad(route, s.config, u, v).toFixed(1) +
                    ' / ' +
                    edge.cap.toFixed(1) +
                    ' Mbps · ' +
                    (edge.propagation ?? edge.delay).toFixed(2) +
                    ' ms'
                  : ''),
            });
          }
        });
        const pth = routes.some((p) => p.name === s.path?.name)
          ? s.path.path
          : [];
        for (const [idx, label, col] of [
          [pth[0], '源', '#fff'],
          [pth.length ? s.path?.enc : undefined, 'ENC', '#56ead0'],
          [pth.length ? s.path?.dec : undefined, 'DEC', '#ffc675'],
          [pth.at(-1), '目的', '#fff'],
        ] as any[]) {
          const p = projected[idx];
          if (!p?.visible) continue;
          base.strokeStyle = col;
          base.lineWidth = 2;
          base.beginPath();
          base.arc(p.x, p.y, 6, 0, 7);
          base.stroke();
          base.fillStyle = col;
          base.font = '600 12px system-ui';
          base.fillText(translate(label, s.language), p.x + 9, p.y - 8);
        }
        base.strokeStyle = '#4f9abc80';
        base.beginPath();
        base.arc(cx, cy, r, 0, 7);
        base.stroke();
        if (pinned) {
          const found = segments.filter((e) => pinnedKeys.includes(e.key));
          setDetail(describe(found));
          if (!found.length) pinned = false;
        } else if (pointer) setDetail(describe(hitLink(pointer.x, pointer.y)));
      }
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(cache, 0, 0, w, h);
      if (s.playing) {
        const f = (t / 1500) % 1;
        for (const e of segments) {
          ctx.fillStyle = e.color;
          ctx.beginPath();
          ctx.arc(
            e.a.x + (e.b.x - e.a.x) * f,
            e.a.y + (e.b.y - e.a.y) * f,
            2.7,
            0,
            7,
          );
          ctx.fill();
        }
      }
    };
    raf = requestAnimationFrame(draw);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      resize.disconnect();
      visibility.disconnect();
      c.removeEventListener('pointerdown', down);
      c.removeEventListener('pointermove', move);
      c.removeEventListener('pointerup', up);
      c.removeEventListener('pointerleave', leave);
      c.removeEventListener('wheel', wheel);
    };
  }, []);
  return (
    <>
      <canvas
        ref={canvas}
        aria-label={translate('可拖动旋转并点击卫星的三维网络地球', language)}
        style={{ width: '100%', height: '100%', touchAction: 'none' }}
      />
      {detail && (
        <div className="link-tooltip" role="status">
          {detail}
          <small>{translate('点击空白处关闭', language)}</small>
        </div>
      )}
    </>
  );
}
