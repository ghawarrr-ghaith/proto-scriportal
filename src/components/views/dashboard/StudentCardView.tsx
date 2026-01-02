import React from 'react';
import { Student } from '../../../types';
import { QrCode, Download } from 'lucide-react';
import { Button } from '../../ui';

export const StudentCardView: React.FC<{ student: Student }> = ({ student }) => {
    return (
        <div className="max-w-xl mx-auto space-y-6 animate-fade-in" dir="ltr">

            {/* The Card */}
            <div className="relative w-full aspect-[1.586/1] bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 print:shadow-none print:border">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-slate-50 opacity-50"
                    style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                </div>

                <div className="relative h-full p-4 flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-2 border-b-2 border-red-600 pb-2">
                        <div className="w-1/3 pl-1">
                            <span className="fi fi-tn text-4xl rounded-[2px] shadow-sm opacity-90 block w-[50px] aspect-[4/3]"></span>
                        </div>
                        <div className="text-center w-full">
                            <h3 className="font-bold text-[10px] sm:text-xs text-slate-800 uppercase leading-tight">{student.institutionAr || 'الجامعة'}</h3>
                            <h3 className="font-bold text-[9px] sm:text-[10px] text-slate-600 uppercase leading-tight tracking-tight">{student.institution}</h3>
                        </div>
                        <div className="w-1/3 flex justify-end">
                            <div className="bg-white p-1 rounded-lg border border-slate-200">
                                <QrCode size={40} className="text-slate-900" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow flex gap-4">
                        {/* Text Info */}
                        <div className="flex-1 space-y-1 sm:space-y-1.5 pt-1">
                            <div className="flex justify-between items-center bg-red-50 px-2 py-0.5 rounded border border-red-100">
                                <span className="font-bold text-xs uppercase text-red-800">Carte étudiant</span>
                                <span className="font-bold text-xs text-slate-800">{student.academicYear || '2025-2026'}</span>
                                <span className="font-bold text-xs font-arabic text-red-800">بطاقة طالب</span>
                            </div>

                            <div className="flex items-center justify-between text-[11px] sm:text-xs mt-2">
                                <span className="font-bold text-slate-500">Code: <span className="text-slate-900">114</span></span>
                                <span className="font-bold text-slate-900 text-sm tracking-widest">{student.cin}</span>
                            </div>

                            {/* Name Section */}
                            <div className="flex justify-between items-start mt-4 border-b border-slate-100 pb-2">
                                <div className="text-left w-1/2">
                                    <div className="text-[9px] uppercase text-slate-500 font-bold">Nom et prénom</div>
                                    <div className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide leading-tight">
                                        {student.firstName} {student.lastName}
                                    </div>
                                </div>
                                <div className="text-right w-1/2">
                                    <div className="text-[10px] font-bold text-slate-500 font-arabic mb-0.5">الإسم و اللقب</div>
                                    <div className="text-xs sm:text-sm font-bold text-slate-800 font-arabic leading-tight">
                                        {student.firstNameAr || 'غادة'} {student.lastNameAr || 'غوار'}
                                    </div>
                                </div>
                            </div>

                            {/* Shared Data Section */}
                            <div className="mt-2 space-y-2">
                                {/* DOB */}
                                <div className="flex items-center justify-between bg-slate-50 rounded px-2 py-1">
                                    <span className="text-[9px] uppercase text-slate-500 font-bold w-1/3 text-left">Date de naissance</span>
                                    <span className="text-xs font-bold text-slate-900 w-1/3 text-center tracking-wider">{student.birthDate}</span>
                                    <span className="text-[10px] font-bold text-slate-500 font-arabic w-1/3 text-right">تاريخ الولادة</span>
                                </div>

                                {/* CIN */}
                                <div className="flex items-center justify-between bg-slate-50 rounded px-2 py-1">
                                    <span className="text-[9px] uppercase text-slate-500 font-bold w-1/3 text-left">N° C.I.N</span>
                                    <span className="text-xs font-bold text-slate-900 w-1/3 text-center tracking-widest">{student.cin}</span>
                                    <span className="text-[10px] font-bold text-slate-500 font-arabic w-1/3 text-right">ر. ب. ت. و</span>
                                </div>
                            </div>

                            {/* Validity */}
                            <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 px-1">
                                <span className="text-[9px] uppercase text-slate-400 font-bold w-1/3 text-left">Validité</span>
                                <span className="text-[10px] font-bold text-slate-900 w-1/3 text-center tracking-wider">2025/2026</span>
                                <span className="text-[10px] font-bold text-slate-400 font-arabic w-1/3 text-right">صالح للسنة الجامعية</span>
                            </div>
                        </div>

                        {/* Photo Area */}
                        <div className="w-24 sm:w-28 flex flex-col items-center justify-start pt-2">
                            <div className="w-full aspect-[3/4] bg-slate-200 rounded border-2 border-slate-300 flex items-center justify-center mb-2 overflow-hidden">
                                {/* Placeholder or Image */}
                                <span className="text-3xl grayscale">🎓</span>
                            </div>
                            <div className="text-[10px] font-mono text-slate-400 rotate-0">1909391</div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-2 pt-1 border-t-2 border-slate-800 text-center">
                        <span className="font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-900">- CARTE PROVISOIRE -</span>
                    </div>

                </div>
            </div>

            <div className="flex justify-center">
                <Button
                    variant="secondary"
                    className="flex items-center gap-2 rounded-full"
                >
                    <Download size={18} />
                    Télécharger / Imprimer
                </Button>
            </div>

        </div>
    );
};
