/* exported getKeys */
function getKeys(object) {
  var arr = [];
  for (var keys in object) {
    arr.push(keys);
  }
  return arr;
}

/* Create a new empty array and assign it to a variable.
Use a for...in loop to cycle through each of the key-value pairs of the given object.
Push the keys of the object into the new array.
Return the array from the function. */
