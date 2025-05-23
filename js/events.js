document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventItems = document.querySelectorAll('.event-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Add fade-out animation to all items
            eventItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });

            // After animation, filter and show items
            setTimeout(() => {
                eventItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'flex';
                        // Add fade-in animation
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                });
            }, 300);
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.event-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial setup
    eventItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
    });

    // Initial check for elements in view
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Registration button functionality
    const registerButtons = document.querySelectorAll('.btn');
    registerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const eventName = button.closest('.event-item').querySelector('h3').textContent;
            if (button.textContent.includes('Register')) {
                alert(`Registration for ${eventName} will be available soon!`);
            } else if (button.textContent.includes('Learn More')) {
                alert(`More details about ${eventName} will be available soon!`);
            } else if (button.textContent.includes('Gallery')) {
                alert(`Gallery for ${eventName} will be available soon!`);
            }
        });
    });
}); 