// Central place for all portfolio content so it is easy to edit.

export const profile = {
  name: "Yusuf Fikri Mustanir",
  role: "Telecommunication Engineer",
  tagline:
    "Dispatcher Assosiate at PT Mega Akses Persada (Fiberstar)",
  location: "Indonesia",
  email: "yusuffiks99@gmail.com",
  resumeUrl: "/cv-yusuf-fikri.pdf",
  socials: {
    linkedin: "https://linkedin.com/in/yusuffikri",
    telegram: "https://t.me/yusuffikri",
    email: "mailto:yusuffiks99@gmail.com",
  },
};

export const stats = [
  { label: "Experience", value: "Dispatcher Analyst" },
  { label: "Education", value: "Computer Engineering" },
  { label: "Interest", value: "Telecommunication " },
];

export const about = {
  paragraphs: [
    "Hi! I'm Yusuf Fikri Mustanir, a Dispatcher Analyst with a proven track record in monitoring troubleshooting, repairing, and maintaining telecommunication equipment and infrastructure",
    "I love diving into data to find out why issues happen and figuring out how to prevent them. In my role, I focus on keeping teams connected and vendors on track so we can hit our SLAs.",
    "On a daily basis, I conduct data-driven analysis to identify service anomalies, collaborate across divisions to ensure strict SLA compliance, and deliver comprehensive weekly and monthly reports on team productivity, troubleshooting trends, and vendor performance.",
  ],
  highlights: [
    "Responsive & pixel-perfect UI",
    "Web performance & accessibility",
    "Reusable components & systematic design",
    "Close collaboration with design teams",
  ],
};

export const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { category: "Frameworks & Libraries", items: ["React", "Next.js", "Vite", "Redux"] },
  { category: "Styling", items: ["Tailwind CSS", "shadcn/ui", "Sass", "Framer Motion"] },
  { category: "Tools", items: ["Git & GitHub", "Figma", "Vercel", "REST API"] },
];

// "My Journey" section — displayed as a checkpoint timeline.
export const journey = [
  {
    year: "2021",
    title: "Starting My Coding Journey",
    place: "Self-taught & Bootcamp",
    description:
      "Started learning the fundamentals of web development: HTML, CSS, and JavaScript. Built small projects to sharpen my foundation.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2022",
    title: "Focusing on the React Ecosystem",
    place: "Independent Development",
    description:
      "Learned React in depth, state management, and component concepts. Began building more complex interactive web applications.",
    tags: ["React", "Redux", "REST API"],
  },
  {
    year: "2023",
    title: "Frontend Developer",
    place: "Client Projects & Freelance",
    description:
      "Worked on various real-world projects for clients — landing pages, dashboards, and web apps — with a focus on quality and user satisfaction.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    year: "2024",
    title: "Building Systematic Design",
    place: "Team Collaboration",
    description:
      "Collaborated with design and backend teams to build a design system, reusable components, and optimize performance of large-scale apps.",
    tags: ["Design System", "shadcn/ui", "Performance"],
  },
  {
    year: "May 2025 - Present",
    title: "Dispatcher Assosiate",
    place: "Denpasar, Bali",
    description:
      "• Coordinate a team of 15 members to ensure all operational tasks in the Bali region are executed effectively and on time. 
      • Provide weekly and monthly reports on troubleshooting trends, new service activations, team productivity, and vendor performance.
      • Conduct data-driven analysis to identify anomalies in troubleshooting and activation cases, while implementing strategies to prevent ticket escalation.
      • Collaborate across divisions and with vendors to ensure ticket resolutions meet SLA requirements and maintain high-quality customer service.",
    tags: ["Team Leadership", "Data Analysis & Reporting", "Incident & Fault Management"],
  },
];

export const projects = [
  {
    title: "Modern E-Commerce UI",
    description:
      "A fast and responsive online store interface with a shopping cart, product filters, and a smooth checkout flow.",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    accent: "from-lime-300/20 to-emerald-400/10",
  },
  {
    title: "Analytics Dashboard",
    description:
      "An interactive data dashboard with real-time charts, dark mode, and a customizable layout for teams.",
    tags: ["Next.js", "TypeScript", "Charts"],
    link: "#",
    accent: "from-sky-300/20 to-cyan-400/10",
  },
  {
    title: "Personal Blog Platform",
    description:
      "A blogging platform with a markdown editor, optimized SEO, and pages that load extremely fast.",
    tags: ["React", "Vite", "SEO"],
    link: "#",
    accent: "from-amber-300/20 to-orange-400/10",
  },
  {
    title: "Landing Page Builder",
    description:
      "A collection of reusable, modular landing page components with smooth animations and consistent design.",
    tags: ["Design System", "shadcn/ui", "CSS"],
    link: "#",
    accent: "from-fuchsia-300/20 to-purple-400/10",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
