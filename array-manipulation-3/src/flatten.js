/* exported flatten */
function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      var innerArr = array[i];
      for (var j = 0; j < innerArr.length; j++) {
        newArr.push(innerArr[j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

/* Create a variable to hold the new array
Loop through each element of the given array.
Check if the element of the array is an array itself.
If this is true, loop through each element of that array.
For each element, push it into the new array.
If the element is not an array, then just push the element itself into the new array.
Return the new array from the function. */
