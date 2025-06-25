
const { buildOutOfBoundsError } = require('../utils');

class SinglyLinkedListNode {
  data;
  next;
  
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedListNoTail {
  head;
  length;

  constructor() {
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw buildOutOfBoundsError();
    };
    
    let curr = this.head;
    let i = 0;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr.data;
  }

  getStart() {
    return this.get(0);
  }

  getEnd() {
    return this.get(this.length - 1);
  }

  add(index, val) {
    if (index < 0 || index > this.length) {
      throw buildOutOfBoundsError();
    };

    if (index === 0) {
      const newHead = new SinglyLinkedListNode(val, this.head);
      this.head = newHead;
      this.length++;
      return;
    }

    let i = 1;
    let curr = this.head;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    const node = new SinglyLinkedListNode(val, curr.next);
    curr.next = node;
    this.length++;
  }

  addStart(val) {
    this.add(0, val);
  }

  addEnd(val) {
    this.add(this.length, val);
  }

  // returns the removed value
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw buildOutOfBoundsError();
    };

    // using a placeholder node to begin iteration
    let curr = new SinglyLinkedListNode(null, this.head);
    let nextIndex = 0;
    while (nextIndex !== index) {
      curr = curr.next;
      nextIndex++;
    }
    const temp = curr.next;
    curr.next = curr.next.next;

    if (index === 0) {
      this.head = this.head.next;
    }

    this.length--;
    return temp.data;
  }

  removeStart() {
    return this.remove(0);
  }

  removeEnd() {
    return this.remove(this.length - 1);
  }

  toString() {
    let s = 'SinglyLinkedListNoTail ';
    
    let curr = this.head;
    while (curr != null) {
      s += `${curr.data}`
      if (curr.next != null) {
        s += ' -> '
      }
      curr = curr.next
    }

    return s;
  }
}

module.exports = {
  SinglyLinkedListNoTail,
  SinglyLinkedListNode
}