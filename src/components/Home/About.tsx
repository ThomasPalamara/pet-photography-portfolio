import { useTranslation } from "react-i18next";
import Button from "../Button";
import aboutImage from "../../imgs/about.jpg";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <section
      id="about"
      className="about-grid max-w-7xl mx-auto px-6 md:px-12 py-20"
    >
      <div className="about-heading">
        <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">
          {t("eyebrow")}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
          {t("headingLine1")}
          <br />
          {t("headingLine2")}
        </h2>
      </div>

      <div className="about-image rounded-2xl overflow-hidden h-[420px] lg:h-[520px]">
        <img
          src={aboutImage}
          alt={t("imageAlt")}
          className="w-full h-full object-cover"
          style={{ objectPosition: "-85px center" }}
        />
      </div>

      <div className="about-body">
        <p className="text-gray-600 leading-relaxed max-w-md">
          {t("paragraph")}
        </p>
        <Button href="/contact" className="mt-8">
          {t("bookASession")}
        </Button>
      </div>
    </section>
  );
};

export default About;
