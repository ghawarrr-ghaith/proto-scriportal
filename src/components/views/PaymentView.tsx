import React, { useState } from 'react';
import { CreditCard, CheckCircle2, Wallet, X, Loader2 } from 'lucide-react';

export const PaymentView: React.FC<{
    amount: number;
    onSuccess: () => void;
    onCancel: () => void;
}> = ({ amount, onSuccess, onCancel }) => {
    const [processing, setProcessing] = useState(false);

    const handlePay = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            onSuccess();
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                        <CreditCard size={18} /> Secure Payment
                    </h3>
                    <button onClick={onCancel} className="text-slate-400 hover:text-slate-600">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6">
                    <div className="text-center mb-8">
                        <span className="block text-sm text-slate-500 mb-1">Amount to pay</span>
                        <span className="text-4xl font-bold text-slate-900">{amount.toFixed(3)} <span className="text-lg text-slate-400">TND</span></span>
                    </div>

                    <div className="space-y-3 mb-8">
                        <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 hover:border-red-200 transition-all group">
                            <input type="radio" name="payment" className="w-4 h-4 text-red-600 border-slate-300 focus:ring-red-500" defaultChecked />
                            <div className="ml-3 flex-1">
                                <span className="block text-sm font-medium text-slate-900">e-Dinar Smart</span>
                                <span className="block text-xs text-slate-500">La Poste Tunisienne</span>
                            </div>
                            <Wallet className="text-slate-300 group-hover:text-red-400" />
                        </label>

                        <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-slate-50 hover:border-red-200 transition-all group">
                            <input type="radio" name="payment" className="w-4 h-4 text-red-600 border-slate-300 focus:ring-red-500" />
                            <div className="ml-3 flex-1">
                                <span className="block text-sm font-medium text-slate-900">Credit Card</span>
                                <span className="block text-xs text-slate-500">Visa / Mastercard / CIB</span>
                            </div>
                            <CreditCard className="text-slate-300 group-hover:text-red-400" />
                        </label>
                    </div>

                    <button
                        onClick={handlePay}
                        disabled={processing}
                        className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-500/20 transition-all flex items-center justify-center"
                    >
                        {processing ? (
                            <>
                                <Loader2 className="animate-spin mr-2" size={20} /> Processing...
                            </>
                        ) : (
                            'Confirm Payment'
                        )}
                    </button>
                </div>
                <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                        <CheckCircle2 size={12} /> 128-bit SSL Encrypted Transaction
                    </p>
                </div>
            </div>
        </div>
    );
};
