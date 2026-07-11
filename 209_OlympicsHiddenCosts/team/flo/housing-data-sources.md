# Housing-impact data sources — Olympic host cities

> Owner: **Flo**. This file is the working dossier of data sources for the
> "housing impact" angle of the final project. Goal: be able to plot, for each
> modern summer host city, a housing metric (price, rent, evictions, displacement
> count) on a timeline that brackets bid → Games → post-Games, against a
> national/peer baseline.

## Reality check — there is no "Olympic housing impact" dataset

After a full pass through the obvious places (Kaggle, government statistics
agencies, IOC, COHRE, academic data repositories), the honest finding is:

**No public dataset directly measures the housing impact of the Olympics.**

What exists is two separate things:

1. **Generic housing time-series** (Zillow, UKHPI, INSEE, FipeZap, etc.) —
   prices/rents over time at city, borough, or ZIP level. None of them are
   tagged "Olympic" — they're just monthly housing indices.
2. **Activist / NGO reports** with one-off displacement counts (COHRE 2007 for
   Seoul–Beijing, *Comitê Popular* for Rio, press coverage for Paris). These
   are single numbers in PDFs, not time-series, often politically contested,
   and use inconsistent methodology across cities.

Every published study that has answered "did the Olympics change housing
prices?" *built its own dataset* by joining a housing series with the Olympic
event spine and doing a quasi-experimental comparison. Examples (all with
direct links):

