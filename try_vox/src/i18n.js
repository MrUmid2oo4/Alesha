import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationUZ from './locales/uz/translation.json';

console.log("Initializing i18n...");

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  uz: { translation: translationUZ }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    fallbackLng: 'ru',
    debug: true, // включить для отладки
    interpolation: { escapeValue: false }
  });

export default i18n;