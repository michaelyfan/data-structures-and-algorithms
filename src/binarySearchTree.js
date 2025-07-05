const { DoublyLinkedListWithTail } = require("./linkedList/doublyLinkedListWithTail");

class TreeNode {
  data;
  left;
  right;

  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const Traversal = Object.freeze({
  IN_ORDER: 'IN_ORDER',
  PRE_ORDER: 'PRE_ORDER',
  POST_ORDER: 'POST_ORDER',
})

class BinarySearchTree {
  head;

  /**
   * @returns boolean
   */
  contains(data) {
    return this.#containsR(this.head, data);
  }

  /**
   * @returns void
   */
  insert(data) {
    this.head = this.#insertR(this.head, data);
  }

  /**
   * @returns data
   * @throws
   */
  delete(data) {
    this.head = this.#deleteR(this.head, data);
  }

  /**
   * @returns any[]
   */
  inOrderTraversal() {
    const arr = []
    this.#traverse(this.head, Traversal.IN_ORDER, arr);
    return arr;
  }

  /**
   * @returns any[]
   */
  preOrderTraversal() {
    const arr = []
    this.#traverse(this.head, Traversal.PRE_ORDER, arr);
    return arr;
  }

  /**
   * @returns any[]
   */
  postOrderTraversal() {
    const arr = []
    this.#traverse(this.head, Traversal.POST_ORDER, arr);
    return arr;
  }

  inOrderTraversalIterative() {
    // TODO
  }

  /**
   * @returns any[]
   */
  breadthFirstTraversal(data) {
    if (!this.head) return [];

    const queue = new DoublyLinkedListWithTail(); // LL-backed queue
    queue.addEnd(this.head);
    const visited = [];
    while (queue.length !== 0) {
      const node = queue.removeStart();
      visited.push(node.data);
      if (node.left) queue.addEnd(node.left);
      if (node.right) queue.addEnd(node.right);
    }
    return visited;
  }

  // written with the assistance of AI
  toString() {
    const lines = [];
    const traverse = (node, prefix = '', isLeft = true) => {
      if (node === null) return;
      if (node.right) {
        traverse(node.right, prefix + (isLeft ? "│   " : "    "), false);
      }
      lines.push(prefix + (isLeft ? "└── " : "┌── ") + node.data);
      if (node.left) {
        traverse(node.left, prefix + (isLeft ? "    " : "│   "), true);
      }
    };
    traverse(this.head);
    return lines.join('\n');
  }

  /**
   * 
   * @param {TreeNode} node 
   * @param {Traversal} method 
   * @param {any[]} arr 
   * @returns 
   */
  #traverse(node, method, arr) {
    if (node == undefined) return;

    switch(method) {
      case Traversal.IN_ORDER:
        this.#traverse(node.left, method, arr);
        arr.push(node.data);
        this.#traverse(node.right, method, arr);
        break;
      case Traversal.POST_ORDER:
        this.#traverse(node.left, method, arr);
        this.#traverse(node.right, method, arr);
        arr.push(node.data);
        break;
      case Traversal.PRE_ORDER:
        arr.push(node.data);
        this.#traverse(node.left, method, arr);
        this.#traverse(node.right, method, arr);
        break;
    }
  }

  #insertR(node, data) {
    if (node == null) {
      return new TreeNode(data);
    }

    if (data <= node.data) {
      node.left = this.#insertR(node.left, data);
    } else {
      node.right = this.#insertR(node.right, data);
    }

    return node;
  }

  #containsR(node, data) {
    if (node == null) {
      return false;
    }

    if (node.data === data) {
      return true;
    }

    if (data < node.data) {
      return this.#containsR(node.left, data);
    } else {
      return this.#containsR(node.right, data);
    }
  }

  #deleteR(node, data) {
    if (node == null) {
      throw new Error('Data does not exist!');
    }

    if (node.data === data) {
      if (!node.right && !node.left) {
        // leaf node: simply delete it
        return undefined;
      } else if (node.right) {
        // the lowest child greater than it can take its place.
        node.data = this.#findSuccessor(node);
        
        // delete the successor's old place.
        node.right = this.#deleteR(node.right, node.data);
      } else { // node.left exists
        // the highest child lower than it also works.
        node.data = this.#findPredecessor(node);
        node.left = this.#deleteR(node.left, node.data);
      }
    } else if (data < node.data) {
      node.left = this.#deleteR(node.left, data);
    } else {
      node.right = this.#deleteR(node.right, data);
    }

    return node;
  }

  /**
   * @returns data
   */
  #findSuccessor(node) {
    let curr = node.right;
    while (curr.left != null) {
      curr = curr.left;
    }
    return curr.data;
  }

  /**
   * @returns data
   */
  #findPredecessor(node) {
    let curr = node.left;
    while (curr.right != null) {
      curr = curr.right;
    }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree,
  TreeNode
}