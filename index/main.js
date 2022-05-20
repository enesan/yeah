window.onload = start;

function start() {
   graphData = {
        "nodes": [],
        "links": []
    };

    initialInfect();
    makeNodes();
    networkModel().makeLinks();
    initSvg();
    loadData();
    DistributionChart.createChart();
    Chartila.createChart();
    startProcesses();
}

