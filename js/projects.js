/* ==========================================================================
   Project data + card rendering
   To add a project, append an entry to the relevant list below — the cards
   are generated automatically.
   ========================================================================== */

const MOBILE_PROJECTS = [
  {
    title: 'Happy Place',
    description: 'Save and revisit memorable spots with an on-the-spot photo and a map-picked location. Offline SQLite storage, light/dark theming, and an interactive OpenStreetMap picker.',
    tags: ['Flutter', 'SQLite', 'OpenStreetMap'],
    url: 'https://github.com/Iftikhar-Shams-Niloy/flutter_happy_place',
  },
  {
    title: 'Auto Service Hub',
    description: 'Connects vehicle owners with nearby garages and service centers. Firebase auth via Google & Facebook, location-based search, service filtering, and push notifications.',
    tags: ['Flutter', 'Firebase', 'Firestore'],
    url: 'https://github.com/Iftikhar-Shams-Niloy/flutter_auto_service_hub',
  },
  {
    title: 'FoodyCam',
    description: 'Camera-first food capture with on-device recognition. Clean layered architecture, multi-theme support, and a TensorFlow Lite model wired in from a Python notebook.',
    tags: ['Flutter', 'TensorFlow Lite', 'Python'],
    url: 'https://github.com/Iftikhar-Shams-Niloy/flutter_foodycam',
  },
];

const AI_PROJECTS = [
  {
    title: 'TipClick AI',
    description: 'A machine-learning experiment that turns simple inputs into instant, data-backed estimates using a trained neural network.',
    tags: ['Python', 'Neural Networks'],
    url: 'https://github.com/Iftikhar-Shams-Niloy/tip_click_AI',
  },
  {
    title: 'Stress Level Detection',
    description: 'A system that classifies human stress levels from physiological and behavioral signals, built and evaluated end-to-end in Python.',
    tags: ['Python', 'Classification', 'ML'],
    url: 'https://github.com/Iftikhar-Shams-Niloy/Stress-Level-Detection-System',
  },
  {
    title: 'Car Price Prediction',
    description: 'A neural-network regression model estimating used-car prices from vehicle features, developed and analyzed in a Jupyter notebook.',
    tags: ['TensorFlow', 'Neural Networks', 'Jupyter'],
    url: 'https://github.com/Iftikhar-Shams-Niloy/Car-Price-Prediction-Using-Neural-Networks/blob/main/model.ipynb',
  },
];

/**
 * Build one project card element.
 * @param {object} project - entry from MOBILE_PROJECTS / AI_PROJECTS
 * @param {number} number - 1-based position, shown as "01", "02", ...
 * @param {string} variant - 'dark' | 'light' (visual theme of the card)
 */
function createProjectCard(project, number, variant) {
  const card = document.createElement('a');
  card.className = `project-card project-card--${variant} reveal`;
  card.href = project.url;
  card.target = '_blank';
  card.rel = 'noopener';

  const tags = project.tags
    .map((tag) => `<span class="project-card__tag">${tag}</span>`)
    .join('');

  card.innerHTML = `
    <div class="project-card__top">
      <span class="project-card__number">${String(number).padStart(2, '0')}</span>
      <span class="project-card__arrow" aria-hidden="true">↗</span>
    </div>
    <div class="project-card__title">${project.title}</div>
    <p class="project-card__desc">${project.description}</p>
    <div class="project-card__tags">${tags}</div>
  `;
  return card;
}

/** Render a list of projects into a grid container. */
function renderProjects(containerId, projects, variant) {
  const container = document.getElementById(containerId);
  if (!container) return;
  projects.forEach((project, index) => {
    container.appendChild(createProjectCard(project, index + 1, variant));
  });
}

renderProjects('mobileProjects', MOBILE_PROJECTS, 'dark');
renderProjects('aiProjects', AI_PROJECTS, 'light');
