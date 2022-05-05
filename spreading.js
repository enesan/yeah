let label = 0;
let pauseFlag = false;
let ill = [];

// завершил сбор вершин вокруг больной
// далее - распределение болезни с учётом бета

let intervalSI = setInterval(() => {
    if (illCount() == domNodes.length) {
        clearInterval(intervalSI)
    }
    if (pauseFlag == false) {
        SI();
        // healthyData.push(healthyCount())
        // illData.push(illCount())
        circlePaint();
        infectingEnvironment();
        fillLabels(label);
        label++;
    }

}, 1000);

function infectingEnvironment() {
    const env = environmentGathering();
    console.log(beta)


}

function coloringCircles() {

}

function environmentGathering() {
    ill = []
    let environment = {};

    for (let element of domNodes) {
        if (element.__data__.health === 1) {
            ill.push(element.__data__.id)
        }
    }

    for (let id of ill) {
        for (let element of domLinks) {
            let source = element.__data__.source;
            let target = element.__data__.target;

            if (source.id == id && target.health == 0) {
                if (!(id in environment)) {
                    environment[id] = [];
                }
                if (!environment[id].includes(element)) {
                    environment[id].push(element);
                }
            } else if (target.id == id && source.health == 0) {
                if (!(id in environment)) {
                    environment[id] = [];
                }
                if (!environment[id].includes(element)) {
                    environment[id].push(element);
                }
            }
        }

    }

    console.log("ENVIRONMENT", environment)
    return environment;
}

function circlePaint() {
    for (let element of domNodes) {
        element.style.fill = element.__data__.health === 0 ? "blue" :
            element.__data__.health === 1 ? "red" : "green";
    }
}

function pause() {
    pauseFlag === false ? pauseFlag = true : pauseFlag = false;

}
