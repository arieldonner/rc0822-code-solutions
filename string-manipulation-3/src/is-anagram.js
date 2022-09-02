/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var noSpaceFirst = firstString.replaceAll(' ', '');
  var noSpaceSecond = secondString.replaceAll(' ', '');
  var firstArr = noSpaceFirst.split('');
  var secondArr = noSpaceSecond.split('');
  var firstSort = firstArr.sort();
  var secondSort = secondArr.sort();
  var firstFinal = firstSort.join('');
  var secondFinal = secondSort.join('');
  if (firstFinal === secondFinal) {
    return true;
  } else {
    return false;
  }
}

/* First, get rid of any and all spaces that are within both strings by using the
replaceAll method. Spaces should be replaced with empty strings.
Change each string into an array with the split method.
Alphabetize the arrays using the sort method.
Change the arrays back into strings using the join method.
Check whether the two strings are exactly the same or not.
If the strings are the same, then return true from the function.
If the strings are not the same, then return false from the function. */
