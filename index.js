import quickSort from "./src/sorts/quicksort.js";

const main = () => {
  const a = [3, 3, 3, 3, 4, 2];
  const b = [1, 2, 3, 4, 5, 6];
  const c = [4, 8, 1, 5, 7, 2];
  const d = [1, 1, 1, 1, 0, 2];

  quickSort(a);
  quickSort(b);
  quickSort(c);
  quickSort(d);

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

main();