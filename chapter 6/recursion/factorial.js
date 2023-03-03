//написать функцию factorial(n), которая возвращает n!, используя рекурсию.

factorial = (n) => {
  return n === 1 ? n : n * factorial(n - 1);
};
