/* Напишите функцию createCalendar(elem, year, month).
Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem */

function createCalendar(elem, year, month) {
  let currentMonth = month - 1;
  let date = new Date(year, currentMonth);

  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  for (let i = 0; i < getDay(date); i++) {
    table += '<td></td>';
  }

  while (date.getMonth() == currentMonth) {
    table += '<td>' + date.getDate() + '</td>';

    if (getDay(date) % 7 == 6) {
      table += '</tr><tr>';
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) != 0) {
    for (let i = getDay(date); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day - 1;
}
