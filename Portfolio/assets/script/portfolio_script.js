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

