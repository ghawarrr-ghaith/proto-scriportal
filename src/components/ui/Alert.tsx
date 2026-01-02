import React from 'react';
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react';

interface AlertProps {
    variant?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Alert: React.FC<AlertProps> = ({
    variant = 'info',
    title,
    children,
    className = '',
}) => {
    const variants = {
        info: {
            container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
            text: 'text-blue-700 dark:text-blue-400',
            icon: Info,
        },
        success: {
            container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
            text: 'text-green-700 dark:text-green-400',
            icon: CheckCircle2,
        },
        warning: {
            container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
            text: 'text-yellow-700 dark:text-yellow-400',
            icon: AlertTriangle,
        },
        error: {
            container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
            text: 'text-red-700 dark:text-red-400',
            icon: AlertCircle,
        },
    };

    const config = variants[variant];
    const Icon = config.icon;

    return (
        <div className={`border ${config.container} ${config.text} px-4 py-3 rounded-xl flex items-start gap-3 ${className}`}>
            <Icon size={20} className="flex-shrink-0 mt-0.5" />
            <div className="flex-1">
                {title && <div className="font-semibold mb-1">{title}</div>}
                <div className="text-sm">{children}</div>
            </div>
        </div>
    );
};
