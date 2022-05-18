let graphData = {
    "nodes": [],
    "links": []
};

let nodesCount1 = 100;
let linksCount = 100;
let startInfected = 2;
let infectedArray = [];
let m = 5

let beta = 0.7;
let gamma = 0.4;

initialInfect();
makeNodes();

NetworkAbstract.nodesCount = nodesCount1;
console.log(NetworkAbstract.degrees)
//let net = new BarabasiNetwork(m);
let net = new gnmNetwork(linksCount);

net.makeLinks();


function initialInfect() {
    for (let i = 0; i < startInfected; i++) {
        let potentialInfect = Math.trunc(Math.random() * nodesCount1);
        if (!infectedArray.includes(potentialInfect)) {
            infectedArray.push(potentialInfect)
        } else {
            infectedArray.push(Math.trunc(Math.random() * nodesCount1))
        }
    }
    console.log(infectedArray)
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







