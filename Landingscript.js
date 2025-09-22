// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const ctaBtn = document.querySelector('.cta-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-modal');
const scrollToTopBtn = document.querySelector('.scroll-to-top');
const featureCards = document.querySelectorAll('.feature-card');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Modal functionality
ctaBtn.addEventListener('click', () => {
    modalOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
});

const closeModalFunc = () => {
    modalOverlay.classList.remove('visible');
    document.body.style.overflow = 'auto';
};

closeModal.addEventListener('click', closeModalFunc);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModalFunc();
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Feature Card Animation on Scroll
const checkVisibility = () => {
    featureCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
// Check on initial load
window.addEventListener('load', checkVisibility);

// Form submission
document.getElementById('quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your request! We will contact you shortly.');
    closeModalFunc();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});