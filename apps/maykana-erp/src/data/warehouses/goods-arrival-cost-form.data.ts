/**
 * Goods Arrival Cost Form - Data layer
 * نموذج قسيمة تكلفة وصول البضاعة
 */

export interface PurchaseReceiptItem {
  id: string;
  number: number;
  documentType: string;
  receiptDocument: string;
  supplier: string;
  totalAfterTax: string;
}

export interface ReceiptPartItem {
  id: string;
  number: number;
  itemCode: string;
  description: string;
  quantity: number;
  value: string;
}

export interface AccountDataItem {
  id: string;
  number: number;
  account: string;
  description: string;
  value: string;
}

export const getGoodsArrivalCostFormSampleData = (): {
  purchaseReceipts: PurchaseReceiptItem[];
  receiptParts: ReceiptPartItem[];
  accountData: AccountDataItem[];
} => ({
  purchaseReceipts: [
    {
      id: '1',
      number: 1,
      documentType: 'مادة لاصقة شديدة',
      receiptDocument: 'INV-0001 وصف هنا ال',
      supplier: 'وصف هنا',
      totalAfterTax: 'ر.س',
    },
  ],
  receiptParts: [
    {
      id: '1',
      number: 1,
      itemCode: '2333255555',
      description: 'INV-0001 وصف هنا ال',
      quantity: 22,
      value: 'ر.س',
    },
  ],
  accountData: [
    {
      id: '1',
      number: 1,
      account: 'مصاريف نقل',
      description: 'INV-0001 وصف هنا ال',
      value: '500 ر.س',
    },
  ],
});
