import About from "./about";
import Banner from "./banner";
import "./index.scss";
import Technology from "./technology";

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
