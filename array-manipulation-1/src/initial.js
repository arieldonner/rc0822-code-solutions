/* exported initial */
function initial(array) {
  var newArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

/* Create a new variable to hold the new array.
Create a for loop in order to go through elements in the array.
The initialization should be at 0.
In order to skip the last element, the loop should run until it reaches the length of the array minus 1.
The loop will be incrememented by one.
Inside of the loop, the value of the array at the current index will be pushed into the new array.
The new array will be returned from the function. */
