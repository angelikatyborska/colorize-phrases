function djb2(string) {
  return Math.abs(
    string
    .split('')
    .reduce(function(acc, char) {
      return ((acc << 5) + acc) + char.charCodeAt(0);
    }, 5381)
  );
}
