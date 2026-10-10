// Reveal sections gently as they enter the viewport.
const revealItems = document.querySelectorAll('.section, .cta');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => {
    item.classList.add('reveal-on-scroll');
    observer.observe(item);
  });
}
