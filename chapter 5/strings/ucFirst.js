//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

ucFirst = (str) => {
  let newStr = str.charAt(0).toUpperCase() + str.slice(1);

  return newStr;
};
