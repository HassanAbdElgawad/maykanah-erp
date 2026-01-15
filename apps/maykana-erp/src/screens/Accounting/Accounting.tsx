import { Card, CardContent } from "../../components/ui/card";
import { Layout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";

export const Accounting = (): JSX.Element => {
  const navigate = useNavigate();

  const featureCards = [
    {
      title: "القيود المحاسبية",
      description: "تسجيل العمليات المالية  في الدفاتر.",
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-receipt-item.svg",
      bgColor: "bg-[#07b6641a]",
      borderColor: "border-[#f0f4f7]",
      path: "/accounting/entries",
    },
    {
      title: "العهد النقدية",
      description: "المبالغ التي تصرف مؤقتا وتسوى لاحقا.",
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-linear-money-recive.svg",
      bgColor: "bg-[#97c8091a]",
      borderColor: "",
      path: "",
    },
    {
      title: "مستندات القبض",
      description: "توثيق المبالغ المالية الواردة .",
      icon: "https://c.animaapp.com/mkd2vucjeF4nNd/img/vuesax-outline-receipt.svg",
      bgColor: "bg-[#0b72211a]",
      borderColor: "",
      path: "",
    },
    {
      title: "مستندات الدفع",
      description: "توثيق المبالغ المالية الصادرة .",
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
          <Card
            key={index}
            onClick={() => card.path && navigate(card.path)}
            className="border-[#e2e2e2] hover:shadow-lg transition-[transform,box-shadow] hover:-translate-y-1 cursor-pointer"
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
          </Card>
        ))}
      </div>
    </Layout>
  );
};
