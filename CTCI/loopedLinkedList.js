const findLoopLocation = (linkedList, matchPtr) => {
  while (linkedList) {
    if (matchPtr === linkedList) return linkedList;
    let checkPtr = matchPtr.next;
    while (checkPtr !== matchPtr) {
      if (checkPtr === linkedList) return linkedList;
      else checkPtr = checkPtr.next;
    }
    linkedList = linkedList.next;
  }
};

const findLoopStart = linkedList => {
  let slowPtr = linkedList;
  let fastPtr = linkedList;
  let matchPtr = null;

  while (fastPtr.next !== null && fastPtr.next.next !== null) {
    if (slowPtr.next === fastPtr.next.next) {
      matchPtr = slowPtr.next;
      break;
    } else {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
    }
  }
  if (matchPtr === null) return -1;
  return findLoopLocation(linkedList, matchPtr);
};

const createLLNode = (val, next = null) => {
  const node = {
    val,
    next,
    setNext: nextNode => {
      node.next = nextNode;
    },
  };
  return node;
};

const n8 = createLLNode(8);
const n7 = createLLNode(7, n8);
const n6 = createLLNode(6, n7);
const n5 = createLLNode(5, n6);
const n4 = createLLNode(4, n5);
const n3 = createLLNode(3, n4);
const n2 = createLLNode(2, n3);
const n1 = createLLNode(1, n2);
const n0 = createLLNode(0, n1);
n8.setNext(n8);

console.log(findLoopStart(n0));
