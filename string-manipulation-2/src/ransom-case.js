/* exported ransomCase */
function ransomCase(string) {
  var lower = string.toLowerCase();
  var newString = '';
  for (var i = 0; i < lower.length; i++) {
    if (i % 2 === 0) {
      newString += lower[i];
    } else {
      newString += lower[i].toUpperCase();
    }
  }
  return newString;
}
