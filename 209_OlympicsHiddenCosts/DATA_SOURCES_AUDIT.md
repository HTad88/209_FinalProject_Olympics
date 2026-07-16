# Olympic Host-City Cost & Debt — Data Verification Audit

**Purpose:** verify every value behind the "debt map" (`site/charts/debt_map.json`) against authoritative sources, and record the citations.
**Method:** multi-source web research + 3-vote adversarial fact-checking. Each finding below passed a 3–0 skeptic vote and was verified word-for-word against the primary PDFs.
**Date of audit:** 2026-07-16.

---

## The one thing that changes everything: cost *basis*

The peer-reviewed gold standard for Olympic costs is the **Oxford Olympics Study** (Flyvbjerg, Budzier, Stewart & Lunn — 2016, 2021, 2024 editions). It measures **only sports-related costs** (Games operations + direct sports-venue capital) and **explicitly excludes** wider urban infrastructure (road, rail, airport, hotel), which is "often several times larger."

Our current dataset **mixes two bases**: some rows are Oxford-style sports costs, others are *total urban-investment* figures. That makes the circle sizes on the map not comparable to each other. **Decision required:** rebase all costs to the Oxford sports-related figure (recommended — one consistent, published, downloadable source), *or* keep total-investment figures consistently and label them as such.

- Oxford 2016 (working paper PDF): https://arxiv.org/pdf/1607.04484
- Oxford 2021 "Regression to the tail", *Environment and Planning A* (PDF): https://arxiv.org/pdf/2009.14682 · journal: https://journals.sagepub.com/doi/10.1177/0308518X20958724
- Oxford 2024 (Paris update): https://arxiv.org/abs/2406.01714

---

## Cost fixes (current → Oxford sports-related, real USD)

| Games | Current cost ($bn) | Oxford sports-related ($bn) | Note |
|---|---|---|---|
| Montreal 1976 | 1.5 | **6.093** (2015 USD) | current far too low |
| Beijing 2008 | 44.0 | **6.810** (2015 USD) | $44bn is *total urban investment*, not comparable |
| Athens 2004 | 15.0 | **2.942** (2015 USD) | current is infrastructure-inclusive |
| Sochi 2014 | 55.0 | **21.9** | $55bn is total; Oxford $21.9bn = most costly Winter Games ever |
| Rio 2016 | 13.1 | **4.557** (2015 USD) | current is infrastructure-inclusive |
| London 2012 | 15.0 | **14.957** (2015 USD) | ✓ matches — most costly Summer Games |
| Paris 2024 | 9.7 | **8.7** (2022 USD) | Oxford 2024 |

## Overrun fixes (current → Oxford)

| Games | Current % | Oxford % | |
|---|---|---|---|
| Beijing 2008 | 4 | **2** | lowest of all Games |
| Vancouver 2010 | 17 | **13** | lowest Winter |
| Salt Lake City 2002 | 29 | **24** | |
| Calgary 1988 | 59 | **65** | |
| Albertville 1992 | 135 | **137** | |
| Atlanta 1996 | 147 | **151** | |
| **Seoul 1988** | **-14** | **ERROR** | No Games since 1960 has ever come in under budget — a negative overrun is impossible per Oxford. Needs the correct Oxford value. |
| Montreal 720 · Rio 352 · Barcelona 266 · Sochi 289 · Lillehammer 277 · Lake Placid 324 · Sydney 90 · London 76 · Nagano 56 · Athens 49 | — | ✓ match | already correct |

**Context to cite:** every Olympics since 1960 has run over budget (average **172%** real, median 118%, 2021 study) — the highest overrun of any megaproject type. Overrun = actual outturn vs bid-stage budget, real terms, sports-related only.

## Debt-status & years-to-repay — LARGELY UNVERIFIED

Of all `debt_status` / `years_to_repay` values, **only Montreal's "30 years" is directly attested by an authoritative source** (Oxford 2021). The rest are sourced to news/Wikipedia and **could not be confirmed** from supreme-audit-institution reports in this audit. Treat this whole column as provisional and flag it in the write-up. Beijing 2008/2022 debt is genuinely opaque; Sarajevo 1984 has no formal record.

## Caveat to disclose (academic honesty)

The Oxford overrun magnitudes are **contested**: Müller/Preuss et al. (2022, *Int. J. Sport Policy & Politics*, doi:10.1080/19406940.2022.2037685) could not replicate the 2000–2016 results and report lower overruns (13–178% for direct non-OCOG investment). Attribute overrun figures to Oxford rather than presenting them as uncontested.
- https://www.tandfonline.com/doi/full/10.1080/19406940.2022.2037685

---

## Authoritative citations (for the website "Sources" section)

- **Flyvbjerg, B., Budzier, A. & Lunn, D. (2021).** "Regression to the tail: Why the Olympics blow up." *Environment and Planning A* 53(2), 233–260.
- **Flyvbjerg, B., Budzier, A. & Lunn, D. (2016).** "The Oxford Olympics Study 2016: Cost and Cost Overrun at the Games." Saïd Business School WP 2016-20.
- **Budzier, A. & Flyvbjerg, B. (2024).** Oxford Olympics Study 2024 (Paris update).
- **Baade, R. & Matheson, V. (2016).** "Going for the Gold: The Economics of the Olympics." *J. Economic Perspectives* 30(2).
- National supreme audit institutions per host (UK NAO, US GAO, France Cour des comptes, Japan Board of Audit, Italy Corte dei Conti, Bank of Greece) — for debt/public-finance figures.
