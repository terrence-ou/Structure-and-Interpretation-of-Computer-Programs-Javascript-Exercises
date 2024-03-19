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
