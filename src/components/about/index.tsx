import { useRef } from "react";

import banner_image from "../../assets/images/about.png";
import "./About.scss";

const About = () => {
  const aboutSection = useRef(null);

  return (
    <div id="aboutSection" className="about container-fluid" ref={aboutSection}>
      <div className="heading">
        <h1>ABOUT</h1>
      </div>

      <div className="description">
        <div className="content">
          <div>
            A <span className="color1">Passionate Self-taught Developer</span>{" "}
            having an experience of building <span className="color1">WEB</span>{" "}
            with <span className="color1">HTML / CSS / JavaScript</span> and
            some other cool libraries. A developer who wants to explore every{" "}
            <span className="color1">TECH STACK in TECHNOLOGY</span>.
          </div>
        </div>

        <div className="img-container">
          <img src={banner_image} alt="About-img" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default About;
