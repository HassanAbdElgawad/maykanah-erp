// Tab 1: الرواتب
export interface Salary {
  id: number;
  totalGrossSalary: string;
  disbursementDate: string;
  status: 'successful' | 'pending' | 'failed';
}

export const salariesData: Salary[] = [
  {
    id: 1,
    totalGrossSalary: '2522169654126',
    disbursementDate: '9 - 12 - 2023',
    status: 'successful',
  },
  {
    id: 2,
    totalGrossSalary: '2511685255556',
    disbursementDate: '20 - 2 - 2023',
    status: 'successful',
  },
  {
    id: 3,
    totalGrossSalary: '251165552256',
    disbursementDate: '15 - 2 - 2023',
    status: 'successful',
  },
  {
    id: 4,
    totalGrossSalary: '2511636985216',
    disbursementDate: '10 - 2 - 2020',
    status: 'successful',
  },
];

// Tab 2: طلبات السلف
export interface Advance {
  id: number;
  amount: number;
  effectiveDate: string;
  paymentPlan: string;
  status: 'active' | 'inactive';
}

export const advancesData: Advance[] = [
  {
    id: 1,
    amount: 500,
    effectiveDate: '9 - 12 - 2023',
    paymentPlan: 'نوع التعديل للطلوب',
    status: 'active',
  },
  {
    id: 2,
    amount: 400,
    effectiveDate: '20 - 2 - 2023',
    paymentPlan: 'نوع التعديل للطلوب',
    status: 'inactive',
  },
  {
    id: 3,
    amount: 300,
    effectiveDate: '15 - 2 - 2023',
    paymentPlan: 'نوع التعديل للطلوب',
    status: 'active',
  },
  {
    id: 4,
    amount: 500,
    effectiveDate: '10 - 2 - 2020',
    paymentPlan: 'متبى الخدمة',
    status: 'inactive',
  },
];

// Tab 3: طلبات الترقية
export interface Promotion {
  id: number;
  effectiveDate: string;
  modificationType: string;
  promoteTo: string;
  status: 'active' | 'inactive';
}

export const promotionsData: Promotion[] = [
  {
    id: 1,
    effectiveDate: '9 - 12 - 2023',
    modificationType: 'نوع التعديل للطلوب',
    promoteTo: 'ترقية إلى',
    status: 'active',
  },
  {
    id: 2,
    effectiveDate: '20 - 2 - 2023',
    modificationType: 'نوع التعديل للطلوب',
    promoteTo: 'ترقية إلى',
    status: 'inactive',
  },
  {
    id: 3,
    effectiveDate: '15 - 2 - 2023',
    modificationType: 'نوع التعديل للطلوب',
    promoteTo: 'ترقية إلى',
    status: 'active',
  },
  {
    id: 4,
    effectiveDate: '10 - 2 - 2020',
    modificationType: 'نوع التعديل للطلوب',
    promoteTo: 'ترقية إلى',
    status: 'inactive',
  },
];
