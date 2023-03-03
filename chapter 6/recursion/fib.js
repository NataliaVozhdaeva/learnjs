// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.  Fn = Fn-1 + Fn-2
// 1 1 2 3 5 8 13 21

fib = (n) => {
  return n < 3 ? 1 : fib(n - 1) + fib(n - 2);
}; // очень долго

fib = (n) => {
  let sum = 0;
  let first = 1;
  let second = 1;

  for (let i = 3; i <= n; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }

  return sum;
};
