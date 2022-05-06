let label = 0;
let pauseFlag = false;
let ill = [];
let illsInAllTicks = [];

// завершил сбор вершин вокруг больной
// далее - распределение болезни с учётом бета

// let intervalSI = setInterval(() => {
//     if (illCount() == domNodes.length) {
//         clearInterval(intervalSI)
//     }
//     if (pauseFlag == false) {
//         SI();
//         console.log("ill count", illCount())
//         console.log("healthy count", healthyCount())
//         healthyData.push(healthyCount())
//         illData.push(illCount())
//         coloringCircles();
//         markPointsForInfecting();
//         infect();
//
//         fillLabels(label);
//
//         label++;
//     }
//
// }, 1000);

function infect() {
    for (let element of ill) {
        let potentialIll = Array.from(domNodes).filter(a => a.__data__.id == element);

        if(potentialIll.length > 0) {
            potentialIll[0].__data__.health = 1;
        }
    }
}

function markPointsForInfecting() {
    const env = environmentGathering();

    if (beta == 1) {
        for (let key in env) {
            ill = ill.concat(env[key]);
        }
    } else {
        for (let key in env) {
            for (let element of env[key]) {
                if (Math.random() < beta) {
                    ill.push(element);
                }
            }
        }
    }
    ill = Array.from(new Set(ill));
}


function environmentGathering() {
  //  console.log("oldIll", ill)
   ill = []

    let environment = {};

    for (let element of domNodes) {
        if (element.__data__.health === 1 && !ill.includes(element.__data__.id)) {
            ill.push(element.__data__.id);
        }
    }

    console.log("new new ill", ill)

    for (let id of ill) {
        for (let element of domLinks) {
            let source = element.__data__.source;
            let target = element.__data__.target;

            if (source.id == id && target.health == 0) {
                if (!(id in environment)) {
                    environment[id] = [];
                }
                if (!environment[id].includes(target.id)) {
                    environment[id].push(target.id);
                }
            } else if (target.id == id && source.health == 0) {
                if (!(id in environment)) {
                    environment[id] = [];
                }
                if (!environment[id].includes(source.id)) {
                    environment[id].push(source.id);
                }
            }
        }

    }

    console.log("ENVIRONMENT", environment)
    return environment;
}

function coloringCircles() {
    for (let element of domNodes) {
        element.style.fill = element.__data__.health === 0 ? "blue" :
            element.__data__.health === 1 ? "red" : "green";
    }
}

function pause() {
    pauseFlag === false ? pauseFlag = true : pauseFlag = false;
}
