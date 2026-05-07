document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('project');

  const project = projects.find((p) => p.slug === slug);
  const page = document.getElementById('project-page');

  // меняем название вкладки
  document.title = `${project.title}`;

  const descSection = document.createElement('section');
  descSection.innerHTML = `<h2>${project.title}</h2>
      <div class="paragraph-tags">
        <p class="paragraph">
          ${project.fullDescription}
        </p>
        <p></p>
        <p>
          ${project.tags.map((tag) => `${tag}<br>`).join('')}
        </p>
      </div>`;

  const contentSection = document.createElement('section');
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
    href="/project.html?project=${nextProject.slug}"
    class="next-project-link"
  >
    Следующий проект —
    ${nextProject.title}
  </a>
`;
});
