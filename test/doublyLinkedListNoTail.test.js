const { DoublyLinkedListNoTail } = require('../src/linkedList/doublyLinkedListNoTail');
const { buildOutOfBoundsError } = require('../src/utils');

describe('DoublyLinkedListNoTail', () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedListNoTail();
  });

  test('get gets value at index or throws if out of bounds', () => {
    list.addEnd(10);
    list.addEnd(20);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(() => list.get(-1)).toThrow();
    expect(() => list.get(2)).toThrow();
  });

  test('getStart returns first value or throws if list is empty', () => {
    expect(() => list.getStart()).toThrow();
    list.addEnd(5);
    expect(list.getStart()).toBe(5);
    list.addStart(1);
    expect(list.getStart()).toBe(1);
  });

  test('getEnd returns last value or throws if list is empty', () => {
    expect(() => list.getEnd()).toThrow();
    list.addEnd(7);
    expect(list.getEnd()).toBe(7);
    list.addEnd(9);
    expect(list.getEnd()).toBe(9);
  });

  test('add inserts at index or throws if out of bounds', () => {
    expect(list.length).toBe(0);
    expect(() => list.add(1, 100)).toThrow();
    list.add(0, 1);
    expect(list.get(0)).toBe(1);
    list.add(1, 2);
    expect(list.get(1)).toBe(2);
    list.add(1, 3);
    expect(list.get(1)).toBe(3);
    expect(list.get(2)).toBe(2);
    expect(list.length).toBe(3);
    expect(() => list.add(-1, 5)).toThrow();
    expect(() => list.add(4, 6)).toThrow();
  });

  test('addStart inserts at start or throws if out of bounds', () => {
    list.addStart(10);
    expect(list.getStart()).toBe(10);
    list.addStart(20);
    expect(list.getStart()).toBe(20);
    expect(list.length).toBe(2);
  });

  test('addEnd inserts at end or throws if out of bounds', () => {
    list.addEnd(30);
    expect(list.getEnd()).toBe(30);
    list.addEnd(40);
    expect(list.getEnd()).toBe(40);
    expect(list.length).toBe(2);
  });

  test('remove removes at index or throws if out of bounds', () => {
    list.addEnd(1);
    list.addEnd(2);
    list.addEnd(3);
    expect(list.length).toBe(3);
    expect(list.remove(1)).toBe(2);
    expect(list.get(1)).toBe(3);
    expect(list.length).toBe(2);
    expect(() => list.remove(2)).toThrow();
    expect(() => list.remove(-1)).toThrow();
  });

  test('removeStart removes first element or throws if list is empty', () => {
    expect(() => list.removeStart()).toThrow();
    list.addEnd(5);
    list.addEnd(6);
    expect(list.length).toBe(2);
    expect(list.removeStart()).toBe(5);
    expect(list.length).toBe(1);
    expect(list.getStart()).toBe(6);
  });

  test('removeEnd removes last element or throws if list is empty', () => {
    expect(() => list.removeEnd()).toThrow();
    list.addEnd(8);
    list.addEnd(9);
    expect(list.length).toBe(2);
    expect(list.removeEnd()).toBe(9);
    expect(list.getEnd()).toBe(8);
    expect(list.length).toBe(1);
  });
});