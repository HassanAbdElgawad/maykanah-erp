export type SalesInvoiceStatus = 'paid' | 'unpaid' | 'partial' | 'cancelled';
export type PaymentMethod = 'cash' | 'bank' | 'check' | 'credit';

export interface SalesInvoiceItem {
  id: number;
  itemCode: string;
  itemName: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  tax: number;
  totalPrice: number;
}

export interface SalesInvoice {
  id: number;
  invoiceNumber: string;
  customer: string;
  issueDate: string;
  branch: string;
  salesRep: string;
  currency: string;
  paymentMethod: string;
  taxNumber: string;
  status: SalesInvoiceStatus;
  items: SalesInvoiceItem[];
  subtotal: number;
  taxAmount: number;
  discount: number;
  total: number;
  notes?: string;
  discountType?: string;
  discountValue?: number;
}

export const salesInvoicesData: SalesInvoice[] = [
  {
    id: 1,
    invoiceNumber: 'INV-2025-001',
    customer: 'اللكنز',
    issueDate: '2025-01-13',
    branch: 'الرياض',
    salesRep: 'أحمد محمد',
    currency: 'SAR',
    paymentMethod: 'آجل',
    taxNumber: '300123456700003',
    status: 'paid',
    items: [
      {
        id: 1,
        itemCode: 'AS220-SD',
        itemName: 'تجليد حساسية إلى تجربة',
        unit: 'كيلو',
        quantity: 1,
        unitPrice: 2000,
        discount: 0,
        tax: 15,
        totalPrice: 2300,
      },
    ],
    subtotal: 2000,
    taxAmount: 300,
    discount: 0,
    total: 2300,
    notes: 'فاتورة مبيعات رقم 1',
  },
  {
    id: 2,
    invoiceNumber: 'INV-2025-002',
    customer: 'شركة التمويل العربية',
    issueDate: '2025-11-01',
    branch: 'جدة',
    salesRep: 'محمد علي',
    currency: 'SAR',
    paymentMethod: 'بنك',
    taxNumber: '300987654300003',
    status: 'unpaid',
    items: [
      {
        id: 1,
        itemCode: 'PR-100',
        itemName: 'منتج تجريبي',
        unit: 'قطعة',
        quantity: 5,
        unitPrice: 1500,
        discount: 200,
        tax: 15,
        totalPrice: 8337.5,
      },
    ],
    subtotal: 7500,
    taxAmount: 1037.5,
    discount: 200,
    total: 8337.5,
  },
  {
    id: 3,
    invoiceNumber: 'INV-2025-003',
    customer: 'شركة مركز العربية',
    issueDate: '2025-04-10',
    branch: 'الدمام',
    salesRep: 'خالد أحمد',
    currency: 'SAR',
    paymentMethod: 'صندوق',
    taxNumber: '300555666700003',
    status: 'partial',
    items: [
      {
        id: 1,
        itemCode: 'SV-200',
        itemName: 'خدمة استشارية',
        unit: 'ساعة',
        quantity: 10,
        unitPrice: 500,
        discount: 100,
        tax: 15,
        totalPrice: 5635,
      },
    ],
    subtotal: 5000,
    taxAmount: 735,
    discount: 100,
    total: 5635,
  },
  {
    id: 4,
    invoiceNumber: 'INV-2025-004',
    customer: 'شركة الماسي',
    issueDate: '2025-05-10',
    branch: 'الرياض',
    salesRep: 'سعد العتيبي',
    currency: 'SAR',
    paymentMethod: 'بنك',
    taxNumber: '300222333400003',
    status: 'paid',
    items: [
      {
        id: 1,
        itemCode: 'EQ-150',
        itemName: 'معدات مكتبية',
        unit: 'مجموعة',
        quantity: 2,
        unitPrice: 3000,
        discount: 300,
        tax: 15,
        totalPrice: 6555,
      },
    ],
    subtotal: 6000,
    taxAmount: 855,
    discount: 300,
    total: 6555,
  },
  {
    id: 5,
    invoiceNumber: 'INV-2025-005',
    customer: 'شركة المتحدة',
    issueDate: '2025-03-11',
    branch: 'جدة',
    salesRep: 'فهد الدوسري',
    currency: 'SAR',
    paymentMethod: 'صندوق',
    taxNumber: '300444555600003',
    status: 'unpaid',
    items: [
      {
        id: 1,
        itemCode: 'IT-300',
        itemName: 'حلول تقنية',
        unit: 'مشروع',
        quantity: 1,
        unitPrice: 15000,
        discount: 1000,
        tax: 15,
        totalPrice: 16100,
      },
    ],
    subtotal: 15000,
    taxAmount: 2100,
    discount: 1000,
    total: 16100,
  },
  {
    id: 6,
    invoiceNumber: 'INV-2025-006',
    customer: 'شركة التوحيد والنور',
    issueDate: '2025-01-10',
    branch: 'الدمام',
    salesRep: 'عبدالله السعيد',
    currency: 'SAR',
    paymentMethod: 'بنك',
    taxNumber: '300111222300003',
    status: 'paid',
    items: [
      {
        id: 1,
        itemCode: 'TR-400',
        itemName: 'دورة تدريبية',
        unit: 'يوم',
        quantity: 3,
        unitPrice: 2000,
        discount: 200,
        tax: 15,
        totalPrice: 6670,
      },
    ],
    subtotal: 6000,
    taxAmount: 870,
    discount: 200,
    total: 6670,
  },
  {
    id: 7,
    invoiceNumber: 'INV-2025-007',
    customer: 'شركة عطفان',
    issueDate: '2025-03-10',
    branch: 'الرياض',
    salesRep: 'ناصر القحطاني',
    currency: 'SAR',
    paymentMethod: 'بنك',
    taxNumber: '300888999700003',
    status: 'partial',
    items: [
      {
        id: 1,
        itemCode: 'CN-500',
        itemName: 'استشارات إدارية',
        unit: 'شهر',
        quantity: 2,
        unitPrice: 8000,
        discount: 500,
        tax: 15,
        totalPrice: 17925,
      },
    ],
    subtotal: 16000,
    taxAmount: 2425,
    discount: 500,
    total: 17925,
  },
  {
    id: 8,
    invoiceNumber: 'INV-2025-008',
    customer: 'شركة النجدة',
    issueDate: '2025-05-10',
    branch: 'جدة',
    salesRep: 'مشعل الحربي',
    currency: 'SAR',
    paymentMethod: 'بنك',
    taxNumber: '300666777800003',
    status: 'cancelled',
    items: [
      {
        id: 1,
        itemCode: 'SU-600',
        itemName: 'لوازم مكتبية',
        unit: 'طرد',
        quantity: 10,
        unitPrice: 400,
        discount: 100,
        tax: 15,
        totalPrice: 4485,
      },
    ],
    subtotal: 4000,
    taxAmount: 585,
    discount: 100,
    total: 4485,
  },
];
