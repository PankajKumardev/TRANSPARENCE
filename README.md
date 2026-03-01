# Transparence

A cinematic, scroll-driven web experience exploring light, glass, and perception. Built as a single-page composition with layered typography, glassmorphic surfaces, and scroll-triggered animations.

## Preview

Each section uses glass effects (`backdrop-filter`, `mask-image`) combined with GSAP scroll animations to create an immersive journey through optical concepts.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | GSAP + ScrollTrigger |
| Scroll | Lenis (smooth scroll) |
| Fonts | Playfair Display, Inter (Google Fonts) |

## Sections

The experience flows through 11 scroll-driven sections:

| # | Section | Effect |
|---|---------|--------|
| 1 | **Transparence** | Fluted glass panel slides across hero text |
| 2 | **Depth Is An Illusion** | Frosted glass over architecture image with parallax text |
| 3 | **Observe Closely** | Magnifying glass orb scales and traverses the viewport |
| 4 | **The Fluting** | Pinned section with vertical glass pillars sliding through text |
| 5 | **Layers of Truth** | Horizontal frosted glass strips sweep over imagery |
| 6 | **The Horizon** | Frosted glass bar sweeps vertically between "What Is Seen" and reflected "What Is Hidden" |
| 7 | **The Void** | Minimal pause with a single line of text |
| 8 | **The Convergence** | Four diagonal glass shards converge from corners to center |
| 9 | **Fragmented** | Mosaic of glass tiles that rotate and disperse on scroll |
| 10 | **Aberration** | Pinned section where PRISM glass slides up to cover the text with chromatic aberration |
| 11 | **Fin.** | Frosted glass rises to close the experience |

## Glass Effects

Two custom glass styles defined in `src/index.css`:

- **`glass-fluted`** — Subtle blur with a vertical repeating `mask-image` creating a fluted/ribbed glass appearance
- **`glass-frosted`** — Stronger blur with a smooth frosted glass look

Both use CSS custom properties (`--_glass-blur`) to prevent lightningcss from stripping `backdrop-filter` during production builds.

## Project Structure

```
src/
  App.tsx          # All sections, GSAP animations, Lenis setup
  index.css        # Glass effects, custom cursor, chromatic text, theme
  main.tsx         # React entry point
  components/
    Cursor.tsx     # Custom cursor with glass hover state
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
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

## Design Decisions

- **No external images required** — Background images use `picsum.photos` with grayscale seeds for consistent placeholders
- **Pinned scroll sections** — Key sections (Fluting, Convergence, Aberration, Reflection) use `ScrollTrigger.pin` so animations play while the viewport stays locked
- **CSS variable blur trick** — `backdrop-filter` values use `var(--_glass-blur)` to survive lightningcss optimization in Tailwind CSS 4 production builds
- **Custom cursor** — Circle cursor with `mix-blend-mode: difference` that expands on glass hover
- **Chromatic aberration** — CSS pseudo-elements with red/blue offset and `mix-blend-mode: multiply` on the PRISM text

## Browser Support

Requires support for:
- `backdrop-filter` / `-webkit-backdrop-filter`
- `mask-image` / `-webkit-mask-image`
- CSS `scale()` transforms
- Smooth scroll APIs

Works in all modern evergreen browsers (Chrome, Firefox, Safari, Edge).

## License

MIT
