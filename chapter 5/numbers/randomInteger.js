/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью. */

//Решила не верно. (Вероятность не срабатывает)
randomInteger = () => {
  return Math.round(Math.random() * (max - min) + min);
};

//Правильный вариант
randomInteger = () => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

//Или увеличивать интервал - не от 1 до 3, например, а от 0.5 до 3.5
