import React from "react";
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { CardContent } from '../../components/ui/card';
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
      path: '/assets/asset-management',
    },
    {
      id: 'asset-movements',
      titleKey: 'assets.asset_movements',
      descKey: 'assets.asset_movements_desc',
      icon: ArrowRightLeft,
      color: 'bg-[#E3F2FD]',
      path: '/assets/asset-movements',
    },
    {
      id: 'maintenance',
      titleKey: 'assets.maintenance',
      descKey: 'assets.maintenance_desc',
      icon: Wrench,
      color: 'bg-[#FFF3E0]',
      path: '/assets/maintenance',
    },
    {
      id: 'asset-value-adjustment',
      titleKey: 'assets.asset_value_adjustment',
      descKey: 'assets.asset_value_adjustment_desc',
      icon: TrendingUp,
      color: 'bg-[#F3E5F5]',
      path: '/assets/asset-value-adjustment',
    },
    {
      id: 'sale-disposal',
      titleKey: 'assets.sale_disposal',
      descKey: 'assets.sale_disposal_desc',
      icon: DollarSign,
      color: 'bg-[#FCE4EC]',
      path: '/assets/sale-disposal',
    }
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <MaykanaCard
              key={card.id}
              onClick={() => navigate(card.path)}
              isActive={card.id === 'maintenance'}
              className="hover:shadow-lg transition-[transform,box-shadow] hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="flex flex-col p-6 h-[92px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#092e32] text-base">
                      {t(card.titleKey)}
                    </p>
                    <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#5f6c72] text-xs">
                      {t(card.descKey)}
                    </p>
                  </div>
                  <div className={`flex items-center justify-center w-[53px] h-[53px] rounded-full ${card.color}`}>
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
              </CardContent>
            </MaykanaCard>
          );
        })}
      </div>
    </Layout>
  );
};
