# Final Project Site — Scrollytelling Starter

Static site scaffolded in the same style as the F1 Nolympics example
([https://datasci209-final.vercel.app/report.html](https://datasci209-final.vercel.app/report.html)).

## Stack

- Plain **HTML + CSS + JS** — no build step, no framework.
- **[Scrollama](https://github.com/russellsamora/scrollama)** — fires an event
  each time a `<section class="step">` scrolls into view.
- **[Vega-Embed](https://github.com/vega/vega-embed)** — renders Altair charts
  saved as Vega-Lite JSON.
- Deploys to **Vercel** (or Netlify / GitHub Pages — all work identically).

## Layout

```
site/
  index.html          About page
  report.html         The scrollytelling report
  style.css           Styles for both pages
  main.js             Sidebar toggle + Scrollama wiring
  charts/             Your exported Altair charts go here
    README.md         Instructions for exporting
    chart_0.json      (you create these from notebooks)
    chart_1.json
    chart_2.html
```

## Local preview

Any static file server works. Easiest:

```sh
cd site
python3 -m http.server 8000
# open http://localhost:8000/report.html
```

Do **not** just double-click `report.html` — browsers block `fetch()` for
`file://` URLs, and Vega-Embed will fail to load the JSON charts.

## Deploy to Vercel

One time:

```sh
npm i -g vercel
```

Then, from inside `site/`:

```sh
vercel          # first deploy — accept all defaults
vercel --prod   # promote to your production URL
```

You'll get a URL like `https://your-project.vercel.app/report.html`.

### Or: GitHub → Vercel (recommended for team collab)

1. Push the `site/` folder to a GitHub repo.
2. On [https://vercel.com](https://vercel.com), click **Add New → Project**, import the repo.
3. Under **Root Directory**, choose `site` (if the repo has more than the site).
4. Framework preset: **Other**. No build command. Output directory: `./`.
5. Deploy. Every push to `main` auto-redeploys.

## Adding a new step

1. In `report.html`, add another `<section class="step" data-step="N">` with
   its own `<div class="chart-holder"></div>`.
2. In `main.js`, add a `N:` entry to the `stepRenderers` object.
3. In `charts/`, drop the exported chart file the renderer points to.

## Adding text-only sections between charts

Just add a plain `<section>` without `class="step"`, or a step with no
`chart-holder`. The renderer will skip it.