import { useTranslation } from "react-i18next";
import { Gift } from "lucide-react";
import Button from "../Button";
import { GIFT_VOUCHER_HREF } from "../../utils/services";

const GiftVouchers = () => {
  const { t } = useTranslation("giftVouchers");

  return (
    <section id="gift-vouchers" className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="rounded-2xl border border-gray-200 bg-white px-8 py-10 md:px-12 flex flex-col md:flex-row md:items-center gap-8">
        <Gift className="text-primary flex-shrink-0" size={48} />
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
            {t("heading")}
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">
            {t("paragraph")}
          </p>
        </div>
        <Button href={GIFT_VOUCHER_HREF} className="flex-shrink-0 text-center">
          {t("cta")}
        </Button>
      </div>
    </section>
  );
};

export default GiftVouchers;
