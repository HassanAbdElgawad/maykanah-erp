// Common UI Data (Header, Notifications, Search, etc.)

export interface Notification {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  time: string;
  isRead: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
  icon?: string;
}

export interface SearchResult {
  title: string;
  titleEn: string;
  path: string;
  location: string;
  locationEn: string;
}

// Mock Notifications Data
export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'طلب إجازة جديد',
    titleEn: 'New Leave Request',
    description: 'تم استلام طلب إجازة من أحمد محمد للفترة من 15-20 يناير',
    descriptionEn: 'Leave request received from Ahmed Mohammed for January 15-20',
    time: 'منذ 5 دقائق',
    isRead: false,
    type: 'info',
  },
  {
    id: '2',
    title: 'موافقة على الفاتورة',
    titleEn: 'Invoice Approved',
    description: 'تمت الموافقة على الفاتورة رقم INV-2025-001',
    descriptionEn: 'Invoice INV-2025-001 has been approved',
    time: 'منذ ساعة',
    isRead: false,
    type: 'success',
  },
  {
    id: '3',
    title: 'تذكير: اجتماع اليوم',
    titleEn: 'Reminder: Meeting Today',
    description: 'لديك اجتماع مع فريق المشتريات الساعة 2:00 مساءً',
    descriptionEn: 'You have a meeting with the Procurement team at 2:00 PM',
    time: 'منذ ساعتين',
    isRead: false,
    type: 'warning',
  },
  {
    id: '4',
    title: 'تأخر في التسليم',
    titleEn: 'Delivery Delay',
    description: 'تأخر في تسليم طلب الشراء PO-2025-015',
    descriptionEn: 'Delay in delivery of Purchase Order PO-2025-015',
    time: 'منذ 3 ساعات',
    isRead: true,
    type: 'error',
  },
  {
    id: '5',
    title: 'تقرير الحضور الشهري جاهز',
    titleEn: 'Monthly Attendance Report Ready',
    description: 'تقرير حضور وانصراف الموظفين لشهر ديسمبر متاح للمراجعة',
    descriptionEn: 'Employee attendance report for December is available for review',
    time: 'منذ 5 ساعات',
    isRead: true,
    type: 'info',
  },
];

// Searchable Pages Data
export const SEARCHABLE_PAGES: SearchResult[] = [
  // Accounting
  { title: 'القيود المحاسبية', titleEn: 'Accounting Entries', path: '/accounting/entries', location: 'إدارة الحسابات', locationEn: 'Accounting Management' },
  
  // Purchases
  { title: 'الموردين', titleEn: 'Suppliers', path: '/purchases/suppliers', location: 'إدارة المشتريات', locationEn: 'Purchases Management' },
  
  // Sales
  { title: 'العملاء', titleEn: 'Customers', path: '/sales/customers', location: 'إدارة المبيعات', locationEn: 'Sales Management' },
  
  // Competitions
  { title: 'تأهيل الموردين', titleEn: 'Vendor Qualification', path: '/competitions/vendor-qualification', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  
  // Assets
  { title: 'الصيانة', titleEn: 'Maintenance', path: '/assets/maintenance', location: 'إدارة الأصول', locationEn: 'Assets Management' },
  
  // Strategy
  { title: 'إدارة المهام', titleEn: 'Task Management', path: '/strategy/tasks', location: 'إدارة الإستراتيجية', locationEn: 'Strategy Management' },
  
  // Warehouses
  { title: 'جرد المخزون', titleEn: 'Inventory Count', path: '/warehouses/inventory-count', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  
  // Workflow
  { title: 'مسارات العمل', titleEn: 'Workflows', path: '/workflow-engine/workflows', location: 'محرك سير الأعمال', locationEn: 'Workflow Engine' },
  { title: 'قوائم التحقق', titleEn: 'Verification Lists', path: '/workflow-engine/verification-templates', location: 'محرك سير الأعمال', locationEn: 'Workflow Engine' },
  
  // HR
  { title: 'مركز الموظفين', titleEn: 'Employee Center', path: '/hr/employee-center', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'الموظفون الجدد', titleEn: 'New Employees', path: '/hr/employee-center?tab=new-employee', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'طلبات مباشرة العمل', titleEn: 'Work Start Requests', path: '/hr/employee-center?tab=work-start', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'تجديد العقد', titleEn: 'Contract Renewal', path: '/hr/employee-center?tab=contract-renewal', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'الاستقالة وإنهاء الخدمة', titleEn: 'Resignation & Termination', path: '/hr/employee-center?tab=resignation', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'طلباتي', titleEn: 'My Requests', path: '/hr/my-requests', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
];
