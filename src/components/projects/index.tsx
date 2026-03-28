import { BiLinkExternal } from "react-icons/bi";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import "./Project.scss";
import { projects } from "./projects.ts";

const Projects = () => {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <div id="projects-section">
      <div className="heading">
        <h1>Projects</h1>
      </div>

      <div className="projects-box">
        {sortedProjects.map((project) => {
          const { id, imageSrc, title, name, description, tech, github, demo } =
            project;

          return (
            <div key={id} className="card">
              <img
                className="card-img-top"
                src={imageSrc}
                alt={`Screenshot of ${title} project"`}
                loading="lazy"
              />

              <div className="card-body">
                <div>
                  <h2 className="card-title">{title}</h2>

                  <p className="card-text">
                    <strong>{name}</strong> - {description}
                  </p>

                  <p>
                    <strong>Tech Stack:</strong> {tech.join(", ")}
                  </p>
                </div>

                <div className="btn-box">
                  <a
                    href={github}
                    rel="noreferrer"
                    target="_blank"
                    className="mybtn"
                    aria-label={`View ${title} source code on Github`}
                  >
                    Github <BiLinkExternal />
                  </a>

                  <a
                    href={demo}
                    rel="noreferrer"
                    target="_blank"
                    className="mybtn"
                    aria-label={`View live demo of ${title} project`}
                  >
                    Demo <BiLinkExternal />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
