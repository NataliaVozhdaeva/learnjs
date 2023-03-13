/* Измените код решения предыдущего задания так, чтобы элемент 
заметки использовал свойство position:absolute вместо position:fixed. */

function getCoords(elem) {
  const element = elem.getBoundingClientRect();

  return {
    top: element.top + pageYOffset,
    left: element.left + pageXOffset,
  };
}

function positionAt(anchor, position, elem) {
  const anchorCoords = getCoords(anchor);

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

function showNote(anchor, position, html) {
  const note = document.createElement('div');
  note.className = 'note';
  note.textContent = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}
