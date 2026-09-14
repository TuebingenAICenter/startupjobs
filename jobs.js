const companies = [
  {
    name: "Polybot",
    location: "Tübingen",
    description: "An AI robotics company developing autonomous systems for flexible industrial work.",
    url: "https://polybot-careers.notion.site/landing-page",
    logo: "assets/polybot.png",
    roles: ["Lead Mechatronics Engineer"],
  },
  {
    name: "Exponential Security Labs",
    location: "Tübingen / Remote",
    description: "AI security research and engineering for systems that can find, test and help fix vulnerabilities.",
    url: "https://expsec.ai/careers/",
    logo: "assets/expsec.png",
    roles: ["Member of Technical Staff", "Research Intern"],
  },
  {
    name: "Mirelo AI",
    location: "Berlin / Tübingen · Hybrid",
    description: "Generative audio models that create realistic sound, speech and music directly from video.",
    url: "https://jobs.ashbyhq.com/mirelo",
    logo: "assets/mirelo.webp",
    roles: [
      "Research Scientist - Model Team",
      "Research Scientist - Audio Codec",
      "Full-Stack Software Engineer",
      "Principal Product Designer",
      "Principal Product Manager",
      "Founder Associate",
      "Community and Creator Growth Manager",
      "Training Infrastructure Engineer",
    ],
  },
  {
    name: "Oktonex",
    location: "Tübingen · On-site",
    description: "Physical AI that lets robots learn dexterous industrial tasks instead of relying on rigid automation.",
    url: "https://oktonex.notion.site/careers-at-oktonex",
    logo: "assets/oktonex.png",
    roles: [
      "Founding Research Engineer, Robot Learning (m/w/d)",
      "Founding Research Scientist, Robot Learning (m/w/d)",
      "Open Application (m/w/d)",
    ],
  },
  {
    name: "KE:SAI",
    location: "Tübingen",
    description: "An open research lab building robust, safe and scalable physical AI.",
    url: "https://kesai.eu/join/",
    logo: "assets/kesai.jpg",
    roles: [
      "Technical Staff: Research Scientist",
      "Technical Staff: Research Engineer",
      "Technical Staff: Infrastructure Engineer",
      "PhD Student",
    ],
  },
  {
    name: "Calliora",
    location: "Munich · Primarily on-site",
    description: "AI-driven revenue and process management that helps hospitals spend more time caring for patients.",
    url: "https://calliora.jobs.personio.com/?language=en",
    logo: "assets/calliora.png",
    roles: ["Founder's Associate", "Founding Growth", "Open Application", "Product Engineer", "Value Engineering Intern"],
  },
  {
    name: "Maddox AI",
    location: "Tübingen / Cologne · Hybrid",
    description: "AI-powered visual quality control that helps manufacturers detect defects and reduce scrap.",
    url: "https://careers.maddox.ai/jobs",
    logo: "assets/maddox.jpg",
    roles: [
      "HR & Talent Acquisition Manager - Intern / Working Student",
      "Business Development Intern (m/w/d)",
      "(Senior-)Account Executive (m/w/d)",
    ],
  },
  {
    name: "MIMIR",
    location: "Tübingen / Remote",
    description: "The prediction and routing layer that chooses the best AI model or agent for each task.",
    url: "https://www.mimir.fit/careers.html",
    logo: "assets/mimir.png",
    roles: ["ML Scientist", "Data Engineer", "Developer - Routing & Multi-Agent Platform"],
  },
  {
    name: "Feyer",
    location: "Tübingen / Munich",
    description: "A frontier AI lab building differentiable scientific simulators for complex physical systems.",
    url: "https://www.feyer.ai/jobs",
    logo: "assets/feyer.webp",
    roles: ["Simulation Engineer | Optics", "Simulation Engineer | Particle Dynamics", "Simulation Engineer | Quantum"],
  },
  {
    name: "Ontic Labs",
    location: "Tübingen",
    description: "A foundation-model lab developing general-purpose physical intelligence for robots and embodied systems.",
    url: "https://onticlabs.notion.site/team-careers",
    logo: "assets/ontic.png",
    roles: [
      "Research Scientist - World Models, Robotics and 3D Humans",
      "Head of Engineering",
      "Research Intern",
      "Open Application",
    ],
  },
  {
    name: "Optocycle",
    location: "Tübingen · On-site",
    description: "Optical material intelligence that makes construction and recycling waste streams measurable in real time.",
    url: "https://de.indeed.com/viewjob?jk=fafc603661b2c4e4",
    logo: "assets/optocycle.png",
    roles: ["Application Engineer (m/w/d)"],
  },
  {
    name: "Prior Labs",
    location: "Berlin / Freiburg / New York",
    description: "A frontier AI lab building foundation models for the world's most important structured data.",
    url: "https://jobs.ashbyhq.com/prior-labs",
    logo: "assets/tabularis.png",
    roles: [
      { title: "Research Scientist, Foundation Model", url: "https://jobs.ashbyhq.com/prior-labs/b37463f2-775d-42e0-8c58-4ec26927534b" },
      { title: "Research Engineer, Foundation Model", url: "https://jobs.ashbyhq.com/prior-labs/a1d005f1-732d-41c1-bd23-4e37b4ecdc7b" },
      { title: "Research Scientist Intern (PhD)", url: "https://jobs.ashbyhq.com/prior-labs/09410424-8e94-4747-8155-bbcd0b1d4f6e" },
      { title: "ML Engineer, Forward Deployed", url: "https://jobs.ashbyhq.com/prior-labs/928de80c-278f-4f38-aeb2-e4d10b79f38e" },
      { title: "ML Engineer, Backend", url: "https://jobs.ashbyhq.com/prior-labs/93ef6100-091d-46f5-8f73-3843fe993ede" },
      { title: "Applied Scientist, Data Science", url: "https://jobs.ashbyhq.com/prior-labs/f1ea16f3-8414-4ffa-acf8-701577c9c7dc" },
      { title: "Director of Engineering", url: "https://jobs.ashbyhq.com/prior-labs/2c466435-84fd-4a58-99ce-946f76dc3658" },
      { title: "Full Stack Engineer, ML Platform", url: "https://jobs.ashbyhq.com/prior-labs/e8eb37eb-4c7a-4967-b2fc-5850b90dad7b" },
      { title: "Founder Associate (NYC)", url: "https://jobs.ashbyhq.com/prior-labs/1e0d43ae-26b1-4b59-a28f-cb1f35a8b576" },
      { title: "Visiting Associate Cohort", url: "https://jobs.ashbyhq.com/prior-labs/e8bbd087-8362-465c-9633-dc17d6f13430" },
      { title: "ML Engineer, Infrastructure", url: "https://jobs.ashbyhq.com/prior-labs/bd4fe067-0e99-4268-b5ad-d1f8e36c6976" },
      { title: "Account Executive, New York", url: "https://jobs.ashbyhq.com/prior-labs/73eb6771-8f85-4a0a-8362-ef8a84c2680c" },
      { title: "Account Executive, Berlin", url: "https://jobs.ashbyhq.com/prior-labs/55dbbaae-715a-4423-8a0f-286ffc69a2de" },
      { title: "Finance Lead (FP&A)", url: "https://jobs.ashbyhq.com/prior-labs/8d162333-041c-4fe4-a5b7-f6e9c0ed916a" },
      { title: "Research Scientist, Foundational Data Science", url: "https://jobs.ashbyhq.com/prior-labs/f3b358fd-7cc8-417c-9181-c02213935e54" },
      { title: "Head of Partnerships (SAP)", url: "https://jobs.ashbyhq.com/prior-labs/c0bba086-41fa-400f-8ac1-3b022d82b4bc" },
      { title: "Head of Operations", url: "https://jobs.ashbyhq.com/prior-labs/e4153b6c-5d0c-4d04-a0ff-dc68ccaf0515" },
      { title: "Recruiter, GTM and Ops (New York)", url: "https://jobs.ashbyhq.com/prior-labs/73765128-fdb5-4d7f-9b1a-4907c3ab4c0f" },
      { title: "Technical Recruiter (Berlin)", url: "https://jobs.ashbyhq.com/prior-labs/ad33ab39-e54b-4013-9b30-77556afcd886" },
      { title: "Contract Recruiter, GTM and Ops (New York)", url: "https://jobs.ashbyhq.com/prior-labs/87753dc0-3bee-4211-86a2-20b5bd18c253" },
      { title: "Partnerships Manager (Non-SAP)", url: "https://jobs.ashbyhq.com/prior-labs/5703289f-94ec-4201-ac9d-7735d239c490" },
      { title: "Partnerships Manager (SAP)", url: "https://jobs.ashbyhq.com/prior-labs/47492113-ef5b-4d84-9374-25b526309b69" },
      { title: "Founder Associate (Berlin)", url: "https://jobs.ashbyhq.com/prior-labs/95d8c3c1-8524-4ea4-83ec-273b0fefe534" },
      { title: "Technical Product Manager, Integrations", url: "https://jobs.ashbyhq.com/prior-labs/9d27597d-c54b-4947-9715-c0380104a74b" },
    ],
  },
  {
    name: "Grubel",
    location: "Munich / Tübingen · Hybrid",
    description: "A research lab building matter-specific AI for high-stakes knowledge work, starting with law.",
    url: "https://grubel.ai/#careers",
    logo: "assets/grubel.png",
    roles: ["Founding Legal Engineer", "Founding Research Engineer or Research Scientist", "Chief of Staff or Founders Associate"],
  },
  {
    name: "KI macht Schule",
    location: "Germany-wide · Volunteer",
    description: "A nonprofit education initiative helping students understand, use and critically discuss artificial intelligence.",
    url: "https://ki-macht-schule.de/jobs",
    logo: "assets/ki.svg",
    volunteer: true,
    roles: ["Volunteer course leader", "Teaching content and technical implementation", "Project organization"],
  },
];

