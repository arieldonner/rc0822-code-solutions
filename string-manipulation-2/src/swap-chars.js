/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = string.substring(0, firstIndex) + string[secondIndex] + string.substring(firstIndex + 1, secondIndex) + string[firstIndex] + string.substring(secondIndex + 1);
  return newString;
}

/* Use the substring method to get the beginning of the string, up until the
first character that is supposed to be swapped.
Concatenate this with the value of the string at the secondIndex.
Concatenate that with the string from the swapper character (plus 1) to the next
character that was supposed to be swapped.
Concatenate that with the value of the string at the firstIndex.
Concatenate that with the remaining part of the string
Return this new string from the function. */
