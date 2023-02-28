/* Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
Метод должен понимать плюс + и минус -.

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его. */

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let arr = (str.split(' ').a = +arr[0]),
      a = +arr[0],
      operator = arr[1],
      b = +arr[2];

    return !this.methods[operator] || isNaN(a) || isNaN(b) ? NaN : this.methods[operator](a, b);
  };

  this.addMethod = function (method, func) {
    this.methods[method] = func;
  };
}
