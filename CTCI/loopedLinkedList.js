const findLoopStart = linkedList => {
  let slowPtr = linkedList;
  let fastPtr = linkedList;

  while (
    slowPtr.next !== null &&
    fastPtr.next !== null &&
    fastPtr.next.next !== null
  ) {
    if (slowPtr.next === fastPtr.next.next) return slowPtr.next;
    else {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
    }
  }
  return -1;
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
n8.setNext(n4);

console.log(findLoopStart(n0));
