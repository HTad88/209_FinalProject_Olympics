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
            // Vega-Lite JSON exported from Altair via: chart.save('chart_0.json')
            const id = "vis0-internal";
            container.innerHTML = `<div id="${id}" style="width:100%;"></div>`;
            vegaEmbed(`#${id}`, "charts/chart_0.json", {
                actions: false,
                width: "container",
            });
        },

        1: (container) => {
            const id = "vis1-internal";
            container.innerHTML = `<div id="${id}" style="width:100%;"></div>`;
            vegaEmbed(`#${id}`, "charts/chart_1.json", {
                actions: false,
                width: "container",
            });
        },

        2: (container) => {
            // Iframe approach: works great for Altair chart.save('foo.html')
            // outputs, especially charts with widgets / selections.
            container.innerHTML = `
                <iframe src="charts/chart_2.html"
                        class="altair-iframe"
                        style="height: 600px;"
                        scrolling="no"></iframe>
            `;
        },

        // step 3 has no chart — text-only takeaways
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
