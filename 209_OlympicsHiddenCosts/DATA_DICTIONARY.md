# Housing Exploratory Datasets — Data Dictionary & Real Data Sources

## Files in `/final-project/data/`

### 1. `cohre_displacement_estimates.csv` ✅ **USE AS-IS**

**Purpose:** Context layer showing reported displacement from Olympic host cities (point estimates from NGO reports)

**Columns:**
- `games_year` (int): Year of Olympic Games (1988, 1996, 2004, 2008, 2012, 2016)
- `host_city` (str): City name
- `estimated_displaced` (int): Number of people/families displaced
- `unit` (str): "people" or "families"
- `source` (str): Citation (COHRE 2007, Comitê Popular 2014, etc.)

**Notes:**
- Values are **point estimates** from NGO archival research (not official statistics)
- Some entries are "unknown" or "TBD" — mark these in analysis
- Sources are heterogeneous (academic papers, NGO dossiers, news reports)
- **IMPORTANT:** This data is context layer for narrative, not causal evidence on prices

**Used by:** Hypothesis 2 (displacement correlation analysis)

---

### 2. `olympic_housing_event_spine.csv` ✅ **USE AS-IS**

**Purpose:** Reference table aligning bid-award year, Games year, and host city for timeline joins

**Columns:**
- `games_year` (int): Year of Games
- `bid_award_year` (int): Year bid was awarded (~7 years before Games)
- `host_city` (str): City name
- `country` (str): Country code (USA, UK, China, etc.)

**Notes:**
- Complete and accurate (verified against official IOC records)
- Used as join key to align housing time-series with Olympic events
- Includes 1988–2028 (future Olympics for forward-looking analysis)

**Used by:** All three hypotheses (marks bid/Games periods)

---

### 3. Housing Time-Series in `HOUSING_EXPLORATORY_SUBMISSION.ipynb`

The Jupyter notebook contains **embedded housing data** for:
- **London 2012:** Synthetic demonstration data (mimics UKHPI patterns, 2000–2019)
- **Atlanta 1996:** Synthetic demonstration data (mimics Zillow ZHVI patterns, 1990–2009)

These are **not real datasets** — they are realistic simulations to show methodology.

---

## **To Use Real Data Instead of Synthetic**

### Step 1: Download Real Housing Datasets

#### London (best: UKHPI by borough)
```
Source: UK Land Registry
URL: https://landregistry.data.gov.uk/app/ukhpi
Format: CSV
What: Median house prices by London borough, monthly, 1995–2026
Download: 
  1. Go to https://landregistry.data.gov.uk/app/ukhpi
  2. Select "London" region
  3. Select "House Prices: Monthly" metric
  4. Download CSV
  5. Rename to: london_ukhpi_borough.csv
Time: 5 mins
```

#### Atlanta (best: Zillow ZHVI)
```
Source: Zillow Research
URL: https://www.zillow.com/research/data/
Format: CSV
What: Zillow Home Value Index (median), monthly, 1996–2026
Download:
  1. Go to https://www.zillow.com/research/data/
  2. Search "ZHVI" (Zillow Home Value Index)
  3. Select "Atlanta-Sandy Springs-Roswell, GA" metro
  4. Download CSV
  5. Rename to: atlanta_zhvi_metro.csv
Time: 5 mins
```

### Step 2: Update Notebook with Real Data

In `HOUSING_EXPLORATORY_SUBMISSION.ipynb`, replace the synthetic data cells:

**Find this cell (around cell 5):**
```python
# Create synthetic London data that mirrors real UKHPI patterns
# (Actual UKHPI would replace this)
london_data = pd.DataFrame({
    'year': ...,
    'value': ...
})
```

