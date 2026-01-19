import { useNavigate } from 'react-router-dom';
import { FileTextIcon, BarChart3Icon, TrendingUpIcon, ReceiptIcon, ActivityIcon } from 'lucide-react';
import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { FeatureCard } from '../../components/ui/FeatureCard';

interface ReportCard {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ElementType;
  path: string;
  bgColor: string;
  iconColor: string;
}

export const ReportsPage = (): JSX.Element => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const reportCards: ReportCard[] = [
    {
      id: 'general-ledger',
      titleKey: 'reports.general_ledger',
      descriptionKey: 'reports.general_ledger_desc',
      icon: FileTextIcon,
      path: '/reports/general-ledger',
      bgColor: '#6366F11a',
      iconColor: '#6366F1',
    },
    {
      id: 'financial-position',
      titleKey: 'reports.financial_position',
      descriptionKey: 'reports.financial_position_desc',
      icon: TrendingUpIcon,
      path: '/reports/financial-position',
      bgColor: '#EC48991a',
      iconColor: '#EC4899',
    },
    {
      id: 'trial-balance',
      titleKey: 'reports.trial_balance',
      descriptionKey: 'reports.trial_balance_desc',
      icon: BarChart3Icon,
      path: '/reports/trial-balance',
      bgColor: '#8B5CF61a',
      iconColor: '#8B5CF6',
    },
    {
      id: 'income-statement',
      titleKey: 'reports.income_statement',
      descriptionKey: 'reports.income_statement_desc',
      icon: ReceiptIcon,
      path: '/reports/income-statement',
      bgColor: '#14B8A61a',
      iconColor: '#14B8A6',
    },
    {
      id: 'trial-balance-movement',
      titleKey: 'reports.trial_balance_movement',
      descriptionKey: 'reports.trial_balance_movement_desc',
      icon: ActivityIcon,
      path: '/reports/trial-balance-movement',
      bgColor: '#F59E0B1a',
      iconColor: '#F59E0B',
    },
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {reportCards.map((card) => (
          <FeatureCard
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
