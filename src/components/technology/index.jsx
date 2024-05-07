import { Zoom } from "react-awesome-reveal";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { BsBootstrapFill } from "react-icons/bs";
import { DiCss3, DiJavascript1, DiMongodb, DiSass } from "react-icons/di";
import { FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { SiExpress, SiPostman, SiVisualstudiocode } from "react-icons/si";

import "./Technology.scss";

const Technology = () => {
  return (
    <Zoom triggerOnce>
      <div id="technologySection" className="technology container-fluid">
        <div className="heading">
          <h1>TECHNOLOGY STACK</h1>
        </div>

        <div className="icons">
          <span>
            <AiFillHtml5
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="HTML5"
            />
          </span>
          <span>
            <DiCss3
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="CSS3"
            />
          </span>
          <span>
            <DiSass
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="SASS"
            />
          </span>
          <span>
            <BsBootstrapFill
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Bootstrap"
            />
          </span>
          <span>
            <DiJavascript1
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="JavaScript"
            />
          </span>
          <span>
            <FaReact
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="React.JS"
            />
          </span>
          <span>
            <FaNodeJs
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Node.JS"
            />
          </span>
          <span>
            <SiExpress
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Express.JS"
            />
          </span>
          <span>
            <FaNpm
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="NPM"
            />
          </span>
          <span>
            <DiMongodb
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Mongo DB"
            />
          </span>
          <span>
            <SiPostman
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Postman"
            />
          </span>
          <span>
            <AiFillGithub
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Git/Github"
            />
          </span>
          <span>
            <SiVisualstudiocode
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="VS Code"
            />
          </span>
        </div>
      </div>
    </Zoom>
  );
};

export default Technology;
