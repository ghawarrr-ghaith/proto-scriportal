import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

interface LayoutProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  isLoggedIn,
  onLogout
}) => {
  const { direction } = useLanguage();

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col font-sans ${direction === 'rtl' ? 'font-arabic' : ''}`} dir={direction}>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative z-0">
        {children}
      </main>

      <Footer />
    </div>
  );
};