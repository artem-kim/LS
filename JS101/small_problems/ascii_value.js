function asciiValue(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
