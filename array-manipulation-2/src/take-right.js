/* exported takeRight */
function takeRight(array, count) {
  if (count < array.length) {
    return array.slice(array.length - count);
  } else {
    return array;
  }
}

/* Because the array itself is returned if the count is higher than the array length,
check if count is less than the array length.
If true, then use the slice method on the array to cut part of it out.
Use the array's length subtracted by the count in order to pull the last elements
of the array. This result should be returned from the function.
If the count is higher than the array, the array itself should be returned from
the function. */
