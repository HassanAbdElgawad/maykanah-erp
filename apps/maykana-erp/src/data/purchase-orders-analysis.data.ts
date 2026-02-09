export interface PurchaseOrderAnalysis {
  id: string;
  date: string;
  requiredDate: string;
  purchaseOrder: string;
  status: string;
  supplier: string;
  project: string;
  itemCode: string;
  quantityRequired: number;
  quantityReceived: number;
  quantityToReceive: number;
  quantityPending: number;
  quantityForInvoice: number;
}

export const purchaseOrdersAnalysisData: PurchaseOrderAnalysis[] = [
  {
    id: '1',
    date: '11/15/2025',
    requiredDate: '11/15/2025',
    purchaseOrder: 'PUR-ORD-25-00001',
    status: 'To Receive and Bill',
    supplier: 'افاق ريف الحجارية',
    project: 'A-10222',
    itemCode: '4500',
    quantityRequired: 3,
    quantityReceived: 1,
    quantityToReceive: 2,
    quantityPending: 2,
    quantityForInvoice: 2,
  },
];
