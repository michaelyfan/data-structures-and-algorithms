
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
    // benefit of tail: getting the end is more efficient
    if (index === this.length - 1) {
      return this.tail.data;
    }

    let curr = this.head;
    let i = 0;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr.data;
  }

  getStart(val) {
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
      const node = new SinglyLinkedListNode(val, this.head);
      this.head = node;

      // difference of tail: need to update it when adding to empty list
      if (this.length === 0) {
        this.tail = node;
      }

      this.length++;
      return;
    }
    // benefit of tail: adding to the end is more efficient
    if (index === this.length) {
      const node = new SinglyLinkedListNode(val);
      this.tail.next = node;
      this.tail = node;
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
    let i = 0;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    const temp = curr.next;
    curr.next = curr.next.next;

    if (index === 0) {
      this.head = this.head.next;
    }
    // difference of tail: need to update it when removing from list
    if (index === this.length - 1) {
      if (this.length === 1) {
        this.tail = undefined;
      }
      this.tail = curr;
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
    let s = 'SinglyLinkedListWithTail ';

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