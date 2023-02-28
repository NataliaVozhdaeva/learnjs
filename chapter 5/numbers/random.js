//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

random = (min, max) => {
  return Math.random() * (max - min) + min;
};
