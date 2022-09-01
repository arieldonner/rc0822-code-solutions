/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArr = [];
  for (var i = 0; i < words.length; i++) {
    var changed = words[i] + suffix;
    newArr.push(changed);
  }
  return newArr;
}
