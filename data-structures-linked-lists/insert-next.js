/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const node = new LinkedList(value);
  const currentNode = list;
  const nextNode = list.next;
  currentNode.next = node;
  node.next = nextNode;
}
