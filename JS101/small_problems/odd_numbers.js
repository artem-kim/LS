/*
Input: Positive or negative integer or zero
Output: True if integer is odd, false otherwise

*/


function isOdd(num) {
  return num % 2 !== 0;
}


console.log(isOdd(5)); // true
console.log(isOdd(-55)); // true
console.log(isOdd(0)); // false
console.log(isOdd(40)); // false
