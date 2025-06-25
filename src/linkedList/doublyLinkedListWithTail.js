
const { buildOutOfBoundsError } = require('../utils');
const { DoublyLinkedListNode } = require('./doublyLinkedListNoTail');

class DoublyLinkedListWithTail {
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

    // benefit of doubly with tail: if the index is in the second half of the linked list,
    // start from end and work backwards to halve the problem space.
    const backwards = index >= Math.floor(this.length / 2);
    
    let i = backwards ? this.length - 1 : 0;
    let curr = backwards ? this.tail : this.head;
    while (i !== index) {
      if (backwards) {
        curr = curr.prev;
        i--;
      } else {
        curr = curr.next;
        i++;
      }
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
    if (this.length === 0) {
      const node = new DoublyLinkedListNode(val)
      this.head = node;
      this.tail = node;
    } else if (index === 0) {
      const node = new DoublyLinkedListNode(val, this.head)
      this.head = node;
    } else if (index === this.length) {
      // benefit of tail: adding to the end is more efficient
      const node = new DoublyLinkedListNode(val, undefined, this.tail);
      this.tail.next = node;
      this.tail = node;
    } else {
      // benefit of doubly with tail: if the index is in the second half of the linked list,
      // start from end and work backwards to halve the problem space.
      const backwards = index >= Math.floor(this.length / 2);

      let i = backwards ? this.length - 1 : 0;
      let curr = backwards ? this.tail : this.head;
      while (i !== index) {
        if (backwards) {
          curr = curr.prev;
          i--;
        } else {
          curr = curr.next;
          i++;
        }
      }
      const node = new DoublyLinkedListNode(val, curr, curr.prev);
      node.prev.next = node;
      node.next.prev = node;
    }
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
    // benefit of doubly with tail: if the index is in the second half of the linked list,
    // start from end and work backwards to halve the problem space.
    const backwards = index >= Math.floor(this.length / 2);
    let i = backwards ? this.length - 1 : 0;
    let curr = backwards ? this.tail : this.head;
    while (i !== index) {
      if (backwards) {
        curr = curr.prev;
        i--;
      } else {
        curr = curr.next;
        i++;
      }
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
    // difference of tail: need to update it when removing from list
    if (index === this.length - 1) {
      this.tail = this.tail.prev;
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
    let result = 'DoublyLinkedListWithTail [\n';
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
  DoublyLinkedListWithTail
}