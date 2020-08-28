function printTenTimes(word) {
  const MAX_NUM = 10;
  let spaces = " ";

  for (let i = 0; i < MAX_NUM; i++) {
    console.log(`${spaces}${word}`);
    spaces += " ";
  }
}

printTenTimes ('The Flintstones Rock!');
