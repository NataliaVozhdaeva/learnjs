//Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент,
//а затем рассчитать, какая это будет сумма через заданный промежуток времени.

const form = document.querySelector('form');

form.money.oninput = calculate;
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
  let initial = +form.money.value;
  if (!initial) return;

  let interest = form.interest.value * 0.01;

  if (!interest) return;

  let years = form.months.value / 12;
  if (!years) return;

  let result = Math.round(initial * (1 + interest) ** years);

  let height = (result / form.money.value) * 100 + 'px';
  document.querySelector('#height-after').style.height = height;
  document.querySelector('#money-before').textContent = form.money.value;
  document.querySelector('#money-after').textContent = result;
}
