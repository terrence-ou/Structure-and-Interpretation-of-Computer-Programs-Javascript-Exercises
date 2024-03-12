/* 1.1 */
console.log("\n==========Exercise 1.1==========");
console.log("10: ", 10);
console.log("5 + 3 + 4: ", 5 + 3 + 4);
console.log("9 - 1: ", 9 - 1);
console.log("6 / 2: ", 6 / 2);
console.log("2 * 4 + (4 - 6): ", 2 * 4 + (4 - 6));

const a = 3;
const b = a + 1;
console.log("const a = 3");
console.log("const b = a + 1: ", b);
console.log("a + b + a * b: ", a + b + a * b);
console.log("a === b: ", a === b);
console.log("b > a && b < a * b ? b : a ", b > a && b < a * b ? b : a);
console.log(
  "a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25",
  a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25
);
console.log("2 + (b > a ? b : a) ", 2 + (b > a ? b : a));
console.log(
  "(a > b ? a : a < b ? b : -1) * (a + 1) ",
  (a > b ? a : a < b ? b : -1) * (a + 1)
);

/* 1.2 */
console.log("\n==========Exercise 1.2==========");
function eval() {
  return (5 + 4 + (2 - (3 - (6 + 4 / 5)))) / (3 * (6 - 2) * (2 - 7));
}
console.log("Evaluation result: ", eval().toFixed(4));

/* 1.3 */
console.log("\n==========Exercise 1.3==========");
