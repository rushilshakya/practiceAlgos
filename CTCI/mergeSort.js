const mergeSort = disArray => {
  if (disArray.length < 2) return disArray;

  let mid = Math.floor(disArray.length / 2);
  let leftArray = mergeSort(disArray.slice(0, mid));
  let rightArray = mergeSort(disArray.slice(mid));
  let leftHead = 0;
  let leftTail = leftArray.length - 1;
  let rightHead = 0;
  let rightTail = rightArray.length - 1;
  let mergedArray = [];
  while (leftHead <= leftTail && rightHead <= rightTail) {
    if (leftArray[leftHead] < rightArray[rightHead]) {
      //dosomething and increment left
      mergedArray.push(leftArray[leftHead]);
      leftHead++;
    } else {
      //dosomething else and increment right
      mergedArray.push(rightArray[rightHead]);
      rightHead++;
    }
  }

  mergedArray = mergedArray
    .concat(rightArray.slice(rightHead))
    .concat(leftArray.slice(leftHead));

  return mergedArray;
};

const disArray1 = [4, 5, 1, 3, 7, 5, 9, 2, 4, 6, 0];

console.log(mergeSort(disArray1));
