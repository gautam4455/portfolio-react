import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingText = () => {
  const element = useRef(null);

  useEffect(() => {
    var options = {
      strings: [
        "<span>Front-End</span> Developer",
        "<span>Web</span> Developer",
        "<span>UI</span> Developer",
        "<span>MERN</span> Stack Developer",
        "<span>FullStack</span> Developer",
      ],
      typeSpeed: 100,
      startDelay: 300,
      backSpeed: 100,
      backDelay: 300,
      loop: true,
      showCursor: true,

      cursorChar: "|",
    };

    const typed = new Typed(element.current, options);

    // Destroying
    return () => {
      typed.destroy();
    };
  });

  return (
    <div id="typed-string">
      {/* Element to display typing strings */}
      <h2 ref={element}> </h2>
    </div>
  );
};

export default TypingText;
