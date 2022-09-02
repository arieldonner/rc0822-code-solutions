/* exported lastChars */
function lastChars(length, string) {
  var newString = string.substring(string.length - length);
  return newString;
}

/* The substring method needs to be used in order to take just a piece of the string
and store it in a new variable that will be returned by the function.
The place where we need to start at has to be the length of the string subtracted
by the length value given. This will return the correct number of characters. */
