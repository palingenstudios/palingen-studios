# Palingen Studios

Interactive website for Palingen Studios — a family-run art & exhibit studio exploring art, interactive experiences, and the divine council worldview.

## Features

- **Bigfoot Peek** — move cursor to the right 30% of screen to reveal Bigfoot peeking from behind the tree
- **Eye Tracking** — Bigfoot's eyes use `Math.atan2` to follow your cursor globally
- **Flower Bloom** — click anywhere or move the mouse to spawn clusters of blooming flowers on a canvas overlay
- **Orange Orb** — animated interdimensional orb floating in the forest scene
- **Layered SVG Forest** — hand-drawn paint-marker aesthetic with rough noise filters, fog, and a river
- **Framer Motion** — smooth spring animations on all interactive elements
- **Responsive** — works at all screen widths

## Tech Stack

- React 18 + TypeScript
- Framer Motion
- HTML5 Canvas (flower system)
- SVG (forest scene, Bigfoot)
- GitHub Pages

## Local Development

```bash
npm install
npm start
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This pushes the `build/` folder to the `gh-pages` branch.
The site will be live at: **https://fade0003.github.io/palingen-studios**

Alternatively, push to `main` — the GitHub Actions workflow at `.github/workflows/deploy.yml` will build and deploy automatically.

## Repository Setup

1. Create a new GitHub repo named `palingen-studios` under `fade0003`
2. Push this folder as the `main` branch
3. In repo Settings → Pages → Source: select `gh-pages` branch, `/root`
