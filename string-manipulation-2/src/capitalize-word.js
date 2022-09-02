/* exported capitalizeWord */
function capitalizeWord(word) {
  var lower = word.toLowerCase();
  if (lower === 'javascript') {
    var js = lower[0].toUpperCase() + lower.slice(1, 4) + lower[4].toUpperCase() + lower.slice(5, word.length);
    return js;
  } else {
    var capital = lower[0].toUpperCase() + lower.slice(1, word.length);
    return capital;
  }
}
