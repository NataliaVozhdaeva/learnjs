//Сделайте ячейки таблицы редактируемыми по клику.

/* <p>Кликните на ячейку таблицы, чтобы редактировать её. Нажмите ОК или ОТМЕНА, когда закончите.</p>

  <table id="bagua-table">
    <tr>
      <th colspan="3">Квадрат <em>Bagua</em>: Направление, Элемент, Цвет, Значение</th>
    </tr>
    <tr>
      <td class="nw"><strong>Северо-Запад</strong>
        <br>Металл
        <br>Серебро
        <br>Старейшины
      </td>
      <td class="n"><strong>Север</strong>
        <br>Вода
        <br>Синий
        <br>Перемены
      </td>
      <td class="ne"><strong>Северо-Восток</strong>
        <br>Земля
        <br>Жёлтый
        <br>Направление
      </td>
    </tr>
    <tr>
      <td class="w"><strong>Запад</strong>
        <br>Металл
        <br>Золото
        <br>Молодость
      </td>
      <td class="c"><strong>Центр</strong>
        <br>Всё
        <br>Пурпурный
        <br>Гармония
      </td>
      <td class="e"><strong>Восток</strong>
        <br>Дерево
        <br>Синий
        <br>Будущее
      </td>
    </tr>
    <tr>
      <td class="sw"><strong>Юго-Запад</strong>
        <br>Земля
        <br>Коричневый
        <br>Спокойствие
      </td>
      <td class="s"><strong>Юг</strong>
        <br>Огонь
        <br>Оранжевый
        <br>Слава
      </td>
      <td class="se"><strong>Юго-Восток</strong>
        <br>Дерево
        <br>Зеленый
        <br>Роман
      </td>
    </tr>

</table> */

const table = document.querySelector('#bagua-table');

let editingTd;

table.addEventListener('click', function (e) {
  let target = e.target.closest('.edit-cancel,.edit-ok,td');

  if (!table.contains(target)) return;

  if (target.className == 'edit-cancel') {
    finishTdEdit(editingTd.elem, false);
  } else if (target.className == 'edit-ok') {
    finishTdEdit(editingTd.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editingTd) return;

    makeTdEditable(target);
  }
});

function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML,
  };

  td.classList.add('edit-td');

  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.className = 'edit-area';

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML(
    'beforeEnd',
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove('edit-td');
  editingTd = null;
}
