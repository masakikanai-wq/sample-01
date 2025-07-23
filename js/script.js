// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentNode;
        const answer = faqItem.querySelector('.faq-answer');
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        // Close all other FAQ items
        document.querySelectorAll('.faq-question').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.setAttribute('aria-expanded', 'false');
                otherButton.parentNode.querySelector('.faq-answer').classList.remove('active');
            }
        });

        // Toggle current item
        button.setAttribute('aria-expanded', !isOpen);
        answer.classList.toggle('active');
    });
});

// Mobile menu toggle (basic implementation)
document.getElementById('hamburger').addEventListener('click', () => {
    // This would typically show/hide a mobile menu
    // For this implementation, we'll just scroll to top as a placeholder
    window.scrollTo({ top: 0, behavior: 'smooth' });
});