// 1.1.7 Example: Square Roots by Newton's Method
function sqrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
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

console.log(sqrt(0.0001));
console.log(sqrt(79_012_329_876_544));

// 1.2.2 Example: Counting changes
function countChanges(amount) {
  return cc(amount, 5);
}

function cc(amount, kindsOfCoins) {
  return amount === 0
    ? 1
    : amount < 0 || kindsOfCoins === 0
      ? 0
      : cc(amount, kindsOfCoins - 1) +
        cc(amount - firstDenomination(kindsOfCoins), kindsOfCoins);
}

function firstDenomination(kindsOfCoins) {
  return kindsOfCoins === 1
    ? 1
    : kindsOfCoins === 2
      ? 5
      : kindsOfCoins === 3
        ? 10
        : kindsOfCoins === 4
          ? 25
          : kindsOfCoins === 5
            ? 50
            : 0;
}

console.log(countChanges(100));
