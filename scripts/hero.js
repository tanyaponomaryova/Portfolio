document.addEventListener('DOMContentLoaded', () => {
  // #region hero
  const title = document.querySelector('#hero-title');
  const words = Array.from(title.querySelectorAll('span'));

  const iconsUrl = [
    '../img/icons/icon(1).svg',
    '../img/icons/icon(2).svg',
    '../img/icons/icon(3).svg',
    '../img/icons/icon(4).svg',
    '../img/icons/icon(5).svg',
    '../img/icons/icon(6).svg',
    '../img/icons/icon(7).svg',
    '../img/icons/icon(8).svg',
    '../img/icons/icon(9).svg',
    '../img/icons/icon(10).svg',
    '../img/icons/icon(11).svg',
    '../img/icons/icon(12).svg',
    '../img/icons/icon(13).svg',
    '../img/icons/icon(14).svg',
    '../img/icons/icon(15).svg',
    '../img/icons/icon(16).svg',
    '../img/icons/icon(17).svg',
    '../img/icons/icon(18).svg',
  ];

  const heroSection = document.getElementById('hero-section');
  let last = 0;
  heroSection.addEventListener('mousemove', (e) => {
    showTrailImg(e);
  });

  function showTrailImg(e) {
    // ограничение частоты создания картинок
    const now = Date.now();
    if (now - last < 100) return;
    last = now;

    const img = document.createElement('img');

    img.src = iconsUrl[Math.floor(Math.random() * iconsUrl.length)];

    img.classList.add('trail-img');

    img.style.left = e.pageX + 'px';
    img.style.top = e.pageY + 'px';

    heroSection.appendChild(img);

    // удаляем через время
    setTimeout(() => {
      img.remove();
    }, 1000);
  }

  // ИКОНКИ В ЗАГОЛОВКЕ
  function showRandomIcon() {
    const oldIcon = title.querySelector('.icon');
    if (oldIcon) oldIcon.remove();

    const randomIndex = Math.floor(Math.random() * (words.length - 1));

    const img = document.createElement('img');
    img.src = iconsUrl[Math.floor(Math.random() * iconsUrl.length)];
    img.classList.add('icon');

    //вставляет элемент СРАЗУ ПОСЛЕ случайно выбранного слова
    if (randomIndex % 2 == 0) {
      words[randomIndex].after(img);
    } else {
      words[randomIndex].before(img);
    }

    // Плавное появление (раздвигает текст)
    gsap.to(img, {
      width: 'auto',
      height: '60px',
      marginLeft: 6,
      marginRight: 6,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Плавное исчезновение
    gsap.to(img, {
      width: 0,
      marginLeft: 0,
      marginRight: 0,
      duration: 1,
      delay: 1,
      ease: 'power2.out',
      onComplete: () => img.remove(),
    });
  }

  // Запуск каждые 3 секунды
  setInterval(showRandomIcon, 3000);

  console.log(gsap);

  // #endregion
});
