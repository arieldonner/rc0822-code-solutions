/* exported takeTop */

function takeTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    return stack.pop();
  }
}
