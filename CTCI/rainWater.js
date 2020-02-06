/* eslint-disable complexity */

const totalVol = roof => {
  let leftPointer = 0;
  let maxLeft = roof[leftPointer];
  let rightPointer = roof.length - 1;
  let maxRight = roof[rightPointer];
  let volume = 0;

  while (leftPointer < rightPointer) {
    if (roof[leftPointer] < roof[rightPointer]) {
      let currVal = roof[leftPointer];
      let currVolume = maxLeft - currVal;
      volume += currVolume > 0 ? currVolume : 0;
      maxLeft = maxLeft > currVal ? maxLeft : currVal;
      leftPointer++;
    } else {
      let currVal = roof[rightPointer];
      let currVolume = maxRight - currVal;
      volume += currVolume > 0 ? currVolume : 0;
      maxRight = maxRight > currVal ? maxRight : currVal;
      rightPointer--;
    }
  }
  return volume;
};

// vol = 6
const roof1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(totalVol(roof1));

// vol = 7
const a = [0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1];
console.log('collection device "a" can hold', totalVol(a));

// vol = 6
const b = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log('collection device "b" can hold', totalVol(b));

// // vol = 12
const c = [0, 3, 0, 1, 0, 0, 0, 1, 0, 2];
console.log('collection device "c" can hold', totalVol(c));

// vol = 8
const d = [0, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1];
console.log('collection device "d" can hold', totalVol(d));

// vol = 38
const e = [0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2];
console.log('collection device "e" can hold', totalVol(e));
