function notify(message) {
  
  const notificationEl = document.querySelector('#notification');
  notificationEl.textContent = message;
  notificationEl.style.display = 'block';

  notificationEl.addEventListener('click', (el) => {
    el.target.style.display = 'none';
  })
}