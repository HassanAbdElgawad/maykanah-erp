// My Requests Data - Sample HR requests
export interface HRRequest {
  id: string;
  requestNumber: string;
  requestType: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export const SAMPLE_HR_REQUESTS: HRRequest[] = [
  {
    id: '1',
    requestNumber: 'REQ-2024-001',
    requestType: 'طلب مباشرة عمل',
    submissionDate: '2024-01-15',
    status: 'pending',
  },
  {
    id: '2',
    requestNumber: 'REQ-2024-002',
    requestType: 'طلب إجازة',
    submissionDate: '2024-01-10',
    status: 'approved',
  },
  {
    id: '3',
    requestNumber: 'REQ-2024-003',
    requestType: 'طلب تجديد عقد',
    submissionDate: '2024-01-05',
    status: 'rejected',
  },
];
