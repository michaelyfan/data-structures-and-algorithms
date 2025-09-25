
const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/**
 * https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
 * 
 * @param {number[]} arr 
 * @param {number} start 
 * @param {number} end 
 * @returns number the pivot's final index
 */
const hoarePartition = (arr, start, end) => {
  // TODO: optimize pivot selection
  const pivot = end;


  let i = 0;
  let j = end - 1;

  while (i <= j) {
    while (i <= j && arr[i] <= arr[pivot]) {
      i++
    }
    while (i <= j && arr[j] > arr[pivot]) {
      j--
    }
  
    if (i > j) {
      swap(arr, i, pivot);
      return i;
    } else {
      swap(arr, i, j);
    }
  }
}


const quickSortR = (arr, start, end) => {
  if (start >= end) {
    return;
  }
  const pivot = hoarePartition(arr, start, end);
  quickSortR(arr, start, pivot - 1);
  quickSortR(arr, pivot + 1, end);
}

const quickSort = (arr) => {
  quickSortR(arr, 0, arr.length - 1);
};

export default quickSort;
