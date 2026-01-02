import React from 'react';
import { Lock, History, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Input, Button, Alert } from '../../ui';

export const SecurityView: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="max-w-3xl space-y-8 animate-fade-in">

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors">
                <div className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600 px-6 py-4 flex items-center gap-2">
                    <div className="text-red-600 dark:text-red-500"><Lock size={20} /></div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100">{t('sec.password')}</h3>
                </div>
                <div className="p-6 space-y-4">
                    <Input
                        label={t('sec.current')}
                        type="password"
                        placeholder="••••••••"
                    />
                    <Input
                        label={t('sec.new')}
                        type="password"
                        placeholder="••••••••"
                    />
                    <Input
                        label={t('sec.confirm')}
                        type="password"
                        placeholder="••••••••"
                    />
                    <div className="pt-2">
                        <Button variant="primary">{t('sec.update')}</Button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors">
                <div className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600 px-6 py-4 flex items-center gap-2">
                    <div className="text-slate-500 dark:text-slate-400"><History size={20} /></div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100">{t('sec.login_activity')}</h3>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-700">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 flex justify-between items-center text-sm">
                            <div>
                                <p className="font-medium text-slate-800 dark:text-slate-200">Windows PC - Chrome</p>
                                <p className="text-slate-400 dark:text-slate-500 text-xs">Metlaoui, Tunisia • IP: 197.xx.xx.xx</p>
                            </div>
                            <span className="text-slate-500 dark:text-slate-400">{i === 1 ? 'Just now' : `${i * 2} days ago`}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Alert variant="warning" icon={ShieldAlert}>
                {t('sec.ensure_security')}
            </Alert>
        </div>
    );
};
