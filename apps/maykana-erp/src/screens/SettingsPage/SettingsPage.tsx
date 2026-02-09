import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { getSettingCards } from '../../data';

export const SettingsPage = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const moduleParam = searchParams.get('module') || 'accounting';
  const [selectedModule, setSelectedModule] = useState(moduleParam);

  // Completed cards list - cards that are finished
  const completedCards = [
    'company',
    'chart-of-accounts',
    'account-settings',
    'currencies',
    'tax-settings',
    'fiscal-year',
    'accounting-periods',
    'payment-methods',
    'terms-conditions',
    'cost-centers',
    'budget',
    'sales-settings',
    'terms-template',
    'purchase-settings',
    'purchase-tax-template',
    'terms-conditions-template',
    'asset-categories',
    'asset-locations',
    'maintenance-team',
    'general-warehouses-settings',
    'unit-of-measures',
    'item-groups',
    'warehouse-management',
    'department-management',
    'user-management',
    'branches-locations',
  ];

  useEffect(() => {
    setSelectedModule(moduleParam);
  }, [moduleParam]);

  const allSettingCards = getSettingCards();
  const settingCards = allSettingCards.filter((card) => card.module === selectedModule);

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <Layout>
      <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {settingCards.map((card) => (
          <MaykanaCard
            key={card.id}
            title={t(card.titleKey)}
            description={t(card.descriptionKey)}
            icon={card.icon}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
            onClick={() => handleCardClick(card.path)}
            isActive={location.pathname === card.path || completedCards.includes(card.id)}
            isClickable={true}
          />
        ))}
      </div>
    </Layout>
  );
};
