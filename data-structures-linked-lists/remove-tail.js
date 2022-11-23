/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return undefined;
  }
  let secondLast = list;
  while (secondLast.next.next !== null) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
}
