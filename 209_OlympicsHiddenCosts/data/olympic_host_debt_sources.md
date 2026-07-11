# Olympic host-region debt — data sources

For Bernard's angle in the final project (revenue/cost & host-region debt). Companion to [olympic_host_debt_starter.csv](olympic_host_debt_starter.csv). Retrieved 2026-07-02.

## 1. Core structured datasets (download & cite as-is)

| # | Dataset | Coverage | Format | License | URL |
|---|---|---|---|---|---|
| 1 | **Flyvbjerg, Budzier & Lunn — "Regression to the Tail: Why the Olympics Blow Up"** (Saïd Business School, Oxford) | Sports-related cost & % overrun for every Summer & Winter Games 1960→2016 (2020 working paper; 2024 update covers Tokyo 2020) | PDF appendix + Excel supplement | CC-BY per arXiv v1 | https://arxiv.org/pdf/2009.14682 · https://www.sbs.ox.ac.uk/oxford-answers/why-olympic-games-are-bound-overspend |
| 2 | **Wikipedia — "Cost of the Olympic Games"** (main summary table) | Total cost, operating cost, profit/loss per Games 1960→2024 | HTML table | CC-BY-SA | https://en.wikipedia.org/wiki/Cost_of_the_Olympic_Games |
| 3 | **Council on Foreign Relations backgrounder** — *The Economics of Hosting the Olympic Games* | Narrative summary + comparison table incl. Montreal (30y), Athens (still-paying), Rio, Sochi | HTML + PDF | © CFR, cite as report | https://www.cfr.org/backgrounder/economics-hosting-olympic-games |
| 4 | **Council of Foreign Relations — *A Look at Olympic Costs*** (LA84 Foundation archive) | Historical cost-overrun compilation | PDF | Public archive | https://digital.la84.org/digital/collection/p17103coll10/id/3009/rec/1 |
| 5 | **World Bank — General Government Gross Debt (% of GDP)** | Annual, all countries 1995→ (WEO / GFS) | CSV / API | Open Data | https://data.worldbank.org/indicator/GC.DOD.TOTL.GD.ZS |
| 6 | **IMF — World Economic Outlook Database** | Same as (5) plus 1980→ historical for major economies; use `GGXWDG_NGDP` | Excel / CSV | Open | https://www.imf.org/en/Publications/WEO/weo-database/2025/April |
| 7 | **OECD — Sub-national Government debt / General Government Debt** | Sub-national debt for OECD host regions (Quebec, NSW, BC, IdF, Gangwon) | CSV via SDMX | Open | https://data-explorer.oecd.org/vis?tenant=archive&df[ds]=DisseminateArchiveDMZ&df[id]=DF_SNAA |
| 8 | **Eurostat — EDP notifications** (Excessive Deficit Procedure) | Official deficit & debt for Greece incl. Athens 2004 flags | XLS / API | Open | https://ec.europa.eu/eurostat/web/government-finance-statistics/excessive-deficit-procedure |

## 2. Per-Games primary / authoritative sources for the "still in debt" claim

### Montreal 1976 — paid off 2006 (30 years)
- CBC News, "Quebec's Big Owe stadium debt is over" (Dec 19, 2006): https://web.archive.org/web/20070103103426/https://www.cbc.ca/news/canada/montreal/quebec-s-big-owe-stadium-debt-is-over-1.602530
- The Guardian, "The 40-year hangover" (2016): https://www.theguardian.com/cities/2016/jul/06/40-year-hangover-1976-olympic-games-broke-montreal-canada
- Régie des installations olympiques annual reports: https://parcolympique.qc.ca/en/

### Athens 2004 — arguably still on the books
- Bank of Greece — Athens 2004 impact analysis: https://www.bankofgreece.gr/en
- IOBE (Foundation for Economic and Industrial Research) — 2015 study "The footprint of the 2004 Olympics on the Greek economy": https://iobe.gr/
- Kasimati, E. & Dawson, P. (2009) *Assessing the impact of the 2004 Olympic Games on the Greek economy.* Economic Modelling 26(1):139–146. https://doi.org/10.1016/j.econmod.2008.06.001
- Reuters, "Ten years after Games, Greeks say Athens Olympics not worth it" (2014): https://www.reuters.com/article/us-greece-olympics-idUSKBN0G70DP20140807

### Nagano 1998 — bond service through mid-2010s
- Japan Times, "Nagano still paying Olympics debt" (2013): https://www.japantimes.co.jp/news/2013/02/24/national/nagano-still-paying-olympics-debt/
- Nagano Prefecture financial statements: https://www.pref.nagano.lg.jp/kaikei/

