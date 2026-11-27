export type SkillCategory = {
  id: string;
  title: string;
  items: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  kind: string;
  description: string;
  technologies: string[];
  features: string[];
};

export type ExperienceItem = {
  id: string;
  period: string;
  role: string;
  company: string;
  responsibilities: string[];
  // Only tools explicitly named in the CV responsibilities for that role.
  stack?: string[];
};

export type NavLink = {
  label: string;
  href: string;
  // Shown in the compact floating navbar; all links stay in the mobile menu.
  primary?: boolean;
};

export type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  highlighted?: boolean;
};

export const PROFILE = {
  fullName: "Damar Galih Subiyanto",
  role: "Junior Web Developer | Frontend Developer",
  headline: "Junior Web Developer | Frontend Developer | Informatics Graduate",
  location: "North Jakarta, Indonesia",
  email: "damard333@gmail.com",
  linkedin: "https://www.linkedin.com/in/damar-galih-subiyanto-a1b2a9268/",
  instagram: "https://www.instagram.com/margal1h_/",
  github: "https://github.com/Marrboy/",
  // Owner-supplied photo. Optimized WebP from public/images/profile.png (~190 KB vs 6.9 MB).
  // ProfileImage falls back to a monogram if the file is missing.
  avatar: "/images/profile.webp",
};

export const SUMMARY =
  "I am an Informatics graduate with a strong interest in web development and data analysis. I have hands-on experience developing responsive web applications using React.js, JavaScript, and Tailwind CSS, along with backend development using Express.js and PostgreSQL. I also have experience in data processing and machine learning using Python, Pandas, NumPy, and Scikit-learn. I am eager to continuously improve my technical skills and contribute to real-world technology projects.";

// Concise version for the hero. Same CV-backed facts as SUMMARY; the full version
// stays in the About section, the CV page and JSON-LD so the hero reads faster.
export const HERO_SUMMARY =
  "I'm an Informatics graduate who builds responsive web applications with React.js, JavaScript and Tailwind CSS. I've also worked with Express.js and PostgreSQL on the backend, plus Python, Pandas and Scikit-learn for data analysis and machine learning.";

export const NAV_LINKS: NavLink[] = [
  { label: "About Me", href: "#about", primary: true },
  { label: "Services", href: "#skills", primary: true },
  { label: "Project", href: "#projects", primary: true },
  { label: "Experience", href: "#experience", primary: true },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// Chips on the About section. Every entry is an existing CV skill.
export const ABOUT_HIGHLIGHTS = [
  "Web Development",
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "UI/UX Design",
  "Express.js",
  "PostgreSQL",
  "Data Analysis",
];

// Counts are derived from the data below so the hero never shows invented metrics.
export const EDUCATION = {
  school: "Gunadarma University",
  degree: "Bachelor of Informatics",
  period: "September 2022 – August 2026",
  completion: "August 2026",
  gpa: "3.58/4.00",
};

export const ORGANIZATION = {
  name: "HIMTI Gunadarma",
  role: "Event Coordinator",
  period: "October 2024 – July 2025",
  responsibilities: [
    "Managed public communication for organizational events.",
    "Promoted activities through social media and internal communication channels.",
    "Supported event documentation and reporting.",
    "Coordinated with the organizing team.",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    items: ["Express.js", "REST API"],
  },
  {
    id: "database",
    title: "Database",
    items: ["PostgreSQL", "SQL"],
  },
  {
    id: "tools",
    title: "Programming Tools",
    items: ["Git", "GitHub"],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    items: ["Wireframing", "Prototyping", "User-Centered Design"],
  },
  {
    id: "data",
    title: "Data Analysis & Machine Learning",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Linear Regression", "Data Processing"],
  },
  {
    id: "ai",
    title: "AI-Assisted Development",
    items: ["Lovable", "Antigravity", "Prompt Engineering"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "used-car-price-prediction",
    title: "Used Car Price Prediction",
    subtitle: "Linear Regression with Streamlit",
    kind: "Academic Project",
    description:
      "A web-based application developed to estimate used vehicle selling prices using the Linear Regression algorithm.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Machine Learning"],
    features: [
      "Data preprocessing",
      "Feature engineering",
      "Linear Regression model implementation",
      "Used car price prediction",
      "Interactive web interface",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "celerates-school",
    period: "September 2025 – December 2025",
    role: "Web Development & UI/UX Design",
    company: "Celerates School",
    responsibilities: [
      "Developed responsive web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
      "Assisted in backend development using Express.js and PostgreSQL.",
      "Applied UI/UX design principles through wireframing and prototyping.",
      "Collaborated with team members in design, development, testing, and deployment.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Express.js", "PostgreSQL"],
  },
  {
    id: "vibe-coding",
    period: "July 2026 – August 2026",
    role: "AI-First Web Development Participant",
    company: "Vibe Coding",
    responsibilities: [
      "Developed web applications using Lovable and Antigravity.",
      "Applied prompt engineering techniques to improve development productivity.",
      "Implemented UI/UX design principles, wireframing, and user-centered design.",
      "Explored AI integration in web applications.",
    ],
    stack: ["Lovable", "Antigravity", "Prompt Engineering"],
  },
  {
    id: "kpu-jakarta-utara",
    period: "June 2024 – July 2024",
    role: "Election Data Verification Officer (Pantarlih)",
    company: "Komisi Pemilihan Umum (KPU) Kota Administrasi Jakarta Utara",
    responsibilities: [
      "Conducted voter data verification and validation through field visits.",
      "Collected, updated, and synchronized voter information.",
      "Coordinated with residents and local authorities.",
      "Maintained data accuracy and administrative documentation.",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "bnsp",
    name: "Junior Web Programmer Certification (BNSP)",
    issuer: "LSP Universitas Gunadarma",
    year: "2026",
    highlighted: true,
  },
  {
    id: "html-course",
    name: "Basic HTML Course",
    issuer: "CodePolitan",
    year: "2024",
  },
  {
    id: "css-course",
    name: "Basic CSS Course",
    issuer: "CodePolitan",
    year: "2024",
  },
  {
    id: "git-course",
    name: "Beginner Git Course",
    issuer: "CodePolitan",
    year: "2024",
  },
  {
    id: "frontend-workshop",
    name: "Frontend Developer Workshop with React JS & Tailwind CSS",
    issuer: "DuniaCoding",
    year: "2024",
  },
  {
    id: "bootstrap-workshop",
    name: "Responsive Bootstrap Workshop",
    issuer: "DuniaCoding",
    year: "2024",
  },
  {
    id: "react-tailwind-workshop",
    name: "React JS x Tailwind CSS Workshop",
    issuer: "DuniaCoding",
    year: "2025",
  },
  {
    id: "celerates-internship",
    name: "Web Development & UI/UX Design Internship Program",
    issuer: "Celerates School",
    year: "2025",
  },
  {
    id: "bootstrap-course",
    name: "Bootstrap CSS Framework Course",
    issuer: "CodePolitan",
    year: "2026",
  },
  {
    id: "ai-first-web",
    name: "AI-First Web Development Participant",
    issuer: "CodePolitan",
    year: "2026",
  },
];

// Counts are derived from the data above so the hero never shows invented metrics.
export const HERO_METRICS = [
  { value: String(PROJECTS.length).padStart(2, "0"), label: "Academic project" },
  { value: String(EXPERIENCES.length).padStart(2, "0"), label: "Relevant roles" },
  { value: String(CERTIFICATIONS.length).padStart(2, "0"), label: "Courses & certifications" },
];
