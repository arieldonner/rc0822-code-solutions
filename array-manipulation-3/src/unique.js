/* exported unique */
function unique(array) {
  var finalArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!finalArr.includes(array[i])) {
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}

/* Create a variable to hold the final array.
Create a for loop that is intitialized at 0, runs until the length of the array, and incremements by 1
Check if the current element is NOT included in the final array.
If this is true, then push the element into the final array.
Outside of the loop, the final array will be returned from the function. */
