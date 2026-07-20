// --- Sidebar toggle (used by report.html and index.html) ---
function openNav() { document.getElementById("mySidebar").style.width = "250px"; }
function closeNav() { document.getElementById("mySidebar").style.width = "0"; }

// --- Scrollytelling: only run on pages that have #scrolly ---
if (document.getElementById("scrolly")) {

    const scroller = scrollama();

    // Registry: map each step index -> a function that renders the chart
    // into the passed container element. Add / remove entries as needed.
    const stepRenderers = {
        0: (container) => {
            // H1 debt map — exported from olympic_host_debt_map.ipynb (cell 8, export_map.save)
            const id = "vis0-internal";
            container.innerHTML = `<div id="${id}" style="width:100%;"></div>`;
            vegaEmbed(`#${id}`, "charts/debt_map.json", {
                actions: false,
                width: "container",
            });
        },

        // Steps 1–3 (H2 cost/revenue, H3 GDP, H4 social/environmental) await their
        // charts — add an `N: (container) => {...}` entry here once each is exported.
		1: (container) => {
            // H2 Cost vs Revenues chart — exported from olympic_host_debt_map.ipynb (cell 8, export_map.save)
            const id = "vis1-internal";
            container.innerHTML = `<div id="${id}" style="width:100%;"></div>`;
            vegaEmbed(`#${id}`, "charts/streamgraph_costs_revenues_faceted.json", {
                actions: false,
            });
        },
		2: (container) => {
            // H3 GDP Growth chart — exported from olympic_host_debt_map.ipynb (cell 8, export_map.save)
            const id = "vis2-internal";
            container.innerHTML = `<div id="${id}" style="width:100%;"></div>`;
            vegaEmbed(`#${id}`, "charts/line_graph_gdp.json", {
                actions: false,
                width: "container",
            });
        },
		
        // Step 4 (Takeaways) is text-only.
    };

    function handleStepEnter(response) {
        const stepEl = response.element;
        const stepIdx = response.index;

        const container = stepEl.querySelector(".chart-holder");
        if (!container) return;
        // Only render once per step
        if (container.dataset.rendered === "true") return;

        const render = stepRenderers[stepIdx];
        if (render) {
            render(container);
            container.dataset.rendered = "true";
			
			setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 50);
        }
    }

    scroller
        .setup({
            step: ".step",
            offset: 0.6,       // trigger when step is 60% up the viewport
            debug: false,
        })
        .onStepEnter(handleStepEnter);

    window.addEventListener("resize", scroller.resize);
}
