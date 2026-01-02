import React from 'react';
import { LoginView } from '../components/views/LoginView';
import { useNavigate } from 'react-router-dom';
import { UNIVERSITIES } from '../services/mockData';

export const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = (email: string) => {
        // In a real app, you'd handle auth state here
        console.log('Logging in with:', email);
        onLogin();
        navigate('/dashboard');
    };

    return (
        <LoginView
            universities={UNIVERSITIES}
            onLogin={handleLogin}
            onBack={() => navigate('/')}
            onSignupClick={() => navigate('/signup')}
        />
    );
};
