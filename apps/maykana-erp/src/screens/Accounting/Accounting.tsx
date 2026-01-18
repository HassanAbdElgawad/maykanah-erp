import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { FeatureCard } from "../../components/ui/FeatureCard";

export const Accounting = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const featureCards = [
    {
      title: t('accounting.accounting_entries'),
      description: t('accounting.accounting_entries_desc'),
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-item.svg",
      bgColor: "bg-[#07b6641a]",
      borderColor: "border-[#f0f4f7]",
      path: "/accounting/entries",
    },
    {
      title: t('accounting.cash_custody'),
      description: t('accounting.cash_custody_desc'),
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-money-recive.svg",
      bgColor: "bg-[#97c8091a]",
      borderColor: "",
      path: "",
    },
    {
      title: t('accounting.receipt_documents'),
      description: t('accounting.receipt_documents_desc'),
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt.svg",
      bgColor: "bg-[#0b72211a]",
      borderColor: "",
      path: "",
    },
    {
      title: t('accounting.payment_documents'),
      description: t('accounting.payment_documents_desc'),
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt-2.svg",
      bgColor: "bg-[#11383f1a]",
      borderColor: "",
      path: "",
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {featureCards.map((card, index) => (
          <FeatureCard
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
