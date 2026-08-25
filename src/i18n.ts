import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

const supportedLanguages = ['en', 'es'] as const;
type SupportedLanguage = typeof supportedLanguages[number];

const normalizeLanguage = (language?: string): SupportedLanguage =>
    language?.toLowerCase().startsWith('es') ? 'es' : 'en';

const getInitialLanguage = (): SupportedLanguage => {
    if (typeof window === 'undefined') return 'en';

    const storedLanguage = window.localStorage.getItem('portfolio-language');
    if (storedLanguage && supportedLanguages.includes(storedLanguage as SupportedLanguage)) {
        return storedLanguage as SupportedLanguage;
    }

    return normalizeLanguage(window.navigator.language);
};

const initialLanguage = getInitialLanguage();

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        es: { translation: es }
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    interpolation: {
        escapeValue: false
    }
});

if (typeof document !== 'undefined') {
    document.documentElement.lang = initialLanguage;
}

i18n.on('languageChanged', (language) => {
    const normalizedLanguage = normalizeLanguage(language);

    if (typeof document !== 'undefined') {
        document.documentElement.lang = normalizedLanguage;
    }

    if (typeof window !== 'undefined') {
        window.localStorage.setItem('portfolio-language', normalizedLanguage);
    }
});

export default i18n;
