/* Напишите интерфейс для создания списка.

Для каждого пункта:

    Запрашивайте содержимое пункта у пользователя с помощью prompt.
    Создавайте элемент <li> и добавляйте его к <ul>.
    Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).

Все элементы должны создаваться динамическ */

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let info = prompt('Введите текст для элемента списка', '');

  if (!info) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = info;
  ul.append(li);
}
