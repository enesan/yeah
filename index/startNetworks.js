let graphData = {
    "nodes": [],
    "links": []
};

let nodesCount1 = 10;
let linksCount = 100;
let startInfected = 2;
let infectedArray = [];
let m = 5

let beta = 0.7;
let gamma = 0.4;


NetworkAbstract.nodesCount = nodesCount1;

//let net = new gnmNetwork(linksCount);

function initialInfect() {
    if(infectedArray.length > 0) infectedArray = [];
    for (let i = 0; i < startInfected; i++) {
        let potentialInfect = Math.trunc(Math.random() * nodesCount1);
        if (!infectedArray.includes(potentialInfect)) {
            infectedArray.push(potentialInfect)
        } else {
            infectedArray.push(Math.trunc(Math.random() * nodesCount1))
        }
    }
}

function makeNodes() {
    for (let i = 0; i < nodesCount1; i++) {
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









