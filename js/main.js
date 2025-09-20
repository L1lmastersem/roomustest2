// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const actions = document.querySelector('.actions');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  actions.classList.toggle('open');
});
