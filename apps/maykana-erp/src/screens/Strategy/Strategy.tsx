import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { getStrategyCards } from '../../data';

export const Strategy = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const featureCards = getStrategyCards(t);

  return (
    <Layout>
      <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {featureCards.map((card, index) => (
          <MaykanaCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
            onClick={() => card.path && navigate(card.path)}
            isActive={card.path === '/strategy/tasks' || card.path === '/strategy/meetings' || card.path === '/strategy/documents' || card.path === '/strategy/plan-tracking' || card.path === '/strategy/strategic-plans'}
            isClickable={card.path === '/strategy/tasks' || card.path === '/strategy/meetings' || card.path === '/strategy/documents' || card.path === '/strategy/plan-tracking' || card.path === '/strategy/strategic-plans'}
          />
        ))}
      </div>
    </Layout>
  );
};
