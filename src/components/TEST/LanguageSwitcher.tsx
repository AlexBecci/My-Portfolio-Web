import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TbWorldCog } from 'react-icons/tb';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsOpen(false); // Cierra el menú después de seleccionar un idioma
    };

    return (
        <div className="relative flex items-center text-white">
            {/* Icono de mundo */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 hover:bg-gray-600/20  px-3  rounded-xs shadow-md"
            >
                <TbWorldCog size={20} />
                <span className="hidden md:inline">{t('configuration.navTitle')}</span>
            </button>
            {/* Menú desplegable */}
            {isOpen && (
                <div className="absolute top-12 right-0 bg-gray-800/80 text-white rounded-xs shadow-lg w-40">
                    <button
                        onClick={() => changeLanguage('en')}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full text-left"
                    >
                        <span>{t('configuration.optionEnglish')}</span>
                    </button>
                    <button
                        onClick={() => changeLanguage('es')}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 w-full text-left"
                    >
                        <span>{t('configuration.optionSpanish')}</span>
                    </button>
                </div>
            )}
        </div>
    );
};
