/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const top = stack.pop();
    const secFromTop = stack.peek();
    stack.push(top);
    return secFromTop;
  }
}
