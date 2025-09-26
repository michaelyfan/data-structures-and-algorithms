
const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const medianOfThree = (arr, start, end) => {
  const median = Math.floor((start + end) / 2);
  const a = arr[start];
  const b = arr[median];
  const c = arr[end];

  // probably naive
  if (a >= b && a >= c) {
    return b > c ? median : end;
  } else if (b >= a && b >= c) {
    return a > c ? start : end;
  } else {
    return a > b ? start : median;
  }
}

/**
 * https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
 * 
 * @param {number[]} arr 
 * @param {number} start 
 * @param {number} end 
 * @returns number the pivot's final index
 */
export const hoarePartition = (arr, start, end) => {
  // usually we just pick the end as the pivot
  // side effect is this causes worst-case time on sorted arrays
  // so use the "median of threes" pivot approach
  const pivot = medianOfThree(arr, start, end);
  swap(arr, pivot, end);

  let i = 0;
  let j = end - 1;

  while (i <= j) {
    while (i <= j && arr[i] <= arr[end]) {
      i++
    }
    while (i <= j && arr[j] > arr[end]) {
      j--
    }
  
    if (i > j) {
      swap(arr, i, end);
      return i;
    } else {
      swap(arr, i, j);
    }
  }
}


const quicksortR = (arr, start, end) => {
  if (start >= end) {
    return;
  }
  const pivot = hoarePartition(arr, start, end);
  quicksortR(arr, start, pivot - 1);
  quicksortR(arr, pivot + 1, end);
}

const quicksort = (arr) => {
  quicksortR(arr, 0, arr.length - 1);
};

export default quicksort;
