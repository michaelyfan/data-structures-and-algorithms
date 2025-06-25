
const { buildOutOfBoundsError } = require('../utils');

class DoublyLinkedListNode {
  data;
  next;
  prev;

  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedListNoTail {
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
      const node = new DoublyLinkedListNode(val, this.head, undefined);
      if (this.head) { // difference of doubly: handle prev
        this.head.prev = node; 
      }
      this.head = node;
      this.length++;
      return;
    }

    let i = 1;
    let curr = this.head;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    const node = new DoublyLinkedListNode(val, curr.next, curr);
    if (curr.next) { // difference of doubly: handle prev
      curr.next.prev = node;
    }
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

    // difference of doubly: removing is slightly easier. can just go to the index.
    let curr = this.head;
    let i = 0;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    const temp = curr;
    if (curr.prev) {
      curr.prev.next = curr.next;
    }
    if (curr.next) {
      curr.next.prev = curr.prev;
    }

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
    let result = 'DoublyLinkedListNoTail [\n';
    let curr = this.head;
    let idx = 0;
    while (curr != null) {
      const prevVal = curr.prev ? curr.prev.data : 'null';
      const nextVal = curr.next ? curr.next.data : 'null';
      result += `  [${idx}]: { prev: ${prevVal}, data: ${curr.data}, next: ${nextVal} }\n`;
      curr = curr.next;
      idx++;
    }
    result += ']';
    return result;
  }
}

module.exports = {
  DoublyLinkedListNoTail,
  DoublyLinkedListNode
}