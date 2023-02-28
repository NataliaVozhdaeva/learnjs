//Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

//решила рандомом, узнала, что это неправильно. Надеюсь, правильное не возбраняется зафиксировать на будущее

shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};
