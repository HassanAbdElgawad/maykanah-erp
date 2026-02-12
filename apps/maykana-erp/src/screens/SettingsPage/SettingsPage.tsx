import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { MaykanaCard } from '@/components/ui/MaykanaCard';
import { getSettingCards } from '@/data';
import { Button } from '@/components/ui/button';

export const SettingsPage = (): JSX.Element => {
  const { t, dir } = useLanguage();
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

  const handleModuleChange = (module: string) => {
    setSelectedModule(module);
    navigate(`/settings?module=${module}`);
  };

  const modules = [
    { id: 'accounting', label: t('sidebar.accounting') },
    { id: 'purchases', label: t('sidebar.purchases') },
    { id: 'sales', label: t('sidebar.sales') },
    { id: 'assets', label: t('sidebar.assets') },
    { id: 'warehouses', label: t('sidebar.warehouses') },
    { id: 'workflow-engine', label: t('sidebar.workflow') },
  ];

  return (
    <Layout>
      <div dir={dir} className="space-y-4">
        {/* Module Selector - Visible only on mobile */}
        <div className="md:hidden bg-white rounded-xl border border-[#e2e2e2] p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            {t('settings.select_module')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {modules.map((module) => (
              <Button
                key={module.id}
                onClick={() => handleModuleChange(module.id)}
                variant={selectedModule === module.id ? 'default' : 'outline'}
                className={`text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] ${
                  selectedModule === module.id
                    ? 'bg-[#093738] hover:bg-[#0b4a4c] text-white'
                    : ''
                }`}
              >
                {module.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Setting Cards */}
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
      </div>
    </Layout>
  );
};
