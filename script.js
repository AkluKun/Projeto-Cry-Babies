// script.js

let lastScrollTop = 0;
const header = document.getElementById('header');
header.classList.add('header-visible');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Rolando para baixo
        header.classList.remove('header-visible');
    } else {
        // Rolando para cima
        header.classList.add('header-visible');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para a rolagem superior
});
