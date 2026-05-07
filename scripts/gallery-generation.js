document.addEventListener('DOMContentLoaded', () => {
  // css переменные
  const rootStyles = getComputedStyle(document.documentElement);

  const gallery = document.getElementById('projects-gallery');

  //   на основе каждого объекта project создаём его карточку
  projects.forEach((project) => {
    // создаём элемент Карточка
    const card = document.createElement('a');
    card.href = `project.html?project=${project.slug}`;
    card.className = 'project-card';

    // элемент обложка
    const cover = document.createElement('div');
    cover.className = 'project-cover';
    cover.style.backgroundImage = `url("img/projects/${project.slug}/${project.coverUrl}")`;

    // элемент название
    const title = document.createElement('h3');
    title.className = 'project-title';
    title.innerHTML = `${project.title}`;

    // элемент описание
    const shortDescription = document.createElement('p');
    shortDescription.className = 'project-desc';
    shortDescription.innerHTML = `${project.shortDescription}`;

    // теги
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'tags-container';
    project.tags.forEach((projectTag) => {
      const tag = document.createElement('span');
      tag.innerHTML = projectTag;

      // красим теги
      if (projectTag === 'Иллюстрация') {
        tag.style.backgroundColor = rootStyles.getPropertyValue('--tag-1');
      } else if (projectTag === 'Интерфейс') {
        tag.style.backgroundColor = rootStyles.getPropertyValue('--tag-2');
      } else if (projectTag === 'Айдентика') {
        tag.style.backgroundColor = rootStyles.getPropertyValue('--tag-3');
      } else if (projectTag === '3D') {
        tag.style.backgroundColor = rootStyles.getPropertyValue('--tag-4');
      } else if (projectTag === 'Постер') {
        tag.style.backgroundColor = rootStyles.getPropertyValue('--tag-5');
      } else if (projectTag === 'Книга') {
        tag.style.backgroundColor = rootStyles.getPropertyValue('--tag-6');
      } else if (projectTag === 'Веб-дизайн') {
        tag.style.backgroundColor = rootStyles.getPropertyValue('--tag-7');
      } else if (projectTag === 'Анимация') {
        tag.style.backgroundColor = rootStyles.getPropertyValue('--tag-8');
      } else if (projectTag === 'Упаковка') {
        tag.style.backgroundColor = rootStyles.getPropertyValue('--tag-9');
      }

      tagsContainer.appendChild(tag);
    });

    card.appendChild(cover);
    card.appendChild(title);
    card.appendChild(tagsContainer);
    card.appendChild(shortDescription);

    gallery.appendChild(card);
  });
});
