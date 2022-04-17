let label = 0;

let SI = setInterval(() => {
    if (illCount() == domNodes.length) {clearInterval(SI)}
    console.log(illCount())
    healthyData.push(healthyCount())
    illData.push(illCount())
    spreading();
    fillLabels(label);
    label++;
}, 1000);

function spreading() {
    let ill = []

    circlePaint();

    for(let element of domNodes) {
        if(element.__data__.health === 1) {
            ill.push(element.__data__.id)
        }
    }

    for(let id of ill) {
        for(let element of domLinks ) {
            if(element.__data__.source.id == id || element.__data__.target.id == id) {
                if(element.__data__.source.health == 1){
                    element.__data__.target.health = 1
                }

                if(element.__data__.target.health == 1) {
                    element.__data__.source.health = 1
                }
            }
        }
    }
}

function circlePaint() {
    for(let element of domNodes) {
        element.style.fill = element.__data__.health === 0 ? "blue" :
            element.__data__.health === 1 ? "red" : "green";
    }
}

