const content = document.querySelector('.header')
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition >= 100) {
        content.classList.add('active')
    }
    else {
        content.classList.remove('active')
    }
})