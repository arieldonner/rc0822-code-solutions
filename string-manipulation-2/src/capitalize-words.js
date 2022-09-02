/* exported capitalizeWords */
function capitalizeWords(string) {
  var lower = string.toLowerCase();
  var arr = lower.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  var newString = arr.join(' ');
  return newString;
}

/* The string must first be converted to all lower case.
Convert the string into an array split by the spaces between the words.
Run a for loop initialized at zero, less than the length of the array, and incrementing.
In this loop, we need to take the element at the current index's first character and
change it to upper case. This will be combined with the rest of the element's characters
which can be done using the substring method and starting from index one.
This changed element should be reassigned to the array in place of the old element.
After the for loop has finished, the array needs to be turned back into a string.
This can be done using the join method with a space.
The newly created string will be returned from the function. */
