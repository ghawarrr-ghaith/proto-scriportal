export interface Student {
  cin: string;
  firstName: string;
  lastName: string;
  firstNameAr?: string;
  lastNameAr?: string;
  institutionAr?: string;
  maidenName?: string;
  sex: 'M' | 'F';
  birthDate: string;
  birthPlace: string;
  birthGov: string;
  birthCountry: string;
  nationality: string;
  passport?: string;
  cnss?: string;
  civilStatus: string;
  militaryStatus: string;

  // Baccalaureate
  bacYear: string;
  bacSection: string;
  bacMention: string;
  bacSession: string;
  bacCountry: string;

  // Address
  address: string;
  city: string;
  zipCode: string;
  governorate: string;
  country: string;
  phone: string;
  email: string;
  universityEmail: string;

  // Academic
  profession?: string;
  institution: string;
  establishment: string;
  level: string;
  academicYear: string;
  
  // Status
  status: 'PAID' | 'UNPAID' | 'PARTIAL';
  amount: number;
  tranche1Amount: number;
  tranche2Amount: number;
}

export interface PaymentRecord {
  id: string;
  object: string;
  specialty: string;
  amount: string; // Formatted string DT
  date: string;
  reference: string;
  academicYear?: string; // For archived
  status: 'PAID';
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  category: 'General' | 'Urgent' | 'Maintenance';
}

export interface University {
  id: string;
  name: string;
}

export type ViewState = 'HOME' | 'LOGIN' | 'SIGNUP' | 'DASHBOARD' | 'PAYMENT' | 'SUCCESS';
