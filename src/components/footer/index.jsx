import { AiFillGithub, AiOutlineGlobal, AiOutlineGoogle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footer-content">
        <div className="copyright">
          <h5>
            Copyright &copy; 2022 -{" "}
            <a href="/" className="color1">
              GK Inc
            </a>
            . All Rights Reserved.
          </h5>
        </div>

        <div className="social">
          <h3>Find Me On</h3>

          <div className="social-icons">
            <span>
              <a href="mailto:gautam.kamble4455@gmail.com">
                <AiOutlineGoogle />
              </a>
            </span>

            <span>
              <a href="https://github.com/gautam4455">
                <AiFillGithub />
              </a>
            </span>

            <span>
              <a href="/">
                <AiOutlineGlobal />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
