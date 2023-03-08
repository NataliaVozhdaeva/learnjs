//Исправить2 (Можно трогать только последнюю строку)

function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert(this.name + (result ? ' logged in' : ' failed to log in'));
  },
};

//askPassword(?, ?);

askPassword(user.login.bind(user, true), user.login.bind(user, false));
