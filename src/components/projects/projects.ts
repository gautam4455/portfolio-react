import ieducation from "../../assets/images/projects/ieducation.JPG";
import ifood from "../../assets/images/projects/ifood.JPG";
import textutils from "../../assets/images/projects/textutils.JPG";
import isketchbook from "../../assets/images/projects/isketchbook.jpg";
import signalist from "../../assets/images/projects/signalist.jpg";

export const projects = [
  {
    id: 1,
    imageSrc: ifood,
    title: "iFood - Online Food",
    name: "iFood",
    description:
      "A single-page static responsive food website built with HTML and CSS, using media queries for mobile-friendly design.",
    tech: ["HTML", "CSS", "Media Query"],
    github: "https://github.com/gautam4455/iFood",
    demo: "https://gautam4455.github.io/iFood/",
  },
  {
    id: 2,
    imageSrc: ieducation,
    title: "iEducation - Online Education",
    name: "iEducation",
    description:
      "A single-page static responsive educational website built with HTML, CSS, and minimal JavaScript to explore responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/gautam4455/iEducation",
    demo: "https://gautam4455.github.io/iEducation/",
  },
  {
    id: 3,
    imageSrc: textutils,
    title: "Textutils - Text Utility App",
    name: "Textutils",
    description:
      "A React-based text utility app that performs operations like word/character counting, case conversion, and extra space removal, with a dark/light mode toggle.",
    tech: ["Vite", "React", "TypeScript", "JavaScript", "Bootstrap"],
    github: "https://github.com/gautam4455/TextUtils",
    demo: "https://gautam4455.github.io/TextUtils/",
  },
  {
    id: 4,
    imageSrc: isketchbook,
    title: "iSketchbook - Sketching App",
    name: "iSketchbook",
    description:
      "A collaborative sketching app built with Next.js, React, Redux Toolkit, and Socket.IO. It enables multiple users draw together in real time on a shared digital canvas, with TailwindCSS powering the UI.",
    tech: ["Next.js", "React", "Tailwind", "Redux-toolkit", "Socket.io"],
    github: "https://github.com/gautam4455/sketchbook",
    demo: "https://isketchbook.vercel.app/",
  },
  {
    id: 5,
    imageSrc: signalist,
    title: "Signalist - Live Stocks App",
    name: "Signalist",
    description:
      "A modern full-stack Next.js app, TailwindCSS, and MongoDB. It includes authentication with Better-Auth, form handling with React Hook Form, Shadcn components, and real-time workflows via Inngest. Built for scalability with Mongoose, Nodemailer and a clean, responsive UI.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Redux-toolkit",
    ],
    github: "https://github.com/gautam4455/stocks-app",
    demo: "https://stocks-app-pearl.vercel.app/",
  },
];
