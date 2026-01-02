import React from 'react';
import { ArrowRight, FileText, Search, School, Wallet, ChevronRight, Calendar } from 'lucide-react';
import { NEWS_ITEMS } from '../../services/mockData';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Badge } from '../ui';

export const HomeView: React.FC = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative bg-slate-900 dark:bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-300 mb-6 backdrop-blur-sm gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                            {t('home.academic_open')}
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                            {t('home.welcome')}<br />
                            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
                                {t('home.simplified')}
                            </span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                            {t('home.desc')}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={() => navigate('/login')}
                                variant="primary"
                                size="lg"
                                className="rounded-full shadow-lg shadow-red-500/20"
                            >
                                {t('home.start')} <ArrowRight className="rtl:rotate-180" size={20} />
                            </Button>
                            <Button
                                onClick={() => navigate('/login')}
                                variant="outline"
                                size="lg"
                                className="rounded-full bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200"
                            >
                                {t('home.how_works')} <ChevronRight size={20} />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{t('home.latest_updates')}</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">{t('home.updates_desc')}</p>
                    </div>
                    <Button variant="ghost" className="text-red-600 dark:text-red-400 font-semibold hover:text-red-700 dark:hover:text-red-300">
                        {t('home.view_all')} <ChevronRight size={18} />
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {NEWS_ITEMS.map((news) => (
                        <Card key={news.id} hover className="group cursor-pointer">
                            <div className="flex items-center gap-2 mb-4">
                                <Badge variant={news.category === 'Urgent' ? 'error' : 'secondary'} size="sm">
                                    {t(`news.cat_${news.category.toLowerCase()}`)}
                                </Badge>
                                <span className="text-slate-400 dark:text-slate-500 text-xs flex items-center gap-1">
                                    <Calendar size={12} /> {news.date}
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">{t(news.title)}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">{t(news.summary)}</p>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};
