/**
 * Inventory Movement View - Data layer
 * بيانات عرض تفاصيل حركة المخزون
 */

import type { OrderItem, AdditionalCost } from './inventory-movement-form.data';

export interface InventoryMovementView {
  movementNumber: string;
  movementType: string;
  movementDate: string;
  costCenter: string;
  generalNotes: string;
}

export const getInventoryMovementViewSampleData = (): {
  movement: InventoryMovementView;
  orderItems: OrderItem[];
  additionalCosts: AdditionalCost[];
} => ({
  movement: {
    movementNumber: '1222236',
    movementType: 'تحويل',
    movementDate: '2025-5-20',
    costCenter: 'مركز التكلفة الرئيسي',
    generalNotes: 'ملاحظات عامة هنا',
  },
  orderItems: [
    {
      id: '1',
      itemCode: 'AS220-SD',
      itemName: 'مادة لمعاملة جيدة',
      description: 'وصف هنا ال, وصف هنا ال',
      unit: 'كيلو',
      quantity: 2,
      price: 250,
      total: 500,
    },
  ],
  additionalCosts: [
    {
      id: '1',
      number: '1',
      expenseAccount: 'مصاريف تحويل',
      description: 'تضمين',
      price: 500,
    },
  ],
});
