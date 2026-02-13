/**
 * Inventory Balance Report - Data layer
 * تقرير أرصدة المخزون
 */

export interface InventoryBalanceItem {
  id: string;
  itemCode: string;
  name: string;
  warehouse: string;
  movementDate: string;
  quantity: string;
  amount: number;
  totalValue: number;
}

export const getInventoryBalanceSampleData = (): InventoryBalanceItem[] => [
  { id: '1', itemCode: 'SR-2500096', name: 'شركة افاق الخليج', warehouse: 'الجبيل', movementDate: '1/18/2025', quantity: 'الكمية', amount: 4500, totalValue: 4500 },
  { id: '2', itemCode: 'SR-2500096', name: 'شركة نور', warehouse: 'الرياض', movementDate: '3/16/2025', quantity: 'الكمية', amount: -500, totalValue: -500 },
  { id: '3', itemCode: 'SR-2500096', name: 'مؤسسة مجد', warehouse: 'الرياض', movementDate: '7/16/2025', quantity: 'الكمية', amount: 4500, totalValue: 4500 },
  { id: '4', itemCode: 'SR-2500097', name: 'شركة الأمل', warehouse: 'جدة', movementDate: '2/20/2025', quantity: 'الكمية', amount: 3200, totalValue: 3200 },
  { id: '5', itemCode: 'SR-2500098', name: 'مؤسسة التقدم', warehouse: 'الدمام', movementDate: '4/10/2025', quantity: 'الكمية', amount: 7800, totalValue: 7800 },
  { id: '6', itemCode: 'SR-2500099', name: 'شركة النجاح', warehouse: 'الرياض', movementDate: '5/05/2025', quantity: 'الكمية', amount: -1200, totalValue: -1200 },
  { id: '7', itemCode: 'SR-2500100', name: 'مؤسسة الإبداع', warehouse: 'الجبيل', movementDate: '6/15/2025', quantity: 'الكمية', amount: 5600, totalValue: 5600 },
  { id: '8', itemCode: 'SR-2500101', name: 'شركة المستقبل', warehouse: 'جدة', movementDate: '7/22/2025', quantity: 'الكمية', amount: 2300, totalValue: 2300 },
];
