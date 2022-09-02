/* exported isPalindromic */
function isPalindromic(string) {
  var noSpace = string.replace(' ', '');
  var backwards = '';
  for (var i = noSpace.length - 1; i >= 0; i--) {
    backwards += noSpace[i];
  }
  if (noSpace === backwards) {
    return true;
  } else {
    return false;
  }
}

/* Create a new variable to hold the original string with any spaces taken out.
Create a new variable to hold the string written backwards.
Use a for loop to write the string backwards and assign it to the backwards variable.
Check to see if backwards is the same as the string with no space.
If they are exactly the same, then return true from the function.
If they are not exactly the same, then return false from the function. */
