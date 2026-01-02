import React from 'react';
import { CheckCircle2, FileText, Clock, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Student } from '../../../types';
import { Button, Badge, Card, Alert } from '../../ui';

interface PaymentStatusViewProps {
    student: Student;
    onPayClick: () => void;
}

export const PaymentStatusView: React.FC<PaymentStatusViewProps> = ({ student, onPayClick }) => {
    const { t } = useLanguage();

    if (student.status === 'PAID') {
        return (
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">{t('pay.paid')}</span>
                    <Badge variant="success" size="md">
                        <CheckCircle2 size={14} className="mx-1" /> {t('pay.paid')}
                    </Badge>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">{t('reg.total_amount')}</span>
                    <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">{student.amount.toFixed(3)} <span className="text-sm text-slate-500 dark:text-slate-400 font-normal">TND</span></span>
                </div>
                <Button
                    disabled
                    variant="outline"
                    className="w-full text-green-700 dark:text-green-400 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20"
                >
                    <FileText size={18} /> {t('hist.receipt')}
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">{t('pay.unpaid')}</span>
                {student.status === 'PARTIAL' ? (
                    <Badge variant="primary">
                        <Clock size={14} className="mx-1" /> {t('pay.partial')}
                    </Badge>
                ) : (
                    <Badge variant="warning">
                        <AlertCircle size={14} className="mx-1" /> {t('reg.inactive')}
                    </Badge>
                )}
            </div>

            <div className="space-y-3">
                {/* Full Payment Option - Only if completely unpaid */}
                {student.status === 'UNPAID' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800 hover:border-red-200 dark:hover:border-red-700 transition-colors">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-red-900 dark:text-red-300">{t('reg.total_amount')}</span>
                            <span className="font-bold text-red-700 dark:text-red-400">{student.amount.toFixed(3)} TND</span>
                        </div>
                        <Button
                            onClick={onPayClick}
                            className="w-full"
                            variant="primary"
                            size="sm"
                        >
                            {t('reg.payment')}
                        </Button>
                    </div>
                )}

                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white dark:bg-slate-800 px-2 text-xs text-slate-400 dark:text-slate-500">{t('reg.payment')}</span>
                    </div>
                </div>

                {/* Tranche 1 */}
                <div className={`p-4 rounded-xl border transition-colors ${student.status === 'UNPAID' ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'}`}>
                    <div className="flex justify-between items-center mb-2">
                        <span className={`font-semibold ${student.status === 'UNPAID' ? 'text-slate-900 dark:text-slate-100' : 'text-green-900 dark:text-green-300'}`}>{t('reg.tranche1_amount')}</span>
                        <span className={student.status === 'UNPAID' ? 'text-slate-900 dark:text-slate-100' : 'text-green-700 dark:text-green-400'}>{student.tranche1Amount?.toFixed(3)} TND</span>
                    </div>
                    {student.status === 'UNPAID' ? (
                        <Button
                            onClick={onPayClick}
                            className="w-full"
                            variant="outline"
                            size="sm"
                        >
                            {t('reg.payment')}
                        </Button>
                    ) : (
                        <div className="flex items-center gap-1 text-xs text-green-700 dark:text-green-400 font-medium justify-center">
                            <CheckCircle2 size={12} /> {t('pay.paid')}
                        </div>
                    )}
                </div>

                {/* Tranche 2 */}
                <div className={`p-4 rounded-xl border transition-colors ${student.status === 'PARTIAL' ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-slate-50 dark:bg-slate-700/50 border-slate-100 dark:border-slate-600 opacity-75'}`}>
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">{t('reg.tranche1_amount')}</span>
                        <span className="text-slate-900 dark:text-slate-100">{student.tranche2Amount?.toFixed(3)} TND</span>
                    </div>
                    {student.status === 'PARTIAL' ? (
                        <Button
                            onClick={onPayClick}
                            className="w-full"
                            variant="secondary"
                            size="sm"
                        >
                            {t('reg.payment')}
                        </Button>
                    ) : (
                        <Button disabled variant="ghost" className="w-full cursor-not-allowed text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800">
                            {student.status === 'PAID' ? t('pay.paid') : t('reg.payment')}
                        </Button>
                    )}
                </div>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 text-center">{t('reg.note')}</p>
        </div>
    );
};
