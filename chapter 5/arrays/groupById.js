/* 
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
 */

groupById = (users) => {
  let newObj = {};

  users.forEach((el) => {
    newObj[el.id] = el;
  });

  return newObj;
};

//решение через reduce красивее (подсмотрела)

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}
