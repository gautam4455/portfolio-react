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
            Frontend Engineer with <span className="color1">4+ years</span>{" "}
            building scalable web applications in{" "}
            <span className="color1">React, Next.js</span> and{" "}
            <span className="color1">TypeScript</span>. I specialize in{" "}
            <span className="color1">API-driven development</span>, complex form
            workflows and{" "}
            <span className="color1">CMS-integrated products</span> — writing
            clean, maintainable code in production-grade environments.
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
