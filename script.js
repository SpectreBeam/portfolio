// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Toggle icon between light and dark
    if (document.body.classList.contains('light-mode')) {
        modeToggle.innerText = '🌙';  // Dark Mode
    } else {
        modeToggle.innerText = '☀️';  // Light Mode
    }
});

// Add smooth scrolling to sections
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });
});
