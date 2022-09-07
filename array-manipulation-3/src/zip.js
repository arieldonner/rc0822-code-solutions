/* exported zip */
function zip(first, second) {
  var finalArr = [];
  var shortest = first.length;
  if (second.length < first.length) {
    shortest = second.length;
  }
  for (var i = 0; i < shortest; i++) {
    var newArr = [];
    newArr.push(first[i]);
    newArr.push(second[i]);
    finalArr.push(newArr);
  }
  return finalArr;
}

/* Create a variable to hold the final array.
Create a variable to hold the length of the shortest array.
By default, the variable will hold the length of the first array.
Check if the length of the second array is less than the length of the first array.
If this is true, then reassign the length of the second array to the variable mentioned before.
Create a loop that is initialized at 0, is less than the length of the shortest array variable, and increments by 1
In the loop, create a new variable to hold the array that will contain one element from each array.
Push the value of the first array at the current index into this array.
Push the value of the second array at the current index into this array.
Then push this new array into the variable holding the final array.
The final array will be returned from the function. */
