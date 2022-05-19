class DistributionChart extends ChartsClass {
    static _ctx = document.getElementById('distribution');

    static #dataArray = []
    static #graphDegrees = []

    static _data = {
        datasets: [{
            label: 'Scatter Dataset',
            data: this.#dataArray,
            backgroundColor: 'rgb(55, 99, 132)'
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
                        //type: 'logarithmic',
                        position: 'bottom',
                        max: Math.max(...DistributionChart.#graphDegrees) + 10
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

}
