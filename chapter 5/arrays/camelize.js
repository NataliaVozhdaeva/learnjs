//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

camelize = (str) => {
  let newStr = str.split('-');

  let camelCase = newStr
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1);
    })
    .join('');

  return camelCase;
};
