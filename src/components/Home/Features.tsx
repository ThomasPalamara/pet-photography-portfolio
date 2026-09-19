import { useTranslation } from "react-i18next";
import { Camera, PawPrint, CalendarCheck } from "lucide-react";

const FEATURES = [
  // { id: "patient", icon: Heart },
  { id: "natural", icon: Camera },
  { id: "quality", icon: PawPrint },
  { id: "booking", icon: CalendarCheck },
];

const Features = () => {
  const { t } = useTranslation("features");

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-2 md:grid-cols-3 gap-10">
        {FEATURES.map(({ id, icon: Icon }) => (
          <div key={id} className="flex flex-row  gap-3">
            <Icon className="text-primary mr-2" size={44} />
            <div>
              <h3 className="text-md font-semibold text-gray-900 mb-1">
                {t(`items.${id}.title`)}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t(`items.${id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
