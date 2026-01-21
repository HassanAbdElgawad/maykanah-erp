import { useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import {
  Package,
  Warehouse,
  Lock,
  DollarSign,
  FolderTree,
  ClipboardList,
  Settings,
  ShoppingBag,
  Archive,
} from 'lucide-react';

interface FeatureCard {
  titleKey: string;
  descKey: string;
  icon: React.ElementType;
  path: string;
  bgColor: string;
  iconColor: string;
  hasContent?: boolean;
}

export const Warehouses = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const featureCards: FeatureCard[] = [
    {
      titleKey: 'warehouses.inventory_materials',
      descKey: 'warehouses.inventory_materials_desc',
      icon: Package,
      path: '/warehouses/inventory-materials',
      bgColor: '#f5faf5',
      iconColor: '#388e3c',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.product_management',
      descKey: 'warehouses.product_management_desc',
      icon: ShoppingBag,
      path: '/warehouses/product-management',
      bgColor: '#fffef5',
      iconColor: '#f9a825',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.closing_service',
      descKey: 'warehouses.closing_service_desc',
      icon: Lock,
      path: '/warehouses/closing-service',
      bgColor: '#faf6fb',
      iconColor: '#7b1fa2',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.opening_balances',
      descKey: 'warehouses.opening_balances_desc',
      icon: DollarSign,
      path: '/warehouses/opening-balances',
      bgColor: '#f0f7ff',
      iconColor: '#1976d2',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.warehouse_management',
      descKey: 'warehouses.warehouse_management_desc',
      icon: Warehouse,
      path: '/warehouses/warehouse-management',
      bgColor: '#fef5f8',
      iconColor: '#c2185b',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.material_damage',
      descKey: 'warehouses.material_damage_desc',
      icon: Archive,
      path: '/warehouses/material-damage',
      bgColor: '#f0faf9',
      iconColor: '#00897b',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.item_groups',
      descKey: 'warehouses.item_groups_desc',
      icon: FolderTree,
      path: '/warehouses/item-groups',
      bgColor: '#faf6fb',
      iconColor: '#7b1fa2',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.inventory_count',
      descKey: 'warehouses.inventory_count_desc',
      icon: ClipboardList,
      path: '/warehouses/inventory-count',
      bgColor: '#fff9f0',
      iconColor: '#f57c00',
      hasContent: true,
    },
    {
      titleKey: 'warehouses.warehouse_settings',
      descKey: 'warehouses.warehouse_settings_desc',
      icon: Settings,
      path: '/warehouses/warehouse-settings',
      bgColor: '#fffef5',
      iconColor: '#f9a825',
      hasContent: false,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {featureCards.map((card) => (
          <MaykanaCard
            key={card.path}
            title={t(card.titleKey)}
            description={t(card.descKey)}
            icon={card.icon}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
            onClick={() => navigate(card.path)}
            isActive={card.hasContent || location.pathname.startsWith(card.path)}
            isClickable={card.hasContent}
          />
        ))}
      </div>
    </Layout>
  );
};
