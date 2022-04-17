let beta = 2;
let gamma = 0;
const N = domNodes.length;

let S = healthyCount();
let I = illCount();
let R = recoveredCount();

let ds = - beta * I * S / N;
let di = beta * I * S / N - gamma * I;
let dr = gamma * I;

function SIR() {

}