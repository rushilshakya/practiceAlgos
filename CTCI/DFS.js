const matrix1 = [
  [0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

const matrix2 = [
  [0, 1, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

const validCell = (mat, currRow, currCol) => {
  if (currRow < 0 || currRow >= mat.length) return false;
  if (currCol < 0 || currCol >= mat[0].length) return false;
  return true;
};

const helperConnectedCells = (mat, currRow = 0, currCol = 0) => {
  let tot = 0;

  if (!validCell(mat, currRow, currCol)) return 0;

  if (mat[currRow][currCol] === 0) return 0;
  else if (mat[currRow][currCol] === 1) {
    tot++;
    mat[currRow][currCol] = 0;
    tot += helperConnectedCells(mat, currRow - 1, currCol - 1);
    tot += helperConnectedCells(mat, currRow - 1, currCol);
    tot += helperConnectedCells(mat, currRow - 1, currCol + 1);
    tot += helperConnectedCells(mat, currRow, currCol - 1);
    tot += helperConnectedCells(mat, currRow, currCol + 1);
    tot += helperConnectedCells(mat, currRow + 1, currCol - 1);
    tot += helperConnectedCells(mat, currRow + 1, currCol);
    tot += helperConnectedCells(mat, currRow + 1, currCol + 1);
  }
  return tot;
};

const largestConnectedCells = matrix => {
  let largest = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let currTotal = helperConnectedCells(matrix, row, col);
      if (currTotal > largest) largest = currTotal;
    }
  }
  return largest;
};

console.log(largestConnectedCells(matrix2));
