/* Please refer to the `exercise_02_theory.md` for 1.9 */

/* 1.10 */
function A(x, y) {
  return y === 0 ? 0 : x === 0 ? 2 * y : y === 1 ? 2 : A(x - 1, A(x, y - 1));
}

console.log("\n==========Exercise 1.10==========");
console.log("The result of A(1, 10): ", A(1, 10));
console.log("The result of A(2, 4): ", A(2, 4));
console.log("The result of A(3, 3): ", A(3, 3));
// The answers to theory questions are in exercise_02_theory.md

/* 1.11 */
//recursive method
function fr(n) {
  return n < 3 ? n : fr(n - 1) + 2 * fr(n - 2) + 3 * fr(n - 3);
}

//iterative method
function fi(n) {
  return fi_iter(2, 1, 0, n);
}
function fi_iter(a, b, c, n) {
  return n === 0 ? c : n === 1 ? b : fi_iter(a + 2 * b + 3 * c, a, b, n - 1);
}

console.log("\n==========Exercise 1.11==========");
console.time("f(n) recursive method total time: ");
console.log("result of f(20) recursive method: ", fr(20));
console.timeEnd("f(n) recursive method total time: ");
console.time("f(n) iterative method total time: ");
console.log("result of f(20) iterative method: ", fr(20));
console.timeEnd("f(n) iterative method total time: ");

/* 1.12 */
function pascalTriangle(row, col) {
  return col === 0 || col === row
    ? 1
    : pascalTriangle(row - 1, col - 1) + pascalTriangle(row - 1, col);
}

// Helper function to print out the pascal triagnle with given number of rows
function printPascalTriangle(n) {
  const totalPad = n - 1;
  for (let row = 0; row < n; row++) {
    let str = "".padStart(totalPad - row, " ");
    for (let col = 0; col < row + 1; col++) {
      str += pascalTriangle(row, col);
      str += " ";
    }
    console.log(str);
  }
}

console.log("\n==========Exercise 1.12==========");
console.log("A pasccal triangle with 5 rows:");
printPascalTriangle(5);
