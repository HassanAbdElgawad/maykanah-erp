import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useLanguage } from "../../contexts/LanguageContext";
import { MaykanaCard } from "../../components/ui/MaykanaCard";
import { getCompetitionCards } from "../../data";

export const Competitions: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const cards = getCompetitionCards();

  return (
    <Layout>
      <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card) => (
          <MaykanaCard
            key={card.id}
            title={t(card.titleKey)}
            description={t(card.descKey)}
            icon={card.icon}
            bgColor={card.color}
            iconColor={card.iconColor}
            onClick={() => navigate(card.path)}
            isActive={card.id === 'vendor-qualification' || card.id === 'vendor-users' || card.id === 'vendor-notifications' || card.id === 'committee-formation' || card.id === 'evaluation-criteria' || card.id === 'competition-launch' || card.id === 'competition-extension' || card.id === 'receive-offers' || card.id === 'open-offers' || card.id === 'offers-inspection' || card.id === 'award' || card.id === 'award-confirmation' || card.id === 'agreements' || card.id === 'work-order' || card.id === 'contract' || card.id === 'financial-claim' || card.id === 'completion-certificate' || card.id === 'bank-guarantees'}
            isClickable={card.id === 'vendor-qualification' || card.id === 'vendor-users' || card.id === 'vendor-notifications' || card.id === 'committee-formation' || card.id === 'evaluation-criteria' || card.id === 'competition-launch' || card.id === 'competition-extension' || card.id === 'receive-offers' || card.id === 'open-offers' || card.id === 'offers-inspection' || card.id === 'award' || card.id === 'award-confirmation' || card.id === 'agreements' || card.id === 'work-order' || card.id === 'contract' || card.id === 'financial-claim' || card.id === 'completion-certificate' || card.id === 'bank-guarantees'}
          />
        ))}
      </div>
    </Layout>
  );
};
