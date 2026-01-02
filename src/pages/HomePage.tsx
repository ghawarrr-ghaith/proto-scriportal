import React from 'react';
import { HomeView } from '../components/views/HomeView';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <HomeView
            onStart={() => navigate('/login')}
        />
    );
};
