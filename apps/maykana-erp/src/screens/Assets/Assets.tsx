import React from "react";
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
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
      color: '#f5faf5',
      iconColor: '#388e3c',
      path: '/assets/asset-management',
    },
    {
      id: 'asset-movements',
      titleKey: 'assets.asset_movements.title',
      descKey: 'assets.asset_movements_desc',
      icon: ArrowRightLeft,
      color: '#f0f7ff',
      iconColor: '#1976d2',
      path: '/assets/asset-movements',
    },
    {
      id: 'maintenance',
      titleKey: 'assets.maintenance',
      descKey: 'assets.maintenance_desc',
      icon: Wrench,
      color: '#fff9f0',
      iconColor: '#f57c00',
      path: '/assets/maintenance',
    },
    {
      id: 'asset-value-adjustment',
      titleKey: 'assets.asset_value_adjustment',
      descKey: 'assets.asset_value_adjustment_desc',
      icon: TrendingUp,
      color: '#faf6fb',
      iconColor: '#7b1fa2',
      path: '/assets/asset-value-adjustment',
    },
    {
      id: 'sale-disposal',
      titleKey: 'assets.sale_disposal',
      descKey: 'assets.sale_disposal_desc',
      icon: DollarSign,
      color: '#fef5f8',
      iconColor: '#c2185b',
      path: '/assets/sale-disposal',
    }
  ];

  return (
    <Layout>
      <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card) => (
          <MaykanaCard
            key={card.id}
            title={t(card.titleKey)}
            description={t(card.descKey)}
            icon={card.icon}
            bgColor={card.color}
            iconColor={card.iconColor}
            onClick={() => navigate(card.path)}
            isActive={card.id === 'maintenance' || card.id === 'asset-movements' || card.id === 'asset-value-adjustment' || card.id === 'sale-disposal' || card.id === 'asset-management'}
            isClickable={card.id === 'maintenance' || card.id === 'asset-movements' || card.id === 'asset-value-adjustment' || card.id === 'sale-disposal' || card.id === 'asset-management'}
          />
        ))}
      </div>
    </Layout>
  );
};
