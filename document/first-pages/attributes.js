//Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

/* <!DOCTYPE html>
<html>
<body>
  <div data-widget-name="menu">Choose the genre</div>
</body>
</html> */

let el = document.querySelector('[data-widget-name]');
console.log(elem.dataset.widgetName);

// alt
alert(elem.getAttribute('data-widget-name'));
