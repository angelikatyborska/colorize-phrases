function multiply(string) {
  return string
    .split('')
    .reduce(function(acc, char) {
      return acc * char.charCodeAt(0);
    }, 1);
}