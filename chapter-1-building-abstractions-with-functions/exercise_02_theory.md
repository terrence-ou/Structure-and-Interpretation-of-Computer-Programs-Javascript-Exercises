## Exercise 1.9

<img src="./images/exercise_01_09.jpg" width="80%">

## Exercise 1.10

function:

```{javascript}
function f(n) {
  return A(0, n);
}
```
The math expression of `f(n)` is: $2n$

```{javascript}
function g(n) {
  return A(1, n);
}
```
Expansion:
```
A(1, n)
A(0, A(1, n - 1)) = 2 * A(1, n - 1)
2 * A(0, A(1, n - 2)) = 2 * 2 * A(1, n - 2)
...
2 * 2 * 2 * 2 * ... * A(1, 0) = 2 * 2 * 2 * 2 * ... * 2

```

Therefore, the math expression of `g(n)` is: $2^n$

```{javascript}
function h(n) {
  return A(2, n);
}
```
Expansion:
```
A(2, n)
A(1, A(2, n - 1)) = 2 ** (A(2, n - 1))
2 ** 2 * (A(1, n - 2)) = 2 ** (2 ** A(2, n - 2))
...
2 ** (2 ** (2 ** (2 ** (...** (2 * 0)...)))) 
```
Therefore, the math expression of `h(n)` is: $^{(n-1)}2 = 2 ^{2^{2^{\cdot ^{\cdot ^{2}}}}}$

```{javascript}
function k(n) {
  return 5 * n * n;
}
```
The math expression of `k(n)` is: $5n^2$