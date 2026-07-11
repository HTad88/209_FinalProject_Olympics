# Exploratory Visualization (Housing Impact) — Submission Outline

## Objective
Explore whether Olympic host cities show housing-displacement pressure around bid and Games years, using COHRE-era displacement estimates and related NGO reports as a first-pass evidence layer.

## Artifact to submit
- Primary: Observable notebook link with one interactive view (bar chart + sorting/filter controls).
- Optional support: this note + data CSVs in repo for traceability.

## Data used in this exploratory pass
- `data/cohre_displacement_estimates.csv`
- `data/olympic_housing_event_spine.csv`

## What the exploratory viz should show
1. Reported displacement estimates by host city (where available).
2. Explicit data-quality status for each city: `verified`, `placeholder`, or `missing`.
3. Ability to filter to cities with numeric estimates only.

## Preliminary insights (for submission text)
1. Large displacement estimates are concentrated in pre-2012 hosts where rights-monitoring reports documented forced removals.
2. Source quality is heterogeneous: some cities have numeric estimates, others require manual extraction from archived reports.
3. For causal housing-price claims, NGO counts must be paired with official housing time-series (UKHPI, Zillow, INSEE) in the next milestone.

## Limitations
- COHRE/NGO estimates are not standardized time-series and are partly qualitative.
- Several rows are placeholders pending exact-value extraction from archived PDFs.
- Estimates may reflect broader mega-event periods, not only Olympic dates.

## Next step before midterm
- Replace placeholders with verified figures and citation snippets.
- Join this context layer with city-level monthly housing indicators.
- Add bid-year and Games-year markers on all charts.
