document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pinCards = document.querySelectorAll('.pin-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Add fade-out animation to all cards
            pinCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
            });

            // After animation, filter and show cards
            setTimeout(() => {
                pinCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        // Add fade-in animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            }, 300);
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.pin-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
            }
        });
    };

    // Initial setup
    pinCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
    });

    // Initial check for elements in view
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Social share functionality
    const socialLinks = document.querySelectorAll('.social-share a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = link.querySelector('i').classList.contains('fa-instagram') ? 'Instagram' :
                           link.querySelector('i').classList.contains('fa-twitter') ? 'Twitter' :
                           link.querySelector('i').classList.contains('fa-youtube') ? 'YouTube' : 'Social Media';
            alert(`Sharing to ${platform} will be available soon!`);
        });
    });

    // Read/View/Watch button functionality
    const actionButtons = document.querySelectorAll('.btn-read, .btn-watch, .btn-view');
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const action = button.classList.contains('btn-read') ? 'reading' :
                          button.classList.contains('btn-watch') ? 'watching' :
                          'viewing';
            const title = button.closest('.pin-overlay').querySelector('h3').textContent;
            alert(`${action} ${title} will be available soon!`);
        });
    });
}); 