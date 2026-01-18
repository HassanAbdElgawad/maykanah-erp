import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { FeatureCard } from "../../components/ui/FeatureCard";
import {
  FileText,
  Award,
  Users,
  CheckCircle,
  Inbox,
  Send,
  Settings,
  Eye,
  Trophy,
  FileCheck,
  Handshake,
  DollarSign,
  FileSignature,
  Shield,
  Briefcase,
  Medal,
} from "lucide-react";

interface CompetitionCard {
  id: string;
  titleKey: string;
  descKey: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
  path: string;
}

export const Competitions: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const cards: CompetitionCard[] = [
    {
      id: "vendor-qualification",
      titleKey: "competitions.vendor_qualification",
      descKey: "competitions.vendor_qualification_desc",
      icon: CheckCircle,
      color: "bg-[#E8F5E9]",
      iconColor: "#388e3c",
      path: "/competitions/vendor-qualification",
    },
    {
      id: "vendor-notifications",
      titleKey: "competitions.vendor_notifications",
      descKey: "competitions.vendor_notifications_desc",
      icon: Send,
      color: "bg-[#FFF3E0]",
      iconColor: "#f57c00",
      path: "/competitions/vendor-notifications",
    },
    {
      id: "vendor-users",
      titleKey: "competitions.vendor_users",
      descKey: "competitions.vendor_users_desc",
      icon: Users,
      color: "bg-[#E3F2FD]",
      iconColor: "#1976d2",
      path: "/competitions/vendor-users",
    },
    {
      id: "vendor-certificates",
      titleKey: "competitions.vendor_certificates",
      descKey: "competitions.vendor_certificates_desc",
      icon: Award,
      color: "bg-[#F3E5F5]",
      iconColor: "#7b1fa2",
      path: "/competitions/vendor-certificates",
    },
    {
      id: "committee-formation",
      titleKey: "competitions.committee_formation",
      descKey: "competitions.committee_formation_desc",
      icon: Users,
      color: "bg-[#FCE4EC]",
      iconColor: "#c2185b",
      path: "/competitions/committee-formation",
    },
    {
      id: "competition-launch",
      titleKey: "competitions.competition_launch",
      descKey: "competitions.competition_launch_desc",
      icon: Send,
      color: "bg-[#FCE4EC]",
      iconColor: "#c2185b",
      path: "/competitions/competition-launch",
    },
    {
      id: "offers-inspection",
      titleKey: "competitions.offers_inspection",
      descKey: "competitions.offers_inspection_desc",
      icon: Eye,
      color: "bg-[#E0F2F1]",
      iconColor: "#00897b",
      path: "/competitions/offers-inspection",
    },
    {
      id: "receive-offers",
      titleKey: "competitions.receive_offers",
      descKey: "competitions.receive_offers_desc",
      icon: Inbox,
      color: "bg-[#FFF9C4]",
      iconColor: "#f9a825",
      path: "/competitions/receive-offers",
    },
    {
      id: "evaluation-criteria",
      titleKey: "competitions.evaluation_criteria",
      descKey: "competitions.evaluation_criteria_desc",
      icon: FileText,
      color: "bg-[#FFEBEE]",
      iconColor: "#d32f2f",
      path: "/competitions/evaluation-criteria",
    },
    {
      id: "award",
      titleKey: "competitions.award",
      descKey: "competitions.award_desc",
      icon: Trophy,
      color: "bg-[#FFF8E1]",
      iconColor: "#f9a825",
      path: "/competitions/award",
    },
    {
      id: "competition-definition",
      titleKey: "competitions.competition_definition",
      descKey: "competitions.competition_definition_desc",
      icon: Settings,
      color: "bg-[#E8EAF6]",
      iconColor: "#5e35b1",
      path: "/competitions/competition-definition",
    },
    {
      id: "commitment",
      titleKey: "competitions.commitment",
      descKey: "competitions.commitment_desc",
      icon: FileCheck,
      color: "bg-[#E0F7FA]",
      iconColor: "#0097a7",
      path: "/competitions/commitment",
    },
    {
      id: "agreements",
      titleKey: "competitions.agreements",
      descKey: "competitions.agreements_desc",
      icon: Handshake,
      color: "bg-[#F1F8E9]",
      iconColor: "#689f38",
      path: "/competitions/agreements",
    },
    {
      id: "contract",
      titleKey: "competitions.contract",
      descKey: "competitions.contract_desc",
      icon: FileSignature,
      color: "bg-[#FFF3E0]",
      iconColor: "#f57c00",
      path: "/competitions/contract",
    },
    {
      id: "financial-claim",
      titleKey: "competitions.financial_claim",
      descKey: "competitions.financial_claim_desc",
      icon: DollarSign,
      color: "bg-[#FCE4EC]",
      iconColor: "#c2185b",
      path: "/competitions/financial-claim",
    },
    {
      id: "work-order",
      titleKey: "competitions.work_order",
      descKey: "competitions.work_order_desc",
      icon: Briefcase,
      color: "bg-[#E8F5E9]",
      iconColor: "#388e3c",
      path: "/competitions/work-order",
    },
    {
      id: "completion-certificate",
      titleKey: "competitions.completion_certificate",
      descKey: "competitions.completion_certificate_desc",
      icon: Medal,
      color: "bg-[#E3F2FD]",
      iconColor: "#1976d2",
      path: "/competitions/completion-certificate",
    },
    {
      id: "bank-guarantees",
      titleKey: "competitions.bank_guarantees",
      descKey: "competitions.bank_guarantees_desc",
      icon: Shield,
      color: "bg-[#F3E5F5]",
      iconColor: "#7b1fa2",
      path: "/competitions/bank-guarantees",
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card) => (
          <FeatureCard
            key={card.id}
            title={t(card.titleKey)}
            description={t(card.descKey)}
            icon={card.icon}
            bgColor={card.color}
            iconColor={card.iconColor}
            onClick={() => navigate(card.path)}
            isActive={card.id === 'vendor-qualification'}
            isClickable={card.id === 'vendor-qualification'}
          />
        ))}
      </div>
    </Layout>
  );
};
