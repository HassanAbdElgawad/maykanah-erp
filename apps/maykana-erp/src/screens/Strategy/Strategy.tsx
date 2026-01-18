import { CardContent } from "../../components/ui/card";
import { MaykanaCard } from "../../components/ui/MaykanaCard";
import { Layout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  TrendingUp,
  Target,
  FolderKanban,
  ListTodo,
  CheckCircle,
  FileText,
  Calendar,
} from "lucide-react";

export const Strategy = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const featureCards = [
    {
      title: t("strategy.strategic_plans"),
      description: t("strategy.strategic_plans_desc"),
      icon: TrendingUp,
      bgColor: "bg-[#07b6641a]",
      borderColor: "",
      path: "/strategy/strategic-plans",
    },
    {
      title: t("strategy.plan_tracking"),
      description: t("strategy.plan_tracking_desc"),
      icon: Target,
      bgColor: "bg-[#97c8091a]",
      borderColor: "",
      path: "/strategy/plan-tracking",
    },
    {
      title: t("strategy.project_management"),
      description: t("strategy.project_management_desc"),
      icon: FolderKanban,
      bgColor: "bg-[#2f8fb21a]",
      borderColor: "",
      path: "/strategy/projects",
    },
    {
      title: t("strategy.task_management"),
      description: t("strategy.task_management_desc"),
      icon: ListTodo,
      bgColor: "bg-[#0b72211a]",
      path: "/strategy/tasks",
    },
    {
      title: t("strategy.approvals"),
      description: t("strategy.approvals_desc"),
      icon: CheckCircle,
      bgColor: "bg-[#0b42211a]",
      borderColor: "",
      path: "/strategy/approvals",
    },
    {
      title: t("strategy.document_records"),
      description: t("strategy.document_records_desc"),
      icon: FileText,
      bgColor: "bg-[#e2791a1a]",
      borderColor: "",
      path: "/strategy/documents",
    },
    {
      title: t("strategy.meeting_records"),
      description: t("strategy.meeting_records_desc"),
      icon: Calendar,
      bgColor: "bg-[#11383f1a]",
      borderColor: "",
      path: "/strategy/meetings",
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {featureCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <MaykanaCard
              key={index}
              onClick={() => card.path && navigate(card.path)}
              isActive={card.path === '/strategy/tasks'}
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
                    className={`flex items-center justify-center w-[53px] h-[53px] rounded-full ${card.bgColor}`}
                  >
                    <IconComponent className="w-6 h-6 text-[#093738]" />
                  </div>
                </div>
              </CardContent>
            </MaykanaCard>
          );
        })}
      </div>
    </Layout>
  );
};
