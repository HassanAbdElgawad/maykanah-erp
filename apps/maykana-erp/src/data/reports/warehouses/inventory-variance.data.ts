/**
 * Inventory Variance Report - Data layer
 * تقرير الجرد والفروقات
 */

export interface InventoryVarianceItem {
  id: string;
  date: string;
  itemCode: string;
  itemName: string;
  systemQuantity: number;
  actualQuantity: number;
  variance: number;
  varianceValue: number;
}

export const getInventoryVarianceSampleData = (): InventoryVarianceItem[] => [
  { id: '1', date: '1/18/2025', itemCode: 'SR-2500096', itemName: 'شركة افاق الخليج', systemQuantity: 100, actualQuantity: 95, variance: -5, varianceValue: -500 },
  { id: '2', date: '3/16/2025', itemCode: 'SR-2500097', itemName: 'شركة نور', systemQuantity: 200, actualQuantity: 200, variance: 0, varianceValue: 0 },
  { id: '3', date: '7/16/2025', itemCode: 'SR-2500098', itemName: 'مؤسسة مجد', systemQuantity: 150, actualQuantity: 148, variance: -2, varianceValue: -300 },
  { id: '4', date: '2/20/2025', itemCode: 'SR-2500099', itemName: 'شركة الأمل', systemQuantity: 80, actualQuantity: 82, variance: 2, varianceValue: 200 },
  { id: '5', date: '4/10/2025', itemCode: 'SR-2500100', itemName: 'مؤسسة التقدم', systemQuantity: 300, actualQuantity: 295, variance: -5, varianceValue: -750 },
  { id: '6', date: '5/05/2025', itemCode: 'SR-2500101', itemName: 'شركة النجاح', systemQuantity: 120, actualQuantity: 120, variance: 0, varianceValue: 0 },
  { id: '7', date: '6/15/2025', itemCode: 'SR-2500102', itemName: 'مؤسسة الإبداع', systemQuantity: 90, actualQuantity: 88, variance: -2, varianceValue: -180 },
  { id: '8', date: '7/22/2025', itemCode: 'SR-2500103', itemName: 'شركة المستقبل', systemQuantity: 250, actualQuantity: 253, variance: 3, varianceValue: 450 },
];
