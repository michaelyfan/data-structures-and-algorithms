const { Trie } = require("./src/trie");


const main = () => {
  const trie = new Trie()
  trie.add("a");
  trie.add("a");
  // console.log(trie);
  console.log(trie.longestCommonPrefix())
}

main();