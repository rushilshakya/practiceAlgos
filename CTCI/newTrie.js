//this approach exploits JavaScript quirks
//the other trie.js is based on Java like class implementation

const trie = {
  count: 0,
};

const add = (string, container = trie, index = 0) => {
  // console.log(string, container, index)
  container.count++;

  if (index < string.length) {
    if (!container[string[index]]) container[string[index]] = { count: 0 };
    add(string, container[string[index]], index + 1);
  }
};

const findCount = (string, container = trie, index = 0) => {
  while (container[string[index]]) {
    container = container[string[index]];
    index++;
  }
  if (index === string.length) return container.count;
  else return 0;
};

add('gayle');
add('gain');
add('andrew');
add('and');

console.dir(trie);
console.dir(trie.g.a.y.l.e);

console.log(findCount('ga'));
console.log(findCount('l'));
