import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui';

interface LanguageSelectorProps {
    mobile?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ mobile = false }) => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const languages = [
        { code: 'fr', label: 'Français' },
        { code: 'en', label: 'English' },
        { code: 'ar', label: 'العربية' }
    ];

    const currentLangLabel = languages.find(l => l.code === language)?.label || 'Français';

    const handleSelect = (code: string) => {
        setLanguage(code as any);
        setIsOpen(false);
    };

    if (mobile) {
        return (
            <div className="relative" ref={dropdownRef}>
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    variant="ghost"
                    className="py-1 px-2 h-auto flex items-center gap-1 text-sm font-bold text-slate-600 dark:text-slate-300 border-none shadow-none"
                >
                    {language.toUpperCase()}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </Button>

                {isOpen && (
                    <div className="absolute top-full mt-2 right-0 w-32 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1 overflow-hidden animate-fade-in z-50">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleSelect(lang.code)}
                                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center justify-between ${language === lang.code
                                        ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10'
                                        : 'text-slate-700 dark:text-slate-300'
                                    }`}
                            >
                                {lang.code.toUpperCase()}
                                {language === lang.code && <Check size={14} />}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="ghost"
                className="flex items-center gap-2 pl-3 pr-4 py-2 bg-slate-50 dark:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors h-auto border-none shadow-none"
            >
                <Globe size={16} className="text-slate-500 dark:text-slate-400" />
                <span>{currentLangLabel}</span>
                <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </Button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 w-40 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1 overflow-hidden animate-fade-in z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code)}
                            className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 flex items-center justify-between ${language === lang.code
                                    ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10'
                                    : 'text-slate-700 dark:text-slate-300'
                                }`}
                        >
                            {lang.label}
                            {language === lang.code && <Check size={14} />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
