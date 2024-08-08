// Scroll to top button
let mytopbutton = document.getElementById('top-button');

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mytopbutton.style.display = 'block';
    } else {
        mytopbutton.style.display = 'none';
    }
});