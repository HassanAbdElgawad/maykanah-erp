import { useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { FeatureCard } from '../../components/ui/FeatureCard';
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
      bgColor: 'bg-[#07b6641a]',
      iconColor: '#07b664',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.product_management',
      descKey: 'warehouses.product_management_desc',
      icon: ShoppingBag,
      path: '/warehouses/product-management',
      bgColor: 'bg-[#97c8091a]',
      iconColor: '#97c809',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.closing_service',
      descKey: 'warehouses.closing_service_desc',
      icon: Lock,
      path: '/warehouses/closing-service',
      bgColor: 'bg-[#7fa1eb1a]',
      iconColor: '#7fa1eb',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.opening_balances',
      descKey: 'warehouses.opening_balances_desc',
      icon: DollarSign,
      path: '/warehouses/opening-balances',
      bgColor: 'bg-[#10488f1a]',
      iconColor: '#10488f',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.warehouse_management',
      descKey: 'warehouses.warehouse_management_desc',
      icon: Warehouse,
      path: '/warehouses/warehouse-management',
      bgColor: 'bg-[#fd7aa61a]',
      iconColor: '#fd7aa6',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.material_damage',
      descKey: 'warehouses.material_damage_desc',
      icon: Archive,
      path: '/warehouses/material-damage',
      bgColor: 'bg-[#2f8fb21a]',
      iconColor: '#2f8fb2',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.item_groups',
      descKey: 'warehouses.item_groups_desc',
      icon: FolderTree,
      path: '/warehouses/item-groups',
      bgColor: 'bg-[#7718691a]',
      iconColor: '#771869',
      hasContent: false,
    },
    {
      titleKey: 'warehouses.inventory_count',
      descKey: 'warehouses.inventory_count_desc',
      icon: ClipboardList,
      path: '/warehouses/inventory-count',
      bgColor: 'bg-[#803d191a]',
      iconColor: '#803d19',
      hasContent: true,
    },
    {
      titleKey: 'warehouses.warehouse_settings',
      descKey: 'warehouses.warehouse_settings_desc',
      icon: Settings,
      path: '/warehouses/warehouse-settings',
      bgColor: 'bg-[#e2791a1a]',
      iconColor: '#e2791a',
      hasContent: false,
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {featureCards.map((card) => (
          <FeatureCard
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
