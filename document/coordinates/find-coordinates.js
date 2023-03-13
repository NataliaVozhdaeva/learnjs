/* В ифрейме ниже располагается документ с зелёным «полем».

Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками. */

const points = elem.getBoundingClientRect();

const corner1 = [points.left, points.top];
const corner2 = [points.right, points.bottom];
const corner3 = [points.left + field.clientLeft, points.top + field.clientTop];
const corner4 = [points.left + elem.clientLeft + elem.clientWidth, points.top + elem.clientTop + elem.clientHeight];

//Последнее можно было через css
/* 
let answer4 = [
  coords.right - parseInt(getComputedStyle(field).borderRightWidth),
  coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
]; */
