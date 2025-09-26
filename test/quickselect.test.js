import quickselect from '../src/quickSelect.js';

describe('quickselect', () => {
  it('returns null for an empty array', () => {
    expect(quickselect([], 1)).toBeNull();
  });

  it('returns the single element for an array of length 1', () => {
    const arr = [42];
    expect(quickselect([...arr], 1)).toBe(42);
  });

  it('returns null when k is greater than array length', () => {
    const arr = [1, 2, 3];
    expect(quickselect([...arr], 4)).toBeNull();
  });

  it('returns the smallest element when k equals the array length', () => {
    const arr = [5, 2, 9, 1, 7];
    const expected = 1;
    expect(quickselect([...arr], arr.length)).toBe(expected);
  });

  it('finds the kth largest element for a typical case', () => {
    const arr = [7, 10, 4, 3, 20, 15];
    const k = 3; 

    expect(quickselect([...arr], k)).toBe(10);
  });

  it('works for a large shuffled array', () => {
    const n = 1000;
    const arr = Array.from({ length: n }, (_, i) => i + 1);

    // Fisher-Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    const k = 500;
    const expected = [...arr].sort((a, b) => a - b)[n - k];
    expect(quickselect([...arr], k)).toBe(expected);
  });
});
