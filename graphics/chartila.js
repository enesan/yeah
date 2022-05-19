class Chartila extends ChartsClass {
   static _ctx = document.getElementById('myChart');

    static labels = [];
    static healthyData = [];
    static illData = [];
    static recoveredData = [];

   static _data = {
        labels: Chartila.labels,
        datasets: [
            {
                label: 'Susceptible',
                data: Chartila.healthyData,
                borderColor: "#0000ff",
                fill: false,
                cubicInterpolationMode: 'default',
                tension: 0.3

            }, {
                label: 'ill',
                data: Chartila.illData,
                borderColor: "#ff0000",
                fill: false,
                cubicInterpolationMode: 'default',
                tension: 0.3
            }, {
                label: 'Recovered',
                data: Chartila.recoveredData,
                borderColor: "yellowgreen",
                fill: false,
                cubicInterpolationMode: 'default',
                tension: 0.3
            }
        ]
    };

   static _config = {
       type: 'line',
       data: this._data,
       options: {
           responsive: false,
           scales: {
               y: {
                   beginAtZero: false
               }
           }
       }
   }

    static createChart() {
        if (window.visibleChart != undefined) {
            this._clearChartData();
            window.visibleChart.destroy();
        }
        window.visibleChart = new Chart(this._ctx, this._config);
    }

    static fillLabels(label) {
        window.visibleChart.data.labels.push(label)
        window.visibleChart.update("none")
    }

    static _clearChartData() {
        Chartila.labels.length = 0;
        Chartila.illData.length = 0;
        Chartila.recoveredData.length = 0;
        Chartila.healthyData.length = 0;
    }
}