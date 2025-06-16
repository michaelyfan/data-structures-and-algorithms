
class TrieNode {
  character;
  children;
  
  constructor(character, children = new Map()) {
    this.character = character;
    this.children = children;
  }
∂
  isLeaf() {
    return this.children.length === 0 || this.character === '.';
  }
}


class Trie {
  rootNode;

  constructor(rootNode = new TrieNode()) {
    this.rootNode = rootNode;
  }

  insert(str) {
    if (str.length === 0) return;

    const strToInsert = `${str}.`
    let curr = this.rootNode;
    for (let i = 0; i < strToInsert.length; i++) {
      if (!curr.children.has(strToInsert[i])) {
        curr.children.set(strToInsert[i], new TrieNode(strToInsert[i]));
      }
      curr = curr.children.get(strToInsert[i]);
    }
  }

  findLongestCommonPrefix() {
    let toReturn = '';
    let curr = this.rootNode;
    while (!curr.isLeaf() && curr.children.size === 1) {
      curr = curr.children.values().next().value;
      toReturn += curr.character;
    }

    // remove delimiter if it exists
    if (toReturn.charAt(toReturn.length - 1) === '.') {
      toReturn = toReturn.slice(toReturn, toReturn.length - 1)
    }

    return toReturn;
  }
}

const main = () => {
  const trie = new Trie();
  trie.insert("a");
  trie.insert("a");
  // console.log(trie);
  console.log(trie.findLongestCommonPrefix())
}

main();