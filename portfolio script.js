// Highlight links on hover
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'yellow';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });
});

// Simple image carousel
let currentIndex = 0;
const carouselImages = document.querySelectorAll('.carousel img');

function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
}, 3000);
