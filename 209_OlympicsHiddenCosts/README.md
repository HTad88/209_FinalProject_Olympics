# Olympics — The Hidden Costs

Final project for **DATASCI W209 — Data Visualization** (UC Berkeley MIDS, Summer 2026).
A scrollytelling report on the hidden costs of hosting the Olympic Games — housing
displacement, host-region debt, and policing — anchored on London 2012.

**Team:** Hope Tadsen · Flo Leynaud · Bernard Julve

## What's in here

| Path | What it is |
|---|---|
| `site/` | The deliverable **scrollytelling website** (plain HTML/CSS/JS, no build step) |
| `data/` | Source CSVs — UK House Price Index per borough, COHRE displacement estimates, Olympic event spine, host-city debt. Documented in `DATA_DICTIONARY.md` |
| `*.ipynb` | Altair exploratory notebooks. Charts are exported from here into `site/charts/` |
| `proposal.md` | The project proposal (concept, users, data sources, references) |

## Working on the site

The site is static — no build step. Edit the files, refresh the browser.

- `site/report.html` — the **content & structure** (headings, narrative, chart placeholders)
- `site/style.css` — the **look** (colors, fonts, spacing)
- `site/main.js` — the **behavior** (which chart loads at which scroll step)

Preview locally (you must use a server — opening the file directly breaks the charts):

```sh
cd site
python3 -m http.server 8000
# open http://localhost:8000/report.html
```

### Adding a chart

Charts are Altair charts exported from the notebooks into `site/charts/`:

- `chart.save('chart_N.json')` → Vega-Lite JSON, rendered via Vega-Embed
- `chart.save('chart_N.html')` → standalone HTML, embedded via `<iframe>` (use for charts with selections/widgets)

To add a step: add a `<section class="step" data-step="N">` in `report.html`, add an
`N:` entry to `stepRenderers` in `main.js`, and drop the exported file in `site/charts/`.
See `site/README.md` for details.

## Team workflow

Everyone has their own clone; GitHub is the shared source of truth.

```sh
git pull                 # get everyone's latest before you start
# ... edit files ...
git add -A
git commit -m "Describe your change"
git push                 # send it back up
```

To avoid merge conflicts, divide by section ownership (housing / debt / policing),
pull often, and push often. For bigger changes, work on a branch and open a pull request.
