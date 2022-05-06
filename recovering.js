let day = 2;

let intervalSIR = setInterval(() => {
    if (illCount() == domNodes.length || illCount() == 0) {
        clearInterval(intervalSIR)
    }
    if (pauseFlag == false) {
        console.log("ill count", illCount())
        console.log("healthy count", healthyCount())

        healthyData.push(healthyCount())
        illData.push(illCount())
        coloringCircles();
        markPointsForInfecting();
        infect();
        if(label >= day) {
            backToS();
        }
        fillLabels(label);
        label++;
    }

}, 1000);

function backToS() {
    for (let element of ill) {
        let potentialS = Array.from(domNodes).filter(a => a.__data__.id == element)

        if (gamma == 1) {
            potentialS[0].__data__.health = 0;
        } else {
            if (Math.random() < gamma) {
                potentialS[0].__data__.health = 0;
            }
        }
    }
}