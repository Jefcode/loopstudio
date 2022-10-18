const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
}
