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
function squareSumLargerTwo(num1, num2, num3) {
  if (num2 > num1) [num1, num2] = [num2, num1];
  if (num3 >= num1) [num1, num2] = [num3, num1];
  else if (num3 >= num2) num2 = num3;
  return num1 ** 2 + num2 ** 2;
}

console.log(
  "The sum of the square of two larger numbers in [10, 2, 3]: ",
  squareSumLargerTwo(10, 2, 3)
);

/* Please refer to the `exercise_01_theory.md` for 1.4 and 1.5 */

// helper functions for 1.6 and 1.7, from the book example

function sqrtIter(guess, x) {
  return isGoodEnough(guess, x) ? guess : sqrtIter(improve(guess, x), x);
}

function isGoodEnough(guess, x) {
  return Math.abs(guess ** 2 - x) < 1e-3;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function sqrt(x) {
  return sqrtIter(1, x);
}

/* 1.6 */

// Alyssa's conditional function that replaces the ternary expression:
function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

function alyssaSqrtIter(guess, x) {
  return conditional(
    isGoodEnough(guess, x),
    guess,
    sqrtIter(improve(guess, x), x)
  );
}

function alyssaSqrt(x) {
  return alyssaSqrtIter(1, x);
}

console.log("\n==========Exercise 1.6==========");
console.log(
  "This function won't work because when the `conditional(a, b, c)` function been called, all three arguments will be evaluated immediately thus make the program stuck in a infinite loop"
);
// Try following and get the error
// console.log(alyssaSqrt(3));

/* 1.7 */
function improvedSqrtIter(guess, x, prevGuess) {
  return improvedIsGoodEnough(guess, prevGuess)
    ? guess
    : improvedSqrtIter(improve(guess, x), x, guess);
}

function improvedIsGoodEnough(guess, prevGuess) {
  return Math.abs(guess - prevGuess) < 1e-3;
}

function improvedSqrt(x) {
  return improvedSqrtIter(1, x, 0);
}

console.log("\n==========Exercise 1.7==========");
console.log("Calculate the square root of 0.0001");
console.log("old method result", sqrt(0.0001));
console.log("improved method result", improvedSqrt(0.0001));

/* 1.8 */

function cubicRootIter(guess, x, prevGuess) {
  return isCubicGoodEnough(guess, prevGuess)
    ? guess
    : cubicRootIter(improveCubicRoot(guess, x), x, guess);
}

function improveCubicRoot(guess, x) {
  return (x / guess ** 2 + 2 * guess) / 3;
}

function isCubicGoodEnough(guess, prevGuess) {
  return Math.abs(guess - prevGuess) < 1e-3;
}

function cubicRoot(x) {
  return cubicRootIter(1, x, 0);
}

console.log("\n==========Exercise 1.8==========");
console.log("The approx. cubic root of 8: ", cubicRoot(8));
console.log("The approx. cubic root of 27: ", cubicRoot(27));
