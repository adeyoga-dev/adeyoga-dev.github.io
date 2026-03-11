$(document).ready(() => {
  const techStackItems = [
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Composer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg" },
    { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" }
  ];

  const experienceItems = [
    {
      period: "May 2025 - Present",
      title: "Web Developer - Internship",
      company: "PT Toyoda Gosei Indonesia • Karawang, Indonesia",
      highlights: ["Built and optimized various web-based application modules."]
    },
    {
      period: "May 2024 - May 2025",
      title: "Web Developer/IT Infrastructure Support - Internship",
      company: "PT Astra NTN Driveshaft Indonesia (Astra OtopartsGroup) • Karawang, Indonesia",
      highlights: [
        "Developed and improved web modules for internal use.",
        "Designed data structures and APIs for module integration.",
        "Managed user access and kept systems secure.",
        "Created scripts & schedulers for database and project file backups (daily/weekly).",
        "Handled Docker monitoring, server maintenance, and troubleshooting."
      ]
    },
    {
      period: "May 2023 - Feb 2024",
      title: "IT Staff - Internship",
      company: "PT Trimitra Chitrahasta (Triputra Group) • Cikarang, Indonesia",
      highlights: [
        "Gathered requirements, analyzed needs, and documented systems.",
        "Built a Laravel-based Trouble Tracker app for machine maintenance reports.",
        "Trained users for trial/maintenance in the field.",
        "Contributed to IT solutions to support company needs."
      ]
    },
    {
      period: "Mar 2021 - Jul 2021",
      title: "Web Developer - Internship (Remote)",
      company: "GLC Networks • Bandung, Indonesia",
      highlights: [
        "Joined programming fundamentals training (Python, PHP, PostgreSQL, Linux).",
        "Worked on developing Veve SelfCare app using Laravel."
      ]
    }
  ];

  const projectItems = Array.from({ length: 10 }, (_, index) => ({
    image: "https://dummyimage.com/600x400/0d1117/82aaff&text=Project+Preview",
    title: `Project Dummy ${index + 1}`,
    description:
      "Dummy case study untuk simulasi modal detail portofolio dengan tampilan clean, readable, dan tetap sejalan dengan dark theme website.",
    link: "#",
    category: "Internal Web App",
    role: "Fullstack Developer",
    timeline: "6 Weeks Sprint",
    stack: ["Laravel", "PostgreSQL", "jQuery", "Bootstrap"],
    gallery: [
      "https://dummyimage.com/1000x600/161b22/82aaff&text=Dashboard+Overview",
      "https://dummyimage.com/1000x600/161b22/e5e9f0&text=Feature+Workflow",
      "https://dummyimage.com/1000x600/161b22/4f8cff&text=Report+Analytics"
    ]
  }));

  const renderTechStack = () => {
    const html = techStackItems
      .map(
        (item) =>
          `<img src="${item.icon}" alt="${item.name}" title="${item.name}" class="tech-stack__logo" loading="lazy" decoding="async" />`
      )
      .join("");

    $("#techStackLogos").html(html);
  };

  const renderExperienceTimeline = () => {
    const html = experienceItems
      .map(
        (item) => `
          <div class="timeline-item">
            <div class="timeline-card">
              <div class="timeline-period">${item.period}</div>
              <h3 class="timeline-title">${item.title}</h3>
              <div class="timeline-company">${item.company}</div>
              <ul class="timeline-highlights">
                ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
              </ul>
            </div>
          </div>
        `
      )
      .join("");

    $("#experienceTimeline").html(html);
  };

  const renderProjects = () => {
    const html = projectItems
      .map(
        (project, index) => `
          <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-card__img" loading="lazy" decoding="async" />
            <h3 class="font-upheaval">${project.title}</h3>
            <p class="project-card__desc font-monogram">${project.description}</p>
            <a href="${project.link}" data-project-index="${index}" class="project-card__link js-open-portfolio-modal">View Details</a>
          </div>
        `
      )
      .join("");

    $("#projectsList").html(html);
  };

  const openPortfolioModal = (projectIndex) => {
    const modalElement = $("#portfolioModal")[0];
    const project = projectItems[projectIndex];

    if (!project || !modalElement) {
      return;
    }

    $("#portfolioModalTitle").text(project.title);
    $("#portfolioModalDescription").text(project.description);

    const metaHtml = [
      { label: "Category", value: project.category },
      { label: "Role", value: project.role },
      { label: "Timeline", value: project.timeline },
      { label: "Tech Stack", value: project.stack.join(", ") }
    ]
      .map((item) => `<div class="portfolio-meta-card"><span>${item.label}</span><strong>${item.value}</strong></div>`)
      .join("");

    const galleryHtml = project.gallery
      .map(
        (image, imageIndex) => `
          <figure class="portfolio-gallery__item">
            <img src="${image}" alt="${project.title} gallery ${imageIndex + 1}" loading="lazy" decoding="async" />
            <figcaption>Preview ${imageIndex + 1}</figcaption>
          </figure>
        `
      )
      .join("");

    $("#portfolioModalMeta").html(metaHtml);
    $("#portfolioGallery").html(galleryHtml);

    modalElement.showModal();
  };

  const closePortfolioModal = () => {
    const modalElement = $("#portfolioModal")[0];
    if (modalElement && modalElement.open) {
      modalElement.close();
    }
  };

  const toggleMobileMenu = () => {
    $("#navMenu").toggleClass("nav-menu--open");
  };

  const setActiveNavItem = (menuItem) => {
    $("#navMenu li").removeClass("nav-menu--active");
    menuItem.addClass("nav-menu--active");

    if (window.innerWidth <= 768) {
      $("#navMenu").removeClass("nav-menu--open");
    }
  };

  const closeMenuOnOutsideClick = (event) => {
    if (!$(event.target).closest("nav").length && $("#navMenu").hasClass("nav-menu--open")) {
      $("#navMenu").removeClass("nav-menu--open");
    }
  };

  const setFooterYear = () => {
    $("#footer-year").text(new Date().getFullYear());
  };

  const initialize = () => {
    renderTechStack();
    renderExperienceTimeline();
    renderProjects();
    setFooterYear();

    $("#navToggle").on("click", toggleMobileMenu);
    $("#navMenu li").on("click", function () {
      setActiveNavItem($(this));
    });
    $(document).on("click", closeMenuOnOutsideClick);

    $(document).on("click", ".js-open-portfolio-modal", function (event) {
      event.preventDefault();
      openPortfolioModal($(this).data("project-index"));
    });

    $("#portfolioModalClose").on("click", closePortfolioModal);
    $("#portfolioModal").on("click", function (event) {
      if (event.target === this) {
        closePortfolioModal();
      }
    });

    $(document).on("keydown", function (event) {
      if (event.key === "Escape") {
        closePortfolioModal();
      }
    });
  };

  initialize();
});
