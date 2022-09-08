/* exported intersection */
function intersection(first, second) {
  var finalArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      finalArr.push(first[i]);
    }
  }
  return finalArr;
}
