/* exported chunk */
function chunk(array, size) {
  var newArr = [];
  for (var i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;
}

/* Create a new array to store the pieces of the original array.
Run a for loop to iterate through the array in chunks of the given size.
Initialize at 0, up to the array length, incrememnt by the given size.
Each iteration, slice part of the array from the value of i up to the value of
i plus the size, and push that value into the new array.
The new array will be returned from the function. */
