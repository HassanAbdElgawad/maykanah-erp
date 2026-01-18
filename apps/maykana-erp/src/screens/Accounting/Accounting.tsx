import { CardContent } from "../../components/ui/card";
import { MaykanaCard } from "../../components/ui/MaykanaCard";
import { Layout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

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
          <MaykanaCard
            key={index}
            onClick={() => card.path && navigate(card.path)}
            isActive={!!card.path}
            className="hover:shadow-lg transition-[transform,box-shadow] hover:-translate-y-1 cursor-pointer"
          >
            <CardContent className="flex flex-col p-6 h-[92px]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#092e32] text-base">
                    {card.title}
                  </p>
                  <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#5f6c72] text-xs">
                    {card.description}
                  </p>
                </div>
                <div
                  className={`flex items-center justify-center w-[53px] h-[53px] rounded-full ${
                    card.bgColor
                  } ${card.borderColor}`}
                >
                  <img className="w-6 h-6" alt={card.title} src={card.icon} />
                </div>
              </div>
            </CardContent>
          </MaykanaCard>
        ))}
      </div>
    </Layout>
  );
};
