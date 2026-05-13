# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Palingen Studios is an interactive single-page React app — a "cosmic cartography" visualization for a family-run art & exhibit studio exploring divine council cosmology and biblical supernatural inquiry. The entire UI is a force-directed graph rendered on an HTML5 Canvas with a dark starfield aesthetic.

## Commands

```bash
npm install       # install dependencies
npm start         # dev server on http://localhost:3000
npm run build     # production build → build/
npm run deploy    # build then push build/ to gh-pages branch
npm test          # run tests (Create React App / Jest)
```

There is no linter script defined. TypeScript strict mode is on (`strict: true` in tsconfig.json); type errors surface during `npm run build` and `npm start`.

CI (`CI: false`) is set in the deploy workflow so TSC warnings don't fail the GitHub Actions build — but type errors still block local `build`.

## Architecture

### Data layer — `src/data/cosmicNodes.ts`

This is the single source of truth for the entire app (~977 lines). It exports:

- **`CosmicNode`** — the node interface with fields: `id`, `label`, `category`, `scripture`, `description`, `radius`, `depth?`, `parentId?`, `image?`, `resources?`
- **`CosmicLink`** — `{ source: string; target: string }` linking node IDs
- **`NODES`** — the full array of ~40+ nodes across 5 categories: `celestial`, `creature`, `place`, `concept`, `palingen`
- **`LINKS`** — the full edge list for the graph

**Node hierarchy:** nodes with `depth: 1` and a `parentId` are "child" nodes that remain hidden until their parent is expanded. `CosmicMap` tracks an `expandedRef` set to manage visibility.

**Images:** node images are served from `public/images/nodes/<id>.png` and referenced as `process.env.PUBLIC_URL + '/images/nodes/<id>.png'`. Only nodes with an `image` field show art in the NodeCard panel.

**Affiliate links:** all resource URLs use `?tag=palingen-20` Amazon affiliate tag. Maintain this when adding new Amazon book resources.

### Canvas physics — `src/components/CosmicMap.tsx`

The entire interactive map is drawn on a single `<canvas>` element. No DOM nodes for individual graph nodes — everything is painted in a `requestAnimationFrame` loop.

Key implementation details:
- **`PNode`** extends `CosmicNode` with `x, y, vx, vy` physics state, held in `pnodesRef`
- **`physTick()`** runs O(n²) repulsion between all pairs + spring attraction along links + gravity toward center each frame
- **`expandedRef`** (`Set<string>`) controls which parent nodes have their children visible; toggled on click
- **`positionedRef`** (`Set<string>`) ensures child nodes only get their "burst from parent" initial position once
- Drag vs. click is disambiguated: `isDraggingRef` is set on `mousemove` while `mousedown` is active; only a non-drag mouseup triggers the click handler
- The lightbox in `NodeCard` uses `createPortal(…, document.body)` to escape the `backdrop-filter` stacking context of the card panel

### Component roles

| Component | Role |
|---|---|
| `App.tsx` | Root — holds `selectedNode` state, wires `CosmicMap` → `NodeCard` |
| `CosmicMap` | Full-canvas force-directed graph; owns all physics and rendering |
| `NodeCard` | Fixed right-side panel (Framer Motion slide-in); shows node detail, scripture, image lightbox, connected nodes, resources accordion |
| `Navigation` | Fixed top bar with wordmark and links to Florida Installations and email |

### Static sub-pages — `public/`

The `public/` folder contains standalone HTML files for location-specific exhibit pages:
- `public/florida/index.html`, `public/orlando/index.html`, `public/windermere/index.html`, `public/winter-park/index.html`

These are plain HTML (not React) and are deployed as-is alongside the React build.

### Utility scripts — `scripts/`

Two one-shot Node.js CJS scripts for bulk-editing `src/data/cosmicNodes.ts`:
- **`add-images.cjs`** — injects `image:` fields for a hardcoded list of node IDs
- **`add-resources.cjs`** — injects `resources:` arrays for a hardcoded list of node IDs

Run with `node scripts/add-images.cjs` from the repo root. These are idempotent (skip already-modified nodes).

## Key Conventions

- **All inline styles** — no CSS modules, no Tailwind, no styled-components. Styles are written as React inline style objects. The only stylesheet is `src/index.css` for global resets and a handful of `@keyframes`.
- **Serif font** — `'Palatino Linotype','Book Antiqua',Georgia,serif` is the design-system font for all display text. Use it for any new UI text.
- **Category color palette** is defined in two places that must stay in sync: `CAT` in `CosmicMap.tsx` and `CAT_COLOR` in `NodeCard.tsx`. Both key on the same 5 category strings.
- **No React Router** — navigation between the main app and sub-pages uses standard `<a href>` links with full paths (e.g. `/palingen-studios/florida/`).
- **`process.env.PUBLIC_URL`** prefix is required on all paths to static assets so the app works under the `/palingen-studios/` GitHub Pages sub-path.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which runs `npm ci && npm run build` then deploys `build/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. The live site URL is `https://fade0003.github.io/palingen-studios`.

Manual deploy: `npm run deploy` (runs `predeploy: npm run build` then `gh-pages -d build`).
