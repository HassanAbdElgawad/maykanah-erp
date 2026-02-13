/**
 * Inventory Categories - Data layer
 * تصنيفات المخزون
 */

export interface InventoryCategory {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  itemsCount: number;
  isActive: boolean;
}

export const getInventoryCategoriesSampleData = (): InventoryCategory[] => [
  { id: '1', code: 'CAT-001', nameAr: 'مواد خام', nameEn: 'Raw Materials', itemsCount: 45, isActive: true },
  { id: '2', code: 'CAT-002', nameAr: 'منتجات تامة', nameEn: 'Finished Products', itemsCount: 120, isActive: true },
  { id: '3', code: 'CAT-003', nameAr: 'قطع غيار', nameEn: 'Spare Parts', itemsCount: 89, isActive: true },
  { id: '4', code: 'CAT-004', nameAr: 'أدوات مكتبية', nameEn: 'Office Supplies', itemsCount: 32, isActive: false },
];
