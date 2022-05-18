class BarabasiNetwork extends NetworkAbstract {

    constructor(nodesCount, m) {
        super(nodesCount);
        this.m = m;
    }

    makeLinks() {
        super.makeLinks();

        for (let source = 1; source < nodesCount; source++) {
            if (source <= m) {
                for (let j = 0; j < source; j++) {
                    let target = j;
                    this.addLink(source, target)
                }
                continue;
            }


            for (let targetNumber = 0; targetNumber < m; targetNumber++) {
                let target = Math.trunc(Math.random() * source);

                target = this.checkTarget(source, target);
                this.addLink(source, target);
            }
        }
    }

    addLink(source, target) {
        super.addLink(source, target);
        ++this._degrees[source];
        ++this._degrees[target];
    }

    checkTarget(source, target, fromCheckLinks = false) {
        let random = Math.random() * Math.max(...(this._degrees.slice(0, source)));
        while (this._degrees[target] < random || fromCheckLinks == true) {
            target = Math.trunc(Math.random() * Math.max(...(this._degrees.slice(0, source))));

            if (fromCheckLinks == true)
                fromCheckLinks = false;
        }

        return this.checkLinksForRepeat(source, target);
    }

    checkLinksForRepeat(source, target) {
        if (graphData.links
            .find(x => (x.source === source && x.target === target)
                || (x.target == source && x.source == target))) {
            return this.checkTarget(source, target, true);
        }
        return target;
    }
}


