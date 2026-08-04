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
            vegaEmbed(`#${id}`, "charts/final_streamgraph_faceted_stacked_bar_chart.json", {
                actions: false,
            }).then(result => {
				function alignTitles() {
					// Target the individual chart group containers inside the generated SVG canvas
					const views = document.querySelectorAll('.vega-embed svg g.role-scope');
					if (views.length < 2) {
						// Retry if the chart hasn't fully rendered in the DOM yet
						setTimeout(alignTitles, 100);
						return;
					}
					
					// Find title blocks inside the SVG structure
					const titles = document.querySelectorAll('.vega-embed svg g.role-title text');
					
					if (titles.length >= 2) {
						// Title 1: Pin to the start of the Streamgraph view frame rectangle
						titles[0].setAttribute('x', '0');
						titles[0].setAttribute('text-anchor', 'start');
						
						// Title 2: Pin exactly to the starting x-coordinate of the second column layout
						// 400px (Streamgraph width) + 50px default layout spacing = 450px
						titles[1].setAttribute('x', '450');
						titles[1].setAttribute('text-anchor', 'start');
					}
				}
				// Execute alignment after rendering loop finish
				setTimeout(alignTitles, 200);
			}).catch(console.error);
        },
		2: (container) => {
            // H3 GDP Growth chart — exported from olympic_host_debt_map.ipynb (cell 8, export_map.save)
            const id = "vis2-internal";
            container.innerHTML = `<div id="${id}" style="width:100%;"></div>`;
			
			let currentIndex = 0;
			let animationTimer = null;
			let hasClicked = false;
            vegaEmbed(`#${id}`, "charts/final_line_graph_gdp.json", {
                actions: false,
                width: "container",
            }).then(result => {
				
			}).catch(console.error);
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
