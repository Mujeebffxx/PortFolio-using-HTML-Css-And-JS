// Scroll Animation
let header = document.querySelector('.header');
window.onscroll= () => {
    header.classList.toggle('sticky', window.scrollY > 100);
}


// For navbar
let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('nav-bar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


