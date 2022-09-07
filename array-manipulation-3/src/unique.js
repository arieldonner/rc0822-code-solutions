/* exported unique */
function unique(array) {
  var finalArr = [];
  for (var i = 0; i < array.length; i++) {
    var currentValue = array[i];
    // console.log(currentValue);
    // console.log('first', array.indexOf(currentValue));
    // console.log('last', array.lastIndexOf(currentValue));
    if (array.indexOf(currentValue, i) !== array.lastIndexOf(currentValue)) {
      finalArr.push(array[i]);
    }
  }
  // console.log(finalArr);
  return finalArr;
}
