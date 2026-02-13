/**
 * Warehouse Price Lists - Data layer
 * قوائم أسعار المستودع
 */

export interface WarehousePriceList {
  id: string;
  code: string;
  name: string;
  currency: string;
  hasPurchases: boolean;
  hasSales: boolean;
  isActive: boolean;
  createdAt: string;
}

export const getWarehousePriceListsSampleData = (): WarehousePriceList[] => [
  { id: '1', code: 'PL-001', name: 'قائمة الأسعار الأساسية', currency: 'ريال سعودي', hasPurchases: true, hasSales: true, isActive: true, createdAt: '13/11/2025' },
  { id: '2', code: 'PL-002', name: 'قائمة أسعار الجملة', currency: 'ريال سعودي', hasPurchases: false, hasSales: true, isActive: true, createdAt: '01/11/2025' },
  { id: '3', code: 'PL-003', name: 'قائمة أسعار التجزئة', currency: 'ريال سعودي', hasPurchases: false, hasSales: true, isActive: true, createdAt: '10/04/2025' },
  { id: '4', code: 'PL-004', name: 'قائمة أسعار الموردين', currency: 'دولار أمريكي', hasPurchases: true, hasSales: false, isActive: true, createdAt: '10/05/2025' },
  { id: '5', code: 'PL-005', name: 'قائمة أسعار خاصة', currency: 'ريال سعودي', hasPurchases: true, hasSales: true, isActive: false, createdAt: '11/03/2025' },
];
