import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './resources/en.json';
import ta from './resources/ta.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: { translation: en },
      ta: { translation: ta }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
