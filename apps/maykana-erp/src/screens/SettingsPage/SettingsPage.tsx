import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { getSettingCards } from '../../data';

export const SettingsPage = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const moduleParam = searchParams.get('module') || 'accounting';
  const [selectedModule, setSelectedModule] = useState(moduleParam);

  useEffect(() => {
    setSelectedModule(moduleParam);
  }, [moduleParam]);

  const allSettingCards = getSettingCards();
  const settingCards = allSettingCards.filter(card => card.module === selectedModule);

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
            isActive={false}
            isClickable={true}
          />
        ))}
      </div>
    </Layout>
  );
};
