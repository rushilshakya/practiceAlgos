const quickSort = (disArray, start = 0, end = disArray.length - 1) => {
  // console.log('starting ', disArray, start, end);
  let arrLn = end - start;
  if (arrLn > 0) {
    let mid = start + Math.floor(Math.random() * Math.floor(arrLn));
    let midVal = disArray[mid];
    let lowerPtr = start;
    let higherPtr = end;

    while (lowerPtr < higherPtr) {
      while (disArray[lowerPtr] < midVal && lowerPtr < higherPtr) lowerPtr++;
      while (disArray[higherPtr] >= midVal && higherPtr > lowerPtr) higherPtr--;
      if (lowerPtr !== higherPtr) {
        let temp = disArray[lowerPtr];
        disArray[lowerPtr] = disArray[higherPtr];
        disArray[higherPtr] = temp;
      } else {
        break;
      }
    }
    // console.log('ending ', disArray, start, higherPtr, end);
    quickSort(disArray, start, lowerPtr - 1);
    quickSort(disArray, higherPtr, end);
  }
};

const disArray1 = [4, 5, 1, 3, 7, 5, 9, 2, 4, 6, 0];

quickSort(disArray1);
console.log(disArray1);
