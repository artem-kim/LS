function crunch(string) {
  let tempArray = string.split('');
  let finalArray = [];

  for (let index = 0; index < tempArray.length; index++) {
    if (tempArray[index] === tempArray[index +1]) continue;

    finalArray.push(tempArray[index]);
  }

  return finalArray.join('');
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
