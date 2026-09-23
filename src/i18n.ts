import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import { BRAND_NAME } from "./config";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    resources: {
      en,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      defaultVariables: { brand: BRAND_NAME },
    },
  });

export default i18n;
