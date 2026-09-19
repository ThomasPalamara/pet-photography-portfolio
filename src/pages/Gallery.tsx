import { useTranslation } from "react-i18next";
import { galleryImages } from "../utils/images";
import shuffleArray from "../utils/shuffle";

const Gallery = () => {
  const { t } = useTranslation("galleryPage");

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-14">
      <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-gray-900 max-w-xl">
        {t("heading")}
      </h1>
      <p className="mt-4 text-gray-600 max-w-xl">{t("intro")}</p>

      <div className="mt-12 masonry-gallery">
        {shuffleArray(galleryImages).map((src, i) => (
          <div key={src} className="rounded-lg overflow-hidden">
            <img
              src={src}
              alt={t("photoAlt", { index: i + 1 })}
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
