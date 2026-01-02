import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png"
                            alt="Tunisia"
                            className="h-8 w-auto mix-blend-multiply dark:mix-blend-normal dark:opacity-80"
                        />
                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 max-w-[200px] leading-tight text-start">
                            {t('footer.mohesr')}
                        </span>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        &copy; {new Date().getFullYear()} Inscription.tn. {t('footer.rights')}
                    </div>
                </div>
            </div>
        </footer>
    );
};
