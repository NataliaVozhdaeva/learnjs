//Создать меню, которое по нажатию открывается либо закрывается

/* <!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
</head>

<body>
<style>
.mobile-menu {
        transform: scale(0);
        transform-origin: 0 0;
        transition: 1s;
      }

      .open {
        transform: scale(1);
      }
</style>

  <span class='title'><span class='caret'> </span>Сладости (нажми меня)!</span>
  <ul class='mobile-menu'>
    <li>Пирожное</li>
    <li>Пончик</li>
    <li>Мёд</li>
  </ul>
<script></script>
</body>
</html> */

const openCaret = '▼ ';
const closeCaret = '▶ ';
const menu = document.querySelector('.mobile-menu');
const caret = document.querySelector('.caret');
const title = document.querySelector('.title');

let menuState = 'close';

switch (menuState) {
  case 'close':
    caret.textContent = closeCaret;
    break;
  case 'open':
    caret.textContent = openCaret;
    break;
}

const handleMenu = () => {
  menu.classList.toggle('open');
  menu.classList.contains('open') ? (menuState = 'open') : (menuState = 'close');
};

title.addEventListener('click', handleMenu);
