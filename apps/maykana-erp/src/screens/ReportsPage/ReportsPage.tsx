import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { getReportCards } from '../../data';
import { Button } from '../../components/ui/button';

export const ReportsPage = (): JSX.Element => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();

  // Get the selected module from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const selectedParam = urlParams.get('selected');
  
  // If selected=reports or no selection, default to accounting
  const defaultModule = selectedParam === 'reports' || !selectedParam ? 'accounting' : selectedParam;
  const [selectedModule, setSelectedModule] = useState(defaultModule);

  const allReportCards = getReportCards();
  const reportCards = allReportCards.filter(card => card.module === selectedModule);

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const handleModuleChange = (module: string) => {
    setSelectedModule(module);
    navigate(`/reports?selected=${module}`);
  };

  const modules = [
    { id: 'accounting', label: t('sidebar.accounting') },
    { id: 'purchases', label: t('sidebar.purchases') },
    { id: 'sales', label: t('sidebar.sales') },
    { id: 'warehouses', label: t('sidebar.warehouses') },
  ];

  return (
    <Layout>
      <div dir={dir} className="space-y-4">
        {/* Module Selector - Mobile Only */}
        <div className="md:hidden bg-white rounded-xl border border-[#e2e2e2] p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            {t('reports.select_module')}
          </h3>
          
          <select
            value={selectedModule}
            onChange={(e) => handleModuleChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm [font-family:'IBM_Plex_Sans_Arabic',Helvetica] focus:outline-none focus:ring-2 focus:ring-[#093738] focus:border-transparent"
          >
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.label}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons - Hidden completely */}
        <div className="hidden">
          <div className="hidden">
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

        {/* Report Cards */}
        <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
          {reportCards.map((card) => (
            <MaykanaCard
              key={card.id}
              title={t(card.titleKey)}
              description={t(card.descriptionKey)}
              icon={card.icon}
              bgColor={card.bgColor}
              iconColor={card.iconColor}
              onClick={() => handleCardClick(card.path)}
              isActive={true}
              isClickable={true}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
