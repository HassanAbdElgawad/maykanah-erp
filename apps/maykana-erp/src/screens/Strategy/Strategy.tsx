import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { MaykanaCard } from '../../components/ui/MaykanaCard';
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
      bgColor: "#f5faf5",
      iconColor: "#388e3c",
      borderColor: "",
      path: "/strategy/strategic-plans",
    },
    {
      title: t("strategy.plan_tracking"),
      description: t("strategy.plan_tracking_desc"),
      icon: Target,
      bgColor: "#fffef5",
      iconColor: "#f9a825",
      borderColor: "",
      path: "/strategy/plan-tracking",
    },
    {
      title: t("strategy.project_management"),
      description: t("strategy.project_management_desc"),
      icon: FolderKanban,
      bgColor: "#f0faf9",
      iconColor: "#00897b",
      borderColor: "",
      path: "/strategy/projects",
    },
    {
      title: t("strategy.task_management"),
      description: t("strategy.task_management_desc"),
      icon: ListTodo,
      bgColor: "#f0f7ff",
      iconColor: "#1976d2",
      path: "/strategy/tasks",
    },
    {
      title: t("strategy.approvals"),
      description: t("strategy.approvals_desc"),
      icon: CheckCircle,
      bgColor: "#faf6fb",
      iconColor: "#7b1fa2",
      borderColor: "",
      path: "/strategy/approvals",
    },
    {
      title: t("strategy.document_records"),
      description: t("strategy.document_records_desc"),
      icon: FileText,
      bgColor: "#fff9f0",
      iconColor: "#f57c00",
      borderColor: "",
      path: "/strategy/documents",
    },
    {
      title: t("strategy.meeting_records"),
      description: t("strategy.meeting_records_desc"),
      icon: Calendar,
      bgColor: "#fef5f8",
      iconColor: "#c2185b",
      borderColor: "",
      path: "/strategy/meetings",
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
