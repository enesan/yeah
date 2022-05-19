let ill = [];

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
   ill = []

    let environment = {};

    for (let element of domNodes) {
        if (element.__data__.health === 1 && !ill.includes(element.__data__.id)) {
            ill.push(element.__data__.id);
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

    return environment;
}




