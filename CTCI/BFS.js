const createNode = val => {
  const node = {
    val: val,
    neighbors: [],
    putNeighbors: (...nebs) => node.neighbors.push(...nebs),
  };
  return node;
};

const findDistance = (n1, n2) => {
  let dist = 0;
  if (n1 === n2) return dist;

  let next = [];
  next.push(...n1.neighbors);
  let currLength = next.length;
  dist++;
  const visited = new Set();

  visited.add(n1);

  while (next.length > 0) {
    let currNode = next.shift();
    currLength--;
    if (currNode === n2) return dist;
    if (!visited.has(currNode)) {
      visited.add(currNode);
      next.push(...currNode.neighbors);
    }
    if (currLength === 0) {
      currLength = next.length;
      dist++;
    }
  }

  return -1;
};

const zero = createNode(0);
const one = createNode(1);
const two = createNode(2);
const three = createNode(3);
const four = createNode(4);
const five = createNode(5);
const six = createNode(6);
const seven = createNode(7);
const eight = createNode(8);

zero.putNeighbors(three, five);
one.putNeighbors(two, three);
two.putNeighbors(one);
three.putNeighbors(zero, one, four, six);
four.putNeighbors(three, five);
five.putNeighbors(zero, four);
six.putNeighbors(three);
seven.putNeighbors(eight);
eight.putNeighbors(seven);

console.log(findDistance(two, four));
