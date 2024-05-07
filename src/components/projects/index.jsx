import { BiLinkExternal } from "react-icons/bi";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import ieducation from "../../assets/images/projects/ieducation.JPG";
import ifood from "../../assets/images/projects/ifood.JPG";
import textutils from "../../assets/images/projects/textutils.JPG";
import "./Project.scss";

const Projects = () => {
  return (
    <div id="projects-section">
      <div className="heading">
        <h1>Projects</h1>
      </div>

      <div className="projects-box">
        <div className="card">
          <img
            className="card-img-top"
            src={ifood}
            alt="project-img"
            loading="lazy"
          />

          <div className="card-body">
            <div>
              <h4 className="card-title">iFood - Online Food</h4>

              <p className="card-text">
                <strong>iFood</strong> is a single page online food static
                responsive website built in HTML, CSS and JavaScript.
              </p>

              <p>
                <strong>Technologies:</strong> HTML, CSS, Media Query
              </p>
            </div>

            <div className="btn-box">
              <a
                href="https://github.com/gautam4455/iFood"
                rel="noreferrer"
                target="_blank"
                className="mybtn"
              >
                Source Code <BiLinkExternal />
              </a>

              <a
                href="https://gautam4455.github.io/iFood/"
                rel="noreferrer"
                target="_blank"
                className="mybtn"
              >
                Go Live <BiLinkExternal />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src={ieducation}
            alt="project-img"
            loading="lazy"
          />
          <div className="card-body">
            <div>
              <h4 className="card-title">iEducation - Online Education</h4>
              <p className="card-text">
                <strong>iEducation</strong> is a single page online educational
                static responsive website built in HTML, CSS and JavaScript.
              </p>
              <p>
                <strong>Technologies:</strong> HTML, CSS, Media Query,
                JavaScript
              </p>
            </div>
            <div className="btn-box">
              <a
                href="https://github.com/gautam4455/iEducation"
                rel="noreferrer"
                target="_blank"
                className="mybtn"
              >
                Source Code <BiLinkExternal />
              </a>
              <a
                href="https://gautam4455.github.io/iEducation/"
                rel="noreferrer"
                target="_blank"
                className="mybtn"
              >
                Go Live <BiLinkExternal />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src={textutils}
            alt="project-img"
            loading="lazy"
          />
          <div className="card-body">
            <div>
              <h4 className="card-title">Textutils - Text utility app</h4>
              <p className="card-text">
                <strong>Textutils</strong> is a text utility app which is used
                to perform certain operations like Character count, word count,
                convert text from LowerCase to UpperCase and UpperCase to
                LowerCase. It also remove extra spaces from text.
              </p>
              <p>
                <strong>Technologies:</strong> HTML, CSS, Bootstrap, JavaScript,
                React
              </p>
            </div>
            <div className="btn-box">
              <a
                href="https://github.com/gautam4455/TextUtils-React"
                rel="noreferrer"
                target="_blank"
                className="mybtn"
              >
                Source Code <BiLinkExternal />
              </a>
              <a
                href="https://gautam4455.github.io/TextUtils-React/"
                rel="noreferrer"
                target="_blank"
                className="mybtn"
              >
                Go Live <BiLinkExternal />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
