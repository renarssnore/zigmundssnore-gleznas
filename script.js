document.addEventListener('DOMContentLoaded', () => {
    // Prevent back button from closing the page
    history.pushState(null, document.title, location.href);
    window.onpopstate = function () {
        history.pushState(null, document.title, location.href); // Keep the user on the current page
    };

    // Smooth scroll for navigation links
    const links = document.querySelectorAll('header nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gallery lightbox functionality
    const images = document.querySelectorAll('.gallery-container img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const src = img.getAttribute('data-src');
            lightboxImage.src = src;
            lightbox.style.display = 'flex';
        });
    });

    // Close the lightbox
    document.querySelector('.lightbox .close').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Optionally, close the lightbox when pressing the "Esc" key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            lightbox.style.display = 'none';
        }
    });
});
