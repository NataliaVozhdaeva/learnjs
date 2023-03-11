/* Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
Уведомление должно автоматически исчезнуть через 1,5 секунды. */

function showNotification({ top = 0, right = 0, className, html }) {
  let popup = document.createElement('div');
  popup.textContent = html;
  popup.style.position = 'absolute';
  popup.style.top = top + 'px';
  popup.style.right = right + 'px';

  popup.className = 'notification';
  popup.classList.add(className);

  document.body.append(popup);

  setTimeout(() => popup.remove(), 1500);
}
