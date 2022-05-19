const ctx = document.getElementById('myChart');

let labels = []
let healthyData = [];
let illData = [];
let recoveredData = [];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Susceptible',
            data: healthyData,
            borderColor: "#0000ff",
            fill: false,
            cubicInterpolationMode: 'default',
            tension: 0.3

        }, {
            label: 'ill',
            data: illData,
            borderColor: "#ff0000",
            fill: false,
            cubicInterpolationMode: 'default',
            tension: 0.3
        }, {
            label: 'Recovered',
            data: recoveredData,
            borderColor: "yellowgreen",
            fill: false,
            cubicInterpolationMode: 'default',
            tension: 0.3
        }
    ]
};



function createChart () {
    if(window.visibleChart != undefined) {
      window.visibleChart.destroy();
    }

    window.visibleChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: false,
            //maintainAspectRatio:true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

function fillLabels(label){
    window.visibleChart.data.labels.push(label)
    window.visibleChart.update("none")
}

function clearChartData() {
    labels.length = 0;
    illData.length = 0;
    recoveredData.length = 0;
    healthyData.length = 0;
}



