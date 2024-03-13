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
  a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25,
);
console.log("2 + (b > a ? b : a) ", 2 + (b > a ? b : a));
console.log(
  "(a > b ? a : a < b ? b : -1) * (a + 1) ",
  (a > b ? a : a < b ? b : -1) * (a + 1),
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
  squareSumLargerTwo(10, 2, 3),
);

/* Please refer to the `exercise_theory.md` for 1.4 and 1.5 */

/* 1.6 */

// Alyssa's conditional function that replaces the ternary expression:
function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

// Newton's Method
function sqrt_iter(guess, x) {
  return conditional(
    is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x), x),
  );
}

function is_good_enough(guess, x) {
  return Math.abs(guess ** 2 - x) < 1e-3;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function sqrt(x) {
  return sqrt_iter(1, x);
}

console.log("\n==========Exercise 1.6==========");
console.log(
  "This function won't work because when the `conditional(a, b, c)` function been called, all three arguments will be evaluated immediately thus make the program stuck in a infinite loop",
);
// Try following and get the error
// console.log(sqrt(3));
