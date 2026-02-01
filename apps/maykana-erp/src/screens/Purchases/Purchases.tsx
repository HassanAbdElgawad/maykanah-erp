import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { getPurchaseCards } from '../../data';

export const Purchases = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const cards = getPurchaseCards(t);

  return (
    <Layout>
      <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card) => (
          <MaykanaCard
            key={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
            onClick={() => navigate(card.path)}
            isActive={
              card.id === 'suppliers' ||
              card.id === 'purchase-requests' ||
              card.id === 'price-quote-requests' ||
              card.id === 'supplier-price-quotes'
            }
            isClickable={
              card.id === 'suppliers' ||
              card.id === 'purchase-requests' ||
              card.id === 'price-quote-requests' ||
              card.id === 'supplier-price-quotes'
            }
          />
        ))}
      </div>
    </Layout>
  );
};
