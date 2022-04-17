let label = 0;

setInterval(() => {
    //console.log("healthycount:",healthyCount());
    //console.log("illcount:",illCount());
    healthyData.push(healthyCount())
    illData.push(illCount())
    spreading();
    fillLabels(label);
    label++;
}, 1000);

function spreading() {
    let ill = []

    fillRedOrGreen();

    for(let element of domNodes) {
        if(element.__data__.health == false) {
            ill.push(element.__data__.id)
        }
    }

    for(let id of ill) {
        for(let element of domLinks ) {
            if(element.__data__.source.id == id || element.__data__.target.id == id) {
                if(element.__data__.source.health == false){
                    element.__data__.target.health = false
                }

                if(element.__data__.target.health == false) {
                    element.__data__.source.health = false
                }
            }
        }
    }
}

function fillRedOrGreen() {
    for(let element of domNodes) {
        element.style.fill = element.__data__.health === true ? "green" : "red";
    }
}

