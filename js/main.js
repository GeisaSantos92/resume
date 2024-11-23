document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menuButton');
    const menu = document.querySelector('#mobileMenu');
    const menuLinks = menu.querySelectorAll('a');

    // Toggle menu visibility on button click
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
});
