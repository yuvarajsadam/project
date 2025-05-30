// script.js

const toggleBtn = document.getElementById('toggle-menu');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
