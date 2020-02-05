//this approach is based on Java like class implementation
//the other newTrie.js is exploiting JavaScript quirks
class Node {
  static NUMBER_OF_CHARS = 26;
  children = [];
  size = 0;

  getNode(char) {
    return this.children[Node.getCharIndex(char)];
  }

  setNode(char, node) {
    this.children[Node.getCharIndex(char)] = node;
  }

  add(str, index = 0) {
    this.size++;
    if (index === str.length) return;
    const current = str[index];
    // const charCode = this.getCharIndex(current)
    let child = this.getNode(current);

    if (child === undefined) {
      child = new Node();
      this.setNode(current, child);
    }
    child.add(str, index + 1);
  }

  findCount(str, index = 0) {
    if (index === str.length) return this.size;
    let child = this.getNode(str[index]);

    if (child === undefined) {
      return 0;
    }
    return child.findCount(str, index + 1);
  }

  static getCharIndex(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
}

let nNode = new Node();
nNode.add('gayle');
nNode.add('gary');
nNode.add('geera');
nNode.add('alex');
nNode.add('andy');

console.log(nNode.findCount('a'));

// console.log(Node.getCharIndex('z'))
