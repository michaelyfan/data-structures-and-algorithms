
const { buildOutOfBoundsError } = require('../utils');
const { SinglyLinkedListNode } = require('./singlyLinkedListNoTail');

class SinglyLinkedListWithTail {
  head;
  tail;
  length;

  constructor() {
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw buildOutOfBoundsError();
    };
    if (index === 0) {
      return this.head.data
    };

    // benefit of tail
    if (index === this.length - 1) {
      return this.tail.data;
    }

    let curr = this.head.next;
    let i = 1;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr.data;
  }

  addToStart(val) {
    const newHead = new SinglyLinkedListNode(val, this.head);
    this.head = newHead;
    this.length++;
  }

  addAt(index, val) {
    if (index < 0 || index > this.length) {
      throw buildOutOfBoundsError();
    };

    if (index === 0) {
      this.addToStart(val);
      return;
    }

    // benefit of tail
    if (index === this.length - 1) {
      this.push(val);
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

  // benefit of tail
  push(val) {
    this.tail.next = new SinglyLinkedListNode(val);
    this.tail = this.tail.next;
    this.length++;
  }

  // returns the removed node
  removeFirst() {
    if (this.length === 0) {
      throw buildOutOfBoundsError();
    };
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp;
  }

  // returns the removed node
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw buildOutOfBoundsError();
    };
    if (index === 0) {
      return this.removeFirst();
    }

    let nextIndex = 1;
    let curr = this.head;
    while (nextIndex !== index) {
      curr = curr.next;
      nextIndex++;
    }
    const temp = curr.next;
    curr.next = curr.next.next;
    this.length--;
    return temp;
  }

  // returns the removed node
  pop() {
    if (this.length === 0) {
      throw buildOutOfBoundsError();
    };
    return this.removeAt(this.length - 1);
  }

  toString() {
    let s = 'LinkedList ';

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
  SinglyLinkedListWithTail
}