import { useTranslation } from "react-i18next";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Services from "../components/Home/Services";
import Gallery from "../components/Home/Gallery";
import About from "../components/Home/About";
import Seo from "../components/Seo";
import { useScrollToHash } from "../utils/useScrollToHash";

const Home = () => {
  const { t } = useTranslation("seo");
  useScrollToHash();

  return (
    <>
      <Seo title={t("home.title")} description={t("home.description")} path="/" />
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <About />
    </>
  );
};

export default Home;
