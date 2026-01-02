import React from 'react';
import { Student } from '../../../types';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Badge } from '../../ui';

export const RegistrationTable: React.FC<{ student: Student }> = ({ student }) => {
    const { t } = useLanguage();

    // Helper to format currency
    const fmt = (val: number) => `${val.toFixed(3)} DT`;

    // Derived values based on user logic (70.4 + 2 = 72.4)
    const cardFee = 2.000;
    const tuitionTotal = student.amount - cardFee;
    const tranche1Tuition = student.tranche1Amount - cardFee;

    const getPaymentStatusBadge = (status: string) => {
        switch (status) {
            case 'PAID': return <Badge variant="success" size="sm">{t('pay.paid')}</Badge>;
            case 'PARTIAL': return <Badge variant="primary" size="sm">{t('pay.partial')}</Badge>;
            default: return <Badge variant="error" size="sm">{t('pay.unpaid')}</Badge>;
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden animate-fade-in transition-colors">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                    <thead className="bg-slate-50 dark:bg-slate-700/50">
                        <tr>
                            <th className="px-4 py-3 text-start text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider border-r border-slate-200 dark:border-slate-700">{t('reg.au')}</th>
                            <th className="px-4 py-3 text-start text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider border-r border-slate-200 dark:border-slate-700">{t('reg.diploma')}</th>
                            <th className="px-4 py-3 text-center text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider border-r border-slate-200 dark:border-slate-700">{t('reg.cycle')}</th>
                            <th className="px-4 py-3 text-center text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider border-r border-slate-200 dark:border-slate-700">{t('reg.level')}</th>
                            <th className="px-4 py-3 text-end text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider border-r border-slate-200 dark:border-slate-700">{t('reg.total_amount')}</th>
                            <th className="px-4 py-3 text-end text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider border-r border-slate-200 dark:border-slate-700">{t('reg.tranche1_amount')}</th>
                            <th className="px-4 py-3 text-end text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider border-r border-slate-200 dark:border-slate-700">{t('reg.card_fee')}</th>
                            <th className="px-4 py-3 text-center text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider border-r border-slate-200 dark:border-slate-700">{t('reg.payment')}</th>
                            <th className="px-4 py-3 text-center text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">{t('reg.registration')}</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                        <tr>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100 font-medium border-r border-slate-200 dark:border-slate-700 text-start">
                                {student.academicYear}
                            </td>
                            <td className="px-4 py-4 text-sm text-slate-900 dark:text-slate-100 border-r border-slate-200 dark:border-slate-700 text-start">
                                <div className="font-bold">{student.diploma || 'Licence en Science de l\'Informatique'}</div>
                                <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">{t('reg.spec')}: LISI 2</div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100 text-center border-r border-slate-200 dark:border-slate-700">
                                1
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100 text-center border-r border-slate-200 dark:border-slate-700">
                                {student.level.includes('2nd') ? '2' : '1'}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100 text-end font-mono border-r border-slate-200 dark:border-slate-700">
                                {fmt(tuitionTotal)}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100 text-end font-mono border-r border-slate-200 dark:border-slate-700">
                                {fmt(tranche1Tuition)}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100 text-end font-mono border-r border-slate-200 dark:border-slate-700">
                                {fmt(cardFee)}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-center border-r border-slate-200 dark:border-slate-700">
                                {getPaymentStatusBadge(student.status)}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                                <Badge variant="neutral" size="sm">
                                    {t('reg.inactive')}
                                </Badge>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700/30 px-6 py-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    {t('reg.note')}
                </p>
            </div>
        </div>
    );
};
