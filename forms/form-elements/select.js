/* Имеется <select>:

<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>

Используя JavaScript:*/

//Выведите значение и текст выбранного пункта.
const selectedOption = genres.options[genres.selectedIndex];
console.log(selectedOption.value);
console.log(selectedOption.text);

//Добавьте пункт: <option value="classic">Классика</option>.
let newOption = new Option('Классика', 'classic');
genres.append(newOption);

//Сделайте его выбранным.
newOption.selected = true;
