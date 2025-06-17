const { SinglyLinkedList, SinglyLinkedListNode } = require('../src/linkedList/singlyLinkedListNoTail');

describe('SinglyLinkedList', () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  test('get returns the value at the given index or undefined if out of bounds', () => {
    list.push('a');
    list.push('b');
    list.push('c');
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('c');
    expect(list.get(-1)).toBeUndefined();
    expect(list.get(3)).toBeUndefined();
    const emptyList = new SinglyLinkedList();
    expect(emptyList.get(0)).toBeUndefined();
  });

  test('push adds elements to the list', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.length).toBe(3);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
  });

  test('pop removes and returns the last node', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    const removed = list.pop();
    expect(removed.data).toBe(3);
    expect(list.length).toBe(2);
    expect(list.toString()).toBe('LinkedList 1 -> 2');
  });

  test('pop returns undefined on empty list', () => {
    expect(list.pop()).toBeUndefined();
  });

  test('removeFirst removes and returns the head node', () => {
    list.push(10);
    list.push(20);
    const removed = list.removeFirst();
    expect(removed.data).toBe(10);
    expect(list.length).toBe(1);
    expect(list.head.data).toBe(20);
  });

  test('removeFirst returns undefined on empty list', () => {
    expect(list.removeFirst()).toBeUndefined();
  });

  test('removeAt removes and returns the node at given index', () => {
    list.push('a');
    list.push('b');
    list.push('c');
    const removed = list.removeAt(1);
    expect(removed.data).toBe('b');
    expect(list.length).toBe(2);
    expect(list.toString()).toBe('LinkedList a -> c');
  });

  test('removeAt returns undefined for out-of-bounds index', () => {
    list.push(1);
    expect(list.removeAt(-1)).toBeUndefined();
    expect(list.removeAt(2)).toBeUndefined();
  });

  test('toString returns correct string representation', () => {
    expect(list.toString()).toBe('LinkedList ');
    list.push(5);
    expect(list.toString()).toBe('LinkedList 5');
    list.push(6);
    expect(list.toString()).toBe('LinkedList 5 -> 6');
  });

})