import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
  errorMessages,
  footer,
  sidebar,
  latestNews,
  latestPhotos,
  categoriesData,
  latestSection,
  trendingSection,
  newsFeed,
  individualNews,
  signUp,
  login,
  profile,
  search,
  report,
} from '@/constants/en';
import {
  errorMessages as errorMessagesFr,
  footer as footerFr,
  sidebar as sidebarFr,
  latestNews as latestNewsFr,
  latestPhotos as latestPhotosFr,
  categoriesData as categoriesDataFr,
  latestSection as latestSectionFr,
  trendingSection as trendingSectionFr,
  newsFeed as newsFeedFr,
  individualNews as individualNewsFr,
  signUp as signUpFr,
  login as loginFr,
  profile as profileFr,
  search as searchFr,
  report as reportFr,
} from '@/constants/fr';

const resources = {
  en: {
    translation: {
      footer,
      sidebar,
      latestNews,
      latestPhotos,
      categoriesData,
      latestSection,
      trendingSection,
      newsFeed,
      individualNews,
      signUp,
      login,
      profile,
      search,
      report,
    },
  },
  fr: {
    translation: {
      footer: footerFr,
      sidebar: sidebarFr,
      latestNews: latestNewsFr,
      latestPhotos: latestPhotosFr,
      categoriesData: categoriesDataFr,
      latestSection: latestSectionFr,
      trendingSection: trendingSectionFr,
      newsFeed: newsFeedFr,
      individualNews: individualNewsFr,
      signUp: signUpFr,
      login: loginFr,
      profile: profileFr,
      search: searchFr,
      report: reportFr,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hn',
    fallbackLng: 'sp',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
