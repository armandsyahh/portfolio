import type { Project, Skill } from "@/types/portfolio";

export const profile = {
  name: "Armandsyah Yudhiana",
  nickname: "Armand",

  role: "Frontend Developer",
  subtitle: "UI/UX Enthusiast",

  description:
    "I am an Informatics Engineering student at Universitas Airlangga who is passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean interfaces and continuously learning new technologies to improve both user experience and application performance.",

  image: "/images/profile/profile.png",

  email: "your-email@gmail.com",
  phone: "+62 xxx xxxx xxxx",

  location: "Surabaya, Indonesia",

  university: "Universitas Airlangga",
  major: "D4 Teknik Informatika",

  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",

  cv: "/cv/CV.pdf",
};

export const statistics = [
  {
    label: "Projects",
    value: "10+",
  },
  {
    label: "Years Learning",
    value: "3+",
  },
  {
    label: "Technologies",
    value: "15+",
  },
  {
    label: "Client Satisfaction",
    value: "100%",
  },
];

export const education = [
  {
    id: 1,
    year: "2021 - Present",
    institution: "Universitas Airlangga",
    title: "D4 Teknik Informatika",
    description:
      "Studying software engineering, web development, mobile development, databases, and artificial intelligence.",
  },
  {
    id: 2,
    year: "2018 - 2021",
    institution: "SMK Negeri ...",
    title: "Rekayasa Perangkat Lunak",
    description:
      "Learned programming fundamentals, object-oriented programming, databases, networking, and web technologies.",
  },
];

export const experience = [
  {
    id: 1,
    year: "2024",
    company: "RSUD Dr. Soetomo",
    position: "Frontend Developer Intern",
    description:
      "Developed and maintained hospital information system interfaces while collaborating with developers and system analysts.",
  },
  {
    id: 2,
    year: "2025 - Present",
    company: "Freelance",
    position: "Frontend Developer",
    description:
      "Developing responsive websites, company profiles, and marketplace applications using Laravel, Vue.js, and Next.js.",
  },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and modern web interfaces.",
  },
  {
    title: "UI Design",
    description:
      "Designing clean and user-friendly interfaces with Figma.",
  },
  {
    title: "Responsive Website",
    description:
      "Creating websites that work seamlessly across all devices.",
  },
];

export const skills: {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  tools: Skill[];
} = {
  frontend: [
    {
      name: "HTML5",
      icon: "html",
    },
    {
      name: "CSS3",
      icon: "css",
    },
    {
      name: "JavaScript",
      icon: "javascript",
    },
    {
      name: "TypeScript",
      icon: "typescript",
    },
    {
      name: "React",
      icon: "react",
    },
    {
      name: "Next.js",
      icon: "nextjs",
    },
    {
      name: "Vue.js",
      icon: "vue",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwind",
    },
    {
      name: "Bootstrap",
      icon: "bootstrap",
    },
  ],

  backend: [
    {
      name: "PHP",
      icon: "php",
    },
    {
      name: "Laravel",
      icon: "laravel",
    },
    {
      name: "Node.js",
      icon: "nodejs",
    },
  ],

  database: [
    {
      name: "MySQL",
      icon: "mysql",
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
    },
  ],

  tools: [
    {
      name: "Git",
      icon: "git",
    },
    {
      name: "GitHub",
      icon: "github",
    },
    {
      name: "Figma",
      icon: "figma",
    },
    {
      name: "VS Code",
      icon: "vscode",
    },
    {
      name: "Postman",
      icon: "postman",
    },
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    featured: true,

    title: "Offset Machinery Marketplace",

    slug: "offset-marketplace",

    description:
      "Marketplace website for buying and selling offset printing machines with a modern responsive interface and product management features.",

    image: "/images/projects/offset-marketplace.png",

    technologies: [
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "MySQL",
    ],

    github: "https://github.com/yourusername/offset-marketplace",

    demo: "https://example.com",
  },

  {
    id: 2,
    featured: false,

    title: "Perfume Recommendation System",

    slug: "perfume-recommendation",

    description:
      "Content-based perfume recommendation system using TF-IDF and Cosine Similarity to recommend perfumes based on aroma and gender characteristics.",

    image: "/images/projects/perfume.png",

    technologies: [
      "Python",
      "TF-IDF",
      "Cosine Similarity",
      "Flask",
      "MySQL",
    ],

    github: "https://github.com/yourusername/perfume-recommendation",

    demo: "",
  },

  {
    id: 3,
    featured: false,

    title: "Hospital Payment Information System",

    slug: "hospital-payment",

    description:
      "Payment information system developed during an internship at RSUD Dr. Soetomo to help manage and present hospital payment information.",

    image: "/images/projects/hospital.png",

    technologies: [
      "Laravel",
      "Bootstrap",
      "JavaScript",
      "MySQL",
    ],

    github: "https://github.com/yourusername/hospital-payment",

    demo: "",
  },
];

export const certificates = [];