const readline = require('readline-sync');
const SQMETERS_IN_SQFEET = 10.7639

function printRoomSize() {
  console.log('Please enter the room length:');
  let length = readline.prompt();

  console.log('Please enter the room width:');
  let width = readline.prompt();

  let sizeMeters = length * width;
  let sizeFeet = sizeMeters * meterInFeet;

  console.log(`The size of your room in square meters is ${sizeMeters}.`)
  console.log(`The size of your room in square feet is ${sizeFeet.toFixed(2)}.`)
}

printRoomSize();
