/* Напишите JS-код, реализующий поведение «подсказка».

При наведении мыши на элемент с атрибутом data-tooltip, 
над ним должна показываться подсказка и скрываться при переходе на другой элемент. */

/* <style>
body {
  height: 2000px;
  

.tooltip {
  position: fixed;
  padding: 10px 20px;
  border: 1px solid #b3c9ce;
  border-radius: 4px;
  text-align: center;
  font: italic 14px/1.3 sans-serif;
  color: #333;
  background: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
}
</style>
</head>

<body>

<p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>
<p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>

<button data-tooltip="эта подсказка должна быть длиннее, чем элемент">Короткая кнопка</button>
<button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>

<p>Прокрутите страницу, чтобы кнопки оказались у верхнего края, а затем проверьте, правильно ли выводятся подсказки.</p>

 */

let tooltipElem;

document.onmouseover = function (event) {
  const target = event.target;
  const tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.textContent = tooltipHtml;
  document.body.append(tooltipElem);

  const coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};
