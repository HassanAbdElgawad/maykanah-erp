/**
 * Warehouse Item Price - Data layer
 * أسعار أصناف المستودع
 */

export interface ItemPrice {
  id: string;
  code: string;
  name: string;
  unit: string;
  priceList: string;
  currency: string;
  price: number;
  isActive: boolean;
}

export const getWarehouseItemPriceSampleData = (): ItemPrice[] => [
  { id: '1', code: 'ITM-001', name: 'آيفون', unit: 'قطعة', priceList: 'قائمة الأسعار الأساسية', currency: 'ريال سعودي', price: 4500, isActive: true },
  { id: '2', code: 'ITM-002', name: 'سامسونج جالاكسي', unit: 'قطعة', priceList: 'قائمة الأسعار الأساسية', currency: 'ريال سعودي', price: 3200, isActive: true },
  { id: '3', code: 'ITM-003', name: 'لابتوب ديل', unit: 'قطعة', priceList: 'قائمة أسعار الجملة', currency: 'ريال سعودي', price: 5800, isActive: true },
  { id: '4', code: 'ITM-004', name: 'شاشة LG', unit: 'قطعة', priceList: 'قائمة الأسعار الأساسية', currency: 'دولار أمريكي', price: 1200, isActive: false },
  { id: '5', code: 'ITM-005', name: 'طابعة HP', unit: 'قطعة', priceList: 'قائمة أسعار التجزئة', currency: 'ريال سعودي', price: 890, isActive: true },
];
