export const personal = {
  name: "Archana N",
  role: "Software Test Engineer",
  location: "Hyderabad, India",
  email: "narsingojuarchana27@gmail.com",
  phone: "+91 77026 39270",
  linkedin: "https://www.linkedin.com/in/archana-n",
  github: "https://github.com/",
  yearsExperience: 4,
  available: true,
  tagline: "I break software so users never have to.",
  headline: ["Quality is", "the product."],
  subheadline:
    "Software Test Engineer with 4+ years hardening web platforms, APIs, and cybersecurity modules — turning fragile releases into ship-it-Friday confidence.",
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export const metrics: Metric[] = [
  {
    value: "60%",
    label: "Faster regression cycles",
    detail:
      "Replaced manual smoke + regression with Playwright suites running on every PR.",
  },
  {
    value: "4+",
    label: "Years shipping production QA",
    detail:
      "Agile/Scrum delivery across web, mobile, dashboards & security modules.",
  },
  {
    value: "100+",
    label: "API contracts validated",
    detail:
      "Auth, authorization, payload + schema validation via Postman + Swagger.",
  },
  {
    value: "0",
    label: "Critical bugs in production",
    detail:
      "Risk-based test design caught severity-1 defects before customer release.",
  },
];

export const trustedBy = [
  "Eficens",
  "SPARK Cybersecurity",
  "VISIQ AI",
  "Playwright",
  "Postman",
  "JMeter",
  "Jira",
  "QA Touch",
  "Swagger",
  "Linux",
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  accent: "violet" | "cyan" | "lime";
  href?: string;
  hrefLabel?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "spark",
    name: "SPARK",
    category: "Verastel · Cybersecurity Platform",
    year: "2023 — Present",
    problem:
      "Verastel SPARK ships AI-driven vulnerability assessment, IntelliScore™ risk prioritization, and continuous-compliance dashboards across hybrid on-prem, cloud, and SaaS deployments — every weekly release carried high regression and contract-drift risk.",
    solution:
      "Owned end-to-end QA strategy: Playwright regression suites covering IntelliScore, OmniScan, and InsightHub flows; Postman + Swagger contract tests for every secured API; JMeter performance harness for asset-discovery and reporting endpoints.",
    impact: [
      "Cut regression execution time ~60% with parallelised Playwright runs across critical SPARK modules",
      "Hardened auth + RBAC paths so misconfiguration and CVE data could never leak across tenants",
      "Established defect SLAs in Jira tied directly to release readiness and audit-cycle commitments",
    ],
    stack: ["Playwright", "Postman", "JMeter", "QA Touch", "Jira", "Swagger"],
    accent: "violet",
    href: "https://verastel.ai/spark/",
    hrefLabel: "Visit Verastel SPARK",
    image: "/projects/spark.png",
  },
  {
    slug: "visiq",
    name: "VISIQ",
    category: "Enterprise Visitor Management",
    year: "2022 — 2023",
    problem:
      "VISIQ powers enterprise visitor flows — booking, OTP login, face-recognition check-in/out, and multi-tenant dashboards — across web and mobile. A silent regression in any one of those steps meant front-desk chaos and broken workforce safety.",
    solution:
      "Built end-to-end Playwright automation suites covering the full visitor journey: pre-booking, OTP authentication, kiosk check-in/out, and admin dashboards. Layered Postman API contract tests to validate accuracy and session integrity before every release.",
    impact: [
      "Automated 90%+ of critical visitor workflows across web & mobile",
      "Caught silent OTP + session drift bugs before customer rollout",
      "Reduced regression sign-off from days → hours per release",
    ],
    stack: ["Playwright", "API Automation", "Postman", "Linux", "Agile"],
    accent: "cyan",
    href: "https://visiq.ai/",
    hrefLabel: "Visit VISIQ",
    image: "/projects/visiq.png",
  },
  {
    slug: "policy-rego",
    name: "Policy & Rego Validation",
    category: "Security Rules QA",
    year: "2023",
    problem:
      "XSLT transforms and Rego policies powered access decisions — a wrong rule meant a security incident.",
    solution:
      "Owned XSLT + Rego test design, building input matrices that stress-tested allow/deny edge cases and policy regressions.",
    impact: [
      "Surfaced policy drift before deployment to production tenants",
      "Documented reusable test packs picked up by future QA hires",
    ],
    stack: ["Rego", "XSLT", "Linux (Ubuntu/Debian/RHEL)", "QA Touch"],
    accent: "lime",
  },
];

export type SkillGroup = {
  title: string;
  caption: string;
  skills: { name: string; level?: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Test Automation",
    caption: "End-to-end coverage that runs on every PR.",
    skills: [
      { name: "Playwright (JS)", level: 92 },
      { name: "API Automation", level: 90 },
      { name: "Regression Suites", level: 95 },
      { name: "Cross-browser / Mobile", level: 85 },
    ],
  },
  {
    title: "API & Performance",
    caption: "Contracts, schemas, and load-tested endpoints.",
    skills: [
      { name: "Postman", level: 95 },
      { name: "Swagger / OpenAPI", level: 88 },
      { name: "JMeter", level: 82 },
      { name: "Auth / RBAC Validation", level: 90 },
    ],
  },
  {
    title: "Manual & Strategy",
    caption: "Risk-based thinking before a single test runs.",
    skills: [
      { name: "Functional / Regression", level: 96 },
      { name: "Smoke & Sanity", level: 95 },
      { name: "Test Case Design", level: 94 },
      { name: "Defect Lifecycle (Jira)", level: 92 },
    ],
  },
  {
    title: "Security & AI Testing",
    caption: "Where most teams stop — I start.",
    skills: [
      { name: "Cybersecurity QA", level: 85 },
      { name: "XSLT / Rego Testing", level: 80 },
      { name: "AI-driven Testing", level: 78 },
      { name: "Linux (Ubuntu/Debian/RHEL)", level: 80 },
    ],
  },
];

export const tools = [
  "Playwright",
  "Postman",
  "JMeter",
  "Swagger",
  "Jira",
  "QA Touch",
  "Java",
  "JavaScript",
  "Python",
  "Linux",
  "Agile / Scrum",
  "AI Test Agents",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Eficens Software Services Pvt. Ltd.",
    role: "Associate Software Engineer — QA",
    period: "Feb 2022 — Present",
    location: "Hyderabad, India",
    bullets: [
      "Owned manual + automated QA for cybersecurity and AI products across web, API, and Linux environments.",
      "Built Playwright (JavaScript) automation for critical regression workflows running on every release candidate.",
      "Designed Postman + Swagger API tests covering authentication, authorization, payload, and schema validation.",
      "Executed JMeter performance + load runs and reported actionable bottlenecks to engineering.",
      "Drove defect lifecycle in Jira and QA Touch — from triage to root cause to release sign-off.",
      "Validated Linux scripts across Ubuntu, Debian, and RedHat to guarantee deployment parity.",
    ],
  },
];

export const certifications = [
  {
    title: "Generative AI & AI Agents for Software Testing",
    issuer: "Specialized program",
  },
  {
    title: "Quality Assurance — Techniques & Methodologies",
    issuer: "Professional certification",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
