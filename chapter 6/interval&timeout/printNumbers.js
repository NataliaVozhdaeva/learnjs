/* Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

// нерабочий вариант, потому что начинается выполнение с задержкой, а вот alert выходит уже друг за другом:

/* 
const printNumbers = (from, to) => {
  const show = () => {
    for (let i = from; i <= to; i++) {
      alert(i);
    }
  };

  setTimeout(show, 4000);
};
 */

const printNumbers = (from, to) => {
  let i = from;

  setTimeout(function show() {
    alert(i);
    i++;

    if (i != to + 1) {
      setTimeout(show, 1000);
    }
  }, 1000);
};

const printNumbers = (from, to) => {
  let i = from;

  let timerId = setInterval(function () {
    alert(i);
    if (i == to) {
      clearInterval(timerId);
    }
    i++;
  }, 1000);
};
