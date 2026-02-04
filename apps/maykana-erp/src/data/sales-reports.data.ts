// تقرير عمولة المندوب
export interface RepresentativeCommission {
  id: number;
  invoiceNumber: string;
  customer: string;
  issueDate: string;
  amount: number;
  representative: string;
  commissionPercentage: number;
  commissionAmount: number;
}

export const representativeCommissionData: RepresentativeCommission[] = [
  {
    id: 1,
    invoiceNumber: 'SR-2500096',
    customer: 'شركة أفاق الخليج',
    issueDate: '1/18/2025',
    amount: 4500,
    representative: 'سالم حسين',
    commissionPercentage: 1,
    commissionAmount: 10,
  },
  {
    id: 2,
    invoiceNumber: 'SR-2500096',
    customer: 'شركة نور',
    issueDate: '3/16/2025',
    amount: -500,
    representative: 'سالم حسين',
    commissionPercentage: 1,
    commissionAmount: -5,
  },
  {
    id: 3,
    invoiceNumber: 'SR-2500096',
    customer: 'مؤسسة كفى',
    issueDate: '7/16/2025',
    amount: 4500,
    representative: 'سالم حسين',
    commissionPercentage: 1,
    commissionAmount: 20,
  },
];

// تقرير العملاء غير النشطين
export interface InactiveCustomer {
  id: number;
  customer: string;
  totalInvoices: number;
  lastInvoiceValue: number;
  totalInvoicesAmount: number;
  daysCount: number;
}

export const inactiveCustomersData: InactiveCustomer[] = [
  {
    id: 1,
    customer: 'شركة أهداف',
    totalInvoices: 11500,
    lastInvoiceValue: 2500,
    totalInvoicesAmount: 577,
    daysCount: 577,
  },
  {
    id: 2,
    customer: 'شركة أهداف',
    totalInvoices: 14395.65,
    lastInvoiceValue: 14395.65,
    totalInvoicesAmount: 801,
    daysCount: 801,
  },
  {
    id: 3,
    customer: 'مؤسسة الادريسي',
    totalInvoices: 28000,
    lastInvoiceValue: 28000,
    totalInvoicesAmount: 322,
    daysCount: 322,
  },
];

// تقرير واقع اكتساب العملاء
export interface CustomerAcquisition {
  id: number;
  year: number;
  month: string;
  newClients: number;
  newClientsRevenue: number;
  renewedClientsRevenue: number;
  totalCommission: number;
}

export const customerAcquisitionData: CustomerAcquisition[] = [
  {
    id: 1,
    year: 2025,
    month: 'يناير',
    newClients: 232,
    newClientsRevenue: 2511,
    renewedClientsRevenue: 2511,
    totalCommission: 500,
  },
];

// تقرير المبيعات
export interface SalesReportItem {
  id: number;
  itemCode: string;
  itemName: string;
  description: string;
  quantity: number;
  price: number;
  orderNumber: string;
  warehouse: string;
  invoiceNumber: string;
  date: string;
  customer: string;
  invoiceAmount: number;
}

export const salesReportData: SalesReportItem[] = [
  {
    id: 1,
    itemCode: 'A-0008',
    itemName: 'اسمنت',
    description: 'اسمنت أبيض',
    quantity: 3,
    price: 252,
    orderNumber: '2362215',
    warehouse: 'شركة الاجودة للتجارة',
    invoiceNumber: '10/7/2025',
    date: 'الدمام',
    customer: 'أحمد المندوب',
    invoiceAmount: 108,
  },
];

// تقرير أعمار الديون للعملاء
export interface CustomerAging {
  id: number;
  customerName: string;
  totalInvoices: number;
  paid: number;
  unpaid: number;
  advancePayments: number;
  remainingAfterPayment: number;
  range0to30: number;
  range31to60: number;
  range61to90: number;
  rangeOver90: number;
}

export const customerAgingData: CustomerAging[] = [
  {
    id: 1,
    customerName: 'اسم العميل',
    totalInvoices: 50000,
    paid: 2500,
    unpaid: 4000,
    advancePayments: 20000,
    remainingAfterPayment: 23500,
    range0to30: 10000,
    range31to60: 8000,
    range61to90: 4000,
    rangeOver90: 5500,
  },
  {
    id: 2,
    customerName: 'الإجمالي',
    totalInvoices: 36000,
    paid: 15,
    unpaid: 5400,
    advancePayments: 18000,
    remainingAfterPayment: 41400,
    range0to30: 0,
    range31to60: 0,
    range61to90: 0,
    rangeOver90: 0,
  },
];
