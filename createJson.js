
let graphData = {
    "nodes": [],
    "links": []
};

let nodesCount = 22
let linksCount = 44
console.log("Ncount1", nodesCount)
let startInfected = 2;
let infectedArray = [];

let linkedNodes = [];

let helperAntiCollision = Array(nodesCount)

initialInfect();
makeNodes();
tooManyLinksExc();
//makeLinksGnm();


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

function tooManyLinksExc() {
    if (linksCount > (nodesCount * (nodesCount - 1) / 2)) {

        linksCount = nodesCount * (nodesCount - 1) / 2;
        console.log(`СВЯЗЕЙ БОЛЬШЕ, ЧЕМ У ПОЛНОГО ГРАФА, КОЛИЧЕСТВО СОКРАЩЕНО ДО ПОЛНОГО (${linksCount})`)
    }

}


function makeLinksGnm() {
    let source = 0;

    for (let i = 0; i < nodesCount; i++) {
        helperAntiCollision[i] = 0;
    }

    for (let i = 0; i < linksCount; i++) {
        if (i < nodesCount) {
            source = i;
        } else {
            source = Math.floor(Math.random() * nodesCount);
        }

        let target = Math.floor(Math.random() * nodesCount);

        while (target == source || graphData.links.find(x => x.source == source && x.target == target)
        || graphData.links.find(x => x.source == target && x.target == source)) {

            if (helperAntiCollision[source] == (nodesCount - 1)) {
                source = Math.floor(Math.random() * nodesCount);

                if (helperAntiCollision[target] == (nodesCount - 1)) {
                    target = Math.floor(Math.random() * nodesCount);
                }
                continue;
            }

            target = Math.floor(Math.random() * nodesCount);
        }

        helperAntiCollision[target]++;
        helperAntiCollision[source]++;

        graphData.links.push({
            "source": source,
            "target": target
        });
    }
}


makeLinksBa();
// m0 = 2, m =2
function makeLinksBa() {
    let target = 0;
    let m = 3;
    let degrees = Array(nodesCount);

    for (let i = 0; i < degrees.length; i++) {
        degrees[i] = 0;
    }
    console.log("degrees:", degrees)

    for (let source = 1; source < nodesCount; source++) {
        if (source <= m) {
            for (let j = 0; j < source; j++) {
                target = j;
                graphData.links.push({
                    "source": source,
                    "target": target
                })
                degrees[source]++;
                degrees[j]++;
            }
            console.log("begin links:", graphData.links)
            continue;
        }

        /////////////////////////////////
        let passToConnect = Array(source)

        console.log(degrees)

        for (let j = 0; j < source; j++) {
            let probability = degrees[j] / degrees.reduce((prev, current) => prev + current);

            passToConnect[j] = Math.random() < probability ? probability : 0;
        }
        console.log("passToConnect before entering a function")
        passToConnect = addableLinksCountCorrection(degrees, passToConnect, m);
        console.log("links berfore last move", graphData.links)
        for (let j = 0; j < passToConnect.length; j++) {
            if(passToConnect[j] > 0) {
                graphData.links.push({
                    "source": source,
                    "target": j
                })
                degrees[source]++
                degrees[j]++
                console.log("links after last move", graphData.links)
            }
        }
    }
}


function addableLinksCountCorrection(degrees, passToConnect, m) {
    let mappedPtc = []; // ptc- passToConnect
    let ptcMoreThanZero = passToConnect.filter(x => x > 0).length;

    if (ptcMoreThanZero > m) {
        console.log("Entered into first if")
        mappedPtc = passToConnect.map(x => Math.random() < (x*3) ? x : 0)
        addableLinksCountCorrection(degrees, mappedPtc, m)

        return mappedPtc;

    } else if (ptcMoreThanZero < m) {
        let difference = m - ptcMoreThanZero;

        while (difference > 0) {
            let degreesIndex = Math.floor(Math.random() * (passToConnect.length - 1));

            if (passToConnect[degreesIndex] == 0) {
                let probability = degrees[degreesIndex] / degrees.reduce((prev, current) => prev + current);
                console.log("difference while");
                if (Math.random() < probability) {
                    passToConnect[degreesIndex] = probability;
                    --difference;
                }
            }
        }
    }
        return passToConnect
}


