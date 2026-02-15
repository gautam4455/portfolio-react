import About from "./about/index.tsx";
import Banner from "./banner/index.tsx";
import "./index.scss";
import Technology from "./technology/index.tsx";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <About />

      <Technology />
    </div>
  );
};

export default Home;
