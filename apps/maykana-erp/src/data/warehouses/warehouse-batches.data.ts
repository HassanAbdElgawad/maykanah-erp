/**
 * Warehouse Batches - Data layer
 * دفعات المستودع
 */

export interface Batch {
  id: string;
  code: string;
  name: string;
  itemType: 'inventory' | 'service';
  originalItem: string;
  manufacturingDate: string;
  expiryDate: string;
  isActive: boolean;
}

export const getWarehouseBatchesSampleData = (): Batch[] => [
  { id: '1', code: 'BTH-001', name: 'دفعة المواد الخام', itemType: 'inventory', originalItem: 'البند الأصلي A', manufacturingDate: '01/01/2025', expiryDate: '01/01/2026', isActive: true },
  { id: '2', code: 'BTH-002', name: 'دفعة المنتجات النهائية', itemType: 'inventory', originalItem: 'البند الأصلي B', manufacturingDate: '15/02/2025', expiryDate: '15/02/2026', isActive: true },
  { id: '3', code: 'BTH-003', name: 'دفعة الخدمات', itemType: 'service', originalItem: 'البند الأصلي C', manufacturingDate: '20/03/2025', expiryDate: '20/03/2026', isActive: true },
  { id: '4', code: 'BTH-004', name: 'دفعة قطع الغيار', itemType: 'inventory', originalItem: 'البند الأصلي D', manufacturingDate: '10/04/2025', expiryDate: '10/04/2026', isActive: false },
  { id: '5', code: 'BTH-005', name: 'دفعة المستلزمات', itemType: 'inventory', originalItem: 'البند الأصلي E', manufacturingDate: '05/05/2025', expiryDate: '05/05/2026', isActive: true },
];
