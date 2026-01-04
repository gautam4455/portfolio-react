import { Zoom } from "react-awesome-reveal";
import { DiSass, DiNpm } from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiStrapi,
  SiGit,
  SiBitbucket,
  SiPnpm,
  SiShadcnui,
  SiMui,
  SiReact,
  SiFigma,
  SiBootstrap,
  SiHtml5,
  SiGithub,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

import "./Technology.scss";

const techStack = [
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <SiCss3 />, label: "CSS3" },
  { icon: <DiSass />, label: "SASS" },
  { icon: <SiBootstrap />, label: "Bootstrap" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "Typescript" },
  { icon: <SiReact />, label: "React.JS" },
  { icon: <SiNextdotjs />, label: "Next.JS" },
  { icon: <SiMui />, label: "Material UI" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiShadcnui />, label: "Shadcn" },
  { icon: <SiStrapi />, label: "Strapi" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiGithub />, label: "Github" },
  { icon: <SiBitbucket />, label: "Bitbucket" },
  { icon: <SiFigma />, label: "Figma" },
  { icon: <DiNpm />, label: "NPM" },
  { icon: <SiPnpm />, label: "PNPM" },
  { icon: <SiNetlify />, label: "Netlify" },
  { icon: <SiVercel />, label: "Vercel" },
];

const Technology = () => {
  return (
    <Zoom triggerOnce>
      <div id="technologySection" className="technology container-fluid">
        <div className="heading">
          <h1>TECHNOLOGY STACK</h1>
        </div>

        <div className="tech-grid">
          {techStack.map((tech, idx) => (
            <div className="tech-item" key={idx}>
              <div className="icon">{tech.icon}</div>
              <p>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Zoom>
  );
};

export default Technology;
