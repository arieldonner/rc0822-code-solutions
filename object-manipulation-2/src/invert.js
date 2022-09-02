/* exported invert */
function invert(source) {
  var newObject = {};
  for (var keys in source) {
    newObject[source[keys]] = keys;
  }
  return newObject;
}

/* Create a new object to store the keys and values in.
Run a for...in loop to cycle through each of the keys in the given object.
For each cycle, set the new object's property to the value of the original object.
Set that equal to the value of the object's key.
Return the new object from the function. */
