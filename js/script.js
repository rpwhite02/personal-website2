const navLinks = document.querySelector('.nav-links li a');
const navLinkItems = Array.from(navLinks.querySelectorAll('a'));

navLinkItems.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        navLinkItems.forEach((item) => {
            item.classList.remove('active');
        });
        link.classList.add('active');
    });
});
