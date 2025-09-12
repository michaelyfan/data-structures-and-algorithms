const { buildOutOfBoundsError } = require('../utils');

class MinHeap {
  heap; // heap is ONE-INDEXED
  size; // TODO do you really need size?

  constructor(heap = []) {
    this.heap = [0, ...heap];
    this.size = heap.length;
  }

  static buildHeap(arr) {

  }

  static heapSort(arr) {

  }

  add(n) {
    this.heap.push(n);
    this.size++;
    this.heapifyUp(this.size);
  }

  pop() {
    if (this.size < 1) {
      throw buildOutOfBoundsError();
    }

    const temp = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.heap.pop();
    this.size--;
    this.heapifyDown(1);

    return temp;
  }

  heapifyUp(i) {
    if (i <= 1) {
      // at the top. nothing to heapify.
      return i;
    }
    const parent = Math.floor(i / 2);
    if (this.heap[parent] < this.heap[i]) {
      this.#swap(i, parent);
      this.heapifyUp(parent);
    }
  }

  heapifyDown(i) {
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
      this.#swap(i, largest)
      this.heapifyDown(largest);
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

  #swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
}

module.exports = {
  MinHeap
}