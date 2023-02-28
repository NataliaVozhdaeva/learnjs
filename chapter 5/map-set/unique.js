//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
  let set = new Set();

  arr.forEach((el) => {
    set.add(el);
  });

  return set;
}

//снова есть более красивое решение

function unique(arr) {
  return Array.from(new Set(arr));
}
