// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Autoplay video when it enters the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const iframe = entry.target.querySelector('iframe');
    if (!iframe) return;
    const base = iframe.src.split('?')[0];
    const videoId = base.split('/embed/')[1];
    if (entry.isIntersecting) {
      iframe.src = base + '?autoplay=1&mute=1&loop=1&playlist=' + videoId + '&rel=0&vq=hd1080';
    } else {
      iframe.src = base + '?rel=0';
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.video-wrapper').forEach(el => observer.observe(el));