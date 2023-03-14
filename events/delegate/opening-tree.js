//Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:

/* <ul class="tree" id="tree">
    <li><span class="open">Животные</span>
      <ul>
        <li><span class="open">Млекопитающие</span>
          <ul>
            <li>Коровы</li>
            <li>Ослы</li>
            <li>Собаки</li>
            <li>Тигры</li>
          </ul>
        </li>
        <li><span class="open">Другие</span>
          <ul>
            <li>Змеи</li>
            <li>Птицы</li>
            <li>Ящерицы</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><span class="open">Рыбы</span>
      <ul>
        <li><span class="open">Аквариумные</span>
          <ul>
            <li>Гуппи</li>
            <li>Скалярии</li>
          </ul>
        </li>
        <li><span class="open">Морские</span>
          <ul>
            <li>Морская форель</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul> */

const tree = document.querySelector('#tree');
const title = document.querySelector('span');

const toggleFunc = (e) => {
  if (e.target.classList.contains('open')) {
    let childrenContainer = e.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
  }
};

tree.addEventListener('click', toggleFunc);
