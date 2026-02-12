// Payment Vouchers Data
export interface PaymentVoucher {
  id: string;
  voucherNumber: string;
  date: string;
  beneficiaryName: string;
  totalAmount: number;
  paymentMethodReceive: string;
  paymentMethodPay: string;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface Account {
  id: string;
  accountNumber: string;
  accountName: string;
  debit: number;
  credit: number;
}

export const getPaymentVouchersSampleData = (): PaymentVoucher[] => [
  {
    id: '1',
    voucherNumber: 'PAY-4592',
    date: '2026-07-03',
    beneficiaryName: 'ليلى خالد',
    totalAmount: 1500.00,
    paymentMethodReceive: 'بنكي',
    paymentMethodPay: 'بنك الراجحي',
    status: 'completed',
  },
  {
    id: '2',
    voucherNumber: 'PAY-8735',
    date: '2026-07-10',
    beneficiaryName: 'عمر عبد الكافي',
    totalAmount: 500.00,
    paymentMethodReceive: 'بنكي',
    paymentMethodPay: 'غرفة محمد',
    status: 'completed',
  },
  {
    id: '3',
    voucherNumber: 'PAY-2387',
    date: '2026-07-17',
    beneficiaryName: 'نور الريفي',
    totalAmount: 0.00,
    paymentMethodReceive: 'نقداً',
    paymentMethodPay: 'بنك الراجحي',
    status: 'pending',
  },
  {
    id: '4',
    voucherNumber: 'PAY-9164',
    date: '2026-07-24',
    beneficiaryName: 'محمود ديوبش',
    totalAmount: 2000.00,
    paymentMethodReceive: 'شيك',
    paymentMethodPay: 'بنك الراجحي',
    status: 'pending',
  },
  {
    id: '5',
    voucherNumber: 'PAY-5829',
    date: '2026-07-31',
    beneficiaryName: 'فاطمة ناصر',
    totalAmount: 3000.00,
    paymentMethodReceive: 'نقداً',
    paymentMethodPay: 'غرفة محمد',
    status: 'completed',
  },
  {
    id: '6',
    voucherNumber: 'PAY-1276',
    date: '2026-08-07',
    beneficiaryName: 'أحمد شوق',
    totalAmount: 0.00,
    paymentMethodReceive: 'نقداً',
    paymentMethodPay: 'بنك الراجحي',
    status: 'pending',
  },
  {
    id: '7',
    voucherNumber: 'PAY-7931',
    date: '2026-08-14',
    beneficiaryName: 'سامي رشيد',
    totalAmount: 250.00,
    paymentMethodReceive: 'بنكي',
    paymentMethodPay: 'بنك الراجحي',
    status: 'pending',
  },
  {
    id: '8',
    voucherNumber: 'PAY-3418',
    date: '2026-08-21',
    beneficiaryName: 'يوسف شاهين',
    totalAmount: 1200.00,
    paymentMethodReceive: 'بنكي',
    paymentMethodPay: 'بنك الراجحي',
    status: 'completed',
  },
];

export const getAccountsSampleData = (): Account[] => [
  {
    id: '1',
    accountNumber: '1',
    accountName: 'حساب 1',
    debit: 1000,
    credit: 0,
  },
  {
    id: '2',
    accountNumber: '2',
    accountName: 'حساب 2',
    debit: 1000,
    credit: 0,
  },
];
