/* Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, 
действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке. */

/* fieldset id="contents">
    <legend>#contents</legend>
    <p>
      Как насчёт того, чтобы прочитать <a href="https://wikipedia.org">Википедию</a> или посетить <a href="https://w3.org"><i>W3.org</i></a> и узнать о современных стандартах?
    </p>
  </fieldset> */

const content = document.querySelector('#contents');
content.addEventListener('click', tooltipFunc);

function tooltipFunc(e) {
  function handleLink(href) {
    let isLeaving = confirm(`Do you want to leave this page and continue on ${href}?`);
    if (!isLeaving) return false;
  }

  let target = e.target.closest('a');

  if (target && content.contains(target)) {
    return handleLink(target.getAttribute('href'));
  }
}
