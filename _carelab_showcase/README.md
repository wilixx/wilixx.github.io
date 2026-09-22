# CARELab Green Cloud — public interactive showcase

This directory contains the maintainable **public frontend source code** for the GitHub Pages demo at `/demos/carelab-green-cloud/`. It is a separate static presentation edition and does not alter or include the private local CARELab application. Jekyll excludes this underscore-prefixed source directory from its generated website; the repository still makes this public source available for inspection and maintenance.

The public site replays **recorded offline simulations**. It includes the 3D data centers, per-server and VM inspection, historical demand profiles, published example combinations, resource curves, comparison metrics, bilingual presentation, fullscreen, and adjustable playback speed. It does not train models, choose placements, generate new workloads, accept private workload uploads, or call a backend. Recording and custom experimentation remain in the separate local application.

## Scenarios and scope

The three JSON records were produced by the existing local research demonstrator using synthetic historical and arrival demands. Every method in a scenario receives exactly the same arrivals and server capacities. `public/scenarios/manifest.json` contains SHA-256 hashes and summary outcomes.

| Scenario | Servers per method | Arriving VMs | Pattern Matching | Random | Kubernetes-inspired | Best Fit |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Complementary workloads | 100 | 600 | 400 | 355 | 359 | 339 |
| Small + large VMs | 100 | 650 | 454 | 433 | 457 | 416 |
| When demand shifts toward CPU | 100 | 600 | 253 | 274 | 280 | 258 |

Values are accepted VMs in these recorded scenarios, not a production performance guarantee. The distribution-shift scenario deliberately illustrates limitations. Kubernetes-inspired is a resource-score approximation rather than a deployed Kubernetes scheduler. GPU is modeled as divisible slices; the connected network is illustrative and does not simulate contention. Energy or carbon savings were not measured or claimed. Decision timings were measured during offline generation, not in the visitor's browser.

The published data contain only observable histories, resource profiles, example combinations, arrivals, placements, metrics, and provenance. Private training code, optimization rules, solver state, pricing logs, and backend code are absent. Observable combinations are examples; the complete research paper is separately public at <https://arxiv.org/abs/2609.21302>.

## Build and deploy

Use Node.js 24 LTS and pnpm 11.19.0. Dependency versions and integrity hashes are pinned in `pnpm-lock.yaml`; the package registry is the official npm registry.

```sh
cd _carelab_showcase
pnpm install --frozen-lockfile
pnpm run build
pnpm test
```

Copy **the contents of the generated `dist/` only** into the repository's `demos/carelab-green-cloud/`, replacing its previous generated assets. Keep the existing Jekyll configuration and homepage content intact; no root `.nojekyll` file is needed. All generated assets use the subpath, including the logo and scenario downloads. Commit the public source directory and updated generated demo together when making a release.

`pnpm test` runs after the build and verifies all 12 replay trajectories against stored chart points and final placements, checks each combination's recorded thresholds, checks data integrity, and scans the built assets for private optimization/runtime signatures. The website owner should retain the local full application separately. Private scenario-generation scripts are deliberately not part of this public repository.

## Source guide

- `src/main.jsx`: page shell, navigation, presentation, and allocation controls.
- `src/useStudio.js`: asynchronous scenario loading and recorded-event playback.
- `src/engine.js`: replay reconstruction and input validation only; it contains no learning, search, pricing, scheduling, or optimization algorithm.
- `src/Scene.jsx` and `src/ServerInspector.jsx`: interactive 3D rendering.
- `src/Pages.jsx`, `src/LiveResources.jsx`, and `src/Visuals.jsx`: profiles, charts, and outcome views.
- `src/showcase.css`: public-edition and mobile layout adjustments.
- `public/scenarios/`: synthetic recorded results and their integrity manifest.
- `tests/replay.test.js`: correctness and public-boundary checks.

There are no private credentials, data uploads, localhost links, or hosted solver dependencies in this frontend. The live website works independently of the owner's computer.

Third-party browser dependencies and their license texts are included under `public/licenses/`, copied to `dist/licenses/` during the build.
