function stringToSignedInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits;
  let value = 0;

  if (hasPlus(string)) {
    value = computeIfPlus(string);
  } else if (hasMinus(string)) {
    value = computeIfMinus(string);
  } else {
    value = computeIfnotSigned(string);
  }
  return value;

  function hasPlus(string) {
    return string[0] === '+';
  }

  function hasMinus(string) {
    return string[0] === '-';
  }

  function computeIfPlus(string) {
    arrayOfDigits = string.split("").slice(1).map(char => DIGITS[char]);
    arrayOfDigits.forEach(digit => {
      value = (10 * value) + digit;
      });
    return value;
  }

  function computeIfMinus(string) {
    arrayOfDigits = string.split("").slice(1).map(char => DIGITS[char]);
    arrayOfDigits.forEach(digit => {
      value = (10 * value) + digit;
      });
    return value * (-1);
  }

  function computeIfnotSigned(string) {
    arrayOfDigits = string.split("").map(char => DIGITS[char]);
    arrayOfDigits.forEach(digit => {
      value = (10 * value) + digit;
      });
    return value;
  }
}




console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
