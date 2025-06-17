const { Trie } = require("./src/trie");
const { SinglyLinkedList } = require("./src/singlyLinkedList");


const main = () => {
  const linkedList = new SinglyLinkedList();
  linkedList.push(6);
  linkedList.push(78);
  linkedList.push(2);

  const x = linkedList.removeFirst();
  console.log(x)
  console.log(linkedList.toString())
}

main();