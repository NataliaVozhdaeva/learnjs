//Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
