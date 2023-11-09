
// Nav bar animation, to hide once scrolled down, and show once scrolled up

const nav = document.querySelector('.nav');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        nav.classList.add('scrolled');
    } else {
        // Scrolling up
        nav.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});


// Animate the text coming from the left side once scrolled in viewport for The Creative Timeline section

// Function to check if an element is in the viewport
function isInViewport(element) {
const rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

// Add a scroll event listener
window.addEventListener('scroll', () => {
const animateElements = document.querySelectorAll('.animate');
animateElements.forEach((element) => {
    if (isInViewport(element)) {
    element.style.animationPlayState = 'running';
    }
});
});