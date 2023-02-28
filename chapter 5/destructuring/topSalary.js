/* Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
    Если объект salaries пустой, то нужно вернуть null.
    Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
 */

const topSalary = (salaries) => {
  if (Object.keys(salaries).length === 0) {
    return null;
  }

  let maxSalay = 0;
  let nameTop = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalay < salary) {
      maxSalay = salary;
      nameTop = name;
    }
  }

  return nameTop;
};
