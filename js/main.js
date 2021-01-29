const navTop = document.querySelector('.nav-top-icon');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
        navTop.classList.remove('d-none')
    } else {
        navTop.classList.add('d-none');
    }
})