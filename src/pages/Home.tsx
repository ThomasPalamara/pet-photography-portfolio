import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Services from "../components/Home/Services";
import Gallery from "../components/Home/Gallery";
import About from "../components/Home/About";
import { useScrollToHash } from "../utils/useScrollToHash";

const Home = () => {
  useScrollToHash();

  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <About />
    </>
  );
};

export default Home;
