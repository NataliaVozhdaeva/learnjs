//Сделать таблицу сортируемой

/* <table id="grid">
  <thead>
    <tr>
      <th data-type="number">Возраст</th>
      <th data-type="string">Имя</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5</td>
      <td>Вася</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Петя</td>
    </tr>
    ...
  </tbody>
</table> */

const table = document.querySelector('#grid');
table.addEventListener('click', funcSort);

function funcSort(e) {
  if (e.target.tagName != 'TH') return;

  let th = e.target;
  sortGrid(th.cellIndex, th.dataset.type);
}

function sortGrid(colNum, type) {
  let tbody = grid.querySelector('tbody');

  let rowsArray = Array.from(tbody.rows);

  let compare;

  switch (type) {
    case 'number':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };
      break;
  }

  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}
