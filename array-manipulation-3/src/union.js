/* exported union */
function union(first, second) {
  var finalArr = [];
  for (var i = 0; i < first.length; i++) {
    finalArr.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      finalArr.push(second[j]);
    }
  }
  return finalArr;
}
