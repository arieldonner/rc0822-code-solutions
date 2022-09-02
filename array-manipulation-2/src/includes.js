/* exported includes */
function includes(array, value) {
  var bool = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      bool = true;
    }
  }
  return bool;
}

/* Iterate through the array using a for loop.
Initialize at 0, until the length of the array, incrememnt by 1.
If the value of the array at the current index is strictly equal to the given value,
then the function should return true.
Otherwise, the function should return false.
This can be accomplished with a variable to hold the boolean that starts as false.
 If the condition is true, then the variable will be changed to true.
This variable is returned from the function. */
