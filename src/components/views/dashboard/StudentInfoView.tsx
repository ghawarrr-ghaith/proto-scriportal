import React from 'react';
import { Student } from '../../../types';
import { User, MapPin, GraduationCap, Calendar, Flag } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface SectionProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mb-6 transition-colors">
        <div className="bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600 px-6 py-4 flex items-center gap-2">
            <div className="text-red-600 dark:text-red-500">{icon}</div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
        </div>
    </div>
);

const InfoField: React.FC<{ label: string; value: string | number | undefined; required?: boolean }> = ({ label, value, required }) => (
    <div>
        <label className="block text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="text-slate-900 dark:text-slate-100 font-medium border-b border-slate-100 dark:border-slate-700 pb-1">{value || '-'}</div>
    </div>
);

export const StudentInfoView: React.FC<{ student: Student }> = ({ student }) => {
    const { t } = useLanguage();

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 px-4 py-3 rounded-xl flex items-start gap-3">
                <span className="text-blue-500 mt-0.5">ℹ️</span>
                <div>
                    <p className="font-medium">{t('info.alert_msg')}</p>
                    <p className="text-sm mt-1 text-blue-700 dark:text-blue-400">{t('info.alert_note')}</p>
                </div>
            </div>

            <Section title={t('info.gen_info')} icon={<User size={20} />}>
                <InfoField label={t('lbl.maiden')} value={student.maidenName} />
                <InfoField label={t('lbl.sex')} value={t('lbl.gender') === 'الجنس' ? (student.sex === 'F' ? 'أنثى' : 'ذكر') : (student.sex === 'F' ? 'Feminin' : 'Masculin')} required />
                <InfoField label={t('lbl.birthdate')} value={student.birthDate} required />
                <InfoField label={t('lbl.birthplace')} value={student.birthPlace} required />
                <InfoField label={t('lbl.gov')} value={student.birthGov} required />
                <InfoField label={t('lbl.country_birth')} value={student.birthCountry} required />
                <InfoField label={t('lbl.nationality')} value={student.nationality} required />
                <InfoField label={t('lbl.passport')} value={student.passport} />
                <InfoField label={t('lbl.cnss')} value={student.cnss} />
                <InfoField label={t('lbl.civil')} value={student.civilStatus} required />
                <InfoField label={t('lbl.military')} value={student.militaryStatus} />
            </Section>

            <Section title={t('info.bac_info')} icon={<GraduationCap size={20} />}>
                <InfoField label={t('lbl.bac_year')} value={student.bacYear} required />
                <InfoField label={t('lbl.bac_section')} value={student.bacSection} required />
                <InfoField label={t('lbl.bac_mention')} value={student.bacMention} required />
                <InfoField label={t('lbl.bac_session')} value={student.bacSession} required />
                <InfoField label={t('lbl.bac_country')} value={student.bacCountry} required />
            </Section>

            <Section title={t('info.contact')} icon={<MapPin size={20} />}>
                <div className="md:col-span-3">
                    <InfoField label={t('lbl.address')} value={student.address} required />
                </div>
                <InfoField label="Ville" value={student.city} required />
                <InfoField label="Code postal" value={student.zipCode} required />
                <InfoField label="Gouvernorat" value={student.governorate} required />
                <InfoField label="Pays" value={student.country} required />
                <InfoField label={t('lbl.phone')} value={student.phone} required />
                <InfoField label={t('lbl.email')} value={student.email} required />
            </Section>

            <Section title={t('info.prof_info')} icon={<Flag size={20} />}>
                <InfoField label={t('lbl.prof_title')} value={student.profession} />
                <InfoField label={t('lbl.establishment')} value={student.establishment} />
            </Section>
        </div>
    );
};
