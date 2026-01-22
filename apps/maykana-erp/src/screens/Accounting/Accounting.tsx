import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import { getAccountingCards, getReportCards } from '../../data';

export const Accounting = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const featureCards = getAccountingCards(t);
  const reportCards = getReportCards().filter(card => card.module === 'accounting');

  return (
    <Layout>
      <div className="space-y-8">
        {/* Main Features */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pr-2">\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a</h2>
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

        {/* Reports Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pr-2">\u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631 \u0627\u0644\u0645\u062d\u0627\u0633\u0628\u064a\u0629</h2>
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
            {reportCards.map((card) => (
              <MaykanaCard
                key={card.id}
                title={t(card.titleKey) || card.id}
                description={t(card.descriptionKey) || ''}
                icon={card.icon}
                bgColor={card.bgColor}
                iconColor={card.iconColor}
                onClick={() => navigate(card.path)}
                isActive={true}
                isClickable={true}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
