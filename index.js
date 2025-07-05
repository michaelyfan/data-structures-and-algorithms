const { Trie } = require("./src/trie");
const { SinglyLinkedListNoTail } = require("./src/linkedList/singlyLinkedListNoTail");
const { BinarySearchTree } = require("./src/binarySearchTree");


const main = () => {
  const bst = new BinarySearchTree();

  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(12);
  bst.insert(18);

  console.log(bst.toString())

  console.log(bst.inOrderTraversal());
  console.log(bst.postOrderTraversal());
  console.log(bst.preOrderTraversal());
  console.log(bst.breadthFirstTraversal());
}

main();