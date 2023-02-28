//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

getAverageAge = (users) => {
  let sum = users.reduce((sum, user) => sum + user.age, 0);
  return sum / users.length;
};
