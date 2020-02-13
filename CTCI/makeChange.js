const coins = [25, 10, 5, 1];
const bestChangeRec = [];

const makeBestChangeDP = amount => {
  const bestChange = [0];
  for (let i = 1; i <= amount; i++) {
    let bestVal = amount + 1;
    for (let j = 0; j < coins.length; j++) {
      let minusCurrCoin = i - coins[j];
      if (minusCurrCoin >= 0) {
        bestVal = Math.min(bestVal, 1 + bestChange[minusCurrCoin]);
      }
    }
    bestChange[i] = bestVal;
  }
  return bestChange;
};

const makeBestChangeRec = amount => {};

console.log(makeBestChangeDP(50));
