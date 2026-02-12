export interface PurchasePriceByCategory {
  id: string;
  itemCode: string;
  itemName: string;
  description: string;
  categoryGroup: string;
  purchaseInvoice: string;
  transactionDate: string;
  purchaseOrder: string;
  quantity: number;
  unitOfMeasure: string;
  price: number;
  total: number;
}

export const purchasePricesByCategoryData: PurchasePriceByCategory[] = [
  {
    id: '1',
    itemCode: 'A-10222',
    itemName: 'ايفون 17 بروماكس',
    description: 'iPhone 17 Pro Max',
    categoryGroup: 'مجموعة الألبوبن',
    purchaseInvoice: 'P-00006',
    transactionDate: '25-5-2025',
    purchaseOrder: 'PO-00001',
    quantity: 2,
    unitOfMeasure: 'وحدة',
    price: 4500,
    total: 9000,
  },
  {
    id: '2',
    itemCode: 'A-10222',
    itemName: 'ايفون 17 بروماكس',
    description: 'iPhone 17 Pro Max',
    categoryGroup: 'مجموعة الألبوبن',
    purchaseInvoice: 'P-00006',
    transactionDate: '25-5-2025',
    purchaseOrder: 'PO-00001',
    quantity: 5,
    unitOfMeasure: 'وحدة',
    price: 4500,
    total: 23000,
  },
];
