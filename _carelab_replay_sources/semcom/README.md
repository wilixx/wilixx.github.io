# CARELab Satellite SemCom — public replay

This presentation-only React application is hosted at https://wilixx.github.io/demos/carelab-satellite-semcom/ . It preserves the original platform presentation while replaying recorded scenes. Source and distributable are public; private routing solvers and the recording generator are intentionally absent.

## Replay data and interpretation

Four modes, 16 frames each, 30 seconds between recorded frames. Source: the CelesTrak Starlink OMM snapshot bundled with the research demonstration (epoch in each recording). Positions were recorded through SGP4. Inter-satellite links, capacities, semantic capabilities, and traffic are demonstration assumptions, not Starlink operational topology. The dataset records 1,000 selected satellites and two ground endpoints, with 60% configured semantic capability.

All method paths, bandwidth occupation, propagation delay, and solver execution times are recorded outputs of the local demonstration program. These are not paper benchmark results. Execution times reflect the recording computer, not the visitor's device. Displayed propagation delay excludes codec processing; the frame contains the separate total estimate where available. The replay never optimizes paths or performs new experiments. Its inputs are read-only. Changing modes selects a different captured dataset.

Data files are gzip-compressed JSON; browsers need native DecompressionStream support. No server API, private platform authentication, or localhost is required. No private solver, WebAssembly optimizer, worker, orbital propagation library, original application bundle, or source map is distributed.

## Rebuild

Use Node 22.13+ and npm: `npm ci`, `npm run typecheck`, `npm run build`. The Vite base is relative. Copy `dist/` contents to `demos/carelab-satellite-semcom/` in the homepage repository. GitHub Pages serves the committed static build. Keep `public/replay/` and `public/land.json.gz` with the app.

## Papers

- [Lightweight Semantic Communication-Compliant Shortest Path Selection in Large-Scale LEO Satellite Networks — IEEE Transactions on Mobile Computing](https://ieeexplore.ieee.org/document/11437528/)
- [Enhancing Mega-Satellite Networks With Generative Semantic Communication: A Networking Perspective — IEEE Wireless Communications](https://ieeexplore.ieee.org/document/11206535/)

Map geometry: Natural Earth public-domain data, retained from the original presentation. Frontend libraries retain their respective upstream licenses.

## Backup and rollback

Homepage before this integration: `df78d4806094619fad144fea83c3f9bde34cc5d3`. Remote backup branch: `backup/before-semcom-20260922`. A complete source ZIP and Git bundle were saved separately before editing. The only edits to existing homepage content are a new card include and first dropdown item; old biography/publications/news and demos are preserved.

Undo by reverting the single integration commit titled `Add Satellite SemCom public replay and homepage showcase`, then push the revert to master. Do not reset or force-push over subsequent work. The backup branch remains available for comparison and recovery.
