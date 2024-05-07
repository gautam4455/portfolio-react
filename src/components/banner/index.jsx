import "./Banner.scss";
import TypingText from "./TypingText";

const Banner = () => {
  return (
    <div id="bannerSection" className="banner">
      <div className="banner_description">
        <h1>
          I&apos;m <span>GAUTAM KAMBLE</span>
        </h1>

        <div className="typedjs">
          {" "}
          <TypingText />
        </div>
      </div>
    </div>
  );
};

export default Banner;
