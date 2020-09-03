function palindromeSubstrings(string) {
  let result = [];
  let substrArray = substrings(string);

  for (let index = 0; index < substrArray.length; index++) {
    if (isPalindrome(substrArray[index])) {
      result.push(substrArray[index]);
    }
  }

  return result;
}

function substrings(string) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= string.length - 2) {
    let numChars = 2;
    while (numChars <= string.length - startingIndex) {
      let substring = string.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));           // []
