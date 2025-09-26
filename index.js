import quickselect from "./src/quickselect.js";

const main = () => {
  const arr = [7, 10, 4, 3, 20, 15];
  const k = 3;

  quickselect([...arr], k) 
}

main();