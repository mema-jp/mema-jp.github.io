/**
 * Modern SaaS Scroll Animations
 * AI-driven Development Studio - MEMA
 */

// Number Counter Animation for Stats
function animateNumber(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');

      // Trigger number animation for stats
      if (entry.target.classList.contains('stat-number')) {
        animateNumber(entry.target);
      }

      // Unobserve after animation
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
  // Animate stat numbers
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    observer.observe(stat);
  });

  // Animate feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Animate method boxes
  const methodBoxes = document.querySelectorAll('.method-box');
  methodBoxes.forEach((box, index) => {
    box.classList.add('animate-on-scroll');
    box.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(box);
  });

  // Animate service boxes
  const serviceBoxes = document.querySelectorAll('#services .icon-box');
  serviceBoxes.forEach((box, index) => {
    box.classList.add('animate-on-scroll');
    box.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(box);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip empty hash or just #
      if (href === '#' || href === '') {
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Parallax effect for hero section (subtle)
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('#hero');

        if (hero && scrolled < window.innerHeight) {
          // Subtle parallax - only move 30% of scroll distance
          // hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }

        ticking = false;
      });

      ticking = true;
    }
  });

  // Add speed perception with stagger animations
  const staggerElements = document.querySelectorAll('.stagger-animation');
  staggerElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });

  console.log('🚀 MEMA AI-driven animations initialized');
});

// Preload critical images for faster perceived load time
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.loading = 'lazy';
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}
