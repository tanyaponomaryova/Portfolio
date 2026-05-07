document.addEventListener('DOMContentLoaded', () => {
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

    card.appendChild(cover);
    card.appendChild(title);
    card.appendChild(shortDescription);

    gallery.appendChild(card);
  });
});
