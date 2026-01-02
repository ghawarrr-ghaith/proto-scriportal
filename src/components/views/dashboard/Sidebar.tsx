import React from 'react';
import { User, FileText, CreditCard, Clock, Mail, Shield, LogOut } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Student } from '../../../types';
import { Button, Card } from '../../ui';

export type DashboardTab = 'INFO' | 'CARD' | 'PAYMENT' | 'HISTORY' | 'EMAIL' | 'SECURITY';

interface SidebarProps {
    student: Student;
    activeTab: DashboardTab;
    setActiveTab: (tab: DashboardTab) => void;
    onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ student, activeTab, setActiveTab, onLogout }) => {
    const { t } = useLanguage();

    const menuItems: { id: DashboardTab; label: string; icon: React.ReactNode }[] = [
        { id: 'INFO', label: t('dashboard.nav.info'), icon: <User size={20} /> },
        { id: 'CARD', label: t('dashboard.nav.card'), icon: <FileText size={20} /> },
        { id: 'PAYMENT', label: t('dashboard.nav.payment'), icon: <CreditCard size={20} /> },
        { id: 'HISTORY', label: t('dashboard.nav.history'), icon: <Clock size={20} /> },
        { id: 'EMAIL', label: t('dashboard.nav.email'), icon: <Mail size={20} /> },
        { id: 'SECURITY', label: t('dashboard.nav.security'), icon: <Shield size={20} /> },
    ];

    return (
        <aside className="lg:w-64 flex-shrink-0">
            <Card padding="none" className="overflow-hidden sticky top-24">
                <div className="p-6 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600">
                    <div className="font-bold text-slate-800 dark:text-slate-100 text-lg">{t('dashboard.welcome')}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{student.firstName} {student.lastName}</div>
                </div>
                <nav className="p-2 space-y-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${activeTab === item.id
                                ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 shadow-sm'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100'
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}

                </nav>

                {student.status !== 'PAID' && (
                    <div className="p-4 mt-2 border-t border-slate-100 dark:border-slate-700">
                        <Button
                            onClick={() => setActiveTab('PAYMENT')}
                            className="w-full"
                            variant="primary"
                        >
                            <CreditCard size={16} /> {t('reg.payment')}
                        </Button>
                    </div>
                )}
            </Card>
        </aside>
    );
};
