import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { getSalesCards } from '../../data';

export const Sales = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const cards = getSalesCards(t);

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
            isActive={card.id === 'customers' || card.id === 'price-quotes' || card.id === 'work-orders' || card.id === 'sales-invoices' || card.id === 'delivery-notes' || card.id === 'price-lists' || card.id === 'sales-representatives'}
            isClickable={card.id === 'customers' || card.id === 'price-quotes' || card.id === 'work-orders' || card.id === 'sales-invoices' || card.id === 'delivery-notes' || card.id === 'price-lists' || card.id === 'sales-representatives'}
          />
        ))}
      </div>
    </Layout>
  );
};
