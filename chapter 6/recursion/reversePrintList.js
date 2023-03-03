//Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

printReverseList = (list) => {
  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
};

printReverseList = (list) => {
  let showPoint = list;
  let arr = [];

  while (showPoint) {
    arr.push(showPoint.value);
    showPoint = showPoint.next;
  }

  arr.reverse();

  arr.forEach((el) => alert(el));
};
