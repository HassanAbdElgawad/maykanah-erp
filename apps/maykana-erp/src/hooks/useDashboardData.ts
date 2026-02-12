// useDashboardData Hook - Provides dashboard data based on language context
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getStatsCards,
  getSalesData,
  getPurchaseStatusData,
  getTopProducts,
  getRecentActivities,
  getDepartmentExpenses,
} from '@/data/common/dashboard.data';

export const useDashboardData = () => {
  const { t, dir } = useLanguage();

  return {
    statsCards: getStatsCards(t),
    salesData: getSalesData(t),
    purchaseStatusData: getPurchaseStatusData(t),
    topProducts: getTopProducts(t, dir),
    recentActivities: getRecentActivities(t),
    departmentExpenses: getDepartmentExpenses(t),
  };
};
