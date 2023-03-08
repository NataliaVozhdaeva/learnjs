let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat('apple');
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple

/***************************************/

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Этот хомяк нашёл еду
speedy.eat('apple');
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple

// а можно было переписать метод в haster и сделать this.stomach = [food];
