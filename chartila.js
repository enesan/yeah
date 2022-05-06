const ctx = document.getElementById('myChart');


let labels = [];

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
            cubicInterpolationMode: 'monotone',
            tension: 0.4
        }, {
            label: 'ill',
            data: illData,
            borderColor: "#ff0000",
            fill: false,
            cubicInterpolationMode: 'default',
            tension: 0.4
        }, {
            label: 'Recovered',
            data: recoveredData,
            borderColor: "#00FF00",
            fill: false,
            cubicInterpolationMode: 'monotone',
        }
    ]
};

    const visibleChart = new Chart(ctx, {
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

function fillLabels(label){
    visibleChart.data.labels.push(label)
    visibleChart.update("none")
   // console.log(visibleChart.data.labels)
}




