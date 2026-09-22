# CARELab Computing — public replay

This is a static presentation player. It contains recorded outputs and UI source only. It does not contain the private routing/optimization engine, a callable solver service, or source maps. Recorded scenarios cover 2026-09-07 13:00–13:06 UTC with 30-second samples; results are held between samples. Displayed runtimes are recorded measurements, not client-side solve times. Capacities are simulated; this is not live Starlink telemetry.

Install Node 22.13+ and run `npm install`, then `npm run build`. Deploy the contents of `dist/` at `/demos/carelab-in-orbit-computing/`. Assets use relative paths. The checked-in production files need no build on GitHub Pages.

The original layout and presentation controls are retained. Network/service settings are read-only; choose one of the recorded scenarios. Play/pause, speed, timeline, route comparison, globe navigation, link inspection, language selection, recording (browser permitting) and recorded-frame export remain available. Replay data are public demonstration outputs; no arbitrary-input optimization is performed.
