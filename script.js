const observers = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, options);

observers.forEach(section => {
  appearOnScroll.observe(section);
});
