let day = 2;

let intervalSIR = setInterval(() => {
    if (illCount() == domNodes.length || illCount() == 0) {
        clearInterval(intervalSIR)
    }
    if (pauseFlag == false) {
        healthyData.push(healthyCount())
        illData.push(illCount())
        recoveredData.push(recoveredCount())
        coloringCircles();
        markPointsForInfecting();
        infect();
        if(label >= day) {
            //backToS();
            backToR();
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

function backToR() {
    for (let element of ill) {
        let potentialR = Array.from(domNodes).filter(a => a.__data__.id == element)

        if (gamma == 1) {
            potentialR[0].__data__.health = 2;
        } else {
            if (Math.random() < gamma) {
                potentialR[0].__data__.health = 2;
            }
        }
    }
}