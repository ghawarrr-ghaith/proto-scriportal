import React, { useState } from 'react';
import { User, CreditCard, FileText, Shield, Mail, Clock } from 'lucide-react';
import { Student } from '../../types';
import { StudentInfoView } from './dashboard/StudentInfoView';
import { StudentCardView } from './dashboard/StudentCardView';
import { PaymentHistoryView } from './dashboard/PaymentHistoryView';
import { RegistrationTable } from './dashboard/RegistrationTable';
import { SecurityView } from './dashboard/SecurityView';
import { UniversityEmailView } from './dashboard/UniversityEmailView';
import { Sidebar, DashboardTab } from './dashboard/Sidebar';
import { PaymentStatusView } from './dashboard/PaymentStatusView';
import { PAYMENT_HISTORY } from '../../services/mockData';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from '../ui';

export const DashboardView: React.FC<{ student: Student; onPayClick: () => void; onLogout: () => void }> = ({ student, onPayClick, onLogout }) => {
    const [activeTab, setActiveTab] = useState<DashboardTab>('INFO');
    const { t } = useLanguage();

    const menuItems: { id: DashboardTab; label: string; icon: React.ReactNode }[] = [
        { id: 'INFO', label: t('dashboard.nav.info'), icon: <User size={20} /> },
        { id: 'CARD', label: t('dashboard.nav.card'), icon: <FileText size={20} /> },
        { id: 'PAYMENT', label: t('dashboard.nav.payment'), icon: <CreditCard size={20} /> },
        { id: 'HISTORY', label: t('dashboard.nav.history'), icon: <Clock size={20} /> },
        { id: 'EMAIL', label: t('dashboard.nav.email'), icon: <Mail size={20} /> },
        { id: 'SECURITY', label: t('dashboard.nav.security'), icon: <Shield size={20} /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'INFO':
                return <StudentInfoView student={student} />;
            case 'CARD':
                return <StudentCardView student={student} />;
            case 'PAYMENT':
                return (
                    <div className="space-y-6">
                        <RegistrationTable student={student} />

                        {student.status !== 'PAID' && (
                            <Card className="mt-6">
                                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-4">{t('pay.unpaid')}</h3>
                                <PaymentStatusView student={student} onPayClick={onPayClick} />
                            </Card>
                        )}
                    </div>
                );
            case 'HISTORY':
                return (
                    <div className="space-y-6">
                        <PaymentHistoryView currentHistory={PAYMENT_HISTORY.current} archivedHistory={PAYMENT_HISTORY.archived} />
                    </div>
                );
            case 'EMAIL':
                return <UniversityEmailView student={student} />;
            case 'SECURITY':
                return <SecurityView />;
            default:
                return <StudentInfoView student={student} />;
        }
    };

    return (
        <div className="space-y-8 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <Sidebar student={student} activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />

                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                                {menuItems.find(i => i.id === activeTab)?.label}
                            </h2>
                        </div>

                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};
