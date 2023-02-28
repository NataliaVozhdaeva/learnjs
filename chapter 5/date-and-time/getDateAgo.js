//Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

const getDateAgo = (date, days) => {
  let copy = new Date(date);

  copy.setDate(date.getDate() - days);
  return copy.getDate();
};
