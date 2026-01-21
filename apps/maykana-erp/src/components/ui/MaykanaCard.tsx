import * as React from 'react';
import { Card, CardContent } from './card';
import { cn } from '../../lib/utils';
import { useSidebar } from '../../contexts/SidebarContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { LucideIcon } from 'lucide-react';

interface MaykanaCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  isActive?: boolean;
  // Feature Card props (optional)
  title?: string;
  description?: string;
  icon?: LucideIcon | React.ElementType;
  bgColor?: string;
  iconColor?: string;
  isClickable?: boolean;
  // Container props
  children?: React.ReactNode;
}

export const MaykanaCard = React.forwardRef<HTMLDivElement, MaykanaCardProps>(
  ({ 
    className, 
    isActive = false, 
    title, 
    description, 
    icon: Icon, 
    bgColor, 
    iconColor = '#093738', 
    isClickable = true, 
    onClick, 
    children,
    ...props 
  }, ref) => {
    const { isSidebarOpen } = useSidebar();
    const { language } = useLanguage();

    // Feature Card mode
    return (
      <Card
        ref={ref}
        onClick={isClickable ? onClick : undefined}
        className={cn(
          'border-[#e2e2e2] bg-white hover:shadow-lg transition-[transform,box-shadow] hover:-translate-y-1',
          isSidebarOpen ? 'w-[320px]' : 'w-[300px]',
          isActive && 'border border-[#09373890]',
          isClickable && 'cursor-pointer',
          className
        )}
        {...props}
      >
        {children || (
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
              <div className={`flex items-center justify-center w-[53px] h-[53px] rounded-2xl flex-shrink-0`} style={{ backgroundColor: bgColor }}>
                {Icon && <Icon className="w-6 h-6 flex-shrink-0" style={{ color: iconColor }} />}
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    );
  }
);
MaykanaCard.displayName = 'MaykanaCard';
