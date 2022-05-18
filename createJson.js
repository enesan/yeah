let graphData = {
    "nodes": [],
    "links": []
};

let nodesCount = 50
let linksCount = 100
let startInfected = 2;
let infectedArray = [];
let m = 5

let beta = 0.7;
let gamma = 0.4;

initialInfect();
makeNodes();
let net = new BarabasiNetwork(nodesCount, m);
//let net = new gnmNetwork(nodesCount, linksCount);

net.makeLinks();


function initialInfect() {
    for (let i = 0; i < startInfected; i++) {
        let potentialInfect = Math.trunc(Math.random() * nodesCount);
        if (!infectedArray.includes(potentialInfect)) {
            infectedArray.push(potentialInfect)
        } else {
            infectedArray.push(Math.trunc(Math.random() * nodesCount))
        }
    }
    console.log(infectedArray)
}

function makeNodes() {
    for (let i = 0; i < nodesCount; i++) {
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







