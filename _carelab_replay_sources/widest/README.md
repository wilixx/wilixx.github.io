# CARELab Widest — public replay

This is a static presentation player. It contains recorded outputs and UI source only. It does not contain the private routing/optimization engine, a callable solver service, or source maps. Recorded scenarios cover 2026-09-07 13:00–13:06 UTC with 30-second samples; results are held between samples. Displayed runtimes are recorded measurements, not client-side solve times. Capacities are simulated; this is not live Starlink telemetry.

Install Node 22.13+ and run `npm install`, then `npm run build`. Deploy the contents of `dist/` at `/demos/carelab-widest-routing/`. Assets use relative paths. The checked-in production files need no build on GitHub Pages.

The original layout and presentation controls are retained. Network/service settings are read-only; choose one of the recorded scenarios. Play/pause, speed, timeline, route comparison, globe navigation, link inspection, language selection, recording (browser permitting) and recorded-frame export remain available. Replay data are public demonstration outputs; no arbitrary-input optimization is performed.

The interface starts paused with a loaded scenario. **One-click demo** resets the selected scenario and camera, selects the proposed route, and begins 10× playback; **Restart demo** repeats this action. Pause/resume and timeline scrubbing remain available. Scientific provenance is documented here rather than in a modal overlay.