### Sochi 2014 — VEB.RF still writing off loans (2024+)
- Reuters, "Russia's VEB.RF still writing off Sochi Olympic loans" (2022): https://www.reuters.com/world/europe/russias-vebrf-still-writing-off-sochi-olympic-loans-2022-04-15/
- The Moscow Times, "Six years on, Sochi still struggles with Olympic debts" (2020): https://www.themoscowtimes.com/2020/02/07/six-years-on-sochi-still-struggles-with-olympic-debts-a69185
- VEB.RF annual report (Russian): https://veb.ru/en/investors/reports/

### Rio 2016 — Rio state financial emergency, ongoing
- Rio de Janeiro State Decree 45.692/2016 (financial emergency): http://www.silep.planejamento.rj.gov.br/decreto_45692_-_17062016_-_calamidade_publica.htm
- Reuters, "Rio state declares financial emergency" (2016): https://www.reuters.com/article/us-olympics-2016-rio-emergency-idUSKCN0YW2BF
- Comitê Popular Rio Copa e Olimpíadas — 2015 Dossiê: https://memoriaaudiovisual.org/wp-content/uploads/tainacan-items/5/2469/2014_dossie_copa_comite_rio.pdf

### Tokyo 2020 — 2022 Board of Audit final report
- Board of Audit of Japan — English portal: https://www.jbaudit.go.jp/english/
- Reuters summary: https://www.reuters.com/lifestyle/sports/tokyo-olympics-official-cost-was-13-billion-report-2022-12-21/

### PyeongChang 2018 — Gangwon Province ongoing operating losses
- Yonhap News, "Gangwon spends 96 bln won annually maintaining Olympic venues" (2023): https://en.yna.co.kr/view/AEN20230123006400315
- Hur, Yan & Watanabe (2025) — cited in Flo's housing dossier, same source pool

### Paris 2024 — recent, Cour des comptes report
- Cour des comptes, "Rapport sur les Jeux Olympiques et Paralympiques de Paris 2024" (June 2025): https://www.ccomptes.fr/
- Le Monde English, "Paris Olympics cost taxpayers nearly €6 billion" (June 2025): https://www.lemonde.fr/en/sports/article/2025/06/23/paris-olympics-and-paralympics-cost-taxpayers-nearly-6-billion_6742628_9.html

## 3. Books

- Zimbalist, A. (2020). *Circus Maximus: The Economic Gamble Behind Hosting the Olympics and the World Cup* (2nd ed.). Brookings. — chapters 3-4 walk Montreal, Athens, Sochi, Rio debt cases in depth.
- Boykoff, J. (2016). *Power Games: A Political History of the Olympics.* Verso.
- Flyvbjerg, B. (2023). *How Big Things Get Done.* Chapter on the Olympic power law.

## 4. Analysis suggestions for the viz

1. **"Years to repay" bar chart** per Games (starter CSV column `years_to_repay`) — categorical values: `Surplus (0)`, `<5 y`, `5–15 y`, `15–30 y`, `Still paying`.
2. **Public-debt-to-GDP overlay**: for each host country, plot the World Bank series (source 5) with a vertical marker at bid-award year and Games year. Countries where you'll see a clear step-up: Greece (2004), Brazil (2016), Russia (2014).
3. **Cost-overrun × public-share scatter**: Flyvbjerg overrun % on x, public-funding share on y; bubble size = debt-repayment years. Highlights that Sochi/Athens/Montreal cluster in the top-right.
4. **Case-study strip** (matches Flo's housing panels): Montreal · Nagano · Athens · Sochi · Rio · Tokyo — one card per city with the "years to repay" fact and a mini debt-over-time line.

## 5. Data quality caveats

- "Debt still on the books" is not a single accounting figure — different countries fold Olympic infrastructure debt into different vehicles (state bank loans in Russia, general obligation bonds in Japan, sovereign debt in Greece). The `years_to_repay` column is a **narrative summary**, not a directly comparable metric.
- Sochi and Beijing (2008, 2022) numbers should be treated as lower bounds — neither state discloses per-project debt.
- Flyvbjerg's dataset covers only **sports-related** costs; general infrastructure (Rio's Line 4 metro, Tokyo's airport upgrades) is excluded from his overrun %, which is why headline media figures (e.g. Sochi $55B) are much larger than Flyvbjerg's sports-cost figure.
