import { hoarePartition } from "./sorts/quicksort.js";

/**
 * quickselect specializes in finding the kth largest element in an array
 */
const quickselect = (arr, k) => {
  if (arr.length === 0) return null;
  if (k > arr.length) return null;

  return quickselectR(arr, k, 0, arr.length - 1);
}

const quickselectR = (arr, k, start, end) => {
  if (start === end) {
    return arr[start];
  }

  const target = arr.length - k; // if the array were sorted, this is where the kth largest element would g
  const pivot = hoarePartition(arr, start, end);
  if (pivot === target) {
    return arr[pivot];
  } else if (pivot < target) {
    return quickselectR(arr, k, pivot + 1, end);
  } else {
    return quickselectR(arr, k, start, pivot - 1);
  }
}

export default quickselect;