/* Сделайте набор «готовых к употреблению» фильтров:

    inBetween(a, b) – между a и b (включительно).
    inArray([...]) – находится в данном массиве.

Они должны использоваться таким образом:

    arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
    arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
 */

const inBetween = (a, b) => {
  return function (x) {
    return x >= a && x <= b;
  };
};

const inArray = (array) => {
  return function (x) {
    return array.includes(x);
  };
};
