function logInBox(string) {
  const corner = "+";
  const horizontalSymbol = "-";
  const verticalSymbol = "|";
  const space = " ";
  const horizontalLength = string.length + 2;

  console.log(corner + (horizontalSymbol.repeat(horizontalLength)) + corner);
  console.log(verticalSymbol + (space.repeat(horizontalLength)) + verticalSymbol);
  console.log(verticalSymbol + space + string + space + verticalSymbol);
  console.log(verticalSymbol + (space.repeat(horizontalLength)) + verticalSymbol);
  console.log(corner + (horizontalSymbol.repeat(horizontalLength)) + corner);
}


logInBox('To boldly go where no one has gone before.');
logInBox('');
