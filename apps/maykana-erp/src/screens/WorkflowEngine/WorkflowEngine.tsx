import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { FeatureCard } from "../../components/ui/FeatureCard";
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
      bgColor: "bg-[#07b6641a]",
      iconColor: "#07b664",
      path: "/workflow-engine/workflows",
    },
    {
      title: t("workflow_engine.verification_templates"),
      description: t("workflow_engine.verification_templates_desc"),
      icon: FileCheck2,
      bgColor: "bg-[#97c8091a]",
      iconColor: "#97c809",
      path: "/workflow-engine/verification-templates",
    },
    {
      title: t("workflow_engine.predefined_rules"),
      description: t("workflow_engine.predefined_rules_desc"),
      icon: Settings2,
      bgColor: "bg-[#e2791a1a]",
      iconColor: "#e2791a",
      path: "/workflow-engine/predefined-rules",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {featureCards.map((card, index) => (
          <FeatureCard
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
