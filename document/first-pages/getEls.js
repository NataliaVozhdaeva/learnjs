/* 
<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

Напишите код, как получить…

    элемент <div>?
    <ul>?
    второй <li> (с именем Пит)?
 */

//<div>
document.body.firstElementChild;
document.body.children[0];
document.body.childNodes[1]; //!

//<ul>
document.body.lastElementChild;
document.body.children[1];

//второй <li> (с именем Пит)
document.body.lastElementChild.lastElementChild;
