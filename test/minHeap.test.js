const { MinHeap } = require('../src/heaps/minHeap');

describe('MinHeap', () => {

  let heap;

  beforeEach(() => {
    heap = new MinHeap([
      50,
      48,
      11,
      42,
      9,
      2,
    ]);
  });

  describe('add', () => {
    it('works', () => {
      heap.add(100);
      heap.add(5);
      heap.add(60);
      expect([100, 60, 50, 48, 9, 2, 11, 5, 42]).toEqual(heap.getHeap());
    })
  })

  describe('pop', () => {
    it('works', () => {
      const result = heap.pop();

      expect(50).toEqual(result);
      expect([48, 42, 11, 2, 9]).toEqual(heap.getHeap());
      expect(5).toEqual(heap.size);
    })
  })

  describe('heapfiyDown', () => {
    it('works', () => {
      heap = new MinHeap([
        2,
        48,
        50,
        42,
        9,
        11
      ]);

      heap.heapifyDown(0 + 1);
      expect(heap.getHeap()).toEqual([50, 48, 11, 42, 9, 2])
    })
  })

  describe('heapifyUp', () => {
    it('works', () => {
      heap = new MinHeap([
        50,
        48,
        11,
        42,
        9,
        2,
        47
      ]);

      heap.heapifyUp(6 + 1);
      expect(heap.getHeap()).toEqual([50, 48, 47, 42, 9, 2, 11])
    })
  })
})