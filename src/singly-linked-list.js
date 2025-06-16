
class LinkedListNode() {
  data;
  next;
  
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// features: length and tail
// TODO finish -- should support emptiness
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
    // there must always be a head
    if (this.head.next == undefined) {
      return;
    }

    let curr = this.head;
    while (this.head.)

  }

  removeAt(index) {

  }

  toString() {
    s = 'LinkedList ';
    
    let curr = this.head;
    while (curr != null) {
      s += `${curr.val}`
      if (curr.next != null) {
        toReturn += ' -> '
      }
    }

    return s.substring(0, s.length - 3);
  }
}