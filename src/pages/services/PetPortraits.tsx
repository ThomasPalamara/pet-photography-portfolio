import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Button from "../../components/Button";
import portraitImage from "../../imgs/mainPortrait.jpg";

const INCLUDED_IDS = ["session", "backdrop", "treats", "gallery", "downloads"];
const PACKAGE_INCLUDE_IDS = ["pets", "duration", "images"];

const PetPortraits = () => {
  const { t } = useTranslation("petPortraits");

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-14">
      <Link
        to="/#services"
        className="inline-flex items-center gap-1 text-xs font-semibold tracking-widest text-gray-500 hover:text-gray-900 transition-colors uppercase"
      >
        <ArrowLeft size="1em" />
        {t("backToServices")}
      </Link>

      <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden h-[420px]">
          <img
            src={portraitImage}
            alt={t("imageAlt")}
            className="w-full h-full object-cover"
            style={{ objectPosition: "-100px 0px" }}
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900">
            {t("title")}
          </h1>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
            {t("intro")}
          </p>
          <div className="mt-8">
            <Button href="/contact">{t("bookASession")}</Button>
          </div>
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-2xl text-gray-900 mb-6">
            {t("includedHeading")}
          </h2>
          <ul className="space-y-4">
            {INCLUDED_IDS.map((id) => (
              <li key={id} className="flex items-start gap-3 text-gray-700">
                <CheckCircle
                  className="text-primary mt-0.5 flex-shrink-0"
                  size={20}
                />
                <span>{t(`included.${id}`)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">
            {t("pricingEyebrow")}
          </p>
          <h2 className="font-serif text-2xl text-gray-900">
            {t("package.name")}
          </h2>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {t("package.price")}
          </p>

          <ul className="mt-6 space-y-3">
            {PACKAGE_INCLUDE_IDS.map((id) => (
              <li
                key={id}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <CheckCircle
                  className="text-primary mt-0.5 flex-shrink-0"
                  size={20}
                />
                <span>{t(`package.includes.${id}`)}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-gray-500">{t("package.note")}</p>

          <div className="mt-6">
            <Button href="/contact" className="w-full text-center">
              {t("bookASession")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetPortraits;
