//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

aclean = (arr) => {
  let map = new Map();

  arr.forEach((el) => {
    let sorted = el.toLowerCase().split('').sort().join('');
    map.set(sorted, el);
  });

  return Array.from(map.values());
};
