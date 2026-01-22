// Receipt Vouchers Data
export interface ReceiptVoucher {
  id: string;
  voucherNumber: string;
  date: string;
  client: string;
  totalAmount: number;
  paymentMethod: string;
  notes: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  totalAmount: number;
  paidAmount: number;
  status: 'completed' | 'partial' | 'pending';
}

export const getReceiptVouchersSampleData = (): ReceiptVoucher[] => [
  {
    id: '1',
    voucherNumber: 'RCV-4592',
    date: '2024-07-03',
    client: 'ليلى خالد',
    totalAmount: 1500.00,
    paymentMethod: 'بنكي',
    notes: 'تسديد فواتير متعددة',
    status: 'completed',
  },
  {
    id: '2',
    voucherNumber: 'RCV-8735',
    date: '2024-07-10',
    client: 'عمر عبد الكافي',
    totalAmount: 500.00,
    paymentMethod: 'بنكي',
    notes: 'دفعة مقدمة لعقد تصميم',
    status: 'completed',
  },
  {
    id: '3',
    voucherNumber: 'RCV-2387',
    date: '2024-07-17',
    client: 'نور الريفي',
    totalAmount: 0.00,
    paymentMethod: 'نقداً',
    notes: 'فاتورة خدمات استشارية',
    status: 'pending',
  },
  {
    id: '4',
    voucherNumber: 'RCV-9164',
    date: '2024-07-24',
    client: 'محمود ديوبش',
    totalAmount: 2000.00,
    paymentMethod: 'شيك',
    notes: 'رسوم تجديد اشتراك سنوي',
    status: 'pending',
  },
  {
    id: '5',
    voucherNumber: 'RCV-5829',
    date: '2024-07-31',
    client: 'فاطمة ناصر',
    totalAmount: 3000.00,
    paymentMethod: 'نقداً',
    notes: 'شراء مواد خام للمشروع',
    status: 'completed',
  },
  {
    id: '6',
    voucherNumber: 'RCV-1276',
    date: '2024-08-07',
    client: 'أحمد شوق',
    totalAmount: 0.00,
    paymentMethod: 'نقداً',
    notes: 'إيجار مقر الشركة لشهر أغسطس',
    status: 'pending',
  },
  {
    id: '7',
    voucherNumber: 'RCV-7931',
    date: '2024-08-14',
    client: 'سامي رشيد',
    totalAmount: 250.00,
    paymentMethod: 'بنكي',
    notes: 'شراء برامج محاسبة',
    status: 'pending',
  },
  {
    id: '8',
    voucherNumber: 'RCV-3418',
    date: '2024-08-21',
    client: 'يوسف شاهين',
    totalAmount: 1200.00,
    paymentMethod: 'بنكي',
    notes: 'صيانة معدات مكتبية',
    status: 'completed',
  },
];

export const getInvoicesSampleData = (): Invoice[] => [
  {
    id: '1',
    invoiceNumber: 'INV-0001',
    issueDate: '01/10/2025',
    dueDate: '01/11/2025',
    totalAmount: 1500,
    paidAmount: 1500,
    status: 'completed',
  },
  {
    id: '2',
    invoiceNumber: 'INV-0001',
    issueDate: '01/10/2025',
    dueDate: '01/11/2025',
    totalAmount: 2000,
    paidAmount: 2000,
    status: 'partial',
  },
];
