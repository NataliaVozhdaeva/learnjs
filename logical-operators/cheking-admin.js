const check = prompt('Кто там?');

if (check === 'Админ') {
  let password = prompt('Пароль?');

  if (password === 'Я Главный') {
    alert('Здравствуйте!');
  } else if (password === '' || pass === null) {
    alert('отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (check === '' || check === null) {
  alert('отменено');
} else {
  alert('Я вас не знаю');
}
