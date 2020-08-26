let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsExclamation(str) {
  if (str[str.length - 1] === '!') {
    return true;
  } else {
    return false;
  }
}

console.log(endsExclamation(str1));
console.log(endsExclamation(str2));
