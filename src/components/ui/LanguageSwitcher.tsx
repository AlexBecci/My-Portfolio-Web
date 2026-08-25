import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TbWorldCog } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const currentLanguage = i18n.resolvedLanguage?.split('-')[0] ?? 'en';

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative flex items-center text-white">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                aria-label={t('accessibility.changeLanguage')}
                aria-expanded={isOpen}
                aria-controls="language-menu"
            >
                <TbWorldCog size={20} aria-hidden="true" />
                <span className="hidden md:inline text-sm">{t('configuration.navTitle')}</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        id="language-menu"
                        className="absolute top-12 right-0 bg-slate-800/95 backdrop-blur-md text-white rounded-xl shadow-xl border border-white/10 w-40 overflow-hidden"
                    >
                        <button
                            onClick={() => changeLanguage('en')}
                            type="button"
                            aria-pressed={currentLanguage === 'en'}
                            className={`flex items-center space-x-2 px-4 py-2.5 hover:bg-white/10 w-full text-left text-sm transition-colors ${currentLanguage === 'en' ? 'text-rose-400' : ''}`}
                        >
                            <span>🇺🇸</span>
                            <span>{t('configuration.optionEnglish')}</span>
                        </button>
                        <button
                            onClick={() => changeLanguage('es')}
                            type="button"
                            aria-pressed={currentLanguage === 'es'}
                            className={`flex items-center space-x-2 px-4 py-2.5 hover:bg-white/10 w-full text-left text-sm transition-colors ${currentLanguage === 'es' ? 'text-rose-400' : ''}`}
                        >
                            <span>🇦🇷</span>
                            <span>{t('configuration.optionSpanish')}</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
