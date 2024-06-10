
const hamburgerIcon = document.getElementById('hamburger-icon');
const menu = document.querySelector('.menu-item');

document.addEventListener('DOMContentLoaded', function () {
    hamburgerIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    // Hide the menu initially on smaller screens
    if (window.innerWidth <= 768) {
        menu.classList.remove('show');
    }
});