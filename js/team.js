// Animate team members on scroll
const animateTeamMembers = () => {
    const members = document.querySelectorAll('.team-member');
    
    members.forEach(member => {
        const memberPosition = member.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (memberPosition < screenPosition) {
            member.style.opacity = '1';
            member.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for team member animation
document.querySelectorAll('.team-member').forEach(member => {
    member.style.opacity = '0';
    member.style.transform = 'translateY(20px)';
    member.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run animation on scroll
window.addEventListener('scroll', animateTeamMembers);
// Run once on page load
animateTeamMembers();

// Add hover effect for team member images
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', () => {
        const image = member.querySelector('.member-image img');
        image.style.transform = 'scale(1.1)';
    });

    member.addEventListener('mouseleave', () => {
        const image = member.querySelector('.member-image img');
        image.style.transform = 'scale(1)';
    });
});

// Add smooth scroll to team sections
document.querySelectorAll('.team-section').forEach(section => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const teamCards = document.querySelectorAll('.team-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Add fade-out animation to all cards
            teamCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            });

            // After animation, filter and show cards
            setTimeout(() => {
                teamCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        // Add fade-in animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
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
        const elements = document.querySelectorAll('.team-card');
        
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
    teamCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });

    // Initial check for elements in view
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
}); 