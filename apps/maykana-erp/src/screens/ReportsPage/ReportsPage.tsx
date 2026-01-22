import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { getReportCards } from '../../data';

export const ReportsPage = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedParam = searchParams.get('selected') || 'accounting';
  const [selectedModule, setSelectedModule] = useState(selectedParam);

  useEffect(() => {
    setSelectedModule(selectedParam);
  }, [selectedParam]);

  const allReportCards = getReportCards();
  const reportCards = allReportCards.filter(card => card.module === selectedModule);

  

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <Layout>
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
    </Layout>
  );
};
