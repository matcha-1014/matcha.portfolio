'use strict'

{
  const overlay = document.querySelector('.overlay');
  const faBars = document.querySelector('.fa-bars');
  const close = document.getElementById('close');

  faBars.addEventListener('click', () => {
    overlay.classList.add('show');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
}