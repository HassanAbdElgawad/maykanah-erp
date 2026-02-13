/**
 * Warehouse Serial Number - Data layer
 * أرقام السلاسل في المستودع
 */

export interface SerialNumber {
  id: string;
  serialNumber: string;
  itemCode: string;
  itemName: string;
  warrantyExpiryDate: string;
  subscriptionExpiryDate: string;
  isActive: boolean;
}

export const getWarehouseSerialNumberSampleData = (): SerialNumber[] => [
  { id: '1', serialNumber: 'SN-001-2025', itemCode: 'ITM-001', itemName: 'آيفون 15 برو', warrantyExpiryDate: '2026-05-20', subscriptionExpiryDate: '2025-05-20', isActive: true },
  { id: '2', serialNumber: 'SN-002-2025', itemCode: 'ITM-002', itemName: 'سامسونج جالاكسي S24', warrantyExpiryDate: '2026-03-15', subscriptionExpiryDate: '2025-03-15', isActive: true },
  { id: '3', serialNumber: 'SN-003-2025', itemCode: 'ITM-003', itemName: 'لابتوب ديل XPS', warrantyExpiryDate: '2027-01-10', subscriptionExpiryDate: '2026-01-10', isActive: true },
  { id: '4', serialNumber: 'SN-004-2025', itemCode: 'ITM-004', itemName: 'شاشة LG 27"', warrantyExpiryDate: '2025-12-25', subscriptionExpiryDate: '2026-12-25', isActive: false },
  { id: '5', serialNumber: 'SN-005-2025', itemCode: 'ITM-005', itemName: 'طابعة HP LaserJet', warrantyExpiryDate: '2026-08-30', subscriptionExpiryDate: '2025-08-30', isActive: true },
];
