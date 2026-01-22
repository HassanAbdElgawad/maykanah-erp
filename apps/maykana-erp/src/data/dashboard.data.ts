// Dashboard Data - Sample dashboard statistics and metrics
import {
  DollarSign,
  ShoppingCart,
  Package,
  Users,
} from 'lucide-react';

export interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: any;
  color: string;
}

export interface ChartData {
  month: string;
  value: number;
}

export interface PurchaseStatusData {
  status: string;
  count: number;
  percentage: number;
  color: string;
}

export interface TopProduct {
  name: string;
  quantity: number;
  revenue: string;
}

export interface RecentActivity {
  action: string;
  user: string;
  time: string;
  type: string;
}

export interface DepartmentExpense {
  department: string;
  amount: number;
  percentage: number;
}

// Helper function to get stats cards with translations
export const getStatsCards = (t: (key: string) => string): StatCard[] => [
  {
    title: t('dashboard.totalSales'),
    value: '2,450,000',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: t('dashboard.purchaseOrders'),
    value: '1,248',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: t('dashboard.totalAssets'),
    value: '856',
    change: '-3.1%',
    trend: 'down',
    icon: Package,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: t('dashboard.activeEmployees'),
    value: '342',
    change: '+5.4%',
    trend: 'up',
    icon: Users,
    color: 'bg-orange-50 text-orange-600',
  },
];

export const getSalesData = (t: (key: string) => string): ChartData[] => [
  { month: t('months.january'), value: 65000 },
  { month: t('months.february'), value: 72000 },
  { month: t('months.march'), value: 68000 },
  { month: t('months.april'), value: 85000 },
  { month: t('months.may'), value: 92000 },
  { month: t('months.june'), value: 88000 },
];

export const getPurchaseStatusData = (t: (key: string) => string): PurchaseStatusData[] => [
  { status: t('status.completed'), count: 450, percentage: 65, color: '#07b664' },
  { status: t('status.processing'), count: 180, percentage: 26, color: '#f59e0b' },
  { status: t('status.cancelled'), count: 62, percentage: 9, color: '#ef4444' },
];

export const getTopProducts = (t: (key: string) => string, dir: 'rtl' | 'ltr'): TopProduct[] => [
  {
    name: t('products.laptop'),
    quantity: 125,
    revenue: dir === 'rtl' ? `312,500 ${t('currency.sar')}` : `${t('currency.sar')} 312,500`,
  },
  {
    name: t('products.printer'),
    quantity: 89,
    revenue: dir === 'rtl' ? `89,000 ${t('currency.sar')}` : `${t('currency.sar')} 89,000`,
  },
  {
    name: t('products.monitor'),
    quantity: 67,
    revenue: dir === 'rtl' ? `134,000 ${t('currency.sar')}` : `${t('currency.sar')} 134,000`,
  },
  {
    name: t('products.keyboard'),
    quantity: 234,
    revenue: dir === 'rtl' ? `46,800 ${t('currency.sar')}` : `${t('currency.sar')} 46,800`,
  },
];

export const getRecentActivities = (t: (key: string) => string): RecentActivity[] => [
  {
    action: t('activities.newPurchaseOrder'),
    user: t('names.ahmedMohamed'),
    time: t('time.min5'),
    type: 'purchase',
  },
  {
    action: t('activities.salesInvoice'),
    user: t('names.saraAhmed'),
    time: t('time.min15'),
    type: 'sales',
  },
  {
    action: t('activities.assetMaintenance'),
    user: t('names.khaledAli'),
    time: t('time.min30'),
    type: 'maintenance',
  },
  {
    action: t('activities.monthlyReport'),
    user: t('names.fatimaHassan'),
    time: t('time.hour1'),
    type: 'report',
  },
];

export const getDepartmentExpenses = (t: (key: string) => string): DepartmentExpense[] => [
  { department: t('departments.purchases'), amount: 450000, percentage: 30 },
  { department: t('departments.sales'), amount: 350000, percentage: 23 },
  { department: t('departments.hr'), amount: 280000, percentage: 19 },
  { department: t('departments.it'), amount: 220000, percentage: 15 },
  { department: t('departments.management'), amount: 200000, percentage: 13 },
];
