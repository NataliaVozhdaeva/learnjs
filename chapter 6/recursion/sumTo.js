/* Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:
    С использованием цикла.
    Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
    С использованием формулы арифметической прогрессии.
 */

const sumTo = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
};

const sumTo = (n) => {
  return n === 1 ? n : n + sumTo(n - 1);
};

const sumTo = (n) => {
  return (n * (n + 1)) / 2;
};
