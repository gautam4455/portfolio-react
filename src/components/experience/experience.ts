export interface Job {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export const experiences: Job[] = [
  {
    id: 1,
    role: "Frontend Engineer",
    company: "DLT Apps",
    location: "Banglore, India",
    duration: "May 2022 - Present",
    type: "Full-time · Remote",
    description:
      "Developed and maintained scalable frontend applications within an Nx monorepo. Built reusable UI components, integrated RESTful APIs with React Query, implemented complex forms with React Hook Form and contributed to the company's public-facing marketing website using Strapi CMS via GraphQL.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "React Query",
      "Axios",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Yup",
      "Strapi CMS",
      "GraphQL",
      "Nx Monorepo",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Logicloop Ventures",
    location: "Mumbai, India",
    duration: "Jan 2020 - May 2020",
    type: "Full-time",
    description:
      "Built responsive and cross-browser compatible web interfaces using semantic HTML, CSS/SCSS, Bootstrap, and JavaScript. Collaborated in team-based frontend projects using Git and GitHub for version control, branching and code reviews.",
    tags: ["HTML5", "CSS3", "SCSS", "Bootstrap", "JavaScript", "Git", "GitHub"],
  },
  {
    id: 3,
    role: "Executive",
    company: "Lumina Datamatics",
    location: "Mumbai, India",
    duration: "Aug 2017 - Feb 2019",
    type: "Full-time",
    description:
      "Reviewed and corrected XML content for web articles, ensuring accuracy and consistent UI rendering.",
    tags: ["XML", "Content Management"],
  },
  {
    id: 4,
    role: "Data Analyst",
    company: "Anglo Tech",
    location: "Thane, India",
    duration: "May 2017 - Aug 2017",
    type: "Full-time",
    description:
      "Validated and corrected structured XML data to ensure accurate and consistent UI display.",
    tags: ["XML", "Data Validation"],
  },
];
