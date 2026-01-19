import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SettingsIcon, CogIcon, UsersIcon, ShoppingCartIcon, ShoppingBagIcon, PackageIcon, BarChart3Icon, WorkflowIcon, DollarSignIcon } from 'lucide-react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { FeatureCard } from '../../components/ui/FeatureCard';

interface SettingCard {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ElementType;
  path: string;
  bgColor: string;
  iconColor: string;
  module: string;
}

export const SettingsPage = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const moduleParam = searchParams.get('module') || 'accounting';
  const [selectedModule, setSelectedModule] = useState(moduleParam);

  useEffect(() => {
    setSelectedModule(moduleParam);
  }, [moduleParam]);

  const allSettingCards: SettingCard[] = [
    // Accounting Settings
    {
      id: 'accounting-settings',
      titleKey: 'settings.accounting.chart_of_accounts',
      descriptionKey: 'settings.accounting.chart_of_accounts_desc',
      icon: DollarSignIcon,
      path: '/settings/chart-of-accounts',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'accounting',
    },
    {
      id: 'cost-centers',
      titleKey: 'settings.accounting.cost_centers',
      descriptionKey: 'settings.accounting.cost_centers_desc',
      icon: BarChart3Icon,
      path: '/settings/cost-centers',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'accounting',
    },
    {
      id: 'accounting-periods',
      titleKey: 'settings.accounting.accounting_periods',
      descriptionKey: 'settings.accounting.accounting_periods_desc',
      icon: SettingsIcon,
      path: '/settings/accounting-periods',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'accounting',
    },
    {
      id: 'payment-methods',
      titleKey: 'settings.accounting.payment_methods',
      descriptionKey: 'settings.accounting.payment_methods_desc',
      icon: CogIcon,
      path: '/settings/payment-methods',
      bgColor: '#14B8A61a',
      iconColor: '#14B8A6',
      module: 'accounting',
    },
    // Purchases Settings
    {
      id: 'supplier-categories',
      titleKey: 'settings.purchases.supplier_categories',
      descriptionKey: 'settings.purchases.supplier_categories_desc',
      icon: UsersIcon,
      path: '/settings/supplier-categories',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'purchases',
    },
    {
      id: 'purchase-settings',
      titleKey: 'settings.purchases.purchase_settings',
      descriptionKey: 'settings.purchases.purchase_settings_desc',
      icon: ShoppingCartIcon,
      path: '/settings/purchase-settings',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'purchases',
    },
    {
      id: 'approval-workflow',
      titleKey: 'settings.purchases.approval_workflow',
      descriptionKey: 'settings.purchases.approval_workflow_desc',
      icon: WorkflowIcon,
      path: '/settings/approval-workflow',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'purchases',
    },
    // Sales Settings
    {
      id: 'customer-categories',
      titleKey: 'settings.sales.customer_categories',
      descriptionKey: 'settings.sales.customer_categories_desc',
      icon: UsersIcon,
      path: '/settings/customer-categories',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'sales',
    },
    {
      id: 'sales-settings',
      titleKey: 'settings.sales.sales_settings',
      descriptionKey: 'settings.sales.sales_settings_desc',
      icon: ShoppingBagIcon,
      path: '/settings/sales-settings',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'sales',
    },
    {
      id: 'pricing-rules',
      titleKey: 'settings.sales.pricing_rules',
      descriptionKey: 'settings.sales.pricing_rules_desc',
      icon: BarChart3Icon,
      path: '/settings/pricing-rules',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'sales',
    },
    // Assets Settings
    {
      id: 'asset-categories',
      titleKey: 'settings.assets.asset_categories',
      descriptionKey: 'settings.assets.asset_categories_desc',
      icon: PackageIcon,
      path: '/settings/asset-categories',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'assets',
    },
    {
      id: 'depreciation-methods',
      titleKey: 'settings.assets.depreciation_methods',
      descriptionKey: 'settings.assets.depreciation_methods_desc',
      icon: CogIcon,
      path: '/settings/depreciation-methods',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'assets',
    },
    {
      id: 'asset-locations',
      titleKey: 'settings.assets.asset_locations',
      descriptionKey: 'settings.assets.asset_locations_desc',
      icon: SettingsIcon,
      path: '/settings/asset-locations',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'assets',
    },
    // Warehouses Settings
    {
      id: 'warehouse-management',
      titleKey: 'settings.warehouses.warehouse_management',
      descriptionKey: 'settings.warehouses.warehouse_management_desc',
      icon: PackageIcon,
      path: '/settings/warehouse-management',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'warehouses',
    },
    {
      id: 'item-groups',
      titleKey: 'settings.warehouses.item_groups',
      descriptionKey: 'settings.warehouses.item_groups_desc',
      icon: CogIcon,
      path: '/settings/item-groups',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'warehouses',
    },
    {
      id: 'unit-of-measures',
      titleKey: 'settings.warehouses.unit_of_measures',
      descriptionKey: 'settings.warehouses.unit_of_measures_desc',
      icon: SettingsIcon,
      path: '/settings/unit-of-measures',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'warehouses',
    },
    {
      id: 'opening-balances',
      titleKey: 'settings.warehouses.opening_balances',
      descriptionKey: 'settings.warehouses.opening_balances_desc',
      icon: BarChart3Icon,
      path: '/settings/opening-balances',
      bgColor: '#14B8A61a',
      iconColor: '#14B8A6',
      module: 'warehouses',
    },
    // Workflow Engine Settings
    {
      id: 'workflow-templates',
      titleKey: 'settings.workflow.workflow_templates',
      descriptionKey: 'settings.workflow.workflow_templates_desc',
      icon: WorkflowIcon,
      path: '/settings/workflow-templates',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
      module: 'workflow-engine',
    },
    {
      id: 'approval-rules',
      titleKey: 'settings.workflow.approval_rules',
      descriptionKey: 'settings.workflow.approval_rules_desc',
      icon: CogIcon,
      path: '/settings/approval-rules',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
      module: 'workflow-engine',
    },
    {
      id: 'notification-settings',
      titleKey: 'settings.workflow.notification_settings',
      descriptionKey: 'settings.workflow.notification_settings_desc',
      icon: SettingsIcon,
      path: '/settings/notification-settings',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
      module: 'workflow-engine',
    },
    {
      id: 'roles-permissions',
      titleKey: 'settings.workflow.roles_permissions',
      descriptionKey: 'settings.workflow.roles_permissions_desc',
      icon: UsersIcon,
      path: '/settings/roles-permissions',
      bgColor: '#14B8A61a',
      iconColor: '#14B8A6',
      module: 'workflow-engine',
    },
  ];

  const settingCards = allSettingCards.filter(card => card.module === selectedModule);

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {settingCards.map((card) => (
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
