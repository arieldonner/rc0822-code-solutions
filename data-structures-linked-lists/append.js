/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const node = new LinkedList(value);
  let currentNode = list;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
}
