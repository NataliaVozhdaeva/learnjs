/* 
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива. 
*/

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[(styles.length - 1) / 2] = 'Классика';
styles.shift();
styles.unshift('Регги');
styles.unshift('Рэп');
