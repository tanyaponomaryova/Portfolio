document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(
    '.project-card, p, span, h1, h2, h3, a, #footer-placeholder, img'
  );

  console.log('Элементы');
  console.log(elements);

  elements.forEach((el) => {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });
});
