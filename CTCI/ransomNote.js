function canWriteRansom(magazine, note) {
  const magHash = {};
  for (let i = 0; i < magazine.length; i++) {
    magHash[magazine[i]] =
      magHash[magazine[i]] == true ? magHash[magazine[i]] + 1 : 1;
  }

  // console.log(magHash);
  for (let j = 0; j < note.length; j++) {
    magHash[note[j]] = magHash[note[j]] > 0 ? magHash[note[j]] - 1 : -1;
    if (magHash[note[j]] < 0) return false;
  }
  return true;
}

console.log(
  canWriteRansom(
    ['hello', 'world', 'buddy', 'worl'],
    ['hello', 'world', 'world']
  )
);
