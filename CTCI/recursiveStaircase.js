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

console.log(recursiveStairCase(10));
