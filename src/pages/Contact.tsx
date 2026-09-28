import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { GIFT_VOUCHER_SERVICE, SERVICES } from "../utils/services";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "../config";
import Seo from "../components/Seo";
import InstagramIcon from "../components/icons/InstagramIcon";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const { t } = useTranslation(["contact", "services", "seo", "footer"]);
  const [status, setStatus] = useState<Status>("idle");
  const [searchParams] = useSearchParams();
  const giftVoucherLabel = t("fields.giftVoucher");
  const defaultService = t(`services:items.${SERVICES[0].id}.title`);
  const [selectedService, setSelectedService] = useState(
    searchParams.get("service") === GIFT_VOUCHER_SERVICE
      ? giftVoucherLabel
      : defaultService
  );
  const isGiftVoucher = selectedService === giftVoucherLabel;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const honeypot = form.elements.namedItem("company") as HTMLInputElement | null;
    if (honeypot?.value) {
      // Only bots fill this hidden field — pretend success without sending anything.
      setStatus("success");
      form.reset();
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      form.reset();
      setSelectedService(defaultService);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 md:px-12 py-20">
      <Seo
        title={t("seo:contact.title")}
        description={t("seo:contact.description")}
        path="/contact"
      />
      <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2 uppercase">
        {t("eyebrow")}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl text-gray-900">
        {t("heading")}
      </h1>
      <p className="mt-4 text-gray-600 max-w-xl">{t("subtitle")}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="text-sm text-gray-500">{t("directContact")}</span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors"
        >
          <Mail size={16} className="flex-shrink-0" />
          {CONTACT_EMAIL}
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors"
        >
          <InstagramIcon />
          {t("footer:instagramHandle")}
        </a>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
        <div
          style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
          aria-hidden="true"
        >
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium tracking-widest text-gray-500 uppercase mb-2"
            >
              {t("fields.name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium tracking-widest text-gray-500 uppercase mb-2"
            >
              {t("fields.email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-medium tracking-widest text-gray-500 uppercase mb-2"
            >
              {t("fields.phone")}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-xs font-medium tracking-widest text-gray-500 uppercase mb-2"
            >
              {t("fields.service")}
            </label>
            <select
              id="service"
              name="service"
              value={selectedService}
              onChange={(event) => setSelectedService(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            >
              {SERVICES.map((service) => (
                <option
                  key={service.id}
                  value={t(`services:items.${service.id}.title`)}
                >
                  {t(`services:items.${service.id}.title`)}
                </option>
              ))}
              <option value={giftVoucherLabel}>{giftVoucherLabel}</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium tracking-widest text-gray-500 uppercase mb-2"
          >
            {t("fields.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
          {isGiftVoucher && (
            <p className="mt-2 text-xs text-gray-500">{t("giftHint")}</p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-block rounded-full bg-primary text-white hover:bg-primary-dark transition-colors text-sm font-semibold px-7 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? t("sending") : t("submit")}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-700">{t("success")}</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">{t("error")}</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
