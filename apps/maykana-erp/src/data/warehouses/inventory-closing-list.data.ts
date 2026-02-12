export interface InventoryClosing {
  id: number;
  warehouseName: string;
  closingDate: string;
  quantity: number;
  amount: number;
}

export const inventoryClosingListData: InventoryClosing[] = [
  {
    id: 1,
    warehouseName: 'مستودع 1',
    closingDate: '2025-5-20',
    quantity: 15,
    amount: 15,
  },
  {
    id: 2,
    warehouseName: 'مستودع 2',
    closingDate: '2025-5-20',
    quantity: 15,
    amount: 15,
  },
  {
    id: 3,
    warehouseName: 'مستودع 3',
    closingDate: '2025-5-20',
    quantity: 15,
    amount: 15,
  },
  {
    id: 5,
    warehouseName: 'مستودع 5',
    closingDate: '2025-5-20',
    quantity: 36,
    amount: 36,
  },
  {
    id: 6,
    warehouseName: 'مستودع 6',
    closingDate: '2025-5-20',
    quantity: 36,
    amount: 36,
  },
  {
    id: 7,
    warehouseName: 'مستودع 7',
    closingDate: '2025-5-20',
    quantity: 36,
    amount: 36,
  },
  {
    id: 17,
    warehouseName: 'مستودع 17',
    closingDate: '2025-5-20',
    quantity: 36,
    amount: 36,
  },
  {
    id: 18,
    warehouseName: 'مستودع 18',
    closingDate: '2025-5-20',
    quantity: 23,
    amount: 23,
  },
];
