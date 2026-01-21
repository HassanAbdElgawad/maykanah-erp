import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { MaykanaCard } from '../../components/ui/MaykanaCard';

export const Accounting = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const featureCards = [
    {
      title: t('accounting.accounting_entries'),
      description: t('accounting.accounting_entries_desc'),
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-item.svg",
      bgColor: "#f5faf5",
      iconColor: "#388e3c",
      path: "/accounting/entries",
    },
    {
      title: t('accounting.cash_custody'),
      description: t('accounting.cash_custody_desc'),
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-money-recive.svg",
      bgColor: "#fffef5",
      iconColor: "#f9a825",
      path: "",
    },
    {
      title: t('accounting.receipt_documents'),
      description: t('accounting.receipt_documents_desc'),
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt.svg",
      bgColor: "#f0faf9",
      iconColor: "#00897b",
      path: "",
    },
    {
      title: t('accounting.payment_documents'),
      description: t('accounting.payment_documents_desc'),
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt-2.svg",
      bgColor: "#f0f7ff",
      iconColor: "#1976d2",
      path: "",
    },
  ];

  return (
    <Layout>
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
    </Layout>
  );
};
