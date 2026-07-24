const projects = [
  {
    title: "AI Job Application Agent",
    icon: "🤖",
    category: "automation",
    description:
      "A human-in-the-loop system for collecting jobs, scoring fit, creating evidence-based application packets, validating claims, and tracking applications.",
    tags: ["Python", "SQLite", "Automation", "Streamlit"],
    caseStudy: "https://github.com/pareshmaheshwari910/github-portfolio/blob/main/projects/ai-job-application-agent.md",
    repo: "https://github.com/pareshmaheshwari910/ai-job-application-agent"
  },
  {
    title: "Marketplace Pricing Decomposition",
    icon: "📈",
    category: "analytics",
    description:
      "A rate-versus-mix decomposition that explains changes in weighted average price or cost and translates the drivers into clear business actions.",
    tags: ["SQL", "Python", "Decomposition", "Storytelling"],
    caseStudy: "https://github.com/pareshmaheshwari910/github-portfolio/blob/main/projects/marketplace-pricing-decomposition.md",
    repo: "https://github.com/pareshmaheshwari910/marketplace-pricing-decomposition"
  },
  {
    title: "Seller Adoption and Cohort Analytics",
    icon: "👥",
    category: "analytics",
    description:
      "A longitudinal cohort framework for activation, adoption, retention, reactivation, and behavior change using reusable SQL models.",
    tags: ["SQL", "Cohorts", "Retention", "BI"],
    caseStudy: "https://github.com/pareshmaheshwari910/github-portfolio/blob/main/projects/seller-adoption-cohort-analytics.md",
    repo: "https://github.com/pareshmaheshwari910/seller-adoption-cohort-analytics"
  },
  {
    title: "Executive KPI and WBR Framework",
    icon: "📊",
    category: "bi",
    description:
      "A governed KPI layer and weekly business review workflow with metric definitions, trends, variance commentary, and action tracking.",
    tags: ["Power BI", "Tableau", "KPI Design", "Governance"],
    caseStudy: "https://github.com/pareshmaheshwari910/github-portfolio/blob/main/projects/executive-kpi-wbr-framework.md",
    repo: "https://github.com/pareshmaheshwari910/executive-kpi-wbr-framework"
  },
  {
    title: "Healthcare Data Quality Analytics",
    icon: "🏥",
    category: "data-quality",
    description:
      "A data-quality scorecard for healthcare records that measures completeness, validity, consistency, duplication, and remediation priority.",
    tags: ["SQL", "Data Quality", "Healthcare", "Validation"],
    caseStudy: "https://github.com/pareshmaheshwari910/github-portfolio/blob/main/projects/healthcare-data-quality-analytics.md",
    repo: "https://github.com/pareshmaheshwari910/healthcare-data-quality-analytics"
  },
  {
    title: "Automated Order Reconciliation",
    icon: "🔄",
    category: "automation",
    description:
      "A rules-driven reconciliation pipeline that compares transaction systems, classifies exceptions, and reduces manual review effort.",
    tags: ["SQL Server", "SSIS", "Stored Procedures", "Controls"],
    caseStudy: "https://github.com/pareshmaheshwari910/github-portfolio/blob/main/projects/automated-order-reconciliation.md",
    repo: "https://github.com/pareshmaheshwari910/automated-order-reconciliation"
  }
];

const projectGrid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const themeToggle = document.querySelector("#theme-toggle");
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

function renderProjects(filter = "all") {
  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-icon" aria-hidden="true">${project.icon}</div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="project-links">
            <a href="${project.caseStudy}">Case study →</a>
            <a href="${project.repo}" target="_blank" rel="noreferrer">Repository →</a>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
}

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setTheme("dark");
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderProjects();
