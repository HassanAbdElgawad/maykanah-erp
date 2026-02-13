/**
 * Item Movement Report - Data layer
 * تقرير حركة الأصناف
 */

export interface ItemMovementItem {
  id: string;
  date: string;
  movementType: string;
  incomingQuantity: string;
  balanceAfterMovement: string;
}

export const getItemMovementSampleData = (): ItemMovementItem[] => [
  { id: '1', date: '1/18/2025', movementType: 'نوع الحركة', incomingQuantity: 'الكمية الداخلة', balanceAfterMovement: 'الرصيد بعد الحركة' },
  { id: '2', date: '3/16/2025', movementType: 'نوع الحركة', incomingQuantity: 'الكمية الداخلة', balanceAfterMovement: 'الرصيد بعد الحركة' },
  { id: '3', date: '7/16/2025', movementType: 'نوع الحركة', incomingQuantity: 'الكمية الداخلة', balanceAfterMovement: 'الرصيد بعد الحركة' },
  { id: '4', date: '2/20/2025', movementType: 'نوع الحركة', incomingQuantity: 'الكمية الداخلة', balanceAfterMovement: 'الرصيد بعد الحركة' },
  { id: '5', date: '4/10/2025', movementType: 'نوع الحركة', incomingQuantity: 'الكمية الداخلة', balanceAfterMovement: 'الرصيد بعد الحركة' },
  { id: '6', date: '5/05/2025', movementType: 'نوع الحركة', incomingQuantity: 'الكمية الداخلة', balanceAfterMovement: 'الرصيد بعد الحركة' },
  { id: '7', date: '6/15/2025', movementType: 'نوع الحركة', incomingQuantity: 'الكمية الداخلة', balanceAfterMovement: 'الرصيد بعد الحركة' },
  { id: '8', date: '7/22/2025', movementType: 'نوع الحركة', incomingQuantity: 'الكمية الداخلة', balanceAfterMovement: 'الرصيد بعد الحركة' },
];
