/* Создайте функцию , которая умножает все числовые свойства объекта obj на 2. */

multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2;
    }
  }

  console.log(obj);
};
