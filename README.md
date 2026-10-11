# Offbeats Agency

Marketing that gets your brand talked about.

## Design System (v2)

This site is built with a strictly enforced **Neo-Brutalist Zine** aesthetic. 
- **Palette**: Ink (`#000000`), Copy-shop white (`#F4F4F1`), Riso pink (`#FF48B0`), Riso blue (`#3A4BFF`), Highlighter (`#FFE600`).
- **Typography**: Archivo (headings, uppercase, tight tracking), Libre Franklin (body), Caveat Brush (handwritten notes).
- **Textures**: 5% fractal noise SVG overlay (multiply), halftone backgrounds, torn paper SVG clip paths, masking tape.
- **Physicality**: No soft shadows, no glassmorphism, no gradients. Hard 6px ink offset shadows. Buttons translate down and right when clicked to mimic tactile keys.
- **Rotations**: Pre-mapped array of manual rotations (e.g. `-3, -2, 1, 2`) in `/lib/collage.ts`. No `Math.random()`.

## Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- Framer Motion

## Commands
\`\`\`bash
npm run dev
npm run build
\`\`\`
