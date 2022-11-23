/* exported countValues */

function countValues(stack) {
  let count = 0;
  while (stack.pop() !== undefined) {
    count += 1;
  }
  return count;
}
