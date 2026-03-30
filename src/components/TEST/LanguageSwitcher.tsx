import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TbWorldCog } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative flex items-center text-white">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors duration-200"
                aria-label="Change language"
            >
                <TbWorldCog size={20} />
                <span className="hidden md:inline text-sm">{t('configuration.navTitle')}</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-12 right-0 bg-slate-800/95 backdrop-blur-md text-white rounded-xl shadow-xl border border-white/10 w-40 overflow-hidden"
                    >
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`flex items-center space-x-2 px-4 py-2.5 hover:bg-white/10 w-full text-left text-sm transition-colors ${i18n.language === 'en' ? 'text-rose-400' : ''}`}
                        >
                            <span>🇺🇸</span>
                            <span>{t('configuration.optionEnglish')}</span>
                        </button>
                        <button
                            onClick={() => changeLanguage('es')}
                            className={`flex items-center space-x-2 px-4 py-2.5 hover:bg-white/10 w-full text-left text-sm transition-colors ${i18n.language === 'es' ? 'text-rose-400' : ''}`}
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
