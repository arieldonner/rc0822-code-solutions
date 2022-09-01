/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}

/* The string should be converted into an array by using the split method.
The arguement should be a space so that each word of the string is an element of the array.
The result of this is what is returned by the function.
Because an empty string is expected to become an empty array, use a check to see if
the string is empty. If true, then return an empty array. */
