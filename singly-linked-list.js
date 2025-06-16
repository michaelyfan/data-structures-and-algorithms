
class LinkedListNode() {
  data;
  next;
  
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  // todo finish
  head = new LinkedListNode();

  constructor(head) {
    this.head = head;
  }

  push(val) {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.val = new LinkedListNode(val)
  }

  pop() {
    let curr = this.head;

  }

  removeAt(index) {

  }

  toString() {
    s = 'LinkedList ';
    
    let curr = this.head;
    while (curr != null) {
      s += `${curr.val} -> `
    }

    return s.substring(0, s.length - 3);
  }
}