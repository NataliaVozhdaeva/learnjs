//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

extractCurrencyValue = (str) => {
  return isNaN(parseInt(str)) ? str.slice(1) : parseInt(str);
};
