document.addEventListener('DOMContentLoaded', (event) => {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');

    menuBtn.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    }

    const sr = ScrollReveal({
        distance: '40px',
        duration: 2500,
        reset: true
    });

    sr.reveal('.logo', { delay: 200, origin: 'left' });
});
