import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const burgericon = useRef(null);
  const navbarRef = useRef(null);
  const navbarContent = useRef(null);

  const hideNavbarContent = () => {
    navbarContent.current.classList.remove("show");
  };
  const toggleNavbarContent = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    setIsCollapsed(true); // Close navbar on route change
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbarDark" ref={navbarRef}>
      <div className="container-fluid">
        <Link
          id="logo"
          className="navbar-brand"
          to="/"
          onClick={hideNavbarContent}
        >
          <img src={Logo} alt="Logo" />
        </Link>

        <button
          type="button"
          id="hamburger-btn"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          onClick={toggleNavbarContent}
        >
          {isCollapsed ? (
            <div id="burgericon" ref={burgericon}>
              <div className="line-bar"></div>
              <div className="line-bar"></div>
              <div className="line-bar"></div>
            </div>
          ) : (
            <div id="burgericon" ref={burgericon}>
              <MdClose />
            </div>
          )}
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
