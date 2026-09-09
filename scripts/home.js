'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-nav');
menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menu.classList.toggle('is-open', expanded);
});
menu.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
const slides = [...document.querySelectorAll('.wallpaper')];
const slideButtons = [...document.querySelectorAll('[data-slide]')];
const galleryControls = document.querySelector('.gallery-controls');
if (galleryControls) galleryControls.hidden = false;
slideButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slides.forEach((slide, i) => { slide.hidden = i !== index; });
    slideButtons.forEach((item, i) => item.setAttribute('aria-pressed', String(i === index)));
    document.querySelector('.gallery-counter').textContent = `0${index + 1} / 02`;
  });
});
