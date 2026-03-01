# Transparence

Transparence is a cinematic, scroll-driven web experience built with React and Vite. It pairs layered typography, glass-like surfaces, and animated transitions to explore light, depth, and refraction in a single-page composition.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4
- GSAP + ScrollTrigger
- Lenis (smooth scrolling)

## Getting Started

**Prerequisites:** Node.js 18 or later.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file and set your API key:

   ```bash
   # .env.local
   GEMINI_API_KEY=your_key_here
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the production bundle.
- `npm run preview` - Preview the production build.
- `npm run lint` - Type-check the project.

## Notes

- Fonts are loaded via Google Fonts in [src/index.css](src/index.css).
- Background imagery uses external URLs in [src/App.tsx](src/App.tsx) by default.
