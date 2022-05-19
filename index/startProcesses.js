let pauseFlag = false;
let day = 2;


function startProcesses(){
    let label = 0;
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
                let recoveringFunction = backToR();
                //backToS();
                // backToR();
            }
            fillLabels(label);
            label++;
        }

    }, 1000);
}

function pause() {
   pauseFlag = (pauseFlag === false ? true : false);
}

function restartProcesses() {
    document.getElementById("myChart").innerHTML = ""
    pauseFlag = false;
    label = 0;
}

