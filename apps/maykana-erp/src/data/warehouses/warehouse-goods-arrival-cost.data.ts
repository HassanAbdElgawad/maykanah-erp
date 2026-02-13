/**
 * Warehouse Goods Arrival Cost - Data layer
 * تكلفة وصول البضائع
 */

export interface GoodsArrivalCost {
  id: string;
  code: string;
  company: string;
  supplier: string;
  totalBeforeTax: number;
  totalAfterTax: number;
  date: string;
  isActive: boolean;
}

export const getWarehouseGoodsArrivalCostSampleData = (): GoodsArrivalCost[] => [
  { id: '1', code: 'GAC-001', company: 'الشركة الرئيسية', supplier: 'مورد الإلكترونيات', totalBeforeTax: 15000, totalAfterTax: 17250, date: '2025-05-20', isActive: true },
  { id: '2', code: 'GAC-002', company: 'الشركة الرئيسية', supplier: 'مورد الأثاث', totalBeforeTax: 8500, totalAfterTax: 9775, date: '2025-05-18', isActive: true },
  { id: '3', code: 'GAC-003', company: 'الفرع الثاني', supplier: 'مورد المواد الغذائية', totalBeforeTax: 25000, totalAfterTax: 28750, date: '2025-05-15', isActive: true },
  { id: '4', code: 'GAC-004', company: 'الشركة الرئيسية', supplier: 'مورد قطع الغيار', totalBeforeTax: 12000, totalAfterTax: 13800, date: '2025-05-10', isActive: false },
  { id: '5', code: 'GAC-005', company: 'الفرع الثالث', supplier: 'مورد الأجهزة', totalBeforeTax: 45000, totalAfterTax: 51750, date: '2025-05-08', isActive: true },
];
