let beta = 0.9;
let gamma = 0.9;
const N = domNodes.length;

function SI() {
    let S = healthyCount();
    let I = illCount();

    let ds = -beta * I * S / N;
    let di = beta * I * S / N;

   console.log("ds",ds);
   console.log("di",di);

   // healthyData.push(S + ds);
   // illData.push(I + di);
}
