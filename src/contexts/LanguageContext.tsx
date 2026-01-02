import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '../translations';

interface LanguageContextType {
    language: Language;
    direction: 'ltr' | 'rtl';
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('fr');
    const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

    useEffect(() => {
        setDirection(language === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => {
            if (prev === 'fr') return 'en';
            if (prev === 'en') return 'ar';
            return 'fr';
        });
    };

    const t = (key: string): string => {
        const keys = key.split('.');
        let current: any = translations[language];
        for (const k of keys) {
            if (current === undefined || current[k] === undefined) {
                return key;
            }
            current = current[k];
        }
        return typeof current === 'string' ? current : key;
    };

    return (
        <LanguageContext.Provider value={{ language, direction, toggleLanguage, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
