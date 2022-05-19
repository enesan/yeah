class gnmNetwork extends NetworkAbstract {

    #nodesCount = 50;
    #helperAntiCollision;

    constructor(linksCount) {
        super();
        this.linksCount = linksCount;
        this.#nodesCount = NetworkAbstract._nodesCount;
        this.#helperAntiCollision = Array(this.#nodesCount);
    }

    makeLinks() {
        super.makeLinks()
        this.tooManyLinksExc();

        let source = 0;

        for (let i = 0; i < this.#nodesCount; i++) {
            this.#helperAntiCollision[i] = 0;
        }

        for (let i = 0; i < linksCount; i++) {
            if (i < this.#nodesCount) {
                source = i;
            } else {
                source = Math.floor(Math.random() * this.#nodesCount);
            }

            let target = Math.floor(Math.random() * this.#nodesCount);

            while (target == source || graphData.links.find(x => x.source == source && x.target == target)
            || graphData.links.find(x => x.source == target && x.target == source)) {

                if (this.#helperAntiCollision[source] == (this.#nodesCount - 1)) {
                    source = Math.floor(Math.random() * this.#nodesCount);

                    if (this.#helperAntiCollision[target] == (this.#nodesCount - 1)) {
                        target = Math.floor(Math.random() * this.#nodesCount);
                    }
                    continue;
                }

                target = Math.floor(Math.random() * this.#nodesCount);
            }

            this.#helperAntiCollision[target]++;
            this.#helperAntiCollision[source]++;

            super.addLink(source,target)
        }
    }

    tooManyLinksExc() {
        if (linksCount > (this.#nodesCount * (this.#nodesCount - 1) / 2)) {

            linksCount = this.#nodesCount * (this.#nodesCount - 1) / 2;
            console.log(`СВЯЗЕЙ БОЛЬШЕ, ЧЕМ У ПОЛНОГО ГРАФА, КОЛИЧЕСТВО СОКРАЩЕНО ДО ПОЛНОГО (${linksCount})`)
        }
    }
}


