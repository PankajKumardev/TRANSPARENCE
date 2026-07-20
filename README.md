# Transparence

A cinematic, scroll-driven web experience exploring light, glass, and perception. This light-themed redesign keeps the optical concept while refining typography, materials, atmosphere, and motion across twelve sections.

## Preview

Each section uses layered glass (`backdrop-filter`, fluted masks, sheet veils) with GSAP ScrollTrigger and Lenis smooth scrolling to create an immersive daylight journey through optical ideas.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | GSAP + ScrollTrigger |
| Scroll | Lenis |
| Fonts | Fraunces, Sora (Google Fonts) |

## Sections

The experience flows through 12 scroll-driven sections:

| # | Section | Effect |
|---|---------|--------|
| 1 | **Transparence** | Full-bleed daylight hero; fluted glass panel sweeps across the brand |
| 2 | **Depth Is An Illusion** | Frosted glass over architecture with parallax text and image |
| 3 | **Observe Closely** | Magnifying glass orb scales and traverses the viewport |
| 4 | **The Fluting** | Pinned section with vertical glass pillars sliding through text |
| 5 | **Layers of Truth** | Horizontal frosted strips sweep over imagery |
| 6 | **The Horizon** | Frosted bar sweeps between “What is seen” and its reflection |
| 7 | **The Void** | Minimal pause; tracking and opacity resolve on scroll |
| 8 | **The Convergence** | Four glass shards converge from the corners |
| 9 | **Fragmented** | Light mosaic tiles rotate and disperse |
| 10 | **Aberration** | PRISM glass rises with chromatic aberration |
| 11 | **Clarity** | Sheet veil opens as the copy sharpens into focus |
| 12 | **Fin.** | Frosted glass rises to close the experience |

## Glass Effects

Custom glass styles in `src/index.css`:

- **`glass-fluted`** — Soft blur with a vertical repeating `mask-image` for ribbed glass
- **`glass-frosted`** — Stronger frost with cool edge light
- **`glass-sheet`** — Cleaner transmission veil used in Clarity

Blur values use CSS custom properties (`--_glass-blur`) so `backdrop-filter` survives production CSS optimization.

## Project Structure

```
src/
  App.tsx          # Sections, GSAP animations, Lenis setup
  index.css        # Theme, glass, cursor, atmosphere
  main.tsx         # React entry point
  components/
    Cursor.tsx     # Custom cursor with glass hover state
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Type-check with TypeScript |
| `npm run clean` | Remove `dist/` directory |

## Design Direction

- **Light theme throughout** — cool daylight paper, mist, and cloud tones (no dark-mode chapters)
- **Brand-first hero** — TRANSPARENCE dominates the first viewport with one supporting line
- **Atmosphere** — fixed ambient gradients, soft beam motion, and desaturated scene photography
- **Pinned optical beats** — Fluting, Horizon, Convergence, Aberration, Clarity, and Fin use ScrollTrigger pinning

## Browser Support

Requires support for:

- `backdrop-filter` / `-webkit-backdrop-filter`
- `mask-image` / `-webkit-mask-image`
- CSS transforms and `clip-path`

Works in modern evergreen browsers (Chrome, Firefox, Safari, Edge).

## License

MIT
