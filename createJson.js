let graphData = {
    "nodes": [],
    "links": []
};

let nodesCount = 3;
let linksCount = 10;
let startInfected = 2;
let infectedArray = [];

// нагенерить сообщение об ошибке
if(nodesCount < (linksCount / 2)) {
    linksCount = nodesCount * 2;
}

for (let i = 0; i < startInfected; i++) {
    let potentialInfect = Math.trunc(Math.random() * nodesCount);
    if (!infectedArray.includes(potentialInfect)) {
        infectedArray.push(potentialInfect)
    } else {
        infectedArray.push(Math.trunc(Math.random() * nodesCount))
    }

}
console.log(infectedArray)

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

let linkedNodes = [];
let source = 0;
let helperAntiCollision = Array(nodesCount)

for(let i = 0; i < nodesCount; i++) {
    helperAntiCollision[i] = 0;
}

for (let i = 0; i < linksCount; i++) {
    if (i < nodesCount) {
        source = i;
    } else {
        source = Math.floor(Math.random() * nodesCount);
    }

    let target = Math.floor(Math.random() * nodesCount);

  //  while (target == source || graphData.links.find(x => x.source == source && x.target == target)
  //  || graphData.links.find(x => x.source == target && x.target == source)) {
  //      console.log("hello")
  //      if(helperAntiCollision[source] == (nodesCount - 1)) {
  //          source = Math.floor(Math.random() * nodesCount);
//
  //          if(helperAntiCollision[target] == (nodesCount - 1)) {
  //              target = Math.floor(Math.random() * nodesCount);
  //          }
//
  //          continue;
  //      }
//
  //      target = Math.floor(Math.random() * nodesCount);
  //  }

        helperAntiCollision[target]++;
        helperAntiCollision[source]++;

    graphData.links.push({
        "source": source,
        "target": target
    });
    console.log(source)
    console.log(target)
    // console.log("graphdata[0].meta",graphData.links.includes({"source": source, "target":target}))
    // console.log("graphdata[0]",graphData.links[0])
    console.log("graphData:", graphData)
}
