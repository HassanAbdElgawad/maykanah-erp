// Cash Custody (Advances) Data
export interface CashCustody {
  id: string;
  advanceNumber: string;
  requestDate: string;
  employeeName: string;
  totalAmount: number;
  status: 'approved' | 'pending' | 'rejected' | 'settled';
  lastUpdate: string;
}

export interface CustodyItem {
  id: string;
  item: string;
  description: string;
  amount: number;
}

export const getCashCustodySampleData = (): CashCustody[] => [
  {
    id: '1',
    advanceNumber: 'ADV-4592',
    requestDate: '2026-07-03',
    employeeName: 'ليلى خالد',
    totalAmount: 1500.00,
    status: 'approved',
    lastUpdate: '2026-07-03',
  },
  {
    id: '2',
    advanceNumber: 'ADV-8735',
    requestDate: '2026-07-10',
    employeeName: 'عمر عبد الكافي',
    totalAmount: 500.00,
    status: 'rejected',
    lastUpdate: '2026-07-10',
  },
  {
    id: '3',
    advanceNumber: 'ADV-2387',
    requestDate: '2026-07-17',
    employeeName: 'نور الريفي',
    totalAmount: 0.00,
    status: 'pending',
    lastUpdate: '2026-07-17',
  },
  {
    id: '4',
    advanceNumber: 'ADV-9164',
    requestDate: '2026-07-24',
    employeeName: 'محمود ديوبش',
    totalAmount: 2000.00,
    status: 'pending',
    lastUpdate: '2026-07-24',
  },
  {
    id: '5',
    advanceNumber: 'ADV-5829',
    requestDate: '2026-07-31',
    employeeName: 'فاطمة ناصر',
    totalAmount: 3000.00,
    status: 'pending',
    lastUpdate: '2026-07-31',
  },
  {
    id: '6',
    advanceNumber: 'ADV-1276',
    requestDate: '2026-08-07',
    employeeName: 'أحمد شوق',
    totalAmount: 0.00,
    status: 'settled',
    lastUpdate: '2026-08-07',
  },
  {
    id: '7',
    advanceNumber: 'ADV-7931',
    requestDate: '2026-08-14',
    employeeName: 'سامي رشيد',
    totalAmount: 250.00,
    status: 'pending',
    lastUpdate: '2026-08-14',
  },
  {
    id: '8',
    advanceNumber: 'ADV-3418',
    requestDate: '2026-08-21',
    employeeName: 'يوسف شاهين',
    totalAmount: 1200.00,
    status: 'settled',
    lastUpdate: '2026-08-21',
  },
];

export const getCustodyItemsSampleData = (): CustodyItem[] => [
  {
    id: '1',
    item: 'الورد 1',
    description: 'تذاكر السفر للحاضرين في مركز السفر',
    amount: 1000,
  },
  {
    id: '2',
    item: 'الورد 2',
    description: 'إقامة الفندقية في الفندق',
    amount: 200,
  },
  {
    id: '3',
    item: 'الورد 3',
    description: 'وجبات وضيافة لعملاء محتملين',
    amount: 800,
  },
];
