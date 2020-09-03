penultimate = (string) => {
  let result = string.split(' ')
  return result[result.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
