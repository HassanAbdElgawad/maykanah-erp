// Suppliers Data

export interface Supplier {
  id: number;
  name: string;
  type: string;
  country: string;
  currency: string;
  paymentTerms: string;
  phone: string;
  taxNumber: string;
  status: string;
}

export const MOCK_SUPPLIERS: Supplier[] = [
  {
    id: 1,
    name: 'المالكي',
    type: 'فرد',
    country: 'جمهورية مصر العربية',
    currency: 'SAR',
    paymentTerms: 'مجموعه 1',
    phone: '+966 50 123 4567',
    taxNumber: '123456789',
    status: 'active'
  },
  {
    id: 2,
    name: 'شركة التمويل العربية',
    type: 'شركة',
    country: 'المملكة العربية السعودية',
    currency: 'SAR',
    paymentTerms: 'مجموعه الرياض',
    phone: '+966 50 234 5678',
    taxNumber: '234567890',
    status: 'active'
  },
  {
    id: 3,
    name: 'شركة مرعي العربية',
    type: 'شركة',
    country: 'دولة الإمارات العربية المتحدة',
    currency: 'USD',
    paymentTerms: 'مجموعه القصيم',
    phone: '+971 50 345 6789',
    taxNumber: '345678901',
    status: 'active'
  },
  {
    id: 4,
    name: 'شركة التهامي',
    type: 'شركة',
    country: 'دولة قطر',
    currency: 'USD',
    paymentTerms: 'مجموعه محددة',
    phone: '+974 50 456 7890',
    taxNumber: '456789012',
    status: 'active'
  },
  {
    id: 5,
    name: 'شركة التوريد',
    type: 'شركة',
    country: 'دولة الكويت',
    currency: 'USD',
    paymentTerms: 'مجموعه البناء',
    phone: '+965 50 567 8901',
    taxNumber: '567890123',
    status: 'inactive'
  },
  {
    id: 6,
    name: 'شركة التوحيد والنور',
    type: 'شركة',
    country: 'مملكة البحرين',
    currency: 'EGP',
    paymentTerms: 'مجموعه أخري',
    phone: '+973 50 678 9012',
    taxNumber: '678901234',
    status: 'active'
  },
  {
    id: 7,
    name: 'شركة عطفان',
    type: 'شركة',
    country: 'سلطنة عمان',
    currency: 'SAR',
    paymentTerms: 'مجموعه 5',
    phone: '+968 50 789 0123',
    taxNumber: '789012345',
    status: 'active'
  },
  {
    id: 8,
    name: 'شركة المتحدة',
    type: 'شركة',
    country: 'المملكة الأردنية الهاشمية',
    currency: 'USD',
    paymentTerms: 'معدات',
    phone: '+962 50 890 1234',
    taxNumber: '890123456',
    status: 'active'
  },
];
