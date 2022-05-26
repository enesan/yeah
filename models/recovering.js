function backTo(recoverCoef) {

    for (let element of ill) {
        let potentialHealthy = Array.from(domNodes).filter(a => a.__data__.id == element)

        if (gamma == 1) {
            potentialHealthy[0].__data__.health = recoverCoef;
        } else {
            if (Math.random() < gamma) {
                potentialHealthy[0].__data__.health = recoverCoef;
            }
        }
    }

}
