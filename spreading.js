let label = 0;

let pauseFlag = false;

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
        spreading();
        fillLabels(label);
        label++;
    }

}, 1000);

function spreading() {
    let ill = []

    circlePaint();

    for (let element of domNodes) {
        if (element.__data__.health === 1) {
            ill.push(element.__data__.id)
        }
    }

    infect(ill);
}

function infect(ill) {
    const env = environmentGathering(ill);
    console.log(beta)
    let illPrevious;

    for (let id of ill) {
        let nodesOfOneIll = [];

        // заполняем массив здоровых вершин вокруг одной больной
        for (let element of env) {
            if (parseInt(Object.keys(element)[0]) == id) {
                nodesOfOneIll.push(Object.values(element)[0]);
            }
        }
           // console.log(`nodes Of One ${id}:`, nodesOfOneIll)

        // заражаем вершины с вероятностью бета

        for (let domNode of domNodes) {
            for (let element of nodesOfOneIll) {
                if (beta > nodesOfOneIll.length) continue;

                if (domNode.__data__.id == element) {
                    if(beta < 1 && Math.random() < beta) {
                        domNode.__data__.health = 1;
                    }
                    else if(beta >= 1){
                        if (beta > nodesOfOneIll.length) {

                        }
                    }
                }
            }

            // if (element.__data__.source.id == id || element.__data__.target.id == id) {
            //     if (element.__data__.source.health == 1) {
            //         element.__data__.target.health = 1
            //     }
            //
            //     if (element.__data__.target.health == 1) {
            //         element.__data__.source.health = 1
            //     }
            // }
        }
    }
}

function coloringCircles() {

}

function environmentGathering(ill = []) {
    let environment = [];

    for (let id of ill) {
        for (let element of domLinks) {

            if (element.__data__.source.id == id
                && !environment.includes({[element.__data__.source.id]: element.__data__.target.id})
                && element.__data__.target.health == 0) {
                environment.push({[element.__data__.source.id]: element.__data__.target.id})
                console.log('first if pushed: ', {[element.__data__.source.id]: element.__data__.target.id})
            } else if (element.__data__.target.id == id
                && !environment.includes({[element.__data__.target.id]: element.__data__.source.id})
                && element.__data__.source.health == 0) {
                environment.push({[element.__data__.target.id]: element.__data__.source.id})
                console.log('second if pushed: ', {[element.__data__.target.id]: element.__data__.source.id})
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
