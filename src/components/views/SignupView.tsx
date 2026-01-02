import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Alert, Card } from '../ui';

export const SignupView: React.FC = () => {
    const navigate = useNavigate();
    const onSignup = (data: any) => {
        navigate('/dashboard');
    };
    const [formData, setFormData] = useState({
        cin: '',
        fullname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useLanguage();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        // @ts-ignore
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.cin || !formData.email || !formData.phone || !formData.password || !formData.fullname) {
            setError(t('err.fill_all'));
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError(t('err.password_mismatch')); // Assuming this key exists or will fallback
            return;
        }
        if (!formData.termsAccepted) {
            setError(t('err.accept_terms'));
            return;
        }

        setIsLoading(true);
        // Simulate API delay
        setTimeout(() => {
            setIsLoading(false);
            onSignup(formData);
        }, 1000);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-slate-900">
            <Card className="w-full max-w-md p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
                        <UserPlus size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('auth.signup_title')}</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{t('auth.signup_desc')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label={t('auth.cin_placeholder')}
                        type="text"
                        name="cin"
                        value={formData.cin}
                        onChange={handleChange}
                        placeholder="12345678"
                    />

                    <Input
                        label={t('auth.fullname_placeholder')}
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder=""
                    />

                    <Input
                        label={t('lbl.email')}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="student@example.com"
                    />

                    <Input
                        label={t('lbl.phone')}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=""
                    />

                    <Input
                        label={t('auth.password_placeholder')}
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder=""
                    />

                    <Input
                        label={t('auth.confirm_password')}
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder=""
                    />

                    <div className="flex items-center gap-2 pt-2">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            id="terms"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className="w-4 h-4 text-red-600 border-slate-300 dark:border-slate-600 dark:bg-slate-700 rounded focus:ring-red-500"
                        />
                        <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer select-none">{t('auth.terms')}</label>
                    </div>

                    {error && (
                        <Alert variant="error">
                            {error}
                        </Alert>
                    )}

                    <div className="pt-4">
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            isLoading={isLoading}
                            className="w-full"
                        >
                            {t('auth.signup_btn')}
                        </Button>
                    </div>
                </form>

                <div className="mt-6 text-center space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        {t('auth.have_account')}{' '}
                        <button onClick={() => navigate('/login')} className="text-red-600 dark:text-red-400 font-semibold hover:text-red-700 dark:hover:text-red-300">
                            {t('auth.login_btn')}
                        </button>
                    </p>
                </div>
            </Card>
        </div>
    );
};
