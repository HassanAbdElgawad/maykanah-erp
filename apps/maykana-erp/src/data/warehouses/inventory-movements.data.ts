/**
 * Inventory Movements - Data layer
 * حركات المخزون (صرف، استلام، تحويل)
 */

export interface InventoryMovement {
  id: string;
  code: string;
  movementNumber: string;
  date: string;
  itemName: string;
  movementType: string;
  warehouseFrom: string;
  warehouseTo: string;
}

export const getInventoryMovementsSampleData = (): InventoryMovement[] => [
  { id: '1', code: '547B12300015', movementNumber: '1222236', date: '2025-5-20', itemName: 'هوائي', movementType: 'صرف', warehouseFrom: 'مستودع الرياض - A', warehouseTo: 'مستودع الرياض - A' },
  { id: '2', code: '547B12300015', movementNumber: '1222236', date: '2025-5-20', itemName: 'هوائي', movementType: 'استلام', warehouseFrom: 'مستودع الرياض', warehouseTo: 'مستودع الرياض' },
  { id: '3', code: '547B12300015', movementNumber: '1222236', date: '2025-5-20', itemName: 'هوائي', movementType: 'استلام', warehouseFrom: 'مستودع الرياض', warehouseTo: 'مستودع الرياض' },
  { id: '4', code: '547B12300015', movementNumber: '1222236', date: '2025-5-20', itemName: 'هوائي', movementType: 'تحويل', warehouseFrom: 'مستودع الرياض', warehouseTo: 'مستودع الرياض' },
  { id: '5', code: '547B12300015', movementNumber: '1222236', date: '2025-5-20', itemName: 'هوائي', movementType: 'تحويل', warehouseFrom: 'مستودع الرياض', warehouseTo: 'مستودع الرياض' },
  { id: '6', code: '547B12300015', movementNumber: '1222236', date: '2025-5-20', itemName: 'هوائي', movementType: 'استلام', warehouseFrom: 'مستودع الرياض', warehouseTo: 'مستودع الرياض' },
  { id: '7', code: '547B12300015', movementNumber: '1222236', date: '2025-5-20', itemName: 'هوائي', movementType: 'استلام', warehouseFrom: 'مستودع الرياض', warehouseTo: 'مستودع الرياض' },
  { id: '8', code: '547B12300015', movementNumber: '12222361222236', date: '2025-5-20', itemName: 'هوائي', movementType: 'استلام', warehouseFrom: 'مستودع ماريابش', warehouseTo: 'مستودع ماريابش' },
];
