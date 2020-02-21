var addTwoNumbers = function(l1, l2) {
  let summedNode = {};
  let currentNode = summedNode;
  while (l1 !== null && l2 !== null) {
    let carryOver = 0;
    let currTotal = l1.val + l2.val;
    if (currTotal > 9) {
      carryOver = 1;
      currTotal = 10 - currTotal;
    }
    l1 = l1.next;
    l2 = l2.next;
    let nextNode = {};
    currentNode.val = currTotal;
    currentNode.next = nextNode;
    currentNode = nextNode;
  }
};

const n1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
const n2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807
