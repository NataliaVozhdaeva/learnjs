//Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor

function positionAt(anchor, position, elem) {
  const anchorCoords = anchor.getBoundingClientRect();

  switch (position) {
    case 'top':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
      break;

    case 'right':
      elem.style.left = anchorCoords.left + anchor.offsetWidth + 'px';
      elem.style.top = anchorCoords.top + 'px';
      break;

    case 'bottom':
      elem.style.left = anchorCoords.left + 'px';
      elem.style.top = anchorCoords.top + anchor.offsetHeight + 'px';
      break;
  }
}

const showNote = (anchor, position, html) => {
  const note = document.createElement('div');
  note.className = 'note';
  note.textContent = html;
  document.body.append(note);

  positionAt(anchor, position, note);
};
