/* exported removeNext */

function removeNext(list) {
  if (list.next) {
    const currentNode = list;
    const thirdNode = list.next.next;
    currentNode.next = thirdNode;
  }
}
