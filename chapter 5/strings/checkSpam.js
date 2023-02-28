//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

checkSpam = (str) => {
  let newStr = str.toLowerCase();
  return newStr.includes('viagra') || newStr.includes('xxx') ? true : false;
};
