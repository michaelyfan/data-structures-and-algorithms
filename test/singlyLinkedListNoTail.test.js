const { SinglyLinkedListNoTail } = require('../src/linkedList/singlyLinkedListNoTail');
const { buildOutOfBoundsError } = require('../src/utils');

describe('SinglyLinkedListNoTail', () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedListNoTail();
  });

  test('getStart should add a node at the start', () => {
    list.getStart(10);
    expect(list.head.data).toBe(10);
    expect(list.length).toBe(1);
    list.getStart(20);
    expect(list.head.data).toBe(20);
    expect(list.length).toBe(2);
  });

  test('get should return the correct value at index, or throw if index is invalid', () => {
    list.getStart(1);
    list.getStart(2);
    list.getStart(3); // List: 3 -> 2 -> 1
    expect(list.get(0)).toBe(3);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(1);
    expect(() => list.get(-1)).toThrow(buildOutOfBoundsError());
    expect(() => list.get(3)).toThrow(buildOutOfBoundsError());
  });

  test('getEnd should return the last value', () => {
    list.getStart(1);
    list.getStart(2);
    list.getStart(3); // List: 3 -> 2 -> 1
    expect(list.getEnd()).toBe(1);
  });

  test('addStart should add a node at the start without changing length', () => {
    list.getStart(1);
    list.addStart(2);
    expect(list.head.data).toBe(2);
    expect(list.length).toBe(1); // addStart does not increment length
  });

  test('add should insert at the correct index, or throw if index is invalid', () => {
    list.getStart(1); // [1]
    list.add(1, 2);   // [1,2]
    list.add(1, 3);   // [1,3,2]
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(3);
    expect(list.get(2)).toBe(2);
    expect(list.length).toBe(3);
    expect(() => list.add(-1, 5)).toThrow(buildOutOfBoundsError());
    expect(() => list.add(4, 5)).toThrow(buildOutOfBoundsError());
  });

  test('addEnd should add a node at the end', () => {
    list.getStart(1);
    list.addEnd(2);
    list.addEnd(3);
    expect(list.get(list.length - 1)).toBe(3);
    expect(list.length).toBe(3);
  });

  test('removeStart should remove and return the first node, or throw if list is empty', () => {
    list.getStart(1);
    list.getStart(2);
    const removed = list.removeStart();
    expect(removed.data).toBe(2);
    expect(list.head.data).toBe(1);
    expect(list.length).toBe(1);
    expect(() => list.removeStart()).not.toThrow();
    expect(() => list.removeStart()).toThrow(buildOutOfBoundsError());
  });

  test('remove should remove and return the node at index, or throw if index is invalid', () => {
    list.getStart(1);
    list.getStart(2);
    list.getStart(3); // [3,2,1]
    const removed = list.remove(1);
    expect(removed.data).toBe(2);
    expect(list.get(0)).toBe(3);
    expect(list.get(1)).toBe(1);
    expect(list.length).toBe(2);
    expect(() => list.remove(-1)).toThrow(buildOutOfBoundsError());
    expect(() => list.remove(2)).toThrow(buildOutOfBoundsError());
  });

  test('removeEnd should remove and return the last node, or throw if list is empty', () => {
    list.getStart(1);
    list.getStart(2);
    list.getStart(3); // [3,2,1]
    const removed = list.removeEnd();
    expect(removed.data).toBe(1);
    expect(list.length).toBe(2);
    expect(() => {
      list.removeEnd();
      list.removeEnd();
      list.removeEnd();
    }).toThrow(buildOutOfBoundsError());
  });

  test('toString should return a string representation of the list', () => {
    expect(list.toString()).toBe('LinkedList ');
    list.getStart(1);
    expect(list.toString()).toBe('LinkedList 1');
    list.getStart(2);
    expect(list.toString()).toBe('LinkedList 2 -> 1');
    list.getStart(3);
    expect(list.toString()).toBe('LinkedList 3 -> 2 -> 1');
  });
});