//Создайте «Карусель»

/* 
  <div id="carousel" class="carousel">
    <button class="arrow prev">⇦</button>
    <div class="gallery">
      <ul>
        <li><img src="https://ru.js.cx/carousel/1.png"></li>
        <li><img src="https://ru.js.cx/carousel/2.png"></li>
        <li><img src="https://ru.js.cx/carousel/3.png"></li>
        <li><img src="https://ru.js.cx/carousel/4.png"></li>
        <li><img src="https://ru.js.cx/carousel/5.png"></li>
        <li><img src="https://ru.js.cx/carousel/6.png"></li>
        <li><img src="https://ru.js.cx/carousel/7.png"></li>
        <li><img src="https://ru.js.cx/carousel/8.png"></li>
        <li><img src="https://ru.js.cx/carousel/9.png"></li>
        <li><img src="https://ru.js.cx/carousel/10.png"></li>
      </ul>
    </div>
    <button class="arrow next">⇨</button>
  </div>
 */

const width = 130;
const count = 3;

const list = carousel.querySelector('ul');
const elems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (elems.length - count));
  list.style.marginLeft = position + 'px';
};
