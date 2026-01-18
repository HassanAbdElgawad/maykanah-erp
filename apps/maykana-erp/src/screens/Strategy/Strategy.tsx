import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { FeatureCard } from "../../components/ui/FeatureCard";
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
      iconColor: "#07b664",
      borderColor: "",
      path: "/strategy/strategic-plans",
    },
    {
      title: t("strategy.plan_tracking"),
      description: t("strategy.plan_tracking_desc"),
      icon: Target,
      bgColor: "bg-[#97c8091a]",
      iconColor: "#97c809",
      borderColor: "",
      path: "/strategy/plan-tracking",
    },
    {
      title: t("strategy.project_management"),
      description: t("strategy.project_management_desc"),
      icon: FolderKanban,
      bgColor: "bg-[#2f8fb21a]",
      iconColor: "#2f8fb2",
      borderColor: "",
      path: "/strategy/projects",
    },
    {
      title: t("strategy.task_management"),
      description: t("strategy.task_management_desc"),
      icon: ListTodo,
      bgColor: "bg-[#0b72211a]",
      iconColor: "#0b7221",
      path: "/strategy/tasks",
    },
    {
      title: t("strategy.approvals"),
      description: t("strategy.approvals_desc"),
      icon: CheckCircle,
      bgColor: "bg-[#0b42211a]",
      iconColor: "#0b4221",
      borderColor: "",
      path: "/strategy/approvals",
    },
    {
      title: t("strategy.document_records"),
      description: t("strategy.document_records_desc"),
      icon: FileText,
      bgColor: "bg-[#e2791a1a]",
      iconColor: "#e2791a",
      borderColor: "",
      path: "/strategy/documents",
    },
    {
      title: t("strategy.meeting_records"),
      description: t("strategy.meeting_records_desc"),
      icon: Calendar,
      bgColor: "bg-[#11383f1a]",
      iconColor: "#11383f",
      borderColor: "",
      path: "/strategy/meetings",
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
            icon={card.icon}
            bgColor={card.bgColor}
            iconColor={card.iconColor}
            onClick={() => card.path && navigate(card.path)}
            isActive={card.path === '/strategy/tasks'}
            isClickable={card.path === '/strategy/tasks'}
          />
        ))}
      </div>
    </Layout>
  );
};
