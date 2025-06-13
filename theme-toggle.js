
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.theme-toggle');
  toggle.addEventListener('click', function () {
    const body = document.body;
    if (body.classList.contains('spiritual')) {
      body.classList.remove('spiritual');
      body.classList.add('light-spiritual');
    } else if (body.classList.contains('light-spiritual')) {
      body.classList.remove('light-spiritual');
      body.classList.add('spiritual');
    } else {
      // если никакой темы — по умолчанию spiritual
      body.classList.add('spiritual');
    }
  });
});
