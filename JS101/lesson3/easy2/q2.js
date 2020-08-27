let numbers = [1, 2, 3, 4, 5];
let newArray = numbers.slice().reverse();
console.log(numbers);
console.log(newArray);

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray);
console.log(numbers);

let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray);
console.log(numbers); 
