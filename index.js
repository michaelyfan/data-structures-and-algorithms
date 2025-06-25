const { Trie } = require("./src/trie");
const { SinglyLinkedListNoTail } = require("./src/linkedList/singlyLinkedListNoTail");


const main = () => {
  const linkedList = new SinglyLinkedListNoTail();
  linkedList.addEnd(6);
  linkedList.addEnd(78);
  linkedList.addEnd(2);

  const x = linkedList.removeStart();
  console.log(x)
  console.log(linkedList.toString())
}

main();