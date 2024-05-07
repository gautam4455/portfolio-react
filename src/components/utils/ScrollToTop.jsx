import { useEffect, useState } from "react";
import { MdOutlineFlight } from "react-icons/md";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
        setTimeout(() => {
          setShowTopBtn(false);
        }, 10000);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div id="scrollToTop">
      {showTopBtn && (
        <button onClick={goToTop}>
          <MdOutlineFlight />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
