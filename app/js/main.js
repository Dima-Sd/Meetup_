const headers = document.querySelectorAll('.header');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    headers.forEach(header => {
        if (scrollPosition >= 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });
});