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

const makeBestChangeRec = amount => {
  //if the value has not been memoized, let's memoize it
  if (!bestChangeRec[amount]) {
    //base case
    if (amount < 2) {
      bestChangeRec[amount] = amount;
    } else {
      //now lets get the bestval going through all the coins
      //1. setting an arbitrary high value
      let bestVal = amount + 1;

      //2. rotating through the coins
      for (let j = 0; j < coins.length; j++) {
        //2.1 if i use the 1 current coin, then the remaining value is
        let minusCurrCoin = amount - coins[j];
        //2.2 if the remaining value >= zero,
        //then lets find the least number of required change at that value
        if (minusCurrCoin >= 0) {
          //2.3 using the current coin, the total least number of change is
          let currCoinLeastChange = 1 + makeBestChangeRec(minusCurrCoin);
          //2.4 and is this the least number of change so far for this value?
          bestVal = Math.min(bestVal, currCoinLeastChange);
        }
      }
      //3. now, lets memoize this value and return it
      bestChangeRec[amount] = bestVal;
    }
  }

  return bestChangeRec[amount];
};

const val = 50;
console.log(makeBestChangeDP(val));
console.log(makeBestChangeRec(val));
console.log(bestChangeRec);
