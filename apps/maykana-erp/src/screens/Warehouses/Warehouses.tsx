import { useNavigate, useLocation } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { getWarehouseCards } from '../../data';

export const Warehouses = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const featureCards = getWarehouseCards();

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
