/* exported capitalize */
function capitalize(word) {
  var lower = word.toLowerCase();
  return lower.replace(lower[0], lower[0].toUpperCase());
}

/* Because all characters need to be lower case except for the first, convert
word to lower case with the .toLowerCase() method and assign to a new variable.
Use the .replace() method in order to replace the 0 index of the new variable with
itself (the character at index 0) with the .toUpperCase() method. This will then
be returned by the function */
