let graphData = {
    "nodes": [],
    "links": []
};

NetworkAbstract.nodesCount = document.getElementById("nodesInput").value;
let linksCount = document.getElementById("linksInput").value;
let initialInfected = document.getElementById("initial_infected").value;
let infectedArray = [];
let m = document.getElementById("m").value;
let beta = document.getElementById("beta").value;
let gamma = document.getElementById("gamma").value;
let networkModel = () => {
    let net = document.getElementById("network_choice").options.selectedIndex;
    switch (net) {
        case 0: return new GnmNetwork(linksCount);
        case 1: return new BarabasiNetwork(m);
    }
}




function initialInfect() {
    if(infectedArray.length > 0) infectedArray = [];
    for (let i = 0; i < initialInfected; i++) {
        let potentialInfect = Math.trunc(Math.random() * NetworkAbstract.nodesCount);
        if (!infectedArray.includes(potentialInfect)) {
            infectedArray.push(potentialInfect)
        } else {
            infectedArray.push(Math.trunc(Math.random() * NetworkAbstract.nodesCount))
        }
    }
}

function makeNodes() {
    for (let i = 0; i < NetworkAbstract.nodesCount; i++) {
        if (infectedArray.includes(i)) {
            graphData.nodes.push({
                "id": i,
                "health": 1
            })
        } else {
            graphData.nodes.push({
                "id": i,
                "health": 0
            })

        }
    }
}