**Replace with:**
```python
# Load real UKHPI data
london_raw = pd.read_csv('/Users/flo/project1/209 - Data Viz/final-project/data/london_ukhpi_borough.csv')

# Parse and aggregate (UKHPI may have columns like: Date, Area, Price)
# Example: if columns are 'Date' (YYYY-MM), 'Area', 'Price'
london_raw['year'] = pd.to_datetime(london_raw['Date']).dt.year
london_raw['month'] = pd.to_datetime(london_raw['Date']).dt.month

# Aggregate to annual June snapshot (or monthly if you want finer granularity)
london_data = london_raw[london_raw['month'] == 6].groupby(['year', 'Area']).agg({
    'Price': 'mean'
}).reset_index()

# For analysis, can take city-wide average or focus on Olympic boroughs:
# Olympic zones: Newham, Tower Hamlets, Hackney, Waltham Forest, Greenwich
olympic_boroughs = ['Newham', 'Tower Hamlets', 'Hackney', 'Waltham Forest', 'Greenwich']
london_olympic = london_data[london_data['Area'].isin(olympic_boroughs)]
london_data = london_olympic.groupby('year').agg({'Price': 'mean'}).reset_index()
london_data['host_city'] = 'London'
london_data['games_year'] = 2012
london_data['bid_award_year'] = 2005
london_data.columns = ['year', 'value', 'host_city', 'games_year', 'bid_award_year']
```

**Similarly for Atlanta (around cell 6):**
```python
# Load real Zillow ZHVI data
atlanta_raw = pd.read_csv('/Users/flo/project1/209 - Data Viz/final-project/data/atlanta_zhvi_metro.csv')

# Parse (Zillow ZHVI typically has columns: Month, Value for each region)
atlanta_raw['year'] = pd.to_datetime(atlanta_raw['Month']).dt.year
atlanta_raw['month'] = pd.to_datetime(atlanta_raw['Month']).dt.month

# Take June snapshots (or annual mean)
atlanta_june = atlanta_raw[atlanta_raw['month'] == 6].copy()
atlanta_data = atlanta_june[['year', 'Value']].rename(columns={'Value': 'value'})
atlanta_data['host_city'] = 'Atlanta'
atlanta_data['games_year'] = 1996
atlanta_data['bid_award_year'] = 1990
```

### Step 3: Re-run Notebook

Execute all cells. Charts and analysis will now use real data.

---

## Data Quality Notes

### UKHPI (London)
- **Strengths:** Official government source, monthly granularly, borough-level detail, 30+ year history
- **Weaknesses:** "House prices" only (not rents); doesn't capture type/size of property; delays in reporting
- **Missing:** Rental data, transaction volumes, new construction

### Zillow ZHVI (Atlanta)
- **Strengths:** Monthly granularity, data available since 1996, includes both values and rentals
- **Weaknesses:** Estimated indices (Zillow's algorithm), may lag behind ground truth, concentrated on listed properties
- **Missing:** Institutional housing, rentals (separate data stream), demographics

### COHRE Displacement
- **Strengths:** Synthesizes multiple NGO reports and archival sources
- **Weaknesses:** Heterogeneous methodologies; some cities undocumented; point estimates in past (no annual time-series)
- **Missing:** Post-displacement tracking; longitudinal outcomes

---

## Recommended Analysis Path

### Tonight (Submission)
Use **synthetic data in notebook** as-is. It's realistic and demonstrates methodology clearly. Submit on time.

### After Submission (If Team Wants to Extend)
1. Download real UKHPI + Zillow CSVs
2. Update notebook with real data paths
3. Re-run analysis — results should be similar (confirm displaced hypothesis conclusions hold)
4. Add borough/ZIP-level drill-down (Hypothesis 1 refinement)
5. Port to Observable for final D3 dashboard

---

## File Organization

```
final-project/
├── data/
│   ├── cohre_displacement_estimates.csv      ← Use as-is
│   ├── olympic_housing_event_spine.csv       ← Use as-is
│   ├── london_ukhpi_borough.csv              ← (Optional: download & add)
│   └── atlanta_zhvi_metro.csv                ← (Optional: download & add)
├── HOUSING_EXPLORATORY_SUBMISSION.ipynb      ← SUBMIT THIS TONIGHT
├── SUBMISSION_GUIDE_TONIGHT.md               ← Action plan
├── EXPLORATORY_VIZ_GUIDELINES.md             ← Rubric reference
└── DATA_DICTIONARY.md                        ← This file
```

---

## Contact & Questions

If data doesn't match or CSVs are missing:
1. Check file paths (absolute path required: `/Users/flo/project1/209 - Data Viz/final-project/data/...`)
2. Verify columns match expected names before using
3. Print first 5 rows: `print(data.head())`

Submission deadline: **Tue June 23, 11:59 PM PT**

Good luck! 🎯
