# charts/

Drop your exported Altair charts here.

## From a Jupyter notebook

```python
import altair as alt

chart = (
    alt.Chart(df)
       .mark_bar()
       .encode(x="year:O", y="count:Q")
       .properties(width="container")   # <-- important for responsive width
)

# Option A: Vega-Lite JSON (rendered by vega-embed in main.js)
chart.save("chart_0.json")

# Option B: standalone HTML (embedded via <iframe> in main.js)
chart.save("chart_2.html")
```

Save the files here and name them to match the entries in `../main.js`:

- `chart_0.json`   ← step 0
- `chart_1.json`   ← step 1
- `chart_2.html`   ← step 2 (iframe)

## When to use JSON vs HTML

| Format  | Pros                                                     | Cons                                       |
| ------- | -------------------------------------------------------- | ------------------------------------------ |
| `.json` | Inline, resizes with page, matches site fonts/CSS        | Widget-heavy charts sometimes need tweaks  |
| `.html` | Zero-config for complex Altair charts with selections    | Fixed size box; feels iframe-y             |

Default to JSON. Fall back to HTML for interactive/faceted charts that don't
cooperate with vega-embed.
