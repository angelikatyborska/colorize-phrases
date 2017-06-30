function djb2Square(string) {
  return string
    .split('')
    .reduce(function(acc, char) {
      return ((acc << 5) + acc) + Math.pow(char.charCodeAt(0), 2);
    }, 5381);
}
