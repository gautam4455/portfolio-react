import { useRef } from "react";
import { Link } from "react-router-dom";
// import { MdClose } from "react-icons/md";

import Logo from "../../assets/images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  // const [showBurgerIcon, setShowBurgerIcon] = useState(true);

  // const closeicon = useRef(null);
  const burgericon = useRef(null);
  const navbarRef = useRef(null);
  const navbarContent = useRef(null);

  const hideNavbarContent = () => {
    navbarContent.current.classList.remove("show");
  };
  // const handleBurger = () => {
  //     console.log("TODO: Close ICON")
  // if (showBurgerIcon) {
  //     setShowBurgerIcon(false);
  //     burgericon.current.classList.add("d-none");
  //     closeicon.current.classList.remove("d-none");
  // }
  // if (showBurgerIcon === false) {
  //     setShowBurgerIcon(true);
  //     burgericon.current.classList.remove("d-none");
  //     closeicon.current.classList.add("d-none");
  // }
  // }

  // useEffect(() => {
  //     closeicon.current.classList.add("d-none");  // initial hide close icon
  // }, []);

  return (
    <nav className="navbar navbar-expand-lg navbarDark" ref={navbarRef}>
      <div className="container-fluid">
        <Link
          id="logo"
          className="navbar-brand"
          to="/"
          onClick={hideNavbarContent}
        >
          {/* <strong>&lt; GK &gt;</strong> */}
          <img src={Logo} alt="Logo" />
        </Link>

        <button
          type="button"
          id="hamburger-btn"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <div id="burgericon" ref={burgericon}>
            <div className="line-bar"></div>
            <div className="line-bar"></div>
            <div className="line-bar"></div>
          </div>
          {/* <div id="closeicon" ref={closeicon}>
                            <MdClose />
                        </div> */}
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
          ref={navbarContent}
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item" onClick={hideNavbarContent}>
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item" onClick={hideNavbarContent}>
                                <Link className="nav-link" to="/experience">Experience</Link>
                            </li> */}
            <li className="nav-item" onClick={hideNavbarContent}>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item" onClick={hideNavbarContent}>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item" onClick={hideNavbarContent}>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
