function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

const memo = {};
function fibMemo(n) {
  if (n === 0) {
    memo[n] = 0;
    return memo[n];
  }
  if (n === 1) {
    memo[n] = 1;
    return memo[n];
  }

  if (!memo[n]) {
    memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
  }

  return memo[n];
}

const memoDyn = [];
function fibDyn(n) {
  memoDyn[0] = 0;
  memoDyn[1] = 1;

  let currFib = 2;

  while (currFib < n) {
    memoDyn[currFib] = memoDyn[currFib - 2] + memoDyn[currFib - 1];
    currFib++;
  }

  return memoDyn[n - 1] + memoDyn[n - 2];
}

const num = 10;

console.log(fib(num));
console.log(fibMemo(num));
console.log(memo);
// console.log(fibDyn(num));
// console.log(memoDyn);
