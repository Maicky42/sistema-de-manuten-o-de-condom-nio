document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.custom-dropdown');
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.custom-dropdown-menu');

    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            menu.classList.remove('show');
        }
    });

    // Animação de aparição com scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight - 60) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);
    animateOnScroll();
});