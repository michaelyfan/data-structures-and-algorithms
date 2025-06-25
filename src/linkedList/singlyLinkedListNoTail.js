
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

  getStart(val) {
    const newHead = new SinglyLinkedListNode(val, this.head);
    this.head = newHead;
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw buildOutOfBoundsError();
    };
    if (index === 0) {
      return this.head.data
    };
    
    let curr = this.head.next;
    let i = 1;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr.data;
  }

  getEnd() {
    return this.get(this.length - 1);
  }

  addStart(val) {
    const newHead = new SinglyLinkedListNode(val, this.head);
    this.head = newHead;
  }

  add(index, val) {
    if (index < 0 || index > this.length) {
      throw buildOutOfBoundsError();
    };

    if (index === 0) {
      this.getStart(val);
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

  addEnd(val) {
    this.add(this.length, val);
  }

  // returns the removed node
  removeStart() {
    if (this.length === 0) {
      throw buildOutOfBoundsError();
    };
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp;
  }

  // returns the removed node
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw buildOutOfBoundsError();
    };
    if (index === 0) {
      return this.removeStart();
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

  removeEnd() {
    if (this.length === 0){
      throw buildOutOfBoundsError();
    };
    return this.remove(this.length - 1);
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
  SinglyLinkedListNoTail,
  SinglyLinkedListNode
}