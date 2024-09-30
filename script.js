document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize ScrollReveal for animations
ScrollReveal().reveal('.fade-in-up', {
    duration: 1000,
    distance: '50px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 300
});

// Add the 'fade-in-up' class to elements you want to animate
document.querySelectorAll('section > *').forEach(element => {
    element.classList.add('fade-in-up');
});