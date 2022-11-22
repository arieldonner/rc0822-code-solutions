/* exported getTop */

function getTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    return stack.peek();
  }
}
