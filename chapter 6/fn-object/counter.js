/* function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
alert( counter() ); 

Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

    counter() должен возвращать следующее значение (как и раньше).
    counter.set(value) должен устанавливать счётчику значение value.
    counter.decrease() должен уменьшать значение счётчика на 1.
 */
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);

  counter.decrease = () => count--;

  return counter;
}
