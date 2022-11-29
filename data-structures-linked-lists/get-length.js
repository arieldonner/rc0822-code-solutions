/* exported getLength */

function getLength(list) {
  let count = 0;
  let currentNode = list;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    count += 1;
  }
  return count;
}
