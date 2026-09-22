# CARELab Satellite Resilience Analysis — public replay edition

Paper: **Resilience of Mega-Satellite Constellations: How Node Failures Impact Inter-Satellite Networking Over Time?** — Binquan Guo et al., IEEE Transactions on Communications.

[Read the paper](https://ieeexplore.ieee.org/document/11164934/) · [Launch the public replay](https://wilixx.github.io/demos/carelab-satellite-resilience/)

This repository package contains the React/Three.js interface, a lightweight Web Worker replay player, and selected precomputed demonstration outputs. It preserves the observatory interface with bilingual labels, satellite inspection, recorded trajectory segments, illustrative coverage, playback controls and optional browser screen recording.

## Build

Use Node.js 22.13 or later. Run `npm install`, then `npm run build`. Serve the `dist` directory over HTTP(S), or copy its contents to a GitHub Pages subdirectory. All deployed asset URLs are relative. `npm run dev` starts a local development server; local addresses are not used by the hosted public demo.

## Recording

11,080 catalogued satellites; 61 frames at 60-second intervals over one hour, beginning 2026-09-08 09:10:33 UTC. Public CelesTrak historical catalogue metadata identifies satellites. Coordinates are quantized recorded positions with display interpolation. Six fixed scenarios cover baseline, example-satellite failure, random failure, targeted failure, regional failure and orbital-group failure. Three fixed city service pairs show recorded routes and metrics, including a rerouting comparison.

This is a research demonstration, not operational Starlink topology, live telemetry, a validated operational prediction, or a numerical reproduction of every experiment in the paper. The device clock is separate from recorded time. Coverage is a geometric illustration at a 25-degree elevation threshold; the displayed trail is a recorded segment. Arbitrary satellite counts, failures and new services are intentionally unavailable.

## Intellectual property boundary

**No core research implementation is distributed.** The private orbit/network simulation, route solver, temporal-importance computation, scenario generator and research backend are excluded. `public/replay-worker.mjs` only reads recorded outputs, interpolates coordinates and prepares display information. Static output data and public metric definitions are visible by design. The source archive has no private Git history, credentials or source maps.

Third-party software and map notices are in `public/THIRD_PARTY_NOTICES.txt`. Retain those notices when redistributing third-party components. No license to private research algorithms is granted by this public showcase.
