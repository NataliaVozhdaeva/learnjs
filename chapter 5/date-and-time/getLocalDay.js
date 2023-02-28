/* В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date */

let week = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const getLocalDay = (date) => {
  const currentDayOfWeek = date.getDay();

  if (currentDayOfWeek === 0) {
    currentDayOfWeek = 7;
  }

  return currentDayOfWeek;
};
