/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = stack.peek();
  while (stack.peek() !== undefined) {
    const top = stack.pop();
    if (top > max) {
      max = top;
    }
  }
  return max;
}
