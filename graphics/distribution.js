class DistributionChart extends ChartsClass {
    static _ctx = document.getElementById('distribution');

    static #dataArray = []
    static #graphDegrees = []
    static #scale = "linear";

    static get scale() {
        return this.#scale;
    }

    static set scale(value) {
        this.#scale = value;
        this.createChart();
    }

    static _data = {
        datasets: [{
            label: 'Degree distribution',
            data: this.#dataArray,
            backgroundColor: 'rgb(255, 99, 132)'
        }],
    };


    static createChart() {
        if (window.distributionChart != undefined) {
            this._clearChartData();
            window.distributionChart.destroy();
        }

        this.#graphDegrees = NetworkAbstract.degrees;
        this.#fillingPointsData();
        window.distributionChart = new Chart(this._ctx, {
            type: 'scatter',
            data: this._data,
            options: {
                responsive: false,
                scales: {
                    x: {
                        type: this.#scale,
                        position: 'bottom',
                        max: Math.max(...DistributionChart.#graphDegrees) + 10
                    },
                    y:{
                        type: this.#scale,
                        max: this.#chooseMaxY() + 0.1
                    }
                }
            }
        });
    }

    static _clearChartData() {
        this.#dataArray.length = 0;
    }

    static #fillingPointsData() {
        for (let i = 0; i <= Math.max(...DistributionChart.#graphDegrees); i++) {
            if (!this.#graphDegrees.find(x => x === i)) continue;

            let fraction = this.#graphDegrees
                .filter(x => x === i).length / this.#graphDegrees.length;
            this._data.datasets[0].data.push({x: i, y: fraction});
        }
    }

    static #chooseMaxY(){
        let maxValue = 0;
        for(let o of this._data.datasets[0].data) {
            if(o.y > maxValue) maxValue = o.y
        }
        return maxValue;
    }

}
