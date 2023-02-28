//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

unique = (arr) => {
  let newAr = [];

  arr.map((el) => {
    if (!newAr.includes(el)) {
      newAr.push(el);
    }
  });

  return newAr;
};
