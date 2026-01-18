import React from "react";
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { FeatureCard } from '../../components/ui/FeatureCard';
import { 
  Package,
  ArrowRightLeft,
  Wrench,
  TrendingUp,
  DollarSign
} from 'lucide-react';

interface AssetCard {
  id: string;
  titleKey: string;
  descKey: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
  path: string;
}

export const Assets: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const cards: AssetCard[] = [
    {
      id: 'asset-management',
      titleKey: 'assets.asset_management',
      descKey: 'assets.asset_management_desc',
      icon: Package,
      color: 'bg-[#E8F5E9]',
      iconColor: '#388e3c',
      path: '/assets/asset-management',
    },
    {
      id: 'asset-movements',
      titleKey: 'assets.asset_movements',
      descKey: 'assets.asset_movements_desc',
      icon: ArrowRightLeft,
      color: 'bg-[#E3F2FD]',
      iconColor: '#1976d2',
      path: '/assets/asset-movements',
    },
    {
      id: 'maintenance',
      titleKey: 'assets.maintenance',
      descKey: 'assets.maintenance_desc',
      icon: Wrench,
      color: 'bg-[#FFF3E0]',
      iconColor: '#f57c00',
      path: '/assets/maintenance',
    },
    {
      id: 'asset-value-adjustment',
      titleKey: 'assets.asset_value_adjustment',
      descKey: 'assets.asset_value_adjustment_desc',
      icon: TrendingUp,
      color: 'bg-[#F3E5F5]',
      iconColor: '#7b1fa2',
      path: '/assets/asset-value-adjustment',
    },
    {
      id: 'sale-disposal',
      titleKey: 'assets.sale_disposal',
      descKey: 'assets.sale_disposal_desc',
      icon: DollarSign,
      color: 'bg-[#FCE4EC]',
      iconColor: '#c2185b',
      path: '/assets/sale-disposal',
    }
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card) => (
          <FeatureCard
            key={card.id}
            title={t(card.titleKey)}
            description={t(card.descKey)}
            icon={card.icon}
            bgColor={card.color}
            iconColor={card.iconColor}
            onClick={() => navigate(card.path)}
            isActive={card.id === 'maintenance'}
            isClickable={card.id === 'maintenance'}
          />
        ))}
      </div>
    </Layout>
  );
};
