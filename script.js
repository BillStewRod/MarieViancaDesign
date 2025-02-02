document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});
function handleVideoTransition() {
    const videos = document.querySelectorAll('.hero-video');
    let currentIndex = 0;

    videos[0].play();

    setInterval(() => {
        videos[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % videos.length;
        videos[currentIndex].classList.add('active');
        videos[currentIndex].currentTime = 0;
        videos[currentIndex].play();
    }, 4000); 
}

document.addEventListener('DOMContentLoaded', handleVideoTransition);

    // Remove or comment out this entire section
    /*
    const nav = document.querySelector('.main-nav');
    let lastScrollTop = 0;
    let isNavVisible = true;
    
    // Hide nav after 2 seconds
    setTimeout(() => {
        nav.classList.add('nav-hidden');
        isNavVisible = false;
    }, 2000);
    
    // Show nav when mouse moves to top of screen
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 50) {
            nav.classList.remove('nav-hidden');
            isNavVisible = true;
        }
    });
    
    // Hide nav on scroll down, show on scroll up
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && isNavVisible) {
            nav.classList.add('nav-hidden');
            isNavVisible = false;
        } else if (scrollTop < lastScrollTop && !isNavVisible) {
            nav.classList.remove('nav-hidden');
            isNavVisible = true;
        }
        
        lastScrollTop = scrollTop;
    });
    */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});