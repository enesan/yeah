let pauseFlag = false;
let day = 2;


function startProcesses(){
    let label = 0;
   let intervalSIR = setInterval(() => {
        if (illCount() == domNodes.length || illCount() == 0) {
            clearInterval(intervalSIR)
        }
        if (pauseFlag == false) {
            Chartila.healthyData.push(healthyCount())
            Chartila.illData.push(illCount())
            Chartila.recoveredData.push(recoveredCount())
            coloringCircles();
            markPointsForInfecting();
            infect();
            if(label >= day - 1) {
                let recoveringFunction = backToR();
                //backToS();
                // backToR();
            }
            Chartila.fillLabels(label);
            label++;
        }

    }, 1000);
}

function pause() {
   pauseFlag = (pauseFlag === false ? true : false);
}


