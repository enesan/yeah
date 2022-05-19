window.onload = start;
let net = new BarabasiNetwork(m);


function start() {
   graphData = {
        "nodes": [],
        "links": []
    };

    initialInfect();
    makeNodes();

    net.makeLinks();
    initSvg();
    loadData();
    DistributionChart.createChart();
    Chartila.createChart();
    startProcesses();
}
