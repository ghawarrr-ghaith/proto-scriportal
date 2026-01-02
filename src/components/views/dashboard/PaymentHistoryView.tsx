import React from 'react';
import { PaymentRecord } from '../../../types';
import { Clock, Archive, Printer, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button } from '../../ui';

const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-700">
        {children}
    </th>
);

interface TableRowProps {
    record: PaymentRecord;
    isArchived?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ record, isArchived = false }) => (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors group">
        {isArchived && (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400 font-medium">
                {record.academicYear}
            </td>
        )}
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
            {record.object}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
            {record.specialty}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-emerald-600 dark:text-emerald-400">
            {record.amount}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400 font-mono text-xs">
            {record.date}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400 font-mono text-xs">
            {record.reference}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Button variant="ghost" size="sm" className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20">
                <Printer size={14} className="mr-1" /> Imprimer
            </Button>
        </td>
    </tr>
);

export const PaymentHistoryView: React.FC<{
    currentHistory: PaymentRecord[],
    archivedHistory: PaymentRecord[]
}> = ({ currentHistory, archivedHistory }) => {
    const { t } = useLanguage();

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Current Payments */}
            {/* Current Payments */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors">
                <div className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600 px-6 py-4 flex items-center gap-2">
                    <div className="text-emerald-600 dark:text-emerald-500"><Clock size={20} /></div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100">{t('hist.this_year')}</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                        <thead>
                            <tr>
                                <TableHeader>{t('hist.object')}</TableHeader>
                                <TableHeader>{t('hist.specialty')}</TableHeader>
                                <TableHeader>{t('hist.amount')}</TableHeader>
                                <TableHeader>{t('hist.date')}</TableHeader>
                                <TableHeader>{t('hist.ref')}</TableHeader>
                                <TableHeader>{t('hist.receipt')}</TableHeader>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                            {currentHistory.map((record) => (
                                <TableRow key={record.id} record={record} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700/30 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t('hist.print_note')}</p>
                </div>
            </div>

            {/* Archived Payments */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors">
                <div className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600 px-6 py-4 flex items-center gap-2">
                    <div className="text-slate-500 dark:text-slate-400"><Archive size={20} /></div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100">{t('hist.archives')}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                        <thead>
                            <tr>
                                <TableHeader>{t('reg.au')}</TableHeader>
                                <TableHeader>{t('hist.object')}</TableHeader>
                                <TableHeader>{t('hist.specialty')}</TableHeader>
                                <TableHeader>{t('hist.amount')}</TableHeader>
                                <TableHeader>{t('hist.date')}</TableHeader>
                                <TableHeader>{t('hist.ref')}</TableHeader>
                                <TableHeader>{t('hist.receipt')}</TableHeader>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                            {archivedHistory.map((record) => (
                                <TableRow key={record.id} record={record} isArchived />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700/30 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t('hist.print_arch_note')}</p>
                </div>
            </div>
        </div>
    );
};
