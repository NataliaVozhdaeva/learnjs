//Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

/* 
<p><img id="largeImg" src="https://en.js.cx/gallery/img2-lg.jpg" alt="Large image"></p>

<ul id="thumbs">
  <li>
    <a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://en.js.cx/gallery/img2-thumb.jpg"></a>
  </li>
  <li>
    <a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://en.js.cx/gallery/img3-thumb.jpg"></a>
  </li>
  <li>
    <a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://en.js.cx/gallery/img4-thumb.jpg"></a>
  </li>
  <li>
    <a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://en.js.cx/gallery/img5-thumb.jpg"></a>
  </li>
  <li>
    <a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://en.js.cx/gallery/img6-thumb.jpg"></a>
  </li>
</ul> */

thumbs.onclick = function (event) {
  let thumbnail = event.target.closest('a');

  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
};

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
