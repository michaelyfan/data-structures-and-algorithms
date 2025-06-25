
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
      const newHead = new SinglyLinkedListNode(val, this.head);
      this.head = newHead;

      // difference of tail: need to update it when adding to empty list
      if (this.length === 0) {
        this.tail = newHead;
      }

      this.length++;
      return;
    }
    // benefit of tail: adding to the end is more efficient
    if (index === this.length) {
      const newTail = new SinglyLinkedListNode(val);
      this.tail.next = newTail;
      this.tail = newTail;
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
    if (index === 0) {
      const temp = this.head;
      this.head = this.head.next;
      // difference of tail: need to update it when removing from length-1 list
      if (this.length === 1) {
        this.tail = undefined;
      }
      this.length--;
      return temp.data;
    }

    let nextIndex = 1;
    let curr = this.head;
    while (nextIndex !== index) {
      curr = curr.next;
      nextIndex++;
    }
    const temp = curr.next;
    curr.next = curr.next.next;
    // difference of tail: need to update it when removing from end of list
    if (index === this.length - 1) {
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