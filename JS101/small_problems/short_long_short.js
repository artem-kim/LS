function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  } else {
    return string2 + string1 + string2;
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
