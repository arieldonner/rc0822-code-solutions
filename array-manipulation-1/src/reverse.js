/* exported reverse */
function reverse(array) {
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

/* Create a new variable that will hold the new array.
Create a for loop that will cycle through the elements in the original array.
Initialize the loop at the array.length - 1 because arrays start at index 0.
Continue the loop while i is greater than or equal to 0.
The loop will be decremented by 1.
In the loop, each element in the array will be pushed into the new array. Because
the loop started at the last element of the array, it should be in reverse order.
The new array will be returned from the function. */
