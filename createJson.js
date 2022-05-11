let graphData = {
    "nodes": [],
    "links": []
};

let nodesCount = 500
let linksCount = 0
console.log("Ncount1", nodesCount)
let startInfected = 2;
let infectedArray = [];
let alpha = 2.5;
m = 5
let linkedNodes = [];
let degrees = [];
let helperAntiCollision = Array(nodesCount)

initialInfect();
makeNodes();
tooManyLinksExc();
//makeLinksGnm();
makeLinksPowerLaw();


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


// m0 = 2, m =2
function makeLinksBa() {
    let target = 0;
    let m = 3;

    for (let i = 0; i < degrees.length; i++) {
        degrees[i] = 0;
    }
    //console.log("degrees:", degrees)

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

            continue;
        }

        /////////////////////////////////
        let passToConnect = Array(source)

        for (let j = 0; j < source; j++) {
            let probability = degrees[j] / degrees.reduce((prev, current) => prev + current);

            passToConnect[j] = Math.random() < probability ? probability : 0;
        }

        passToConnect = addableLinksCountCorrection(degrees, passToConnect, m);

        for (let j = 0; j < passToConnect.length; j++) {
            if (passToConnect[j] > 0) {
                graphData.links.push({
                    "source": source,
                    "target": j
                })
                degrees[source]++
                degrees[j]++

            }
        }
    }
}

function addableLinksCountCorrection(degrees, passToConnect, m) {
    //  console.log("PasstoConnect size", passToConnect.length)
    let mappedPtc = []; // ptc- passToConnect
    let ptcMoreThanZero = passToConnect.filter(x => x > 0).length;

    if (ptcMoreThanZero > m) {
        //     console.log("Entered into first if")
        mappedPtc = passToConnect.map(x => Math.random() < (x * 3) ? x : 0)
        addableLinksCountCorrection(degrees, mappedPtc, m)

        return mappedPtc;

    } else if (ptcMoreThanZero < m) {
        let difference = m - ptcMoreThanZero;

        let zeroIndexes = [];
        for (let i = 0, j = 0; i < passToConnect.length; i++) {
            if (passToConnect[i] == 0) {
                zeroIndexes[j] = i;
                j++;
            }
        }

        while (difference > 0) {
            let zeroIndex = Math.floor(Math.random() * (zeroIndexes.length - 1));
            let index = zeroIndexes[zeroIndex];


            let probability = degrees[index] / degrees.reduce((prev, current) => prev + current);
            //     console.log("difference while");
            if (Math.random() < probability) {
                passToConnect[index] = probability;
                zeroIndexes
                --difference;
            }

        }
    }
    return passToConnect
}


function makeLinksPowerLaw() {
    degrees = makeDistribution(alpha, m)

    for (let source = 1; source < degrees.length; source++) {
        if (source <= m) {
            for (let j = 0; j < source; j++) {
                let target = j;
                graphData.links.push({
                    "source": source,
                    "target": target
                });
                degrees[target]--;
                degrees[source]--;
            }
            continue;
        }
        for (let targetNumber = 0; targetNumber < m; targetNumber++) {
            let target = Math.trunc(Math.random() * source);

            target = checkTarget(source,target);

            graphData.links.push({
                "source": source,
                "target": target
            });
            --degrees[source];
            --degrees[target];
            console.log(source, ":", target)
            console.log(degrees.slice(0,source))
        }
    }
}

function checkTarget(source, target) {
    while (degrees[target] === 0 || target === source) {
        target = Math.trunc(Math.random() * source);
        //console.log("while")
    }
    return target;
}

function makeDistribution(alpha = 2.5, m = 5) {

    for (let i = 0; i < nodesCount; i++) {
        let probability = Math.random();
        let xx = Math.trunc((m - 0.5) * Math.pow(1 - probability, -1 / (alpha - 1)) + 0.5);
        degrees.push(xx);
    }
    console.log("degrees1", degrees)
    return degrees;
}

console.log("degrees", degrees)

