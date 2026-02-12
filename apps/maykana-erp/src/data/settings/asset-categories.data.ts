export interface AssetCategory {
  id: string;
  code: string;
  name: string;
  depreciationMethod: string;
  usefulLife: string;
  residualValue: string;
  assetAccount: string;
  assetAccountName: string;
  accumulatedDepreciationAccount: string;
  depreciationExpenseAccount: string;
  depreciationPeriods: string;
  depreciationRate: string;
  isActive: boolean;
  description?: string;
}

export const mockCategories: Record<string, AssetCategory> = {
  '1': {
    id: '1',
    code: 'CAT-001',
    name: 'أجهزة الحاسوب',
    depreciationMethod: 'القسط الثابت',
    usefulLife: '5 سنوات',
    residualValue: '10%',
    assetAccount: '150101',
    assetAccountName: 'أجهزة وتقنية المعلومات',
    accumulatedDepreciationAccount: 'أجهزة وتقنية المعلومات',
    depreciationExpenseAccount: 'أجهزة وتقنية المعلومات',
    depreciationPeriods: '60',
    depreciationRate: '20%',
    isActive: true,
    description:
      'نستخدم هذه الفئة لتصنيف جميع أجهزة الحاسوب المحمولة والمكتبية الخاصة بالموظفين',
  },
  '2': {
    id: '2',
    code: 'CAT-002',
    name: 'الأثاث المكتبي',
    depreciationMethod: 'القسط الثابت',
    usefulLife: '10 سنوات',
    residualValue: '5%',
    assetAccount: '150201',
    assetAccountName: 'الأثاث والتجهيزات المكتبية',
    accumulatedDepreciationAccount: 'الأثاث والتجهيزات المكتبية',
    depreciationExpenseAccount: 'الأثاث والتجهيزات المكتبية',
    depreciationPeriods: '120',
    depreciationRate: '10%',
    isActive: true,
    description: 'تصنيف للأثاث المكتبي والمعدات',
  },
  '3': {
    id: '3',
    code: 'CAT-003',
    name: 'المركبات',
    depreciationMethod: 'القسط الثابت',
    usefulLife: '4 سنوات',
    residualValue: '₪ 5,000',
    assetAccount: '150301',
    assetAccountName: 'المركبات ووسائل النقل',
    accumulatedDepreciationAccount: 'المركبات ووسائل النقل',
    depreciationExpenseAccount: 'المركبات ووسائل النقل',
    depreciationPeriods: '48',
    depreciationRate: '25%',
    isActive: true,
    description: 'تصنيف للمركبات الخاصة بالشركة',
  },
};
