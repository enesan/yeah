const context = document.getElementById('distribution');

let tempDataName = []
let distributionLabels = []
const halal2 = degrees;
const halal = finalDegrees;
let distributionData = {
    datasets: [{
        label: 'Scatter Dataset',
        data: tempDataName,
        backgroundColor: 'rgb(255, 99, 132)'
    }],
};
const config = {
    type: 'scatter',
    data: distributionData,
    options: {
        responsive: false,
        scales: {
            x:{
                type: 'linear',
                position: 'bottom',
                max: Math.max(...halal) +10
            }
        }
    }
}
console.log("distribution Data", distributionData)

for(let i = 0   ; i <= Math.max(...halal); i++) {
    if(!halal.find(x => x === i)) continue;

    let fraction = halal
        .filter(x => x === i).length / halal.length;
    distributionData.datasets[0].data.push({x: i, y: fraction});
}

const distributionChart = new Chart(context, config);



