// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Cделайте два варианта решения: используя цикл и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printList = (list) => {
  while (list) {
    alert(list.value);
    list = list.next;
  }
};
// не рекомендовано - может помешать расширению функции. Лучше копировать внутри ф-ции list в другуб переменную и работать с ней.

printList = (list) => {
  alert(list.value);

  if (list.next) {
    printList(list.next);
  }
};
