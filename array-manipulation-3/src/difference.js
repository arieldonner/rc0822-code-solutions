/* exported difference */
function difference(first, second) {
  var finalArr = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      finalArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      finalArr.push(second[j]);
    }
  }
  return finalArr;
}

/* Create a new variable to hold the final array in.
Create two for loops, one for each of the arrays.
The first for loop will loop through the first array.
It will check to see that the current element is NOT included in the second array.
If this is true, push the element to the final array.
The second loop will loop through the second array.
It will check to see that the current element is NOT included in the first array.
If this is true, push the element to the final array.
Return the final array from the function. */
