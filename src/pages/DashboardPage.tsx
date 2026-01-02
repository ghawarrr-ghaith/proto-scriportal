import React from 'react';
import { DashboardView } from '../components/views/DashboardView';
import { MOCK_STUDENT } from '../services/mockData';

export const DashboardPage: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    const handlePayClick = () => {
        // Mock payment redirection
        window.alert("Redirection vers la plateforme de paiement sécurisée de La Poste Tunisienne...");
    };

    return (
        <DashboardView
            student={MOCK_STUDENT}
            onPayClick={handlePayClick}
            onLogout={onLogout}
        />
    );
};
