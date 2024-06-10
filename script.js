document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const menu = document.querySelector('.menu-item');
    const menuItems = document.querySelectorAll('.menu-item li a');

    hamburgerIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    // Add click event listeners to each list item
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Hide the menu when a list item is clicked
            menu.classList.remove('show'); 
        });
    });
    
});
