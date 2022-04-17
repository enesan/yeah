function healthyCount() {
    let healthyCounter = 0;
    for(let element of domNodes) {
        if(element.__data__.health == true) {
            healthyCounter++;
        }
    }
    return healthyCounter;
}
function illCount() {
    let illCounter = 0;
    for(let element of domNodes) {
        if(element.__data__.health == false) {
            illCounter++;
        }
    }
    return illCounter;
}