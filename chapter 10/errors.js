/* Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
Класс должен поддерживать свойства message, name и stack. */

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'FormatError';
  }
}

let err = new FormatError('ошибка форматирования');
