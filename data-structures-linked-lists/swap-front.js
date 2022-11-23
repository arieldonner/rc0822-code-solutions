/* exported swapFront */

function swapFront(list) {
  if (list.next) {
    const currentNode = list;
    const nextNode = list.next;
    const thirdNode = list.next.next;
    const newFirst = nextNode;
    newFirst.next = currentNode;
    newFirst.next.next = thirdNode;
    return newFirst;
  } else {
    return list;
  }
}
