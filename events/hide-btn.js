//Создайте кнопку, которая будет скрывать себя по нажатию.

const btn = document.querySelector('#hider');

btn.addEventListener('click', () => (btn.hidden = true));
