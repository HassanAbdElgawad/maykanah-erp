import { CardContent } from "../../components/ui/card";
import { MaykanaCard } from "../../components/ui/MaykanaCard";
import { Layout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
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
      path: "/workflow-engine/workflows",
    },
    {
      title: t("workflow_engine.verification_templates"),
      description: t("workflow_engine.verification_templates_desc"),
      icon: FileCheck2,
      bgColor: "bg-[#97c8091a]",
      path: "/workflow-engine/verification-templates",
    },
    {
      title: t("workflow_engine.predefined_rules"),
      description: t("workflow_engine.predefined_rules_desc"),
      icon: Settings2,
      bgColor: "bg-[#e2791a1a]",
      path: "/workflow-engine/predefined-rules",
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
              isActive={card.path === '/workflow-engine/verification-templates'}
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