const technicalPattern = /research|scientist|engineer|developer|technical|ml |model|simulation|infrastructure|product engineer|data science/i;
const earlyCareerPattern = /intern|student|phd|visiting associate|cohort/i;

function normalizeRole(role, company) {
  const data = typeof role === "string" ? { title: role } : role;
  let kind = "business";
  if (company.volunteer) kind = "volunteer";
  else if (earlyCareerPattern.test(data.title)) kind = "early-career";
  else if (technicalPattern.test(data.title)) kind = "technical";
  return { ...data, kind, url: data.url || company.url };
}

const state = { query: "", company: "all", kind: "all" };
const board = document.querySelector("#job-board");
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");
const companyFilter = document.querySelector("#company-filter");

function roleLabel(kind) {
  return {
    technical: "Technical",
    business: "Business",
    "early-career": "Early career",
    volunteer: "Volunteer",
  }[kind];
}

function render() {
  const query = state.query.trim().toLowerCase();
  let visibleRoles = 0;
  const sections = companies.map((company) => {
    if (state.company !== "all" && company.name !== state.company) return "";
    const roles = company.roles.map((role) => normalizeRole(role, company)).filter((role) => {
      const matchesKind = state.kind === "all" || role.kind === state.kind;
      const haystack = `${company.name} ${company.location} ${company.description} ${role.title}`.toLowerCase();
      return matchesKind && (!query || haystack.includes(query));
    });
    if (!roles.length) return "";
    visibleRoles += roles.length;
    const jobs = roles.map((role) => `
      <li>
        <a class="job-link" href="${role.url}" target="_blank" rel="noopener noreferrer" aria-label="${role.title} at ${company.name}, opens application page">
          <span class="job-title">${role.title}</span>
          <span class="job-kind">${roleLabel(role.kind)}</span>
          <span class="job-arrow" aria-hidden="true">↗</span>
        </a>
      </li>`).join("");
    return `
      <article class="company-section${company.volunteer ? " volunteer-section" : ""}">
        <div class="company-overview">
          <div class="company-identity">
            <img class="company-logo" src="${company.logo}" alt="">
            <h3>${company.name}</h3>
          </div>
          <p class="company-description">${company.description}</p>
          <div class="company-meta"><span>${company.location}</span><span>${roles.length} ${roles.length === 1 ? "role" : "roles"}</span></div>
          <a class="company-link" href="${company.url}" target="_blank" rel="noopener noreferrer">Company careers <span aria-hidden="true">↗</span></a>
        </div>
        <ul class="job-list">${jobs}</ul>
      </article>`;
  }).join("");

  board.innerHTML = sections;
  emptyState.hidden = visibleRoles !== 0;
  resultCount.textContent = `${visibleRoles} ${visibleRoles === 1 ? "opportunity" : "opportunities"}`;
}

companies.forEach((company) => {
  const option = document.createElement("option");
  option.value = company.name;
  option.textContent = company.name;
  companyFilter.append(option);
});

document.querySelector("#search").addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

companyFilter.addEventListener("change", (event) => {
  state.company = event.target.value;
  render();
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active").classList.remove("is-active");
    button.classList.add("is-active");
    state.kind = button.dataset.filter;
    render();
  });
});

const paidCompanies = companies.filter((company) => !company.volunteer);
document.querySelector("#position-count").textContent = paidCompanies.reduce((total, company) => total + company.roles.length, 0);
document.querySelector("#startup-count").textContent = paidCompanies.length;
render();
