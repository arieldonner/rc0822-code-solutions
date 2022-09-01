/* exported reverseWord */
function reverseWord(word) {
  var backwards = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backwards += word[i];
  }
  return backwards;
}

/* Create an empty string to be able to put each character into
Create a for loop. The loop should start at the last letter of the word. The loop
should continue through an index of 0 and should be decrimented.
On each loop, the current letter should be added to the new string.
Because it is starting from the end of the word, the new variable should have the
word backwards. */
