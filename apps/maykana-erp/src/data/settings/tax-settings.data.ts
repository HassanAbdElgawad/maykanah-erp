// Tax Settings data for Settings module

export interface TaxSetting {
  id: string;
  name: string;
  taxRate: number;
  accountName: string;
  includedInBasePrice: boolean;
  application: 'sales' | 'purchases';
  isActive: boolean;
}

const taxSettingsData: TaxSetting[] = [
  { id: '1', name: 'ضريبة القيمة المضافة 15%', taxRate: 15, accountName: '2300 - ضريبة القيمة المضافة', includedInBasePrice: false, application: 'sales', isActive: true },
  { id: '2', name: 'ضريبة القيمة المضافة 5%', taxRate: 5, accountName: '2300 - ضريبة القيمة المضافة', includedInBasePrice: false, application: 'sales', isActive: true },
  { id: '3', name: 'ضريبة مبيعات محلية', taxRate: 10, accountName: '2310 - ضريبة مبيعات', includedInBasePrice: false, application: 'purchases', isActive: false },
];

export const getTaxSettingsSampleData = (): TaxSetting[] => [...taxSettingsData];
