// Work Orders Data - Sales work orders management
export type WorkOrderStatus = 'pending' | 'in-progress' | 'completed' | 'cancelled';
export type WorkOrderPriority = 'low' | 'normal' | 'high' | 'urgent';

export interface WorkOrderItem {
  id: number;
  itemName: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  tax: number;
  total: number;
}

export interface WorkOrder {
  id: number;
  orderNumber: string;
  customer: string;
  orderDate: string;
  deliveryDate: string;
  status: WorkOrderStatus;
  priority: WorkOrderPriority;
  assignedTo: string;
  items: WorkOrderItem[];
  subtotal: number;
  taxAmount: number;
  discount: number;
  total: number;
  notes?: string;
  priceQuoteId?: number;
  priceQuoteNumber?: string;
}

export const workOrdersData: WorkOrder[] = [
  {
    id: 1,
    orderNumber: 'WO-2026-001',
    customer: 'اللكنز',
    orderDate: '13/11/2025',
    deliveryDate: '20/11/2025',
    status: 'completed',
    priority: 'normal',
    assignedTo: 'سالم',
    items: [
      {
        id: 1,
        itemName: 'تجهيز حاسب آلي من نوع ديل',
        quantity: 1,
        unitPrice: 2000.0,
        discount: 0,
        tax: 15,
        total: 2300.0
      }
    ],
    subtotal: 2000,
    taxAmount: 300,
    discount: 0,
    total: 2300,
    priceQuoteNumber: 'RFQ-001',
  },
  {
    id: 2,
    orderNumber: 'WO-2026-002',
    customer: 'شركة التمويل العربية',
    orderDate: '01/11/2025',
    deliveryDate: '15/11/2025',
    status: 'in-progress',
    priority: 'high',
    assignedTo: 'عبد الرحمن المجيدة',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
  {
    id: 3,
    orderNumber: 'WO-2026-003',
    customer: 'شركة مركز العربية',
    orderDate: '10/04/2025',
    deliveryDate: '25/04/2025',
    status: 'pending',
    priority: 'normal',
    assignedTo: 'العبدي',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
  {
    id: 4,
    orderNumber: 'WO-2026-004',
    customer: 'شركة الرياض',
    orderDate: '10/05/2025',
    deliveryDate: '30/05/2025',
    status: 'pending',
    priority: 'urgent',
    assignedTo: 'الباشم',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
  {
    id: 5,
    orderNumber: 'WO-2026-005',
    customer: 'شركة التوريد',
    orderDate: '11/03/2025',
    deliveryDate: '28/03/2025',
    status: 'cancelled',
    priority: 'low',
    assignedTo: 'العبد الكريم',
    items: [],
    subtotal: 0,
    taxAmount: 0,
    discount: 0,
    total: 0,
  },
];
