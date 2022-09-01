/* exported isVowel */
function isVowel(char) {
  var lower = char.toLowerCase();
  if (lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u' || lower === 'y') {
    return true;
  } else {
    return false;
  }
}

/* In order to be able to more quickly check for a vowel no matter the case, convert
char to all lower case and assign it to a new variable.
Perform checks to see if the char (in the new variable) is 'a', 'i', 'o', 'u' or 'y'.
If the check is true, return true.
If the check is false, return false. */
