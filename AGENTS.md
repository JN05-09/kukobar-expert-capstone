# AGENTS.md — Kuko Bar Nail Expert

React 19 + Vite + Bootstrap 5 (react-bootstrap) single-page site. This is a brand-focused landing page. Preserve its established design in all work.

## Design system (frozen)
- All custom styles live in `src/styles/Home.css`; brand tokens are defined on the `.kuko-home` wrapper and must be reused (never hard-code new color literals):
  - `--kuko-cream: #FBF5DD` (page background) · `--kuko-sand: #E7E1B1` (accents/icon wells) · `--kuko-green: #306D29` (primary accent) · `--kuko-dark-green: #0D530E` (headings, footer bg) · `--kuko-muted: #6D7156` (secondary text) · `--kuko-surface: #FFFFFF` · `--kuko-border` · `--kuko-shadow` · `--kuko-shadow-lg`
- Fonts: Inter (body/UI), Playfair Display (headings, `.brand-name`), via Google Fonts.
- Buttons: `.btn-kuko-primary` / `.btn-kuko-outline` / `.btn-kuko-ghost` only.
- Cards: `.kuko-card`, `.kuko-card__visual` (+ `dg-*` tints from `src/data/site.js` `designs[].tint`), `.kuko-card__body`.
- Navbar: fixed-top 64px (`.kuko-navbar`, `.brand-name`), logo `src/icon/KukoBar_badge.png` as 36px `.brand-logo` badge. Footer: dark green, 34px logo badge.
- Layout: Bootstrap grid; section rhythm `.kuko-section`; centered `.section-header` (max-width 560px). Mobile-first, existing breakpoints (575.98px / 991.98px).

## Rules for all agents
1. Do NOT change existing visual design unless explicitly asked.
2. Do NOT refactor or restyle existing components unless asked.
3. Reuse the design system — new styles only in `src/styles/Home.css`, named `kuko-*` / `section-*` / `.btn-kuko-*`, using tokens.
4. No new styling/UI dependencies (no Tailwind, CSS-in-JS, component libs) unless asked.

## Layout notes
- Components: `src/pages/public/components/`, composed in `src/pages/public/Home.jsx`; content/data from `src/data/site.js`.

## Verification
- Run `npm run lint` and `npm run build` after changes to these files.