/* Напишите функцию formatDate(date), форматирующую date по следующему принципу:

    Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
    В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
    В противном случае, если меньше часа, вывести "m мин. назад".
    В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", 
    всё в виде двух цифр, т.е. 31.12.16 10:00.
 */

const fullDate = (date) => {
  const dayOfMonth = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  const hour = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
};

const formatDate = (date) => {
  let diff = new Date() - date;

  switch (true) {
    case diff < 1000:
      return 'прямо сейчас';
    case diff < 60000:
      return `${diff / 1000} сек. назад`;
    case diff < 360000:
      return `${diff / 60000} мин. назад`;
    default:
      return fullDate(date);
  }
};
