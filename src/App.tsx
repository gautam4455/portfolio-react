import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.scss";
import Contact from "./components/contact/index.tsx";
import Experience from "./components/experience/index.tsx";
import Footer from "./components/footer/index.tsx";
import Home from "./components/index.tsx";
import Navbar from "./components/navbar/index.tsx";
import Projects from "./components/projects/index.tsx";
import Resume from "./components/resume/index.tsx";
import Loader from "./components/utils/Loader.tsx";
import ScrollToTop from "./components/utils/ScrollToTop.tsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [navHeight, setNavHeight] = useState(80);

  useEffect(() => {
    const timer = setTimeout(() => {
      // loader for 1s
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer); // hide loader after 1s
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {loading ? (
        <Loader />
      ) : (
        <div className="app" id="app">
          <Navbar setNavHeight={setNavHeight} />

          <div id="main" style={{ marginTop: navHeight }}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/experience" element={<Experience />} />

              <Route path="/projects" element={<Projects />} />

              <Route path="/resume" element={<Resume />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <ScrollToTop />

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