- **Kavetsos (2012)** — manually collected 10,000+ London property
  transactions, 2001–2007, across 27 boroughs; found host-borough properties
  sold for 2.1–3.3 % more after the 2005 bid award.
  *"The Impact of the London Olympics Announcement on Property Prices",
  Urban Studies, 49(7), 1453–1470.*
  – Paper: <https://journals.sagepub.com/doi/abs/10.1177/0042098011415436>
    (DOI [10.1177/0042098011415436](https://doi.org/10.1177/0042098011415436))
  – Cass / Bayes Business School summary PDF (open):
    <https://www.bayes.citystgeorges.ac.uk/__data/assets/pdf_file/0003/76557/Olympics-house-prices.pdf>
  – RePEc record: <https://ideas.repec.org/a/sae/urbstu/v49y2012i7p1453-1470.html>
- **Kontokosta (2012)** — *"The Price of Victory: The Impact of the Olympic
  Games on Residential Real Estate Markets"*, Urban Studies, 49(5),
  961–978. Adjusted interrupted time-series on 6 host cities + comparison
  cities, 1984–2000.
  – Paper: <https://journals.sagepub.com/doi/10.1177/0042098011411952>
    (DOI [10.1177/0042098011411952](https://doi.org/10.1177/0042098011411952))
  – RePEc record: <https://ideas.repec.org/a/sae/urbstu/v49y2012i5p961-978.html>
  – Open PDF on JSTOR: <https://www.jstor.org/stable/pdf/26150896.pdf>
- **Han, Lee, Kim, Yoon, Ryu, Pyun et al. (2022)** — *"Effects of the
  Olympic Announcement and the Actual Event on Property Values: The Case
  of the 2018 PyeongChang Winter Olympic Games"*, Sustainability, 14(14),
  8687. Open access.
  – <https://www.mdpi.com/2071-1050/14/14/8687> (DOI [10.3390/su14148687](https://doi.org/10.3390/su14148687))
- **Hur & Kim (2023)** — *"The anticipated legacies of mega sporting
  events: An econometric analysis of Olympic announcement effect on the
  real estate market in small communities"*, Applied Economics.
  – <https://www.tandfonline.com/doi/abs/10.1080/00036846.2022.2118223>
    (DOI [10.1080/00036846.2022.2118223](https://doi.org/10.1080/00036846.2022.2118223))
- **Hur & Watanabe (2025)** — *"A monetary valuation of hosting a sport
  mega-event via residential real estate markets in small host
  communities"*, European Sport Management Quarterly.
  – <https://www.tandfonline.com/doi/abs/10.1080/16184742.2025.2494829>
    (DOI [10.1080/16184742.2025.2494829](https://doi.org/10.1080/16184742.2025.2494829))
- **Hur, Yan & Watanabe (2025)** — *"Toward a Critical Understanding of
  Gentrification and Mega-Sport Event: An Analysis of the Rental Market
  in the 2018 PyeongChang Olympic Games"*, Sociology of Sport Journal.
  – <https://journals.humankinetics.com/view/journals/ssj/aop/article-10.1123-ssj.2024-0119/article-10.1123-ssj.2024-0119.xml>
- **Lian, Xia, Xie & Wu (2023)** — *"Spatial and Temporal Effects of the
  Asian Games on Urban Housing Prices in Hangzhou"* (Springer).
  – <https://link.springer.com/chapter/10.1007/978-981-97-1949-5_88>
- **Hur (2025)** — *"The Impact of Hosting Sport Mega-Events in Small
  Communities"* (dissertation, U. of South Carolina), DiD on PyeongChang.
  – <https://scholarcommons.sc.edu/etd/8249/>

**Implication for our project:** we are not going to "find the dataset". We
have to **assemble** one. The right framing for the proposal and for our viz is
*"we constructed a panel"*, not *"we visualized the Olympic housing dataset"*.

## Recommended scope — pick the cities where this is actually doable

Trying to cover all 12+ summer hosts is not realistic in 8 weeks. Three host
cities have *both* clean public housing data *and* a strong qualitative
displacement story; we should anchor on these and treat the rest as a
"context strip" at the top of the viz.

| Priority | Games | Why it works |
|---|---|---|
| ⭐⭐⭐ | **London 2012** | UKHPI gives clean monthly borough-level prices back to 1995. Five "host boroughs" are well-defined. Bid award 2005 + Games 2012 + 10+ years of post-Games data. Kavetsos already validated the effect — we can replicate his core chart with public data. |
| ⭐⭐⭐ | **Atlanta 1996** | Zillow ZHVI starts 1996 (so we miss the bid window, but catch the post-Games decade), FHFA HPI goes back to 1975, US Census Decennial for 1980/1990/2000 baselines, Eviction Lab for 2000+. Techwood Homes demolition is the canonical displacement story. |
| ⭐⭐⭐ | **Paris 2024** | INSEE Notaires-INSEE + DVF transaction-level data (parcel-precise, free, open license). Seine-Saint-Denis is the focus. Fresh story angle — post-Games data is just arriving. |
| ⭐⭐ | **Rio 2016** | FipeZap monthly city-level back to 2008 + the *Comitê Popular* dossier for displacement counts. Less geographic granularity than London/Paris. |
| ⭐ | **LA 2028** | Forward-looking only — frame as "what to watch for" using Zillow + ACS baselines. |
| context | All others (Seoul, Barcelona, Sydney, Athens, Beijing, Tokyo) | Cite displacement counts from COHRE 2007 as single data points in a small-multiples "context strip" rather than full panels. |

## TL;DR — what to pull first

Given the scope above, the minimum-viable data pull is:

1. **UK Land Registry UKHPI** — London boroughs, monthly, 1995–today.
   *(Direct CSV, OGL v3 license — easiest win.)*
2. **Zillow Research CSVs** — Atlanta MSA + LA MSA ZHVI & ZORI.
   *(Direct CSV, free for research.)*
3. **INSEE Notaires-INSEE + DVF** — Paris communes, 2014–today.
   *(DVF is parcel-level, open data.)*
4. **COHRE 2007 + Comitê Popular Rio dossier** — extract the published
   displacement *numbers* into our own small CSV. We won't get time-series here
   — just point estimates with source citations.

## The full host-city × source matrix

| Games | Host city | Primary housing data | Notes / gotchas |
|---|---|---|---|
| 1984 Summer | Los Angeles | Zillow ZHVI/ZORI (metro + ZIP) starts 1996, so use **FHFA HPI** and **US Census Decennial 1980/1990** for the 1984 window. | Privately financed Games (Ueberroth model) — a useful "control case" for *not* expecting a housing shock. |
| 1988 Summer | Seoul | **COHRE 2007** report (eviction counts ~720,000 people displaced cited). Limited price data; KOSIS (Statistics Korea) has back-series on housing prices. | Pre-internet data quality; treat COHRE counts as authoritative. |
| 1992 Summer | Barcelona | INE (Instituto Nacional de Estadística) "Índice de Precios de Vivienda" (quarterly, province-level). COHRE 2007 baseline for displacement. | Catalan housing-market series widely studied; some academic datasets available via UPF. |
| 1996 Summer | Atlanta | **Zillow ZHVI + ZORI** (Atlanta MSA + ZIP), **FHFA HPI** (back to 1975, MSA-level), **Eviction Lab** (US-wide). | Atlanta is the cleanest US case study — Centennial Olympic Park redevelopment + Techwood Homes demolition are well documented. |
| 2000 Summer | Sydney | **ABS** (Australian Bureau of Statistics) — "Residential Property Price Indexes" by capital city, quarterly back to 2003; for the 2000 window use the historical "Established House Price Index". | Limited eviction data; supplement with COHRE. |
| 2004 Summer | Athens | **ELSTAT** / Bank of Greece "Index of Prices of Dwellings" — quarterly, national + Athens. | Series quality before 2006 is patchy; cite alongside qualitative reports. |
| 2008 Summer | Beijing | **NBS China** "70-city housing price index". COHRE 2007 displacement count (~1.5M cited). | NBS series is index-only, not absolute prices; methodology change in 2011. |
| 2012 Summer | London | **HM Land Registry UKHPI** (monthly, borough back to 1995) — perfect for Newham, Tower Hamlets, Hackney, Waltham Forest, Greenwich (the "host boroughs"). **London Datastore** for ward-level rents and affordability. | This is the strongest case for a *causal* read — boundaries, baseline, and post-period are all clean. |
| 2016 Summer | Rio de Janeiro | **IBGE** (Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil), **FipeZap Index** (Brazilian Zillow-equivalent, monthly city-level back to 2008). **Comitê Popular Rio Copa e Olimpíadas — *Dossiê megaeventos e violações dos direitos humanos no Rio de Janeiro*** for forced-removal counts by neighborhood. | The Dossiê is the canonical Rio displacement source (~22,000 families cited across Copa+Olímpiadas). |
| 2020 Summer (held 2021) | Tokyo | **MLIT** Japan "Land Price Publication" + "Real Estate Price Index". | Stadium relocation (Kasumigaoka public housing eviction) is the documented case. |
| 2024 Summer | Paris | **INSEE — Indices Notaires-INSEE des prix des logements anciens** (quarterly, commune-level). **Observatoire des Loyers de l'Agglomération Parisienne (OLAP)** for rents. Focus area: Seine-Saint-Denis / Plaine Commune (Athlete Village in Saint-Denis, L'Île-Saint-Denis, Saint-Ouen). | Recent enough that post-Games data is just starting to arrive — good "fresh story" angle. |
| 2028 Summer | Los Angeles | **Zillow ZHVI/ZORI** (Los Angeles-Long Beach-Anaheim MSA + neighborhood-level for South LA, Inglewood). **HUD CHAS** for cost-burden. **US Census ACS** 5-year for tract-level baselines. | Forward-looking — frame as "what to watch for". |

## Datasets — direct links & licensing

### US-focused (covers Atlanta 1996, Salt Lake City 2002 winter ref, LA 2028)
- **Zillow Research data hub** — https://www.zillow.com/research/data/
  - ZHVI (home values), ZORI (rents), affordability, sales, days-on-market.
  - Geographies: national, state, metro, county, city, ZIP, neighborhood.
  - Frequency: monthly. License: free for research/non-commercial with attribution.
  - CSV download (Metro-level ZHVI mid-tier, current path):
    `https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv`
- **FHFA House Price Index** — https://www.fhfa.gov/data/hpi
  - MSA, state, ZIP. Quarterly back to 1975 (state) / 1991 (MSA). Free.
- **Eviction Lab (Princeton)** — https://evictionlab.org/get-the-data/
  - County and tract-level eviction filings, 2000–2018 for the historical
    dataset, plus the **Eviction Tracking System** for 37 cities + 10 states
    with monthly filings post-2020. Free with data-request form.
- **HUD CHAS (Comprehensive Housing Affordability Strategy)** — tract-level cost
  burden by income band. https://www.huduser.gov/portal/datasets/cp.html
- **US Census ACS** — tract-level income, rent, ownership, race; 1-year & 5-year.
  https://data.census.gov/

### United Kingdom (London 2012)
- **UK House Price Index (UKHPI)** — https://landregistry.data.gov.uk/app/ukhpi
  - Local-authority (borough) level, monthly back to 1995.
  - Bulk CSV reports: https://www.gov.uk/government/collections/uk-house-price-index-reports
  - Linked-data / SPARQL endpoint also available.
  - License: Open Government Licence v3.0.
- **London Datastore** — https://data.london.gov.uk/
  - "Average house prices by borough" and "Private rental market statistics".
- **ONS Private Rental Market Statistics** — borough-level median rents.

### France (Paris 2024)
- **INSEE — Indices Notaires-INSEE des prix des logements anciens** —
  <https://www.insee.fr/fr/statistiques/series/108847458> (quarterly, IDF
  detail). License: Licence Ouverte Etalab.
- **OLAP — Observatoire des Loyers de l'Agglomération Parisienne** —
  <https://www.observatoire-des-loyers.fr/> (annual rent observations).
- **DVF — Demande de Valeur Foncière** (open transaction-level real-estate
  sales for all of France, parcel-precise, since 2014):
  <https://app.dvf.etalab.gouv.fr/> and bulk download at
  <https://files.data.gouv.fr/geo-dvf/latest/csv/>. License: Licence Ouverte
  Etalab. **DV3F** (enriched version, Cerema):
  <https://datafoncier.cerema.fr/donnees/autres-donnees-foncieres/dvf>.

### Brazil (Rio 2016)
- **IBGE — SNIPC / SINAPI** indices — <https://www.ibge.gov.br/> · direct
  series at <https://sidra.ibge.gov.br/>.
- **FipeZap Index** — <https://www.fipe.org.br/pt-br/indices/fipezap/>
  (monthly, city-level, condo prices and rents back to 2008; historical CSVs
  downloadable from the index page).
- **Comitê Popular Rio Copa e Olimpíadas — *Dossiê Megaeventos e Violações
  dos Direitos Humanos no Rio de Janeiro*** — successive editions (2012,
  2013, 2014, 2015). The Moradia (housing) chapter has neighborhood-level
  forced-removal counts.
  – 2014 edition PDF (full text, ~200pp):
    <https://memoriaaudiovisual.org/wp-content/uploads/tainacan-items/5/2469/2014_dossie_copa_comite_rio.pdf>
  – Index / landing page at Observatório das Metrópoles:
    <https://www.observatoriodasmetropoles.net.br/dossie-megaeventos-e-violacoes-dos-direitos-humanos-no-rio/>
  – Heinrich Böll Stiftung mirror (English context):
    <https://br.boell.org/pt-br/2014/05/01/megaeventos-e-violacao-de-direitos-humanos-no-rio-de-janeiro-dossie-do-comite-popular-da>
  – Articulação Nacional consolidated dossier (all 12 Brazilian host
    cities, ~170k people cited as affected):
    <https://andi.org.br/documento/dossie-megaeventos-e-violacoes-de-direitos-humanos/>
  – Committee site (activity history + later editions):
    <https://comitepopulario.wordpress.com/historico-de-atividades/>

### Canada (Vancouver 2010, Calgary 1988)
- **Statistics Canada — New Housing Price Index (NHPI)** and **Residential
  Property Price Index** — table 18-10-0205-01 and 18-10-0237-01.
- **CMHC Housing Market Information Portal** — rental market reports by CMA.

### Australia (Sydney 2000)
- **ABS Residential Property Price Indexes (cat. 6432.0)** — capital-city
  quarterly index.

### Spain (Barcelona 1992)
- **INE — Estadística Registral Inmobiliaria** / **Índice de Precios de
  Vivienda** — quarterly, province-level. https://www.ine.es/

### Cross-Games / qualitative — NGO PDFs with displacement counts
This is the (b) bucket called out above: one-off PDF reports with
point-estimate displacement figures per Games. We will extract numbers from
these into our own small CSV and treat each cell as a *cited estimate*, not
a measurement.

- **COHRE — *Fair Play for Housing Rights: Mega-Events, Olympic Games and
  Housing Rights* (2007)** — the canonical historical reference for
  Olympic-related housing displacement counts (Seoul 1988 → Beijing 2008).
  COHRE closed in 2014; its full publication archive is preserved on Issuu:
  – Archive landing: <https://issuu.com/cohre> (search the publisher's 367
    documents; the Fair Play report is in the 2007 batch)
  – Atlanta 1996 background paper: <https://issuu.com/cohre/docs/atlanta_background_paper>
  – Athens 2004 background paper: <https://issuu.com/cohre/docs/athens_background_paper>
  – Forced Evictions Global Survey series (No. 7–11) for cross-checks:
    <https://issuu.com/cohre/docs/sur_7>, `.../sur_8`, `.../sur_9`
  – Permanent web archive landing page: <https://www.cohre.org/>
- **Boykoff, J.** — *NOlympians: Inside the Fight Against Capitalist Mega-Sports
  in Los Angeles, Tokyo and Beyond* (Fernwood, 2020) and *Power Games: A
  Political History of the Olympics* (Verso, 2016). Vetted case-study numbers
  to cite alongside the time-series. Publisher pages:
  <https://fernwoodpublishing.ca/book/nolympians> ·
  <https://www.versobooks.com/products/142-power-games>
- **Flyvbjerg, Budzier & Lunn — *Regression to the Tail: Why the Olympics Blow
  Up*** (Saïd Business School working paper / *Environment and Planning A*,
  2021). Cost-overrun dataset; mainly Bernard's, but the paper also cites
  housing displacement. Working-paper PDF and dataset:
  <https://www.sbs.ox.ac.uk/sites/default/files/2020-09/2020-OlympicsReport_0.pdf>
  · Updated 2024 study (Oxford press release):
  <https://www.sbs.ox.ac.uk/oxford-answers/why-olympic-games-are-bound-overspend>

## Data model we will build

A single tidy CSV at `final-project/data/housing_panel.csv`:

| column | type | example |
|---|---|---|
| `host_city` | str | `London` |
| `host_country` | str | `GB` |
| `games_year` | int | `2012` |
| `bid_award_year` | int | `2005` |
| `geography_level` | str | `borough` / `metro` / `commune` |
| `geography_name` | str | `Newham` |
| `date` | ISO date (month) | `2012-07-01` |
| `metric` | str | `home_value_index` / `median_rent` / `evictions_filed` / `displacement_count` |
| `value` | float | `213400` |
| `unit` | str | `GBP` / `USD` / `index_100=2015` / `count` |
| `source` | str | `UKHPI` |
| `retrieved_at` | ISO date | `2026-06-10` |

A second tidy CSV at `final-project/data/baselines.csv` with the *same*
schema but for the country-level or peer-city control series, so the chart code
can join on `(metric, date)` and overlay host vs. baseline.

## How we turn raw housing series into an "Olympic impact" story

Since no dataset hands us the answer, the analysis is what creates the
insight. Three layered comparisons, in increasing order of rigor — we should
aim for level 2 in the final viz and mention level 3 as future work:

**Level 1 — descriptive overlay (must-have).**
For each focus city, plot the housing metric over time with vertical
annotations at *bid-award year* and *Games year*. Overlay a national-average
baseline rebased to the same starting index. This is enough to *show* a
divergence; it does not *prove* causation, and we will say so in the caption.

**Level 2 — host vs. peer comparison (target).**
For each focus city, also overlay one or two *peer cities of similar size that
did not host*:
- London (host boroughs: Newham, Hackney, Tower Hamlets, Waltham Forest,
  Greenwich) vs. **non-host inner-London boroughs** (e.g. Lambeth, Southwark)
  and vs. **Manchester** as an out-of-region peer.
- Atlanta MSA vs. **Charlotte / Nashville** (similar-sized Sun Belt metros).
- Paris (Seine-Saint-Denis communes: Saint-Denis, Saint-Ouen,
  L'Île-Saint-Denis) vs. **Val-de-Marne** or **Hauts-de-Seine** peer communes.

This is the visual equivalent of a difference-in-differences chart and is the
approach used in the published studies cited above.

**Level 3 — quantified effect (stretch).**
Compute the implied price/rent premium attributable to the Olympics using a
simple DiD regression on the panel. Not required for the deliverable, but a
single number ("host boroughs sold for X % more in the 24 months after the bid
award than peer boroughs") is a strong line to put in the report and we
already have the data to do it for London.

## Open data questions to resolve in week 7

- **Indexing convention:** rebase every series to `index_100` at the bid-award
  year? Or at the Games year? (Leaning bid-award, since the price story
  arguably starts when the city is named host.)
- **Peer/control choice per host:** national average is easy; a *matched peer
  city* (similar size, did not host) is more credible but more work. London →
  Manchester? LA → SF Bay? Rio → São Paulo?
- **Displacement counts:** these are by definition noisy and politically
  contested. Plan: show the COHRE / Comitê Popular figures with explicit source
  attribution and a "ranges shown" tooltip rather than picking one number.
- **How honest to be about causality?** The Kavetsos study found a real but
  *small* effect (2–3 %). Our headline should not over-claim. If the data shows
  a modest effect plus a strong qualitative displacement story, the viz should
  reflect both — not collapse them into one alarmist number.
