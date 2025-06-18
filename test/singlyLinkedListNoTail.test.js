const { SinglyLinkedListNoTail } = require('../src/linkedList/singlyLinkedListNoTail');
const { buildOutOfBoundsError } = require('../src/utils');

describe('SinglyLinkedListNoTail', () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedListNoTail();
  });

  test('addToStart adds elements to the front', () => {
    list.addToStart(1);
    list.addToStart(2);
    expect(list.head.data).toBe(2);
    expect(list.head.next.data).toBe(1);
  });

  test('addAt adds elements at specific index', () => {
    list.addToStart(1); // [1]
    list.addAt(1, 3);   // [1, 3]
    list.addAt(1, 2);   // [1, 2, 3]
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });

  test('get throws on out of bounds', () => {
    expect(() => list.get(0)).toThrow(buildOutOfBoundsError().message);
    list.addToStart(1);
    expect(() => list.get(1)).toThrow(buildOutOfBoundsError().message);
    expect(list.get(0)).toBe(1);
  });

  test('push adds to the end', () => {
    list.addToStart(1);
    list.addToStart(2);
    list.push(3);
    expect(list.get(2)).toBe(3);
  });

  test('removeFirst removes the first node', () => {
    list.addToStart(1);
    list.addToStart(2);
    const removed = list.removeFirst();
    expect(removed.data).toBe(2);
    expect(list.head.data).toBe(1);
  });

  test('removeAt removes node at index', () => {
    list.addToStart(1);
    list.addToStart(2);
    list.addToStart(3); // [3,2,1]
    const removed = list.removeAt(1);
    expect(removed.data).toBe(2);
    expect(list.get(0)).toBe(3);
    expect(list.get(1)).toBe(1);
  });

  test('pop removes from end', () => {
    list.addToStart(1);
    list.addToStart(2);
    list.addToStart(3); // [3,2,1]
    const removed = list.pop();
    expect(removed.data).toBe(1);
    expect(list.length).toBe(2);
  });

  test('toString returns correct string', () => {
    list.addToStart(1);
    list.addToStart(2);
    expect(list.toString()).toBe('LinkedList 2 -> 1');
  });

  test('removeFirst throws on empty', () => {
    expect(() => list.removeFirst()).toThrow(buildOutOfBoundsError().message);
  });

  test('removeAt throws on out of bounds', () => {
    expect(() => list.removeAt(0)).toThrow(buildOutOfBoundsError().message);
    list.addToStart(1);
    expect(() => list.removeAt(1)).toThrow(buildOutOfBoundsError().message);
  });

  test('pop throws on empty', () => {
    expect(() => list.pop()).toThrow(buildOutOfBoundsError().message);
  });
});