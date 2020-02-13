const swap = (array, i1, i2) => {
  let temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;
};

const sortByBubble = disArray => {
  for (let i = disArray.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (disArray[j] > disArray[j + 1]) swap(disArray, j, j + 1);
    }
  }
  return disArray;
};

const disArray1 = [10, 5, 1, 3, 7, 5, 9, 2, 4, 6, 0];

console.log(sortByBubble(disArray1));
