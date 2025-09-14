const { buildOutOfBoundsError } = require('../utils');

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

class MaxHeap {
  heap; // use a leading zero, which makes arithmetic a little simpler. TODO -- actually, not really, and it's annoying ... just get rid of it
  size; // TODO -- do you really need size? Barely a nice-to-have?

  // this is a buildHeap
  constructor(heap = [], inPlace = false) {
    this.heap = inPlace
      ? heap
      : [0, ...heap]
    this.size = heap.length;
    if (inPlace) {
      this.heap.unshift(0);
    }

    // run on non-leaves
    for (let i = Math.floor(this.size / 2); i > 0; i--) {
      this.#heapifyDown(i);
    }
  }

  add(n) {
    this.heap.push(n);
    this.size++;
    this.#heapifyUp(this.size);
  }

  pop() {
    if (this.size < 1) {
      throw buildOutOfBoundsError();
    }

    const temp = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.heap.pop();
    this.size--;
    this.#heapifyDown(1);

    return temp;
  }

  #heapifyUp(i) {
    if (i <= 1) {
      // at the top. nothing to heapify.
      return i;
    }
    const parent = Math.floor(i / 2);
    if (this.heap[parent] < this.heap[i]) {
      swap(this.heap, i, parent);
      this.#heapifyUp(parent);
    }
  }

  #heapifyDown(i) {
    const left = 2 * i;
    const right = 2 * i + 1;
    let largest;

    if (left > this.size && right > this.size) {
      // no children. nothing to heapify.
      return;
    } else if (left > this.size) {
      largest = right;
    } else if (right > this.size) {
      largest = left;
    } else {
      largest = this.heap[right] > this.heap[left] ? right : left;
    }

    if (this.heap[i] < this.heap[largest]) {
      swap(this.heap, i, largest)
      this.#heapifyDown(largest);
    }
  }

  getHeap() {
    return this.heap.slice(1);
  }

  toTreeString() {
    if (this.heap.length === 0) return 'null';
    
    const levels = Math.floor(Math.log2(this.heap.length)) + 1;
    let result = '';
    let index = 1;
    for (let level = 0; level < levels; level++) {
      const levelSize = Math.pow(2, level);
      const levelValues = [];
      for (let i = 0; i < levelSize && index < this.heap.length; i++) {
        levelValues.push(this.heap[index]);
        index++;
      }
      const spaces = ' '.repeat(Math.pow(2, levels - level) - 1);
      result += spaces + levelValues.join(' '.repeat(Math.pow(2, levels - level + 1) - 1)) + '\n';
    }
    return result;
  }

  // no leading zero, so arithmetic is a little different
  static heapSort(arr) {
    if (arr.length === 1) return arr;

    // [2, 42, 9, 11, 48, 50]

    // first，build the heap
    for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
      MaxHeap.#heapifyDownForHeapSort(arr, i, 0, arr.length - 1);
    }

    // now that the first element is the largest, move it to a sorted partition
    let partStart = arr.length - 1;
    while (partStart !== 0) {
      swap(arr, 0, partStart);
      partStart--;
      // after the swap, must call heapify down to maintain heap-ness
      MaxHeap.#heapifyDownForHeapSort(arr, 0, 0, partStart);
    }
  }

  // TODO: very similar to #heapifyDown, should combine. It can call this. 
  // Might get annoying to deal with leading or no leading zero.
  static #heapifyDownForHeapSort(arr, i, start, end) {
    const left =  2 * i + 1;
    const right = 2 * i + 2;
    let largest;

    if (left > end && right > end) {
      // no children. nothing to heapify.
      return;
    } else if (left > end) {
      largest = right;
    } else if (right > end) {
      largest = left;
    } else {
      largest = arr[right] > arr[left] ? right : left;
    }

    if (arr[i] < arr[largest]) {
      swap(arr, i, largest)
      MaxHeap.#heapifyDownForHeapSort(arr, largest, start, end);
    }
  }
}

module.exports = {
  MaxHeap
}