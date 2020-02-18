//given a set of coin changes, and a total amount
//how many ways can the changes be given to amount to the total?

const coins = [1, 5, 10, 25];

const recMemo = {};

const coinCombosRec = (val, index = 0) => {
  if (val === 0) return 1;
  if (index > coins.length - 1) return 0;

  let amountWithCoin = 0;
  let ways = 0;

  while (amountWithCoin <= val) {
    let remaining = val - amountWithCoin;
    let nxtIdx = index + 1;
    if (!recMemo[remaining]) recMemo[remaining] = {};
    if (!recMemo[remaining][nxtIdx]) {
      recMemo[remaining][nxtIdx] = coinCombosRec(remaining, nxtIdx);
    }
    ways += recMemo[remaining][nxtIdx];
    // ways += coinCombosRec(remaining, nxtIdx);
    amountWithCoin += coins[index];
  }

  return ways;
};

const coinCombosDynOld = val => {
  let allCombos = {
    0: {},
  };
  for (let i = 1; i <= val; i++) {
    //at the current val, lets go through all the coins
    let combos = 0;
    for (let j = 0; j < coins.length; j++) {
      //to look at the combos minus this coin
      let minusCoin = i - coins[j];
      //if the remaining val is more than equal to one
      //then add that to our running count
      if (minusCoin >= 0) {
        combos += allCombos[minusCoin];
      }
    }
    //now lets populate all combos for this val
    allCombos[i] = combos;
  }
  return allCombos;
};

const coinCombosDyn = val => {
  let allCombos = {
    0: {},
  };
  for (let i = 1; i <= val; i++) {
    //at the current val, lets go through all the coins
    let combos = 0;
    for (let j = 0; j < coins.length; j++) {
      //to look at the combos minus this coin
      let minusCoin = i - coins[j];
      //if the remaining val is more than equal to one
      //then add that to our running count
      if (minusCoin >= 0) {
        combos += allCombos[minusCoin];
      }
    }
    //now lets populate all combos for this val
    allCombos[i] = combos;
  }
  return allCombos[val];
};

const val = 10;
// console.log(coinCombosDyn(val));
console.log(coinCombosRec(val));
// console.log(recMemo);
// console.log(makeBestChangeRec(val));
// console.log(bestChangeRec);
