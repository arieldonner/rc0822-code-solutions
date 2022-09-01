/* exported getValues */
function getValues(object) {
  var arr = [];
  for (var values in object) {
    arr.push(object[values]);
  }
  return arr;
}

/* Create a new array and assign it to a variable.
Use a for in loop in order to cycle through each of the key-value pairs in the object.
Push the values of each of the keys of the object into the new array.
Return the new array from the function. */
