import React from 'react';
import { GraduationCap, Menu, X, LogIn, LogOut, Moon, Sun } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '../ui';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
    isLoggedIn: boolean;
    onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <div className="bg-red-600 p-2.5 rounded-xl shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform duration-300">
                            <GraduationCap className="text-white" size={28} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl text-slate-800 dark:text-slate-100 tracking-tight group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                                {t('app.title')}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">
                                {t('app.republic')}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            onClick={toggleTheme}
                            variant="ghost"
                            size="sm"
                            className="p-2 h-auto rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 border-none shadow-none"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={18} className="text-slate-700 dark:text-slate-300" /> : <Moon size={18} className="text-slate-700" />}
                        </Button>

                        <LanguageSelector />

                        <nav className="flex items-center gap-1">
                            <Link
                                to="/"
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${location.pathname === '/'
                                        ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100'
                                    }`}
                            >
                                {t('nav.home')}
                            </Link>
                            {isLoggedIn ? (
                                <Button
                                    onClick={onLogout}
                                    variant="secondary"
                                    className="ml-2"
                                >
                                    <LogOut size={16} />
                                    {t('nav.logout')}
                                </Button>
                            ) : (
                                <Link to="/login">
                                    <Button
                                        variant="primary"
                                        className="ml-2"
                                    >
                                        <LogIn size={16} />
                                        {t('nav.login')}
                                    </Button>
                                </Link>
                            )}
                        </nav>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <Button
                            onClick={toggleTheme}
                            variant="ghost"
                            size="sm"
                            className="p-1.5 h-auto rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors border-none shadow-none"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={16} className="text-slate-700 dark:text-slate-300" /> : <Moon size={16} className="text-slate-700" />}
                        </Button>

                        <LanguageSelector mobile />

                        <Button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            variant="ghost"
                            size="sm"
                            className="p-2 h-auto text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors border-none shadow-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 absolute w-full left-0 shadow-xl animate-slide-in-top">
                    <div className="px-4 py-4 space-y-2">
                        <button
                            onClick={() => {
                                navigate('/');
                                setIsMenuOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${location.pathname === '/'
                                    ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                                }`}
                        >
                            {t('nav.home')}
                        </button>
                        {isLoggedIn ? (
                            <button
                                onClick={() => {
                                    onLogout();
                                    setIsMenuOpen(false);
                                }}
                                className="w-full flex items-center gap-2 px-4 py-3 text-red-600 dark:text-red-400 font-bold hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl text-sm"
                            >
                                <LogOut size={18} />
                                {t('nav.logout')}
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    navigate('/login');
                                    setIsMenuOpen(false);
                                }}
                                className="w-full flex items-center gap-2 px-4 py-3 bg-red-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-red-600/20"
                            >
                                <LogIn size={18} />
                                {t('nav.login')}
                            </button>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};
