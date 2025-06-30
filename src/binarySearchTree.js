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

  printInOrderTraversal() {
    this.#traverse(this.head, Traversal.IN_ORDER);
  }

  printPreOrderTraversal() {
    this.#traverse(this.head, Traversal.PRE_ORDER);
  }

  printPostOrderTraversal() {
    this.#traverse(this.head, Traversal.POST_ORDER);
  }

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
   * @param {TreeNode} node 
   * @param {method} method 
   * #
   */
  #traverse(node, method) {
    if (node == undefined) return;

    switch(method) {
      case Traversal.IN_ORDER:
        this.#traverse(node.left, method);
        console.log(node.data);
        this.#traverse(node.right, method);
        break;
      case Traversal.POST_ORDER:
        this.#traverse(node.left, method);
        this.#traverse(node.right, method);
        console.log(node.data);
        break;
      case Traversal.PRE_ORDER:
        console.log(node.data);
        this.#traverse(node.left, method);
        this.#traverse(node.right, method);
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