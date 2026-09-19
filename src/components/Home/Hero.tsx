import { useTranslation } from "react-i18next";
import Button from "../Button";
import heroImage from "../../imgs/hero3.jpg";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section
      id="top"
      className="mx-auto px-6 md:px-12 pt-14 pb-20 grid lg:grid-cols-2 gap-12 items-center "
    >
      <div>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] text-gray-900">
          {t("headingLine1")}
          <br />
          {t("headingLine2")}
        </h1>
        <p className="mt-6 text-gray-600 max-w-md">{t("subtitle")}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/contact">{t("bookASession")}</Button>
          <Button href="#gallery" variant="outline">
            {t("viewGalleries")}
          </Button>
        </div>

        {/* <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatarImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-gray-50 object-cover"
                style={{ zIndex: avatarImages.length - i }}
              />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} fontSize="small" />
              ))}
              <span className="ml-1 text-sm font-semibold text-gray-900">
                5.0
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Loved by 150+ pet parents
            </p>
          </div>
        </div> */}
      </div>

      <div className="rounded-3xl overflow-hidden h-[510px] w-[470px]">
        <img
          src={heroImage}
          alt={t("imageAlt")}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
