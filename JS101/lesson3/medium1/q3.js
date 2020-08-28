function factors(number) {
  let divisor = number;
  let factors = [];

  if (divisor <= 0) {
    console.log("Please enter a positive number.");
  } else {
    while (true) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
      if (divisor === 0) break;
    }
    return factors;
  }
}

console.log(factors(5));
