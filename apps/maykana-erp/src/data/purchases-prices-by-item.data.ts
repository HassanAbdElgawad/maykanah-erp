export interface PurchasePriceByItem {
  id: string;
  itemCode: string;
  itemName: string;
  description: string;
  itemGroup: string;
  purchaseInvoice: string;
  transactionDate: string;
  purchaseOrder: string;
  quantity: number;
  itemUnit: string;
  price: number;
  amount: number;
}

export const purchasesPricesByItemData: PurchasePriceByItem[] = [
  {
    id: '1',
    itemCode: 'A-10222',
    itemName: 'iPhone 17 Pro Max',
    description: 'iPhone 17 Pro Max',
    itemGroup: 'مجموعة الايفون',
    purchaseInvoice: 'P-00006',
    transactionDate: '25-5-2025',
    purchaseOrder: 'PO-00001',
    quantity: 2,
    itemUnit: 'وحدة',
    price: 4500,
    amount: 9000,
  },
  {
    id: '2',
    itemCode: 'A-10222',
    itemName: 'iPhone 17 Pro Max',
    description: 'iPhone 17 Pro Max',
    itemGroup: 'مجموعة الايفون',
    purchaseInvoice: 'P-00006',
    transactionDate: '25-5-2025',
    purchaseOrder: 'PO-00001',
    quantity: 5,
    itemUnit: 'وحدة',
    price: 4500,
    amount: 23000,
  },
];
