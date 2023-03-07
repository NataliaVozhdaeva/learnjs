//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

sum = (a) => {
  let subFunc = (b) => a + b;

  return subFunc;
};
