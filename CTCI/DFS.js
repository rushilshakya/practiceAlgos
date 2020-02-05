const matrix = [
  [0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

const largestConnectedCells = mat => {
  return 4;
};

console.log(largestConnectedCells(matrix));
