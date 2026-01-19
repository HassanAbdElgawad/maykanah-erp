import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MaykanaCard } from './MaykanaCard';
import { CardContent } from './card';
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
  icon: Icon,
  bgColor,
  iconColor = '#093738',
  onClick,
  isActive = false,
  isClickable = true,
}) => {
  const { language } = useLanguage();

  return (
    <MaykanaCard
      onClick={isClickable ? onClick : undefined}
      isActive={isActive}
      className={`hover:shadow-lg transition-[transform,box-shadow] hover:-translate-y-1 ${isClickable ? 'cursor-pointer' : ''}`}
    >
      <CardContent className="flex flex-col p-6 h-[92px]">
        <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[#092e32] text-[0.8rem] truncate">
              {title}
            </p>
            <p className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] text-[#5f6c72] text-xs line-clamp-2">
              {description}
            </p>
          </div>
          <div className={`flex items-center justify-center w-[53px] h-[53px] rounded-full flex-shrink-0`} style={{ backgroundColor: bgColor }}>
            <Icon className="w-6 h-6 flex-shrink-0" style={{ color: iconColor }} />
          </div>
        </div>
      </CardContent>
    </MaykanaCard>
  );
};
