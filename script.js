// Gimmy Gamming King - main interactions

const text = document.getElementById('text');
const treeLeft = document.getElementById('tree-left');
const treeRight = document.getElementById('tree-right');
const gateLeft = document.getElementById('gate-left');
const gateRight = document.getElementById('gate-right');

// Parallax effect - only runs when the required hero elements exist.
if (text && treeLeft && treeRight && gateLeft && gateRight) {
    window.addEventListener('scroll', () => {
        const value = window.scrollY;
        text.style.marginTop = `${value * 2.5}px`;
        treeLeft.style.left = `${value * -1.5}px`;
        treeRight.style.left = `${value * 1.5}px`;
        gateLeft.style.left = `${value * 0.5}px`;
        gateRight.style.left = `${value * -0.5}px`;
    }, { passive: true });
}

// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
        });
    });

    document.addEventListener('click', event => {
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
            navigation.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation menu');
        }
    });
}

// Slideshow
const slides = Array.from(document.querySelectorAll('.mySlides'));
const dots = Array.from(document.querySelectorAll('.dot'));
const previousButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideIndex = 0;
let slideTimer;

function showSlide(index) {
    if (!slides.length) return;

    slideIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
        dot.setAttribute('aria-current', i === slideIndex ? 'true' : 'false');
    });
}

function plusSlides(amount) {
    showSlide(slideIndex + amount);
    restartSlideshow();
}

function currentSlide(index) {
    showSlide(index);
    restartSlideshow();
}

function startSlideshow() {
    if (slides.length < 2) return;
    slideTimer = window.setInterval(() => {
        showSlide(slideIndex + 1);
    }, 8000);
}

function restartSlideshow() {
    if (slideTimer) window.clearInterval(slideTimer);
    startSlideshow();
}

if (slides.length) {
    showSlide(0);
    startSlideshow();

    previousButton?.addEventListener('click', () => plusSlides(-1));
    nextButton?.addEventListener('click', () => plusSlides(1));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));
    });

    const slideshow = document.querySelector('.slideshow-container');
    if (slideshow) {
        slideshow.addEventListener('mouseenter', () => {
            if (slideTimer) window.clearInterval(slideTimer);
        });
        slideshow.addEventListener('mouseleave', startSlideshow);
    }
}
