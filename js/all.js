
document.querySelector('img#logo').addEventListener('click', () => {
  if (window.location.pathname !== '/index.html') {
    window.location = '/index.html'
  }
});

document.querySelector('div#search img').addEventListener('click', () => {
  document.querySelector('div#search input').focus();
});
