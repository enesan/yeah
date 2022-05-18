let stopFlag = false;
let day = 2;
let label = 0;

let intervalSIR = setInterval(() => {
    if (illCount() == domNodes.length || illCount() == 0) {
        clearInterval(intervalSIR)
    }
    if (stopFlag == false) {
        healthyData.push(healthyCount())
        illData.push(illCount())
        recoveredData.push(recoveredCount())
        coloringCircles();
        markPointsForInfecting();
        infect();
        if(label >= day) {
            let recoveringFunction = backToR();
            //backToS();
           // backToR();
        }
        fillLabels(label);
        label++;
    }

}, 1000);

function pause() {
    stopFlag === false ? stopFlag = true : stopFlag = false;
}

