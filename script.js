// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    const viewportHeight = window.innerHeight;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight - 50) {
            el.style.opacity = 1;
            el.style.transform = 'none';
        }
    });
});
