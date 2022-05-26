
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

function changeBeta() {
    beta = document.getElementById("beta").value;
    start();
}

function changeGamma() {
    gamma = document.getElementById("gamma").value;
    start();
}

function changeDistributionScale(scale) {
    switch (scale){
        case "linear":
            DistributionChart.scale = "linear";
            break;
        case "logarithmic":
            DistributionChart.scale = "logarithmic";
            break;
    }

    let tabs = document.getElementsByClassName("tablinks");
    for(let i =0; i < tabs.length; i++) {
       tabs[i].className = tabs[i].className.replace("active", "");
    }

    document.getElementById(scale).className += " active";
}