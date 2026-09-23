# Lusaka East Luangwa YPC — Meet & Greet

Informational site for the Lusaka East Luangwa Apostle Area Young People's
Choir Meet & Greet (Friday 10 October 2026, Olympia Park NAC).

Static React site (Vite), deployed to GitHub Pages. No backend — all
content is baked in at build time.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploying to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and
publishes automatically on every push to `main`. One-time setup on GitHub:

1. Push this repo to `crislibjr/LELLAYPC`.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` — the site will build and publish to
   `https://crislibjr.github.io/LELLAYPC/`.

If a custom domain is attached later:
- Add a `CNAME` file under `public/` containing the domain.
- Change `base: '/LELLAYPC/'` back to `base: '/'` in `vite.config.js`.
- Update the canonical/OG URLs in `index.html` and the URL in
  `public/sitemap.xml` and `public/robots.txt`.

## Where things live

- `src/data/schedule.js` — single source of truth for the programme
  schedule and core event facts (date, venue, etc). Update this file if
  the programme changes; the Hero, Schedule, EventDetails, calendar
  download, and JSON-LD in `index.html` all read from (or should be kept
  in sync with) it.
- `src/components/BackgroundToggle.jsx` — the two live ShaderGradient
  presets and the toggle button.
- `public/assets/gallery/` — the 5 gallery placeholder images. Replace
  these files with real event photos when available (same filenames, or
  update the list in `src/components/Gallery.jsx`).
- `public/assets/program/Meet_and_Greet_Program.pdf` — the file served by
  the "Download Programme" button. Replace with an updated PDF (same
  filename) to change what visitors download.
- `src/components/Contact.jsx` — placeholder contact details (`CONTACTS`
  array at the top of the file). Fill in real values when confirmed.

## Notes

- The two ShaderGradient background presets are the values supplied by the
  client, entered verbatim into `BackgroundToggle.jsx`.
- Reduced-motion, keyboard focus, and mobile responsiveness are handled in
  `src/index.css`.
