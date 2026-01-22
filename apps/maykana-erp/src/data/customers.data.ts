// Customers Data - Sample customer records for sales management
export interface Customer {
  id: number;
  name: string;
  type: string;
  country: string;
  currency: string;
  paymentTerms: string;
  phone: string;
  taxNumber: string;
  postalCode: string;
  status: string;
}

export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 1,
    name: 'أحمد المالكي',
    type: 'فرد',
    country: 'المملكة العربية السعودية',
    currency: 'SAR',
    paymentTerms: 'نقدي',
    phone: '+966 50 123 4567',
    taxNumber: '123456789',
    postalCode: '12345',
    status: 'active'
  },
  {
    id: 2,
    name: 'شركة التجارة الحديثة',
    type: 'شركة',
    country: 'المملكة العربية السعودية',
    currency: 'SAR',
    paymentTerms: 'آجل 30 يوم',
    phone: '+966 50 234 5678',
    taxNumber: '234567890',
    postalCode: '54321',
    status: 'active'
  },
  {
    id: 3,
    name: 'محمد العتيبي',
    type: 'فرد',
    country: 'دولة الإمارات العربية المتحدة',
    currency: 'AED',
    paymentTerms: 'آجل 15 يوم',
    phone: '+971 50 345 6789',
    taxNumber: '345678901',
    postalCode: '67890',
    status: 'active'
  },
  {
    id: 4,
    name: 'مؤسسة الأعمال المتقدمة',
    type: 'شركة',
    country: 'دولة قطر',
    currency: 'QAR',
    paymentTerms: 'نقدي',
    phone: '+974 50 456 7890',
    taxNumber: '456789012',
    postalCode: '13579',
    status: 'active'
  },
  {
    id: 5,
    name: 'سارة القحطاني',
    type: 'فرد',
    country: 'دولة الكويت',
    currency: 'KWD',
    paymentTerms: 'آجل 45 يوم',
    phone: '+965 50 567 8901',
    taxNumber: '567890123',
    postalCode: '24680',
    status: 'active'
  },
];
