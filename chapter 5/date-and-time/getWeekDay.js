//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let week = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const getWeekDay = (date) => {
  const currentDayOfWeek = date.getDay();

  return week[currentDayOfWeek].toUpperCase();
};
