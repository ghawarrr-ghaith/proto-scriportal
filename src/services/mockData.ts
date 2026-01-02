import { University, Student, NewsItem, PaymentRecord } from '../types';

export const UNIVERSITIES: University[] = [
  { id: 'u_carthage', name: 'University of Carthage' },
  { id: 'u_tunis', name: 'University of Tunis El Manar' },
  { id: 'u_sfax', name: 'University of Sfax' },
  { id: 'u_sousse', name: 'University of Sousse' },
  { id: 'u_monastir', name: 'University of Monastir' },
  { id: 'u_jendouba', name: 'University of Jendouba' },
  { id: 'u_gabes', name: 'University of Gabes' },
  { id: 'u_kairouan', name: 'University of Kairouan' },
  { id: 'u_gafsa', name: 'University of Gafsa' },
  { id: 'u_manouba', name: 'University of La Manouba' },
  { id: 'u_zitouna', name: 'University of Ez-Zitouna' },
  { id: 'iset', name: 'General Directorate of Technological Studies (ISET)' },
];

export const MOCK_STUDENT: Student = {
  cin: '12345678', // Kept generic for login if needed, though user prompted specific data
  firstName: 'Ghada',
  lastName: 'Ghawarr',
  firstNameAr: 'غادة',
  lastNameAr: 'غوار',
  institutionAr: 'كلية العلوم بقفصة',
  maidenName: '',
  sex: 'F',
  birthDate: '31/07/2005',
  birthPlace: 'Metlaoui',
  birthGov: 'Gafsa',
  birthCountry: 'Tunisie',
  nationality: 'tunisienne',
  passport: '-',
  cnss: '',
  civilStatus: 'Célibataire', // Assumed choice
  militaryStatus: 'Dispensé', // Assumed choice

  bacYear: '2024',
  bacSection: 'Informatique',
  bacMention: 'Passable',
  bacSession: 'Controle',
  bacCountry: 'Tunisie',

  address: 'Cite El Amel 2130 Metaloui Gafsa',
  city: 'Metlaoui',
  zipCode: '2130',
  governorate: 'Gafsa',
  country: 'Tunisie',
  phone: '28046746',
  email: 'ghada.ghawarr@gmail.com',
  universityEmail: 'ghada.ghawarr@fsgf.rnu.tn',

  profession: 'Etudiante',
  institution: 'Faculty of Sciences of Gafsa', 
  establishment: 'University of Gafsa',
  level: '2nd Year License',
  academicYear: '2025-2026', // Updated based on payment date 2025

  status: 'UNPAID',
  amount: 72.400,
  tranche1Amount: 42.400,
  tranche2Amount: 30.000
};

export const PAYMENT_HISTORY: { current: PaymentRecord[], archived: PaymentRecord[] } = {
  current: [
    {
      id: '862831',
      object: 'Paiement total',
      specialty: 'LISI 2',
      amount: '72.400 DT',
      date: '28/08/2025 09:15:27',
      reference: '862831',
      status: 'PAID'
    }
  ],
  archived: [
    {
      id: '195567',
      academicYear: '2024-2025',
      object: 'Paiement de la premiere tranche',
      specialty: 'TRONC COMMUN',
      amount: '42.000 DT',
      date: '30/08/2024 10:50:48',
      reference: '195567',
      status: 'PAID'
    },
    {
      id: '752831',
      academicYear: '2024-2025',
      object: 'Paiement de la deuxieme tranche',
      specialty: 'TRONC COMMUN',
      amount: '30.000 DT',
      date: '24/04/2025 03:25:24',
      reference: '752831',
      status: 'PAID'
    }
  ]
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "news.item1_title",
    date: "2024-08-15",
    summary: "news.item1_summary",
    category: "Urgent"
  },
  {
    id: 2,
    title: "news.item2_title",
    date: "2024-07-20",
    summary: "news.item2_summary",
    category: "General"
  },
  {
    id: 3,
    title: "news.item3_title",
    date: "2024-09-10",
    summary: "news.item3_summary",
    category: "General"
  }
];
