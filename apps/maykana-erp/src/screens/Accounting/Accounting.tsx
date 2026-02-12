import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { MaykanaCard } from '@/components/ui/MaykanaCard';
import { getAccountingCards } from '../../data';

export const Accounting = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const featureCards = getAccountingCards(t);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Main Features */}

        <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
          {featureCards.map((card, index) => (
            <MaykanaCard
              key={index}
              title={card.title}
              description={card.description}
              icon={() => <img className="w-6 h-6" alt={card.title} src={card.icon} />}
              bgColor={card.bgColor}
              onClick={() => card.path && navigate(card.path)}
              isActive={!!card.path}
              isClickable={!!card.path}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
