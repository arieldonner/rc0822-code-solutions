/* exported includesSeven */
function includesSeven(array) {
  var boolean = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      boolean = true;
    }
  }
  return boolean;
}
