/* exported compact */
function compact(array) {
  var truth = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] !== undefined && array[i] !== '' && !Number.isNaN(array[i])) {
      truth.push(array[i]);
    }
  }
  return truth;
}

/* The function excludes falsey values from the array.
Create a new variable to hold the new array.
Use a for loop to go through each element in the original array.
Initialize the loop at zero. The condition should check if i is less than the array length.
The final expression should incremement i by one.
In the loop, there needs to be a conditional statement.
Check that the value of the array at index i is NOT false and not null and not NaN and
not 0 or -0 and not undefined and not an empty string.
If the checks return true, then the element will be pushed into the new array.
If false, they will not be pushed so will be "excluded".
Return the new array from the function. */
