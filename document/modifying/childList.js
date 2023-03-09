/* Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
Узлы нижнего уровня, без детей – пропускайте. */

const lists = document.querySelectorAll('li');

for (let li of lists) {
  let childsCount = li.querySelectorAll('li').length;
  if (!childsCount) continue;

  li.firstChild.data += childsCount;
}
