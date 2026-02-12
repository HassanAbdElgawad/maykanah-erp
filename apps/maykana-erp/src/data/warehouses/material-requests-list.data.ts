export interface MaterialRequest {
  id: number;
  requestNumber: string;
  requestDate: string;
  requestType: 'transfer' | 'damage';
  warehouseName: string;
}

export const materialRequestsListData: MaterialRequest[] = [
  {
    id: 1,
    requestNumber: '547812300015',
    requestDate: '2025-5-20',
    requestType: 'transfer',
    warehouseName: 'مشروع A',
  },
  {
    id: 2,
    requestNumber: '547812300015',
    requestDate: '2025-5-20',
    requestType: 'transfer',
    warehouseName: 'مشروع A8',
  },
  {
    id: 3,
    requestNumber: '547812300015',
    requestDate: '2025-5-20',
    requestType: 'transfer',
    warehouseName: 'مشروع B',
  },
  {
    id: 4,
    requestNumber: '547812300015',
    requestDate: '2025-5-20',
    requestType: 'transfer',
    warehouseName: 'مشروع Add',
  },
  {
    id: 5,
    requestNumber: '547812300015',
    requestDate: '2025-5-20',
    requestType: 'transfer',
    warehouseName: 'مشروع A4',
  },
  {
    id: 6,
    requestNumber: '547812300015',
    requestDate: '2025-5-20',
    requestType: 'damage',
    warehouseName: 'مشروع A7',
  },
  {
    id: 7,
    requestNumber: '547812300015',
    requestDate: '2025-5-20',
    requestType: 'damage',
    warehouseName: 'مشروع Z',
  },
  {
    id: 8,
    requestNumber: '547812300015',
    requestDate: '2025-5-20',
    requestType: 'damage',
    warehouseName: 'مشروع And',
  },
];
