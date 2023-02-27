//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

/* let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */

function isEmpty(obj) {
  return Object.keys(obj).length === 0 ? true : false;
}
