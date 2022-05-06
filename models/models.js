let beta = 0.5;
const N = domNodes.length;

function SI() {
    let S = healthyCount();
    let I = illCount();

    let ds = -beta * I * S / N;
    let di = beta * I * S / N;

 //  console.log(ds);
 //  console.log(di);

   // healthyData.push(S + ds);
   // illData.push(I + di);
}
