function multisum(integer) {
  let sum = 0;

  for (let counter = 1; counter <= integer; counter++) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter
    }
  }
  return sum;
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
