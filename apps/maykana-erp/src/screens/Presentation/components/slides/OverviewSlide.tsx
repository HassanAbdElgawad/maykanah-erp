import { motion } from 'framer-motion';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { getTranslation, overviewSlide as overviewContent } from '../../translations';
import { 
  Building2, 
  Target, 
  RefreshCw, 
  Languages, 
  Code2, 
  Layers 
} from 'lucide-react';
import { 
  responsiveText, 
  responsiveSpacing, 
  responsiveContainer,
  responsiveGrid,
  cn 
} from '../../utils/responsive';

export const OverviewSlide = () => {
  const { language } = useLanguage();
  const t = getTranslation(overviewContent, language);
  const isRTL = language === 'ar';

  const icons = [Building2, Target, RefreshCw, Languages, Code2, Layers];

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex items-center justify-center p-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="overview-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#overview-grid)" />
        </svg>
      </div>

      <div className={cn(
        responsiveContainer.wide,
        'relative z-10'
      )}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className={cn(
            responsiveText.h1,
            'text-white font-bold mb-4'
          )}>
            {t.title}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-32 bg-[#2cc28d] mx-auto rounded-full"
          />
        </motion.div>

        {/* Features Grid */}
        <div className={cn(
          'grid',
          responsiveGrid.cols3,
          responsiveSpacing.gap.md
        )}>
          {t.bullets?.map((bullet, index) => {
            const Icon = icons[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.5 + (index * 0.15),
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className={cn(
                  'bg-white/10 backdrop-blur-md rounded-2xl border border-white/20',
                  'hover:bg-white/15 hover:border-[#2cc28d]/50',
                  'transition-all duration-300',
                  responsiveSpacing.padding.md,
                  'h-full flex flex-col'
                )}>
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      'bg-gradient-to-br from-[#2cc28d] to-[#1e7e34]',
                      'rounded-xl p-3 mb-4',
                      'w-fit'
                    )}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Text */}
                  <p className={cn(
                    responsiveText.body,
                    'text-white leading-relaxed flex-1'
                  )}>
                    {bullet}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="h-0.5 bg-[#2cc28d] rounded-full mt-4 origin-left"
                  />
                </div>

                {/* Glowing effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#2cc28d]/0 group-hover:bg-[#2cc28d]/5 transition-all duration-300 -z-10 blur-xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className={cn(
            responsiveText.bodyLarge,
            'text-[#2cc28d] font-semibold'
          )}>
            {isRTL ? '🇸🇦 مصمم خصيصاً للسوق السعودي' : '🇸🇦 Designed for Saudi Market'}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
