let graphData = {
    "nodes": [],
    "links": []
};

let nodesCount = 10;
let linksCount = 20;
let startInfected = 2;
let infectedArray = [];

for(let i = 0; i < startInfected; i++) {
    infectedArray.push(Math.floor(Math.random() * nodesCount))
}
console.log(infectedArray)
for (let i = 0; i < nodesCount; i++) {
    if(infectedArray.includes(i)) {
        graphData.nodes.push({
            "id": i,
            "health": 1
        })
    }
    else {
        graphData.nodes.push({
            "id": i,
            "health": 0
        })
    }

}

for(let i = 0; i < linksCount; i++) {
    let source = Math.floor(Math.random() * nodesCount);
    let target = Math.floor(Math.random() * nodesCount);
    if (target == source || graphData.links.includes({"source":source, "target":target})
                || graphData.links.includes({"source":target, "target":source})) {
        target = Math.floor(Math.random() * nodesCount)
    }
    graphData.links.push({
        "source": source,
        "target": target
    })
}