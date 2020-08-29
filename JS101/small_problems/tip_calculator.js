const readline = require('readline-sync');

console.log('Please enter the bill amount:')
let bill = parseFloat(readline.prompt());

console.log('Please enter the tip rate (e.g. 5 for 5%):')
let tipRate = parseFloat(readline.prompt());

let tips = computeTip(bill, tipRate);
let total = bill + tips;

console.log(`The tip is $${tips.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

function computeTip(amount, rate) {
  return amount * (rate/100);
}
