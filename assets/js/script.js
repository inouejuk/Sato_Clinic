const images = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});

images.forEach((image) => {
    observer.observe(image);
});