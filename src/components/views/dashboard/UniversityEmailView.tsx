import React, { useState } from 'react';
import { Student } from '../../../types';
import { Mail, Copy, ExternalLink, CheckCircle2, Eye, EyeOff, Gift, Blocks, AppWindow, Github, Code2, Palette, FileText } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Button, Card } from '../../ui';

export const UniversityEmailView: React.FC<{ student: Student }> = ({ student }) => {
    const { t } = useLanguage();
    const [showPassword, setShowPassword] = useState(false);
    // Mock email format if not in student object, but we added it to mock data
    const email = student.universityEmail || `${student.firstName.toLowerCase()}.${student.lastName.toLowerCase()}@etudiant-sousse.tn`;

    return (
        <div className="max-w-2xl animate-fade-in">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg overflow-hidden text-white mb-6">
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-white/20 rounded-lg backdrop-blur-sm">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{t('umi.access_data')}</h2>
                            <p className="text-blue-100 text-sm">{t('umi.desc')}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-[10px] uppercase tracking-wider text-blue-200 font-semibold mb-1.5 block">{t('umi.address')}</label>
                            <div className="bg-black/20 rounded-lg p-3 flex items-center justify-between border border-white/10">
                                <span className="font-mono text-base">{email}</span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-white h-auto"
                                    title="Copy"
                                >
                                    <Copy size={16} />
                                </Button>
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] uppercase tracking-wider text-blue-200 font-semibold mb-1.5 block">{t('umi.password')}</label>
                            <div className="bg-black/20 rounded-lg p-3 flex items-center justify-between border border-white/10">
                                <span className="font-mono text-base tracking-widest">
                                    {showPassword ? student.cin : '********'}
                                </span>
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-[10px] bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 px-2 py-0.5 rounded text-blue-100 transition-colors flex items-center gap-1"
                                >
                                    {showPassword ? <EyeOff size={12} /> : <Eye size={12} />}
                                    {showPassword ? 'Masquer' : t('umi.hidden')}
                                </button>
                            </div>
                            <p className="text-[10px] text-blue-200 mt-1.5">{t('umi.initial_pwd')}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-black/20 p-3 flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 text-blue-100">
                        <CheckCircle2 size={14} className="text-green-400" /> Active
                    </span>
                    <a href="https://mail.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-white font-medium hover:underline">
                        {t('umi.access')} <ExternalLink size={14} />
                    </a>
                </div>
            </div>

            <Card padding="lg">
                <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-2">{t('umi.info')}</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>{t('umi.info1')}</li>
                    <li>{t('umi.info2')}</li>
                    <li>{t('umi.info3')}</li>
                </ul>
            </Card>

            <Card padding="lg" className="mt-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <Gift size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 dark:text-slate-100">{t('umi.services_title')}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{t('umi.services_desc')}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { icon: <Blocks size={18} />, label: t('umi.svc_google'), color: 'text-green-600 bg-green-50' },
                        { icon: <AppWindow size={18} />, label: t('umi.svc_microsoft'), color: 'text-blue-600 bg-blue-50' },
                        { icon: <Github size={18} />, label: t('umi.svc_github'), color: 'text-slate-800 bg-slate-100 dark:bg-slate-700 dark:text-slate-300' },
                        { icon: <Code2 size={18} />, label: t('umi.svc_jetbrains'), color: 'text-orange-600 bg-orange-50' },
                        { icon: <Palette size={18} />, label: t('umi.svc_canva'), color: 'text-purple-600 bg-purple-50' },
                        { icon: <FileText size={18} />, label: t('umi.svc_notion'), color: 'text-slate-600 bg-slate-50' }
                    ].map((svc, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors group">
                            <div className={`p-2 rounded-lg ${svc.color} group-hover:scale-110 transition-transform`}>
                                {svc.icon}
                            </div>
                            <span className="font-semibold text-sm text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                {svc.label}
                            </span>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};
