// Tax Templates Data Types and Sample Data

export interface TaxTemplate {
  id: number;
  taxName: string;
  percentage: number;
  accountName: string;
}

export const taxTemplatesData: TaxTemplate[] = [
  {
    id: 1,
    taxName: 'ضريبة القيمة المضافة 15%',
    percentage: 15,
    accountName: 'حساب الضريبة المدفوعة للموردين',
  },
  {
    id: 2,
    taxName: 'ضريبة القيمة المضافة 5%',
    percentage: 5,
    accountName: 'حساب الضريبة المدفوعة للموردين',
  },
  {
    id: 3,
    taxName: 'ضريبة مبيعات محلية',
    percentage: 10,
    accountName: 'حساب الضريبة المدفوعة للموردين',
  },
];
