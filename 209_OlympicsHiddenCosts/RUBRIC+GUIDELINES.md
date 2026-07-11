# Final Project Exploratory Visualization — Guidelines & Rubric

**Due:** Tuesday, June 23, 2026, 11:59 PM local time  
**Submission:** One group report to bCourses (Google Doc, Observable notebook, Colab, or Tableau story)  
**Graded on:** Process & depth of exploration, not final polish

---

## Overview

You will explore your final project dataset **before building the final visualization**. The goal is to:
1. Inspect data without visualizing it yet
2. Develop and test hypotheses
3. Try multiple visualization approaches per hypothesis
4. Document your refinement process (at least 3 steps per hypothesis)
5. Discover unexpected patterns

---

## Assignment Structure

### Phase 1: Data Inspection & Hypothesis Formation
- Load your data and inspect it **without visualizations**
- Look at summaries, data types, missing values, ranges
- Write down **three clear, testable hypotheses**
  - Example (housing): "Host-city rents rise faster in the bid-to-Games window than in non-Olympic comparison cities"
- Each hypothesis should be specific enough to visualize

### Phase 2: Visualization Exploration (Multiple Iterations)
For each of your three hypotheses:

1. **Create an initial visualization** (chart type A)
   - Plot relevant variables
   - Note what you observe
   - Record what works and what doesn't

2. **Refine or try a different view** (chart type B)
   - Adjust aggregation, filtering, encoding
   - Different chart type (bar → line, scatter → heatmap, etc.)
   - Incorporate insights from visualization 1

3. **Refine further** (chart type C or iteration of B)
   - Apply learnings from both previous views
   - **Your final visualization for each hypothesis should look notably different from your first**
   - Include derived variables if helpful (e.g., growth rates, indexed to 100, year-over-year change)

4. **Look for the unexpected**
   - Outliers, clusters, correlations you didn't predict
   - Why might they exist?

### Phase 3: Write-Up
Document your exploration:
- **Data overview** (rows, columns, sources, time span)
- **Hypothesis #1 → Final visualization + narrative**
  - What was your hypothesis?
  - Which visualizations did you try? Why?
  - What did you learn?
  - Does the data support or refute your hypothesis?
  - What surprised you?
- **Repeat for hypotheses #2 and #3**
- **Reflection** (optional but valued): What did you learn about your data? What still puzzles you? What will you focus on in the final project?

---

## Rubric (100 points)

| Criterion | Points | What This Means |
|---|---|---|
| **Good judgment in analysis of representations tried** | 20 | Did you choose visualizations that actually test your hypotheses? Did you avoid chartjunk? Were your encodings appropriate? |
| **Experimentation with variety of chart types** | 15 | Did you try different chart types (bar, line, scatter, heatmap, etc.)? Multiple approaches per hypothesis? |
| **Refinement within individual chart types** | 15 | Did you iterate — adjusting scales, filters, aggregations, colors, faceting *within* a chart family? Show the work. |
| **Applying information gained in one visualization to enhance another** | 10 | If viz #2 revealed something, did you incorporate it into viz #3? Evidence of learning across charts? |
| **Clear and reasonable hypotheses** | 10 | Are your hypotheses testable? Do they make sense given your data and project question? |
| **Reasonable conclusion for each hypothesis** | 10 | Did you interpret your final visualization? Did you state whether data supports/refutes your hypothesis? |
| **Describing work in enough detail to follow** | 10 | Can someone understand your reasoning? Did you explain why you tried chart A, then switched to chart B? |
| **Clear and readable writing** | 10 | Grammar, formatting, clarity. No rambling. |

**Total: 100 points**

---

## Key Grading Emphasis

1. **Process > Polish**
   - Graders want to see your thinking and iterations, not a final polished single chart
   - Retain all your working sheets/views so progression is visible

2. **Richness of Exploration**
   - First and last visualization for each hypothesis should be **noticeably different**
   - At least 3 steps of refinement per hypothesis
   - This is what earns points in "experimentation" and "refinement"

3. **Hypotheses Matter**
   - Vague hypotheses ("housing changes") get fewer points
   - Specific, testable hypotheses ("evictions in Olympic host neighborhoods exceed national trend by year Y") get rewarded

4. **Conclusions Must Connect to Visualizations**
   - Don't just assert "hypothesis supported" — show which viz(s) provided evidence
   - If you found unexpected patterns, highlight them

---

## Submission Format Options

- **Google Doc:** Embed images or links to Tableau/Observable workbooks; write narrative alongside
- **Observable notebook:** Mix markdown explanations with live, interactive charts
- **Google Colab:** Python + markdown + plotly/matplotlib visualizations
- **Tableau story:** Sequential sheets with captions explaining your process

Pick whichever tool best suits your team's workflow. **Observable or Colab are ideal** because you can keep code/data alongside narration and show all iterations in one place.

---

## Housing-Specific Tips

### Three example hypotheses for your angle:
1. **Host-city rents/prices show acceleration around bid and Games years** (vs. baseline trend)
2. **Displacement counts are highest in neighborhoods defined as Olympic infrastructure zones** (vs. city-wide average)
3. **Post-Games recovery to "normal" housing appreciation takes 3+ years** (vs. non-Olympic cities)

### Visualizations you might try:
- **Line charts** with bid-year and Games-year markers and a national/peer baseline overlay
- **Small multiples** (one plot per host city, aligned axes)
- **Heatmaps** (city × year × metric)
- **Scatter plots** (bid-to-Games price change vs. displacement count)
- **Bar charts** (displacement estimates by city, ranked or faceted by region)

### Data to inspect first:
- Range of years per city (do you have enough pre-bid data for a baseline?)
- Missing values (COHRE estimates vs. Zillow continuity)
- Units (GBP, USD, index? families vs. people?)
- Outliers (which cities have extreme displacement or price changes?)

---

## Checklist Before Submission

- [ ] Three hypotheses written down and reasonable
- [ ] At least 3 different visualizations per hypothesis (9+ total views)
- [ ] First and last visualizations per hypothesis are visibly different
- [ ] Evidence of refinement (adjusted scales, new aggregations, different encodings)
- [ ] Conclusions state whether hypothesis is supported/refuted with specific evidence
- [ ] Unexpected findings noted and discussed
- [ ] Writing is clear and follows logical flow
- [ ] Group credit clearly stated (who did what)
- [ ] Submitted to bCourses before deadline
