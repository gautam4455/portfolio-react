import { useEffect, useState } from "react";
import { MdOutlineFlight } from "react-icons/md";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowTopBtn(true);

      setTimeout(() => {
        setShowTopBtn(false);
      }, 10000);
    } else {
      setShowTopBtn(false);
    }
  };

  const unlisten = () => {
    // Scroll to top when route changes
    goToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    unlisten(); // Initial scroll to top

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

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
