const readline = require('readline-sync');
let answer;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' ||
         Number.isNaN(Number(number)) ||
         Number(number) < 0;
}

prompt('Welcome to Mortgage Calculator!');

do {
  prompt("What's the loan amount in dollars?");
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt("Please enter a valid amount.");
    loanAmount = readline.question();
  }

  prompt("What's the Annual Percentage Rate (APR)?
  For example, enter '5%' as 5.");
  let apr = readline.question();

  while (invalidNumber(apr)) {
    prompt("Please enter a valid rate.");
    apr = readline.question();
  }

  prompt("What's the loan duration in months?");
  let durationMonths = readline.question();

  while (invalidNumber(durationMonths)) {
    prompt("Please enter a valid number of months.");
    durationMonths = readline.question();
  }

  let monthlyRate = apr / 100 / 12;
  let monthlyPayment = loanAmount * (monthlyRate /
                       (1 - Math.pow((1 + monthlyRate), (-durationMonths))));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?");
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
} while (answer === "y");
