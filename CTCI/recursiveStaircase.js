/*give n stairs
and given a person can just 1, 2, or 3 steps at a time
how many paths does a person have up the stairs?
*/

let memo = {};

const recursiveStairCase = stairs => {
  if (stairs === 0) return 1;
  if (stairs < 0) return 0;
  if (!memo[stairs])
    memo[stairs] =
      recursiveStairCase(stairs - 1) +
      recursiveStairCase(stairs - 2) +
      recursiveStairCase(stairs - 3);

  return memo[stairs];
};

const dynamicStairCase = stairs => {
  let dynStairs = [];
  dynStairs[0] = 1;
  dynStairs[1] = 1;
  dynStairs[2] = 2;

  // if (stairs < 3) return dynStairs[stairs];

  for (let i = 3; i <= stairs; i++) {
    dynStairs[i] = dynStairs[i - 3] + dynStairs[i - 2] + dynStairs[i - 1];
    //you can same some space by only storing the last 3 values
  }

  return dynStairs[stairs];
};

const stairs1 = 10;

console.log(recursiveStairCase(stairs1));
console.log(dynamicStairCase(stairs1));
