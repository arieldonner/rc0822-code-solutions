/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var lower = string.toLowerCase();
  for (var i = 0; i < lower.length; i++) {
    if (lower[i] === 'a' || lower[i] === 'e' || lower[i] === 'i' || lower[i] === 'o' || lower[i] === 'u') {
      count += 1;
    }
  }
  return count;
}

/* Start by creating a counter variable that will be used to keep track of how many
vowels are appearing in the string.
Make sure to change the string to all lower case so that it catches all letters given.
Create a for loop that will run through each character of the given string.
Initialize at 0, until the length of the string, incrementing by 1.
Check for vowels 'a', 'e', 'i', 'o', and 'u'. If the character is strictly equal
to these vowels, add one to the counter.
If it is not a vowel, it should not do anything.
Return the counter from the function. */
