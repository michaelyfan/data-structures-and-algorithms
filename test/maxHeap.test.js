const { MaxHeap } = require('../src/heaps/maxHeap');

describe('MaxHeap', () => {

  let heap;

  beforeEach(() => {
    heap = new MaxHeap([
      50,
      48,
      11,
      42,
      9,
      2,
    ]);
  });

  describe('constructor', () => {
    it('works', () => {
      const input = [2, 42, 9, 11, 48, 50];
      const thisHeap = new MaxHeap(input);

      expect([50, 48, 9, 11, 42, 2]).toEqual(thisHeap.getHeap());
      expect([2, 42, 9, 11, 48, 50]).toEqual(input);
    })

    it('works in-place', () => {
      const input = [2, 42, 9, 11, 48, 50];
      const thisHeap = new MaxHeap(input, true);

      expect([50, 48, 9, 11, 42, 2]).toEqual(thisHeap.getHeap());
      expect([0, 50, 48, 9, 11, 42, 2]).toEqual(input);
    })

    it('works with empty edge case', () => {
      const input = [];
      const thisHeap = new MaxHeap(input);
      const thisOtherHeap = new MaxHeap(input, true);

      expect([]).toEqual(thisHeap.getHeap());
      expect([]).toEqual(thisOtherHeap.getHeap());
      expect([0]).toEqual(input);
      expect(0).toEqual(thisHeap.size);
      expect(0).toEqual(thisOtherHeap.size);

      thisHeap.add(5);
      thisHeap.add(100);
      thisHeap.add(20);
      thisOtherHeap.add(5);
      thisOtherHeap.add(100);
      thisOtherHeap.add(20);

      expect([100, 5, 20]).toEqual(thisHeap.getHeap());
      expect([100, 5, 20]).toEqual(thisOtherHeap.getHeap());
    })
  })

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

    it('works all the way to empty', () => {
      const thisHeap = new MaxHeap([]);
      thisHeap.add(5);
      thisHeap.add(100);
      thisHeap.add(20);
      thisHeap.pop();
      thisHeap.pop();
      thisHeap.pop();
      expect([]).toEqual(thisHeap.getHeap());
      expect(0).toEqual(thisHeap.size);
    })
  })

  describe('heap sort', () => {
    it('works', () => {
      const arr = [2, 42, 9, 11, 48, 50];

      MaxHeap.heapSort(arr);

      expect([2, 9, 11, 42, 48, 50]).toEqual(arr);
    });
  })
})