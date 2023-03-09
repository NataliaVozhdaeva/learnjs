/* У нас есть объекты:

С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: 
pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), 
а bed.glasses – значение 1 (найденное в head). */

let head = {
  glasses: 1,
};

let table = {
  __proto__: head,
  pen: 3,
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2,
};

let pockets = {
  __proto__: bed,
  money: 2000,
};
