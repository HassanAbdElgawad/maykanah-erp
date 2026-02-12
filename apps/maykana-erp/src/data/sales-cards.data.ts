// Sales Cards Data - Sales management feature cards
import {
  FileText,
  ClipboardList,
  Receipt,
  Package,
  RotateCcw,
  ListChecks,
  Users,
  UserCircle,
} from 'lucide-react';

export interface SalesCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  path: string;
}

export const getSalesCards = (t: (key: string) => string): SalesCard[] => [
  {
    id: 'customers',
    title: t('sales.customers') || 'العملاء',
    description: t('sales.customers_desc') || 'بيانات العملاء وتفاصيل التواصل والدفع.',
    icon: Users,
    bgColor: '#f0f7ff',
    iconColor: '#1976d2',
    path: '/sales/customers',
  },
  {
    id: 'price-quotes',
    title: t('sales.price_quotes') || 'عروض الأسعار',
    description: t('sales.price_quotes_desc') || 'عرض مبدئي يوضح الأسعار قبل تأكيد البيع.',
    icon: Receipt,
    bgColor: '#faf6fb',
    iconColor: '#7b1fa2',
    path: '/sales/price-quotes',
  },
  {
    id: 'work-orders',
    title: t('sales.work_orders') || 'أوامر التوريد',
    description: t('sales.work_orders_desc') || 'تنفيذ الطلب وتحويله للتسليم أو الفاتورة',
    icon: ClipboardList,
    bgColor: '#fffef5',
    iconColor: '#f9a825',
    path: '/sales/work-orders',
  },
  {
    id: 'sales-invoices',
    title: t('sales.sales_invoices') || 'فاتورة مبيعات',
    description: t('sales.sales_invoices_desc') || 'المستند المالي لتحصيل المبلغ من العميل',
    icon: FileText,
    bgColor: '#f5faf5',
    iconColor: '#388e3c',
    path: '/sales/sales-invoices',
  },
  {
    id: 'delivery-notes',
    title: t('sales.delivery_notes') || 'سند تسليم',
    description: t('sales.delivery_notes_desc') || 'تسليم البضاعة للعميل وخصمها من المخزون',
    icon: Package,
    bgColor: '#fff9f0',
    iconColor: '#f57c00',
    path: '/sales/delivery-notes',
  },
  // {
  //   id: 'sales-returns',
  //   title: t('sales.sales_returns') || 'مردودات مبيعات',
  //   description: t('sales.sales_returns_desc') || 'البضاعة المرتجعة وتحديث الحساب والمخزون',
  //   icon: RotateCcw,
  //   bgColor: '#fef5f8',
  //   iconColor: '#d32f2f',
  //   path: '/sales/sales-returns',
  // },
  {
    id: 'price-lists',
    title: t('sales.price_lists') || 'قوائم الأسعار',
    description: t('sales.price_lists_desc') || 'تحديد أسعار البيع حسب النوع أو العميل.',
    icon: ListChecks,
    bgColor: '#faf6fb',
    iconColor: '#7b1fa2',
    path: '/sales/price-lists',
  },
  {
    id: 'sales-representatives',
    title: t('sales.sales_representatives') || 'مندوبي المبيعات',
    description: t('sales.sales_representatives_desc') || 'إدارة بيانات المندوبين وعمولاتهم.',
    icon: UserCircle,
    bgColor: '#f0f7ff',
    iconColor: '#1976d2',
    path: '/sales/sales-representatives',
  },
];
