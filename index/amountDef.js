// 0 - healthy
// 1 - ill
// 2 - recovered
function healthyCount() {
    let healthyCounter = 0;
    for(let element of domNodes) {
        if(element.__data__.health == 0) {
            healthyCounter++;
        }
    }
    return healthyCounter;
}
function illCount() {
    let illCounter = 0;
    for(let element of domNodes) {
        if(element.__data__.health == 1) {
            illCounter++;
        }
    }
    return illCounter;
}
function recoveredCount() {
    let recoveredCounter = 0;
    for(let element of domNodes) {
        if(element.__data__.health == 2) {
            recoveredCounter++;
        }
    }
    return recoveredCounter;
}