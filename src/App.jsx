import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./components";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Loader from "./components/utils/Loader";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // loader for 1s
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer); // hide loader after 1s
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="app" id="app">
          <Navbar />

          <div style={{ marginTop: "80px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
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
