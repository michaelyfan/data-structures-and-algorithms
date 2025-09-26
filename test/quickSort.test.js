import quickSort from '../src/sorts/quicksort.js';

describe('quickSort', () => {
  it('sorts an empty array', () => {
    const arr = [];
    const expected = [...arr].sort((a, b) => a - b);
    quickSort(arr);
    expect(arr).toEqual(expected);
  });

  it('sorts an array with one element', () => {
    const arr = [42];
    const expected = [...arr].sort((a, b) => a - b);
    quickSort(arr);
    expect(arr).toEqual(expected);
  });

  it('leaves an already sorted array unchanged (ascending)', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const expected = [...arr].sort((a, b) => a - b);
    quickSort(arr);
    expect(arr).toEqual(expected);
  });

  it('sorts a reverse-sorted array (descending)', () => {
    const arr = [9, 7, 5, 3, 1, -1];
    const expected = [...arr].sort((a, b) => a - b);
    quickSort(arr);
    expect(arr).toEqual(expected);
  });

  it('sorts an array with duplicate values', () => {
    const arr = [5, 3, 8, 3, 9, 5, 1, 3];
    const expected = [...arr].sort((a, b) => a - b);
    quickSort(arr);
    expect(arr).toEqual(expected);
  });

  it('sorts an array with negative and positive numbers', () => {
    const arr = [-10, 100, 0, 5, -2, 99, -100];
    const expected = [...arr].sort((a, b) => a - b);
    quickSort(arr);
    expect(arr).toEqual(expected);
  });

  it('sorts an array of 45 elements', () => {
    const arr = [
      34, 1, 45, 23, 7, 12, 40, 19, 2, 36, 17, 28, 14, 9, 5, 30, 44, 3, 6, 21, 11, 43, 29, 15, 25,
      4, 10, 33, 18, 41, 22, 8, 26, 20, 13, 27, 24, 35, 42, 16, 39, 32, 31, 37, 38
    ];
    const expected = [...arr].sort((a, b) => a - b);
    quickSort(arr);
    expect(arr).toEqual(expected);
  });
});