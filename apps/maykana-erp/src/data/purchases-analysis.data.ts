export interface PurchasesAnalysis {
  id: string;
  invoiceNumber: string;
  date: string;
  supplier: string;
  purchaseOrder: string;
  project: string;
  totalBeforeTax: number;
  taxAmount: number;
  totalWithTax: number;
  status: string;
}

export const purchasesAnalysisData: PurchasesAnalysis[] = [
  {
    id: '1',
    invoiceNumber: 'PINV-2025-001',
    date: '15/11/2025',
    supplier: 'مؤسسة التقنية الحديثة',
    purchaseOrder: 'PO-2025-088',
    project: 'مشروع الرياض',
    totalBeforeTax: 5000,
    taxAmount: 750,
    totalWithTax: 5750,
    status: 'مكتمل',
  },
  {
    id: '2',
    invoiceNumber: 'PINV-2025-002',
    date: '20/11/2025',
    supplier: 'شركة البناء المتقدم',
    purchaseOrder: 'PO-2025-092',
    project: 'مشروع جدة',
    totalBeforeTax: 12000,
    taxAmount: 1800,
    totalWithTax: 13800,
    status: 'قيد الاعتماد',
  },
];
