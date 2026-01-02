import React, { useState } from 'react';
import { School } from 'lucide-react';
import { University } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

import { useNavigate } from 'react-router-dom';
import { Button, Input, Card } from '../ui';

export const LoginView: React.FC<{
    universities: University[];
    onLogin: (email: string) => void;
    onBack: () => void;
    onSignupClick: () => void;
}> = ({ universities, onLogin, onBack, onSignupClick }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('ghada.ghawarr@gmail.com');
    const [password, setPassword] = useState('12345678');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError(t('err.enter_creds'));
            return;
        }

        setIsLoading(true);
        // Simulate API delay
        setTimeout(() => {
            setIsLoading(false);
            onLogin(email);
        }, 1000);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-slate-900">
            <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
                        <School size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('auth.login_title')}</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{t('auth.login_desc')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label={t('lbl.email')}
                        type="email"
                        placeholder={t('auth.email_placeholder')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        label={t('lbl.password')}
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && (
                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="pt-2">
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            isLoading={isLoading}
                            className="w-full"
                        >
                            {t('auth.login_btn')}
                        </Button>
                    </div>
                </form>

                <div className="mt-6 text-center space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        {t('auth.no_account')}{' '}
                        <button onClick={() => navigate('/signup')} className="text-red-600 dark:text-red-400 font-semibold hover:text-red-700 dark:hover:text-red-300">
                            {t('auth.create_account')}
                        </button>
                    </p>
                </div>
            </Card>
        </div >
    );
};
