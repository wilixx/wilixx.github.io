# CARELab satellite public replays

Two self-contained GitHub Pages demos with readable presentation source under `computing/` and `widest/`. The corresponding production files and public data are in `demos/carelab-in-orbit-computing/` and `demos/carelab-widest-routing/`.

No private solvers, propagation engine, topology construction implementation, original full-platform bundles, backend credentials or source maps are included. The player selects recorded frames only. Results and algorithm traces are intentionally public demonstration data.

## Build
In either source directory: `npm install`, `npm run build`. Use Node 22.13+. Copy the resulting `dist` files to the corresponding demo directory. Keep the replay folder and attribution notices. Pages serves committed static files; no Node service is required.

## Original-homepage backup / rollback
Pre-change commit: `4e562b6d72571a6794fe32fcfcfa55f0b9b40982`.
Backup branch: `backup/before-satellite-replays-20260922`.
Local ZIP and full-history Git bundle are delivered separately. Only an additional include in `_pages/about.md` and two entries in `_data/navigation.yml` modify existing homepage files. Biography, publications, news and the Green Cloud demo remain untouched.

To undo this integration without rewriting shared history, revert the single commit titled "Add CARELab satellite replay demos without private solvers". If newer work exists, review the revert before pushing; do not reset or force-push the homepage branch.
