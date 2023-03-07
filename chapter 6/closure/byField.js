//Напишите функцию byField, которая может быть использована для этого.

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

const byField = (field) => {
  const sort = (a, b) => (a[field] > b[field] ? 1 : -1);
  return sort;
};
