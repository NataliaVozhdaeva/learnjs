/* Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта. */

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  let ul = document.createElement('ul');
  for (let key in obj) {
    let li = document.createElement('li');
    li.textContent = key;
    ul.append(li);

    if (key.length > 1) {
      let childUl = createTreeDom(obj[key]);
      li.append(childUl);
    }
  }

  return ul;
}

//Второй вариант (повторить)
function createTree(container, obj) {
  container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) {
  let li = '';
  let ul;
  for (let key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  if (li) {
    ul = '<ul>' + li + '</ul>';
  }
  return ul || '';
}

createTree(container, data);
