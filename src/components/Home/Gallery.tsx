import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "../../utils/images";
import shuffleArray from "../../utils/shuffle";

const TEASER_COUNT = 5;

const Gallery = () => {
  const { t } = useTranslation("gallery");

  return (
    <section id="gallery" className="">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 max-w-lg">
              {t("heading")}
            </h2>
          </div>
          <Link
            to="/gallery"
            className="hidden sm:flex items-center gap-1 text-xs font-semibold tracking-widest text-gray-900 whitespace-nowrap hover:opacity-70 transition-opacity uppercase"
          >
            {t("viewFull")}
            <ArrowRight size="1em" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {shuffleArray(galleryImages)
            .slice(0, TEASER_COUNT)
            .map((src, i) => (
              <div
                key={src}
                className="rounded-lg overflow-hidden h-40 md:h-64"
              >
                <img
                  src={src}
                  alt={t("photoAlt", { index: i + 1 })}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
