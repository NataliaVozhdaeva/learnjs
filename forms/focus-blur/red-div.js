/* Создайте <div>, который превращается в <textarea>, если на него кликнуть.

<textarea> позволяет редактировать HTML в элементе <div>.

Когда пользователь нажимает Enter или переводит фокус, 
<textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>. */

let textarea = null;
let div = document.getElementById('view');

div.addEventListener('click', edit);

function edit() {
  textarea = document.createElement('textarea');
  textarea.className = 'edit';
  textarea.value = div.innerHTML;

  textarea.onkeydown = function (event) {
    if (event.key == 'Enter') {
      this.blur();
    }
  };

  textarea.onblur = function () {
    editEnd();
  };

  div.replaceWith(area);
  textarea.focus();
}

function editEnd() {
  div.innerHTML = textarea.value;
  textarea.replaceWith(div);
}
