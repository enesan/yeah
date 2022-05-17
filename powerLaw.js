makeLinksPowerLaw();
function makeLinksPowerLaw() {

    for (let i = 0; i < degrees.length; i++) {
        degrees[i] = 0;
    }

    for (let source = 1; source < degrees.length; source++) {
        if (source <= m) {
            for (let j = 0; j < source; j++) {
                let target = j;
                addLink(source, target)
            }
            continue;
        }


        for (let targetNumber = 0; targetNumber < m; targetNumber++) {
            let target = Math.trunc(Math.random() * source);

            target = checkTarget(source, target);
            addLink(source, target);
            console.log(degrees.slice(0, source + 1))
        }
    }
}

function addLink(source, target) {
    graphData.links.push({
        "source": source,
        "target": target
    });
    ++degrees[source];
    ++degrees[target];
}

function checkTarget(source, target, fromCheckLinks = false) {
    let random = Math.random() * Math.max(...(degrees.slice(0, source)));
    while (degrees[target] < random || fromCheckLinks == true) {
        target = Math.trunc(Math.random() * Math.max(...(degrees.slice(0, source))));

        if (fromCheckLinks == true)
            fromCheckLinks = false;
    }

    return checkLinksForRepeat(source, target);
}

function checkLinksForRepeat(source, target) {
    if (graphData.links
        .find(x => (x.source === source && x.target === target)
            || (x.target == source && x.source == target))) {
        console.log("da")
        return checkTarget(source, target, true);
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