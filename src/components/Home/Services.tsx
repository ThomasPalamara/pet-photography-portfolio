import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../utils/services";
import portraits from "../../imgs/portrait.jpg";
import puppy from "../../imgs/puppy.jpg";
import multiPet from "../../imgs/multiPet.jpg";
import bespoke from "../../imgs/cats.jpeg";

const IMAGES: Record<string, string> = {
  petPortraits: portraits,
  puppySessions: puppy,
  multiPetSessions: multiPet,
  bespoke: bespoke,
};

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 max-w-lg">
            {t("heading")}
          </h2>
        </div>
        <a
          href="#services"
          className="hidden sm:flex items-center gap-1 text-xs font-semibold tracking-widest text-gray-900 whitespace-nowrap hover:opacity-70 transition-opacity uppercase"
        >
          {t("viewAll")}
          <ArrowRight size="1em" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            className="group"
          >
            <div className="rounded-xl overflow-hidden h-56">
              <img
                src={IMAGES[service.id]}
                alt={t(`items.${service.id}.title`)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {t(`items.${service.id}.title`)}
            </h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              {t(`items.${service.id}.description`)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
