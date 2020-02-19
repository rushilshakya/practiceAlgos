const getBlocksAtHeight = (blocks, level) => {
  const heightIndices = [];
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] >= level) heightIndices.push(i);
  }
  return heightIndices;
};

const getVolAtThisHeight = indices => {
  let vol = 0;
  if (indices.length <= 1) return vol;
  for (let i = 0; i < indices.length - 1; i++) {
    vol += indices[i + 1] - (indices[i] + 1);
  }
  return vol;
};

const rainWaterNaive = blocks => {
  const peak = Math.max(...blocks);
  let vol = 0;
  for (let height = peak; height > 0; height--) {
    let blocksAtThisHeight = getBlocksAtHeight(blocks, height);
    vol += getVolAtThisHeight(blocksAtThisHeight);
  }
  return vol;
};

const rainWaterRecursive = (blocks, height = Math.max(...blocks)) => {
  if (height < 1) return 0;
  let previousBlock;
  let vol = 0;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] >= height) {
      if (previousBlock) vol += i - (previousBlock + 1);
      previousBlock = i;
    }
  }

  return vol + rainWaterRecursive(blocks, height - 1);
};

const rainWaterRecursiveReduce = (blocks, height = Math.max(...blocks)) => {
  if (height < 1) return 0;
  let previousBlock;
  let vol = 0;

  vol = blocks.reduce((sum, block, idx) => {
    if (block >= height) {
      if (previousBlock) sum += idx - (previousBlock + 1);
      previousBlock = idx;
    }
    return sum;
  }, 0);

  return vol + rainWaterRecursiveReduce(blocks, height - 1);
};

const rainWaterOptimized = blocks => {
  const rightMaxes = [];
  let rightMax = 0;
  let sum = 0;

  for (let i = blocks.length - 1; i >= 0; i--) {
    rightMax = rightMax > blocks[i] ? rightMax : blocks[i];
    rightMaxes[i] = rightMax;
  }

  // console.log(rightMaxes);

  let leftMax = 0;
  for (let i = 0; i < blocks.length; i++) {
    leftMax = leftMax > blocks[i] ? leftMax : blocks[i];
    sum += Math.min(leftMax, rightMaxes[i]) - blocks[i];
  }

  return sum;
};

const totalVol = someRoof => {
  // return rainWaterNaive(someRoof);
  // return rainWaterRecursive(someRoof);
  // return rainWaterRecursiveReduce(someRoof);
  return rainWaterOptimized(someRoof);
};
// vol = 7
const a = [0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1];
console.log('collection device "a" can hold', totalVol(a));

// vol = 6
const b = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log('collection device "b" can hold', totalVol(b));

// vol = 12
const c = [0, 3, 0, 1, 0, 0, 0, 1, 0, 2];
console.log('collection device "c" can hold', totalVol(c));

// vol = 8
const d = [0, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1];
console.log('collection device "d" can hold', totalVol(d));

// vol = 38
const e = [0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2];
console.log('collection device "e" can hold', totalVol(e));
