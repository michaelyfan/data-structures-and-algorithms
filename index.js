const { Trie } = require("./src/trie");
const { SinglyLinkedListNoTail } = require("./src/linkedList/singlyLinkedListNoTail");


const main = () => {
  const linkedList = new SinglyLinkedListNoTail();
  linkedList.push(6);
  linkedList.push(78);
  linkedList.push(2);

  const x = linkedList.removeFirst();
  console.log(x)
  console.log(linkedList.toString())
}

main();