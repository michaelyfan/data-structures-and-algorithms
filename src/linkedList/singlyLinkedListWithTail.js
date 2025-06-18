
class SinglyLinkedListWithTailNode {
  data;
  next;

  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedListWithTail {
  head;
  length;

  constructor() {
    this.length = 0;
  }

  // returns undefined if index is OoB
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let curr = this.head;
    let i = 0;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr.data;
  }

  push(val) {
    if (this.head == undefined) {
      this.head = new SinglyLinkedListWithTailNode(val);
    } else {
      let curr = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = new SinglyLinkedListWithTailNode(val)
    }

    this.length++;
  }

  // returns the removed node, or undefined if linked list is empty
  pop() {
    if (this.head == undefined) return undefined;
    return this.removeAt(this.length - 1);
  }

  // returns the removed node, or undefined if linked list is empty
  removeFirst() {
    if (this.length === 0) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp;
  }

  // returns the removed node, or undefined if index is OoB
  removeAt(index) {
    if (index < 0 || index >= this.length) return undefined;
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
  SinglyLinkedListWithTail,
  SinglyLinkedListWithTailNode
}