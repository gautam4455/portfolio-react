import { AiFillGithub, AiOutlineGlobal, AiOutlineGoogle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footer-content">
        <div className="copyright">
          <p>
            Copyright &copy; 2022 -{" "}
            <a href="/" className="color1">
              GK Inc
            </a>
            . All Rights Reserved.
          </p>
        </div>

        <div className="social">
          <p>Find Me On</p>

          <div className="social-icons">
            <span>
              <a
                href="mailto:gautam.kamble4455@gmail.com"
                aria-label="Send an email."
              >
                <AiOutlineGoogle />
              </a>
            </span>

            <span>
              <a
                href="https://github.com/gautam4455"
                aria-label="Visit Github profile"
              >
                <AiFillGithub />
              </a>
            </span>

            <span>
              <a href="/" aria-label="Back to home page">
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
