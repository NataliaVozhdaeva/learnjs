//Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};
