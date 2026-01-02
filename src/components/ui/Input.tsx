import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    helperText,
    className = '',
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {label}
                </label>
            )}
            <input
                className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border ${error
                        ? 'border-red-300 dark:border-red-600 focus:ring-red-500'
                        : 'border-slate-200 dark:border-slate-600 focus:ring-red-500'
                    } rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{helperText}</p>
            )}
        </div>
    );
};
