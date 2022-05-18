//makeLinksBarabasi();

class NetworkAbstract {

    _degrees = Array(nodesCount);
    constructor(nodesCount) {
        this.nodesCount = nodesCount;
    }

    makeLinks() {
        for (let i = 0; i < this._degrees.length; i++) {
            this._degrees[i] = 0;
        }
    }

    addLink(source, target) {
        graphData.links.push({
            "source": source,
            "target": target
        });

    }
}



