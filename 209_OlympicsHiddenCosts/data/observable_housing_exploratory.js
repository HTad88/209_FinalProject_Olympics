// Observable-ready starter cells for Housing Exploratory Viz (COHRE context layer)

cohre = FileAttachment("cohre_displacement_estimates.csv").csv({ typed: true })

spine = FileAttachment("olympic_housing_event_spine.csv").csv({ typed: true })

housingContext = cohre.map(d => {
    const s = spine.find(x => x.games_year === d.games_year && x.host_city === d.host_city)
    return {
        ...d,
        bid_award_year: s ? s.bid_award_year : null,
        data_status: Number.isFinite(d.estimated_displaced_people) ? "numeric" : "placeholder"
    }
})

viewof showNumericOnly = Inputs.toggle({ label: "Show numeric estimates only", value: true })

filteredHousingContext = housingContext
    .filter(d => showNumericOnly ? Number.isFinite(d.estimated_displaced_people) : true)
    .sort((a, b) => (b.estimated_displaced_people || -1) - (a.estimated_displaced_people || -1))

Plot.plot({
    title: "Reported Olympic-related displacement context (COHRE and related sources)",
    subtitle: "Exploratory context layer for housing impact; placeholders indicate pending verification",
    width: 900,
    height: 420,
    marginLeft: 130,
    x: { label: "Estimated displaced people / families" },
    y: { label: null },
    color: {
        legend: true,
        domain: ["numeric", "placeholder"],
        range: ["#c43c35", "#9aa0a6"]
    },
    marks: [
        Plot.barX(filteredHousingContext, {
            x: d => Number.isFinite(d.estimated_displaced_people) ? d.estimated_displaced_people : 0,
            y: "host_city",
            fill: "data_status",
            sort: { y: "x", reverse: true },
            tip: true,
            channels: {
                games_year: "games_year",
                bid_award_year: "bid_award_year",
                source: "source_short",
                notes: "notes"
            }
        }),
        Plot.text(filteredHousingContext.filter(d => !Number.isFinite(d.estimated_displaced_people)), {
            x: 20000,
            y: "host_city",
            text: () => "pending",
            fill: "#666",
            fontSize: 10
        }),
        Plot.ruleX([0])
    ]
})
