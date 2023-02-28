//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

const getSecondsToTomorrow = () => {
  let today = new Date();

  return 86400 - (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds());
};
