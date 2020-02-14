const coins = [1, 5, 10, 25];

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
  return allCombos;
};

const val = 10;
console.log(coinCombosDyn(val));
// console.log(makeBestChangeRec(val));
// console.log(bestChangeRec);
