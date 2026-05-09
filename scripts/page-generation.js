document.addEventListener('DOMContentLoaded', () => {
  // css переменные
  const rootStyles = getComputedStyle(document.documentElement);

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('project');

  const project = projects.find((p) => p.slug === slug);
  const page = document.getElementById('project-page');

  // меняем название вкладки
  document.title = `${project.title}`;

  // теги
  // должно совпадать с gallery-generation
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

  const descSection = document.createElement('div');
  descSection.className = 'project-page-description';
  const title = document.createElement('h2');
  title.innerHTML = project.title;
  const paragraphTagsContainer = document.createElement('div');
  paragraphTagsContainer.className = 'paragraph-tags';
  const paragraph = document.createElement('p');
  paragraph.className = 'paragraph';
  paragraph.innerHTML = project.fullDescription;
  paragraphTagsContainer.appendChild(paragraph);
  paragraphTagsContainer.appendChild(document.createElement('p'));
  paragraphTagsContainer.appendChild(tagsContainer);

  descSection.appendChild(title);
  descSection.appendChild(paragraphTagsContainer);

  const contentSection = document.createElement('div');
  let row;
  project.content.forEach((block) => {
    if (block.type === 'text') {
      row = document.createElement('p');
      row.className = 'paragraph';
      row.innerHTML = block.content;
    } else if (block.type === 'single') {
      row = document.createElement('div');
      row.className = 'single-image';
      row.innerHTML = `<img src="img/projects/${slug}/${block.content}">`;
    } else {
      row = document.createElement('div');
      row.className = 'two-images';
      row.innerHTML = block.content
        .map((img) => `<img src="img/projects/${slug}/${img}">`)
        .join('');
    }
    contentSection.appendChild(row);
  });

  page.appendChild(descSection);
  page.appendChild(contentSection);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  document.getElementById('next-project').innerHTML = `
  <a
    href="project.html?project=${nextProject.slug}"
    class="next-project-link"
  >
    Следующий проект —
    ${nextProject.title}
  </a>
`;
});
