import React from 'react';
import { SignupView } from '../components/views/SignupView';
import { useNavigate } from 'react-router-dom';

export const SignupPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSignup = (data: any) => {
        console.log('Signing up with:', data);
        navigate('/dashboard');
    };

    return (
        <SignupView
            onSignup={handleSignup}
            onBack={() => navigate('/')}
            onLoginClick={() => navigate('/login')}
        />
    );
};
