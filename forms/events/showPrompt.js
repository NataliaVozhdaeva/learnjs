// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

/* 
<div id="prompt-form-container">
  <form id="prompt-form">
    <div id="prompt-message">Введите что-нибудь...
      <br>Пожалуйста..</div>
    <input name="text" type="text">
    <input type="submit" value="Ok">
    <input type="button" name="cancel" value="Отмена">
  </form>
</div> 

для модального окна, создать div-заглушку с высоким z-index и position:fixed.
Нужную форму - после заглушки.
*/

const showCover = () => {
  const coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';
  document.body.style.overflowY = 'hidden';
  document.body.append(coverDiv);
};

const hideCover = () => {
  document.querySelector('#cover-div').remove();
  document.body.style.overflowY = '';
};

const showPrompt = (text, callback) => {
  showCover();
  const form = document.querySelector('#prompt-form');
  const container = document.querySelector('#prompt-form-container');
  document.querySelector('#prompt-message').textConntent = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    const value = form.text.value;
    if (value == '') return false;

    complete(value);
    return false;
  };

  form.cancel.onclick = function () {
    complete(null);
  };

  document.onkeydown = function (e) {
    if (e.key == 'Escape') {
      complete(null);
    }
  };

  let firstElem = form.elements[0];
  let lastElem = form.elements[form.elements.length - 1];

  lastElem.onkeydown = function (e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e) {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = 'block';
  form.elements.text.focus();
};

document.getElementById('show-button').onclick = function () {
  showPrompt('Введите что-нибудь<br>...умное :)', function (value) {
    alert('Вы ввели: ' + value);
  });
};
