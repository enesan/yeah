
function changeNodes() {
    NetworkAbstract.nodesCount = d3.select("#nodesInput").property("value");
    start();
}

function changeLinks() {
    linksCount = d3.select("#linksInput").property("value");
    start();
}

function chooseNetwork() {
    networkModel();
    start();
}

function changeM() {
    if(!(networkModel() instanceof BarabasiNetwork)) return;
    m = d3.select("#m").property("value");
    start();
}

function changeInitInfected() {
    initialInfected = d3.select("#initial_infected").property("value");
    start();
}

function changeRecoveringDay() {
    day = d3.select("#recovering_start_day").property("value");
    start();
}

function changeProcess() {
    recoveringFunction();
    start();
}