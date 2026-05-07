// Анимация и интерактив с галереей
document.addEventListener('DOMContentLoaded', () => {
  // #region gallery working version without drag / swipe
  const gallery = document.getElementById('projects-gallery');

  const leftBtn = document.querySelector('.arrow.left');
  const rightBtn = document.querySelector('.arrow.right');

  let direction = 1; // 1 = right, -1 = left
  let speed = 1;

  let paused = false;
  let resumeTimeout = null;

  function autoScrollLoop() {
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;

    const atEnd = gallery.scrollLeft >= maxScroll;
    const atStart = gallery.scrollLeft <= 0;

    if (!paused) {
      gallery.scrollLeft += speed * direction;

      if (atEnd) direction = -1;
      if (atStart) direction = 1;
    }

    updateArrows();
    requestAnimationFrame(autoScrollLoop);
  }

  autoScrollLoop();

  function pauseAutoScroll() {
    paused = true;

    clearTimeout(resumeTimeout);

    resumeTimeout = setTimeout(() => {
      paused = false;
    }, 2000);
  }

  leftBtn.addEventListener('click', () => {
    pauseAutoScroll();
    gallery.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    pauseAutoScroll();
    gallery.scrollBy({ left: 300, behavior: 'smooth' });
  });

  function updateArrows() {
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;

    const atStart = gallery.scrollLeft <= 0;
    const atEnd = gallery.scrollLeft >= maxScroll;

    leftBtn.classList.toggle('hidden', atStart);
    rightBtn.classList.toggle('hidden', atEnd);
  }
  // #endregion
});
