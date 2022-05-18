class NetworkAbstract {

    static _degrees = Array();
    static _nodesCount;

    static set nodesCount(value) {
        NetworkAbstract._nodesCount = value;
    }
    static get degrees() {
        return NetworkAbstract._degrees;
    }

    makeLinks() {
        this.initDegrees();
    }

    initDegrees() {
        NetworkAbstract._degrees = Array(NetworkAbstract._nodesCount)

        for (let i = 0; i < NetworkAbstract._nodesCount; i++) {
            NetworkAbstract._degrees[i] = 0;
        }
    }

    addLink(source, target) {
        graphData.links.push({
            "source": source,
            "target": target
        });

    }
}



