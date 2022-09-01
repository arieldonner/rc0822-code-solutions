/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

/* Create a new, empty object.
Create the key value pair by using the value of keyValuePair at index 1 and assigning it to
the property that is the value of keyValuePair at index 0, of the object
Return the new object from the function. */
