//Напишите код, который возвращает ширину стандартной полосы прокрутки.

let div = document.createElement('div');

div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

alert(scrollWidth);
