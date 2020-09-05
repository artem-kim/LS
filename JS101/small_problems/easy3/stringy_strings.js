function stringy(integer) {
  let array = [];
  array.push(1);

  for (let i = 0; i < integer -1; i++) {
    array[i] === 1 ? array.push(0) : array.push(1);
  }
  return array.join("");
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
