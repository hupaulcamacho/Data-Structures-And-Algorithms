// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

const middleNode = function(head) => {
  const pointerOne = head;
  const pointerTwo = head.next;

  while (pointerTwo !== null) {
    pointerOne = pointerOne.next
    pointerTwo = pointerTwo.next.next
  }

  return pointerOne
}
