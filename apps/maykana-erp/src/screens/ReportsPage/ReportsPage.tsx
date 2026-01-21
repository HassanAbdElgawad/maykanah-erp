import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FileTextIcon, BarChart3Icon, TrendingUpIcon, ReceiptIcon, ActivityIcon, PackageIcon, ClipboardListIcon, FileSpreadsheetIcon, TruckIcon, BoxIcon } from 'lucide-react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { FeatureCard } from '../../components/ui/FeatureCard';

interface ReportCard {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ElementType;
  path: string;
  bgColor: string;
  iconColor: string;
  module: string;
}

export const ReportsPage = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const moduleParam = searchParams.get('module') || 'accounting';
  const [selectedModule, setSelectedModule] = useState(moduleParam);

  useEffect(() => {
    setSelectedModule(moduleParam);
  }, [moduleParam]);

  const allReportCards: ReportCard[] = [
    // Accounting Reports
    {
      id: 'general-ledger',
      titleKey: 'reports.accounting.general_ledger',
      descriptionKey: 'reports.accounting.general_ledger_desc',
      icon: FileTextIcon,
      path: '/reports/general-ledger',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'accounting',
    },
    {
      id: 'financial-position',
      titleKey: 'reports.accounting.financial_position',
      descriptionKey: 'reports.accounting.financial_position_desc',
      icon: TrendingUpIcon,
      path: '/reports/financial-position',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'accounting',
    },
    {
      id: 'trial-balance',
      titleKey: 'reports.accounting.trial_balance',
      descriptionKey: 'reports.accounting.trial_balance_desc',
      icon: BarChart3Icon,
      path: '/reports/trial-balance',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'accounting',
    },
    {
      id: 'income-statement',
      titleKey: 'reports.accounting.income_statement',
      descriptionKey: 'reports.accounting.income_statement_desc',
      icon: ReceiptIcon,
      path: '/reports/income-statement',
      bgColor: '#14B8A61a',
      iconColor: '#14B8A6',
      module: 'accounting',
    },
    {
      id: 'trial-balance-movement',
      titleKey: 'reports.accounting.trial_balance_movement',
      descriptionKey: 'reports.accounting.trial_balance_movement_desc',
      icon: ActivityIcon,
      path: '/reports/trial-balance-movement',
      bgColor: '#F59E0B1a',
      iconColor: '#F59E0B',
      module: 'accounting',
    },
    // Purchases Reports
    {
      id: 'purchases-analysis',
      titleKey: 'reports.purchases.purchases_analysis',
      descriptionKey: 'reports.purchases.purchases_analysis_desc',
      icon: ClipboardListIcon,
      path: '/reports/purchases-analysis',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'purchases',
    },
    {
      id: 'supplier-accounts',
      titleKey: 'reports.purchases.supplier_accounts',
      descriptionKey: 'reports.purchases.supplier_accounts_desc',
      icon: FileTextIcon,
      path: '/reports/supplier-accounts',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'purchases',
    },
    {
      id: 'purchase-orders-report',
      titleKey: 'reports.purchases.purchase_orders',
      descriptionKey: 'reports.purchases.purchase_orders_desc',
      icon: ReceiptIcon,
      path: '/reports/purchase-orders',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'purchases',
    },
    {
      id: 'supplier-performance',
      titleKey: 'reports.purchases.supplier_performance',
      descriptionKey: 'reports.purchases.supplier_performance_desc',
      icon: BarChart3Icon,
      path: '/reports/supplier-performance',
      bgColor: '#14B8A61a',
      iconColor: '#14B8A6',
      module: 'purchases',
    },
    // Sales Reports
    {
      id: 'sales-analysis',
      titleKey: 'reports.sales.sales_analysis',
      descriptionKey: 'reports.sales.sales_analysis_desc',
      icon: TrendingUpIcon,
      path: '/reports/sales-analysis',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'sales',
    },
    {
      id: 'customer-accounts',
      titleKey: 'reports.sales.customer_accounts',
      descriptionKey: 'reports.sales.customer_accounts_desc',
      icon: FileTextIcon,
      path: '/reports/customer-accounts',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'sales',
    },
    {
      id: 'sales-representatives-report',
      titleKey: 'reports.sales.sales_representatives',
      descriptionKey: 'reports.sales.sales_representatives_desc',
      icon: ActivityIcon,
      path: '/reports/sales-representatives',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'sales',
    },
    {
      id: 'sales-performance',
      titleKey: 'reports.sales.sales_performance',
      descriptionKey: 'reports.sales.sales_performance_desc',
      icon: BarChart3Icon,
      path: '/reports/sales-performance',
      bgColor: '#14B8A61a',
      iconColor: '#14B8A6',
      module: 'sales',
    },
    // Warehouses Reports
    {
      id: 'inventory-status',
      titleKey: 'reports.warehouses.inventory_status',
      descriptionKey: 'reports.warehouses.inventory_status_desc',
      icon: PackageIcon,
      path: '/reports/inventory-status',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'warehouses',
    },
    {
      id: 'stock-movement',
      titleKey: 'reports.warehouses.stock_movement',
      descriptionKey: 'reports.warehouses.stock_movement_desc',
      icon: TruckIcon,
      path: '/reports/stock-movement',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'warehouses',
    },
    {
      id: 'warehouse-balances',
      titleKey: 'reports.warehouses.warehouse_balances',
      descriptionKey: 'reports.warehouses.warehouse_balances_desc',
      icon: BoxIcon,
      path: '/reports/warehouse-balances',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'warehouses',
    },
    {
      id: 'inventory-valuation',
      titleKey: 'reports.warehouses.inventory_valuation',
      descriptionKey: 'reports.warehouses.inventory_valuation_desc',
      icon: FileSpreadsheetIcon,
      path: '/reports/inventory-valuation',
      bgColor: '#14B8A61a',
      iconColor: '#14B8A6',
      module: 'warehouses',
    },
  ];

  const reportCards = allReportCards.filter(card => card.module === selectedModule);

  

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <Layout>
      <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {reportCards.map((card) => (
          <FeatureCard
            key={card.id}
            title={t(card.titleKey)}
            description={t(card.descriptionKey)}
            icon={card.icon}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
            onClick={() => handleCardClick(card.path)}
            isActive={false}
            isClickable={true}
          />
        ))}
      </div>
    </Layout>
  );
};
