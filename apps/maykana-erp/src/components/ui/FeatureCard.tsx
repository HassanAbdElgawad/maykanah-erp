import React from 'react';
import { MaykanaCard } from './MaykanaCard';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon | React.ElementType;
  bgColor: string;
  iconColor?: string;
  onClick?: () => void;
  isActive?: boolean;
  isClickable?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  bgColor,
  iconColor = '#093738',
  onClick,
  isActive = false,
  isClickable = true,
}) => {
  return (
    <MaykanaCard
      title={title}
      description={description}
      icon={icon}
      bgColor={bgColor}
      iconColor={iconColor}
      onClick={onClick}
      isActive={isActive}
      isClickable={isClickable}
    />
  );
};
