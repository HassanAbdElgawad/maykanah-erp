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
  // Dashboard
  { title: 'الرئيسية', titleEn: 'Dashboard', path: '/home', location: 'النظام', locationEn: 'System' },
  { title: 'لوحة التحكم', titleEn: 'Control Panel', path: '/home', location: 'النظام', locationEn: 'System' },
  
  // Inbox
  { title: 'صندوق الوارد', titleEn: 'Inbox', path: '/inbox', location: 'النظام', locationEn: 'System' },
  
  // Accounting
  { title: 'الحسابات', titleEn: 'Accounting', path: '/accounting', location: 'إدارة الحسابات', locationEn: 'Accounting Management' },
  { title: 'القيود المحاسبية', titleEn: 'Accounting Entries', path: '/accounting/entries', location: 'إدارة الحسابات', locationEn: 'Accounting Management' },
  { title: 'سندات القبض', titleEn: 'Receipt Vouchers', path: '/accounting/receipt-vouchers', location: 'إدارة الحسابات', locationEn: 'Accounting Management' },
  { title: 'سندات الصرف', titleEn: 'Payment Vouchers', path: '/accounting/payment-vouchers', location: 'إدارة الحسابات', locationEn: 'Accounting Management' },
  { title: 'عهد نقدية', titleEn: 'Cash Custody', path: '/accounting/cash-custody', location: 'إدارة الحسابات', locationEn: 'Accounting Management' },
  
  // Purchases
  { title: 'المشتريات', titleEn: 'Purchases', path: '/purchases', location: 'إدارة المشتريات', locationEn: 'Purchases Management' },
  { title: 'الموردين', titleEn: 'Suppliers', path: '/purchases/suppliers', location: 'إدارة المشتريات', locationEn: 'Purchases Management' },
  { title: 'طلبات المواد', titleEn: 'Material Requests', path: '/purchases/material-requests', location: 'إدارة المشتريات', locationEn: 'Purchases Management' },
  { title: 'استلام المواد', titleEn: 'Material Receipts', path: '/purchases/material-receipts', location: 'إدارة المشتريات', locationEn: 'Purchases Management' },
  { title: 'فواتير الشراء', titleEn: 'Purchase Invoices', path: '/purchases/purchase-invoices', location: 'إدارة المشتريات', locationEn: 'Purchases Management' },
  { title: 'طلبات عروض الأسعار', titleEn: 'Price Quote Requests', path: '/purchases/price-quote-requests', location: 'إدارة المشتريات', locationEn: 'Purchases Management' },
  { title: 'عروض أسعار الموردين', titleEn: 'Supplier Price Quotes', path: '/purchases/supplier-price-quotes', location: 'إدارة المشتريات', locationEn: 'Purchases Management' },
  
  // Sales
  { title: 'المبيعات', titleEn: 'Sales', path: '/sales', location: 'إدارة المبيعات', locationEn: 'Sales Management' },
  { title: 'العملاء', titleEn: 'Customers', path: '/sales/customers', location: 'إدارة المبيعات', locationEn: 'Sales Management' },
  { title: 'عروض الأسعار', titleEn: 'Price Quotes', path: '/sales/price-quotes', location: 'إدارة المبيعات', locationEn: 'Sales Management' },
  { title: 'أوامر العمل', titleEn: 'Work Orders', path: '/sales/work-orders', location: 'إدارة المبيعات', locationEn: 'Sales Management' },
  { title: 'فواتير المبيعات', titleEn: 'Sales Invoices', path: '/sales/sales-invoices', location: 'إدارة المبيعات', locationEn: 'Sales Management' },
  { title: 'إذن تسليم', titleEn: 'Delivery Notes', path: '/sales/delivery-notes', location: 'إدارة المبيعات', locationEn: 'Sales Management' },
  { title: 'قوائم الأسعار', titleEn: 'Price Lists', path: '/sales/price-lists', location: 'إدارة المبيعات', locationEn: 'Sales Management' },
  { title: 'مندوبي المبيعات', titleEn: 'Sales Representatives', path: '/sales/sales-representatives', location: 'إدارة المبيعات', locationEn: 'Sales Management' },
  
  // Competitions
  { title: 'المنافسات', titleEn: 'Competitions', path: '/competitions', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'تأهيل الموردين', titleEn: 'Vendor Qualification', path: '/competitions/vendor-qualification', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'مستخدمي الموردين', titleEn: 'Vendor Users', path: '/competitions/vendor-users', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'إشعارات الموردين', titleEn: 'Vendor Notifications', path: '/competitions/vendor-notifications', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'تشكيل اللجنة', titleEn: 'Committee Formation', path: '/competitions/committee-formation', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'معايير التقييم', titleEn: 'Evaluation Criteria', path: '/competitions/evaluation-criteria', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'إطلاق المنافسة', titleEn: 'Competition Launch', path: '/competitions/competition-launch', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'تمديد المنافسة', titleEn: 'Competition Extension', path: '/competitions/competition-extension', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'استقبال العروض', titleEn: 'Receive Offers', path: '/competitions/receive-offers', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'فتح العروض', titleEn: 'Open Offers', path: '/competitions/open-offers', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'فحص العروض', titleEn: 'Offers Inspection', path: '/competitions/offers-inspection', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'الترسية', titleEn: 'Award', path: '/competitions/award', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'تأكيد الترسية', titleEn: 'Award Confirmation', path: '/competitions/award-confirmation', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'الاتفاقيات', titleEn: 'Agreements', path: '/competitions/agreements', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'أمر العمل', titleEn: 'Work Order', path: '/competitions/work-order', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'العقد', titleEn: 'Contract', path: '/competitions/contract', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'المطالبة المالية', titleEn: 'Financial Claim', path: '/competitions/financial-claim', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'شهادة الإنجاز', titleEn: 'Completion Certificate', path: '/competitions/completion-certificate', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  { title: 'الضمانات البنكية', titleEn: 'Bank Guarantees', path: '/competitions/bank-guarantees', location: 'إدارة المنافسات', locationEn: 'Competitions Management' },
  
  // Assets
  { title: 'الأصول', titleEn: 'Assets', path: '/assets', location: 'إدارة الأصول', locationEn: 'Assets Management' },
  { title: 'إدارة الأصول', titleEn: 'Asset Management', path: '/assets/asset-management', location: 'إدارة الأصول', locationEn: 'Assets Management' },
  { title: 'حركات الأصول', titleEn: 'Asset Movements', path: '/assets/asset-movements', location: 'إدارة الأصول', locationEn: 'Assets Management' },
  { title: 'الصيانة', titleEn: 'Maintenance', path: '/assets/maintenance', location: 'إدارة الأصول', locationEn: 'Assets Management' },
  { title: 'تعديل قيمة الأصول', titleEn: 'Asset Value Adjustment', path: '/assets/asset-value-adjustment', location: 'إدارة الأصول', locationEn: 'Assets Management' },
  { title: 'بيع واستبعاد الأصول', titleEn: 'Sale & Disposal', path: '/assets/sale-disposal', location: 'إدارة الأصول', locationEn: 'Assets Management' },
  
  // HR
  { title: 'الموارد البشرية', titleEn: 'Human Resources', path: '/hr', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'مركز الموظفين', titleEn: 'Employee Center', path: '/hr/employee-center', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'طلباتي', titleEn: 'My Requests', path: '/hr/my-requests', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'الإجازات والحضور', titleEn: 'Leaves & Attendance', path: '/hr/leaves-attendance', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'العمل عن بعد', titleEn: 'Remote Work', path: '/hr/remote-work', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'الرواتب والمكافآت', titleEn: 'Salaries & Rewards', path: '/hr/salaries-rewards', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'الأداء والتطوير', titleEn: 'Performance & Development', path: '/hr/performance-development', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'مكتبة الاتصالات', titleEn: 'Communication Library', path: '/hr/communication-library', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'التوظيف', titleEn: 'Recruitment', path: '/hr/recruitment', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  { title: 'التنبيهات والطلبات', titleEn: 'Alerts & Requests', path: '/hr/alerts-requests', location: 'إدارة الموارد البشرية', locationEn: 'HR Management' },
  
  // Strategy
  { title: 'الاستراتيجية', titleEn: 'Strategy', path: '/strategy', location: 'إدارة الإستراتيجية', locationEn: 'Strategy Management' },
  { title: 'المهام', titleEn: 'Tasks', path: '/strategy/tasks', location: 'إدارة الإستراتيجية', locationEn: 'Strategy Management' },
  { title: 'الاجتماعات', titleEn: 'Meetings', path: '/strategy/meetings', location: 'إدارة الإستراتيجية', locationEn: 'Strategy Management' },
  { title: 'الوثائق', titleEn: 'Documents', path: '/strategy/documents', location: 'إدارة الإستراتيجية', locationEn: 'Strategy Management' },
  { title: 'تتبع الخطط', titleEn: 'Plan Tracking', path: '/strategy/plan-tracking', location: 'إدارة الإستراتيجية', locationEn: 'Strategy Management' },
  { title: 'الخطط الاستراتيجية', titleEn: 'Strategic Plans', path: '/strategy/strategic-plans', location: 'إدارة الإستراتيجية', locationEn: 'Strategy Management' },
  { title: 'المشاريع', titleEn: 'Projects', path: '/strategy/projects', location: 'إدارة الإستراتيجية', locationEn: 'Strategy Management' },
  
  // Workflow Engine
  { title: 'محرك سير الأعمال', titleEn: 'Workflow Engine', path: '/workflow-engine', location: 'محرك سير الأعمال', locationEn: 'Workflow Engine' },
  { title: 'مسارات العمل', titleEn: 'Workflows', path: '/workflow-engine/workflows', location: 'محرك سير الأعمال', locationEn: 'Workflow Engine' },
  { title: 'قوائم التحقق', titleEn: 'Verification Templates', path: '/workflow-engine/verification-templates', location: 'محرك سير الأعمال', locationEn: 'Workflow Engine' },
  
  // Warehouses
  { title: 'المستودعات', titleEn: 'Warehouses', path: '/warehouses', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'قائمة المنتجات', titleEn: 'Products List', path: '/warehouses/products-list', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'حركات المخزون', titleEn: 'Inventory Movements', path: '/warehouses/inventory-movements', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'حركة المستودعات', titleEn: 'Warehouse Movement', path: '/warehouses/warehouse-movement', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'إغلاق الجرد', titleEn: 'Inventory Closing', path: '/warehouses/inventory-closing', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'مواد المخزون', titleEn: 'Inventory Materials', path: '/warehouses/inventory-materials', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'جرد المخزون', titleEn: 'Inventory Count', path: '/warehouses/inventory-count', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'فئات المخزون', titleEn: 'Inventory Categories', path: '/warehouses/inventory-categories', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'الأرصدة الافتتاحية', titleEn: 'Opening Balances', path: '/warehouses/opening-balances', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'قوائم أسعار المستودعات', titleEn: 'Warehouse Price Lists', path: '/warehouses/price-lists', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'الدفعات', titleEn: 'Batches', path: '/warehouses/batches', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'سعر الصنف', titleEn: 'Item Price', path: '/warehouses/item-price', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'الرقم التسلسلي', titleEn: 'Serial Number', path: '/warehouses/serial-number', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  { title: 'تكلفة وصول البضائع', titleEn: 'Goods Arrival Cost', path: '/warehouses/goods-arrival-cost', location: 'إدارة المستودعات', locationEn: 'Warehouses Management' },
  
  // Reports - Accounting
  { title: 'التقارير', titleEn: 'Reports', path: '/reports', location: 'التقارير', locationEn: 'Reports' },
  { title: 'دفتر الأستاذ العام', titleEn: 'General Ledger', path: '/reports/accounting/general-ledger', location: 'تقارير المحاسبة', locationEn: 'Accounting Reports' },
  { title: 'المركز المالي', titleEn: 'Financial Position', path: '/reports/accounting/financial-position', location: 'تقارير المحاسبة', locationEn: 'Accounting Reports' },
  { title: 'ميزان المراجعة', titleEn: 'Trial Balance', path: '/reports/accounting/trial-balance', location: 'تقارير المحاسبة', locationEn: 'Accounting Reports' },
  { title: 'قائمة الدخل', titleEn: 'Income Statement', path: '/reports/accounting/income-statement', location: 'تقارير المحاسبة', locationEn: 'Accounting Reports' },
  { title: 'ميزان المراجعة بالحركة', titleEn: 'Trial Balance Movement', path: '/reports/accounting/trial-balance-movement', location: 'تقارير المحاسبة', locationEn: 'Accounting Reports' },
  
  // Reports - Purchases
  { title: 'مقارنة عروض الموردين', titleEn: 'Supplier Quotes Comparison', path: '/reports/purchases/supplier-quotes-comparison', location: 'تقارير المشتريات', locationEn: 'Purchases Reports' },
  { title: 'تحليل أوامر الشراء', titleEn: 'Purchase Orders Analysis', path: '/reports/purchases/purchase-orders-analysis', location: 'تقارير المشتريات', locationEn: 'Purchases Reports' },
  { title: 'الأسعار حسب الفئة', titleEn: 'Prices by Category', path: '/reports/purchases/prices-by-category', location: 'تقارير المشتريات', locationEn: 'Purchases Reports' },
  { title: 'الأصناف المطلوبة للطلب والاستلام', titleEn: 'Items Required Order & Receipt', path: '/reports/purchases/items-required-order-receipt', location: 'تقارير المشتريات', locationEn: 'Purchases Reports' },
  { title: 'تحليل المشتريات', titleEn: 'Purchases Analysis', path: '/reports/purchases/purchases-analysis', location: 'تقارير المشتريات', locationEn: 'Purchases Reports' },
  { title: 'أسعار المشتريات حسب الصنف', titleEn: 'Purchases Prices by Item', path: '/reports/purchases/purchases-prices-by-item', location: 'تقارير المشتريات', locationEn: 'Purchases Reports' },
  
  // Reports - Sales
  { title: 'عمولة مندوبي المبيعات', titleEn: 'Sales Representatives Commission', path: '/reports/sales/representatives-commission', location: 'تقارير المبيعات', locationEn: 'Sales Reports' },
  { title: 'العملاء غير النشطين', titleEn: 'Inactive Customers', path: '/reports/sales/inactive-customers', location: 'تقارير المبيعات', locationEn: 'Sales Reports' },
  { title: 'اكتساب العملاء', titleEn: 'Customer Acquisition', path: '/reports/sales/customer-acquisition', location: 'تقارير المبيعات', locationEn: 'Sales Reports' },
  { title: 'تحليل المبيعات', titleEn: 'Sales Analysis', path: '/reports/sales/sales-analysis', location: 'تقارير المبيعات', locationEn: 'Sales Reports' },
  { title: 'أعمار العملاء', titleEn: 'Customer Aging', path: '/reports/sales/customer-aging', location: 'تقارير المبيعات', locationEn: 'Sales Reports' },
  
  // Reports - Warehouses
  { title: 'حالة المخزون', titleEn: 'Inventory Status', path: '/reports/warehouses/inventory-status', location: 'تقارير المستودعات', locationEn: 'Warehouses Reports' },
  { title: 'حركة المخزون', titleEn: 'Stock Movement', path: '/reports/warehouses/stock-movement', location: 'تقارير المستودعات', locationEn: 'Warehouses Reports' },
  { title: 'أرصدة المستودعات', titleEn: 'Warehouse Balances', path: '/reports/warehouses/warehouse-balances', location: 'تقارير المستودعات', locationEn: 'Warehouses Reports' },
  { title: 'تقييم المخزون', titleEn: 'Inventory Valuation', path: '/reports/warehouses/inventory-valuation', location: 'تقارير المستودعات', locationEn: 'Warehouses Reports' },
  
  // Settings - Accounting
  { title: 'الإعدادات', titleEn: 'Settings', path: '/settings', location: 'الإعدادات', locationEn: 'Settings' },
  { title: 'إعدادات الشركة', titleEn: 'Company Settings', path: '/settings/accounting/company', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'شجرة الحسابات', titleEn: 'Chart of Accounts', path: '/settings/accounting/chart-of-accounts', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'إعدادات الحسابات', titleEn: 'Account Settings', path: '/settings/accounting/account-settings', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'العملات', titleEn: 'Currencies', path: '/settings/accounting/currencies', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'إعدادات الضرائب', titleEn: 'Tax Settings', path: '/settings/accounting/tax-settings', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'السنة المالية', titleEn: 'Fiscal Year', path: '/settings/accounting/fiscal-year', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'الفترات المحاسبية', titleEn: 'Accounting Periods', path: '/settings/accounting/accounting-periods', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'طرق الدفع', titleEn: 'Payment Methods', path: '/settings/accounting/payment-methods', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'الشروط والأحكام', titleEn: 'Terms & Conditions', path: '/settings/accounting/terms-conditions', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'مراكز التكلفة', titleEn: 'Cost Centers', path: '/settings/accounting/cost-centers', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  { title: 'الميزانية', titleEn: 'Budget', path: '/settings/accounting/budget', location: 'إعدادات المحاسبة', locationEn: 'Accounting Settings' },
  
  // Settings - Assets
  { title: 'فئات الأصول', titleEn: 'Asset Categories', path: '/settings/assets/asset-categories', location: 'إعدادات الأصول', locationEn: 'Assets Settings' },
  { title: 'مواقع الأصول', titleEn: 'Asset Locations', path: '/settings/assets/asset-locations', location: 'إعدادات الأصول', locationEn: 'Assets Settings' },
  { title: 'فريق الصيانة', titleEn: 'Maintenance Team', path: '/settings/assets/maintenance-team', location: 'إعدادات الأصول', locationEn: 'Assets Settings' },
  
  // Settings - Warehouses
  { title: 'إعدادات المستودعات العامة', titleEn: 'Warehouses General Settings', path: '/settings/warehouses/general', location: 'إعدادات المستودعات', locationEn: 'Warehouses Settings' },
  { title: 'وحدات القياس', titleEn: 'Unit of Measures', path: '/settings/warehouses/unit-of-measures', location: 'إعدادات المستودعات', locationEn: 'Warehouses Settings' },
  { title: 'مجموعات الأصناف', titleEn: 'Item Groups', path: '/settings/warehouses/item-groups', location: 'إعدادات المستودعات', locationEn: 'Warehouses Settings' },
  { title: 'إدارة المستودعات', titleEn: 'Warehouse Management', path: '/settings/warehouses/warehouse-management', location: 'إعدادات المستودعات', locationEn: 'Warehouses Settings' },
  
  // Settings - Workflow Engine
  { title: 'إدارة الأقسام', titleEn: 'Department Management', path: '/settings/workflow-engine/department-management', location: 'إعدادات محرك سير الأعمال', locationEn: 'Workflow Engine Settings' },
  { title: 'إدارة المستخدمين', titleEn: 'User Management', path: '/settings/workflow-engine/user-management', location: 'إعدادات محرك سير الأعمال', locationEn: 'Workflow Engine Settings' },
  { title: 'الفروع والمواقع', titleEn: 'Branches & Locations', path: '/settings/workflow-engine/branches-locations', location: 'إعدادات محرك سير الأعمال', locationEn: 'Workflow Engine Settings' },
  
  // Settings - Purchases & Sales
  { title: 'قوالب الضرائب', titleEn: 'Tax Templates', path: '/settings/purchases/purchase-tax-template', location: 'إعدادات المشتريات', locationEn: 'Purchases Settings' },
  { title: 'قوالب الشروط والأحكام', titleEn: 'Terms & Conditions Templates', path: '/settings/purchases/terms-conditions-template', location: 'إعدادات المشتريات', locationEn: 'Purchases Settings' },
  { title: 'إعدادات المبيعات', titleEn: 'Sales Settings', path: '/settings/sales/sales-settings', location: 'إعدادات المبيعات', locationEn: 'Sales Settings' },
  { title: 'قوالب الشروط', titleEn: 'Terms Template', path: '/settings/sales/terms-template', location: 'إعدادات المبيعات', locationEn: 'Sales Settings' },
  
  // Support
  { title: 'الدعم الفني', titleEn: 'Support', path: '/support', location: 'النظام', locationEn: 'System' },
];
