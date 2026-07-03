# iftikhar-shams-niloy-portfolio

A portfolio website showcasing my top skills and projects that I have made.

## Project structure

```
index.html              Page markup (nav, hero, expertise chart, work, about, contact)
css/
  fonts.css             Self-hosted @font-face declarations (Manrope, Sora)
  base.css              Design tokens, reset, stacked-card layout, animations
  components.css        Reusable pieces: nav, cards, buttons, resume panel
  sections.css          Section-specific layout and styling
js/
  projects.js           Project data (mobile + AI) and card rendering
  main.js               Scroll-reveal, resume panel toggle, hero photo variant
assets/
  images/               Photos, icons, favicon
  fonts/                Manrope and Sora woff2 subsets
  resume/               Downloadable CV PDFs
```

## Running locally

It is a static site — open `index.html` directly in a browser, or serve the
folder for a proper local setup:

```
npx serve .
```

## Editing content

- **Projects** — edit the `MOBILE_PROJECTS` / `AI_PROJECTS` lists in
  [js/projects.js](js/projects.js); cards are generated from them.
- **Hero photo** — switch between `formal` and `casual` via `HERO_PHOTO` in
  [js/main.js](js/main.js).
- **Colors / spacing** — design tokens live in `:root` in
  [css/base.css](css/base.css).
