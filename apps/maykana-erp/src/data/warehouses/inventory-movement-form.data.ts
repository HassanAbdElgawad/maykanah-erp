/**
 * Inventory Movement Form - Data layer
 * بيانات الفورم المشتركة لحركات المخزون (تحويل، تلف، صرف، استلام)
 */

export interface OrderItem {
  id: string;
  itemCode: string;
  itemName: string;
  description: string;
  unit: string;
  quantity: number;
  price: number;
  total: number;
}

export interface AdditionalCost {
  id: string;
  number: string;
  expenseAccount: string;
  description: string;
  price: number;
}

export const getInitialOrderItems = (): OrderItem[] => [
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
];

export const getInitialAdditionalCosts = (): AdditionalCost[] => [
  {
    id: '1',
    number: '1',
    expenseAccount: 'مصاريف تحويل',
    description: 'تضمين',
    price: 500,
  },
];
