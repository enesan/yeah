let graphData = {
    "nodes": [],
    "links": []
};

let nodesCount = 15;
let linksCount = 20;
let startInfected = 2;
let infectedArray = [];

for(let i = 0; i < startInfected; i++) {
    let potentialInfect = Math.floor(Math.random() * nodesCount);
    if (!infectedArray.includes(potentialInfect)) {
        infectedArray.push(potentialInfect)
    }
    else {
        infectedArray.push(Math.random() * nodesCount)
    }

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

let linkedNodes = [];
let source = 0;
for(let i = 0; i < linksCount; i++) {
    if (i < nodesCount) {
        source = i;
    } else {
        source = Math.floor(Math.random() * nodesCount);
    }
    let target = Math.floor(Math.random() * nodesCount);
    if (target == source || graphData.links.includes({"source":source, "target":target})
        || graphData.links.includes({"source":target, "target":source})) {
        target = Math.floor(Math.random() * nodesCount)
    }
    graphData.links.push({
        "source": source,
        "target": target
    });
}
// console.log("graph:", graphData)
// let tempNodes = [];
// for(let link of graphData.links) {
//     if(!tempNodes.includes(link.source)) {
//         tempNodes.push(link.source)
//     } else if(!tempNodes.includes(link.target)) {
//         tempNodes.push(link.target)
//     }
// }
// console.log("tempNodes", tempNodes)
// let missingNodes = []
// for (let i = 0; i < nodesCount; i++) {
//     if (!tempNodes.includes(i)) {
//         missingNodes.push(i)
//     }
// }
// console.log("missing nodes", missingNodes)

// кратные рёбра
// циклы
// вершины без связей

// доделать
// console.log(graphData)
// let emptyNodes = graphData.nodes;
// for (let link of graphData.links) {
//     if(!graphData.nodes.includes(x => x.id == link.source.id)) {
//         let index = graphData.nodes.findIndex(link.source.id);
//         graphData.nodes.splice(index);
//         emptyNodes.push(link.source.id)
//     }
//     else if(!graphData.nodes.includes(x => x.id == link.target.id)) {
//         let index = graphData.nodes.findIndex(link.source.id);
//         graphData.nodes.splice(index);
//         emptyNodes.push(link.target.id)
//     }
// }