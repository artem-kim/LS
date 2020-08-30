const readline = require('readline-sync');
const STARTING_NUMBER = 1;

let number = isValidInteger(parseInt(readline.question("Please enter an integer greater than 0: "), 10));

console.log('Enter "s" to compute the sum, or "p" to compute the product.')
let choice = isValidAnswer(readline.question());

printResult(choice);


function isValidAnswer(string) {
  while (string !== 's' && string !== 'p') {
    console.log('Please enter "s" or "p".');
    string = readline.question();
  }
  return string;
}

function isValidInteger(integer) {
  while (Number.isNaN(integer) || integer <= 0) {
    console.log("Not a valid number. Please enter an integer greater than 0: ")
    integer = parseInt(readline.question());
  }
  return integer;
}

function product(integer) {
  let result = 1;
  for (let i = 1; i <= integer; i++) {
    result *= i;
  }
  return result;
}

function sum(integer) {
  let result = 0;
  for (let i = 1; i <= integer; i++) {
    result += i;
  }
  return result;
}

function printResult(choice) {
  if (choice === 'p') {
    console.log(`The product of the integers between ${STARTING_NUMBER} and ${number} is ${product(number)}.`)
  } else {
    console.log(`The sum of the integers between ${STARTING_NUMBER} and ${number} is ${sum(number)}.`)
  }
}
