import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { MaykanaCard } from '../../components/ui/MaykanaCard';
import {
  Workflow,
  FileCheck2,
  Settings2,
} from "lucide-react";

export const WorkflowEngine = (): JSX.Element => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const featureCards = [
    {
      title: t("workflow_engine.workflows"),
      description: t("workflow_engine.workflows_desc"),
      icon: Workflow,
      bgColor: "#f5faf5",
      iconColor: "#388e3c",
      path: "/workflow-engine/workflows",
    },
    {
      title: t("workflow_engine.verification_templates"),
      description: t("workflow_engine.verification_templates_desc"),
      icon: FileCheck2,
      bgColor: "#fffef5",
      iconColor: "#f9a825",
      path: "/workflow-engine/verification-templates",
    },
    // {
    //   title: t("workflow_engine.predefined_rules"),
    //   description: t("workflow_engine.predefined_rules_desc"),
    //   icon: Settings2,
    //   bgColor: "#fff9f0",
    //   iconColor: "#f57c00",
    //   path: "/workflow-engine/predefined-rules",
    // },
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
            isActive={card.path === '/workflow-engine/verification-templates' || card.path === '/workflow-engine/workflows'}
            isClickable={card.path === '/workflow-engine/verification-templates' || card.path === '/workflow-engine/workflows'}
          />
        ))}
      </div>
    </Layout>
  );
};
