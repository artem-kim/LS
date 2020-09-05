function findFibonacciIndexByLength(numberOfDigits) {
  let array = [];
  let current = 1;
  let previous = 0;
  let currentNumInArray = " ";

  while (currentNumInArray.length < numberOfDigits) {
    next = previous + current
    array.push(current);

    previous = current;
    current = next;
    currentNumInArray = array[array.length - 1].toString()
  }
  return array.indexOf(array[array.length - 1]) + 1;
}

console.log(findFibonacciIndexByLength(2)); // 7
console.log(findFibonacciIndexByLength(10)); // 45
console.log(findFibonacciIndexByLength(16)); // 74
