/* exported includes */

function includes(list, value) {
  let currentNode = list;
  while (currentNode !== null) {
    if (currentNode.data === value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}
