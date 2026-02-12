export interface StartWorkRequest {
  id: string;
  requestNumber: string;
  employeeName: string;
  department: string;
  startDate: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export const startWorkRequestsData: StartWorkRequest[] = [
  {
    id: '1',
    requestNumber: 'WS-001',
    employeeName: 'أحمد محمد',
    department: 'تقنية المعلومات',
    startDate: '2026-03-15',
    submissionDate: '2026-03-01',
    status: 'approved',
  },
  {
    id: '2',
    requestNumber: 'WS-002',
    employeeName: 'فاطمة علي',
    department: 'الموارد البشرية',
    startDate: '2026-03-20',
    submissionDate: '2026-03-05',
    status: 'pending',
  },
  {
    id: '3',
    requestNumber: 'WS-003',
    employeeName: 'خالد عبدالله',
    department: 'المبيعات',
    startDate: '2026-04-01',
    submissionDate: '2026-03-10',
    status: 'approved',
  },
  {
    id: '4',
    requestNumber: 'WS-004',
    employeeName: 'نورة سعيد',
    department: 'التسويق',
    startDate: '2026-04-10',
    submissionDate: '2026-03-15',
    status: 'rejected',
  },
  {
    id: '5',
    requestNumber: 'WS-005',
    employeeName: 'عمر حسن',
    department: 'المالية',
    startDate: '2026-04-15',
    submissionDate: '2026-03-20',
    status: 'pending',
  },
];
