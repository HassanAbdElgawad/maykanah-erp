import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, overviewSlide as overviewContent } from '../../translations';
import { 
  Target, 
  RefreshCw, 
  Languages, 
  Code2, 
  Layers,
  Globe2,
  Users,
  Zap
} from 'lucide-react';
import { 
  responsiveText, 
  responsiveContainer,
  responsiveGrid,
  cn 
} from '../../utils/responsive';

export const OverviewSlide = () => {
  const { language } = useLanguage();
  const t = getTranslation(overviewContent, language);
  const isRTL = language === 'ar';

  const icons = [Globe2, Target, RefreshCw, Languages, Code2, Layers];

  const stats = [
    { 
      value: '10+', 
      label: isRTL ? 'وحدات متكاملة' : 'Integrated Modules',
      icon: Layers 
    },
    { 
      value: '100%', 
      label: isRTL ? 'دعم اللغة العربية' : 'Arabic Support',
      icon: Languages 
    },
    { 
      value: '24/7', 
      label: isRTL ? 'عمل مستمر' : 'Continuous Operation',
      icon: Zap 
    },
    { 
      value: '∞', 
      label: isRTL ? 'إمكانيات التوسع' : 'Scalability',
      icon: Users 
    },
  ];

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex items-center justify-center pt-28 pb-12 px-4 md:px-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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
          className="text-center mb-8"
        >
          <h1 className={cn(
            responsiveText.h2,
            'text-white font-bold mb-3'
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

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 text-center hover:bg-white/15 hover:border-[#2cc28d]/50 transition-all"
              >
                <div className="flex justify-center mb-2">
                  <div className="bg-gradient-to-br from-[#2cc28d] to-[#1e7e34] rounded-lg p-2">
                    <StatIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-[#2cc28d] mb-1">{stat.value}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid */}
        <div className={cn(
          'grid',
          responsiveGrid.cols3,
          'gap-4 md:gap-6'
        )}>
          {t.bullets?.map((bullet, index) => {
            const Icon = icons[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.7 + (index * 0.15),
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
                  'bg-white/10 backdrop-blur-md rounded-xl border border-white/20',
                  'hover:bg-white/15 hover:border-[#2cc28d]/50',
                  'transition-all duration-300',
                  'p-4',
                  'h-full flex flex-col'
                )}>
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={cn(
                        'bg-gradient-to-br from-[#2cc28d] to-[#1e7e34]',
                        'rounded-lg p-2.5 flex-shrink-0',
                        'w-fit'
                      )}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Text */}
                    <p className={cn(
                      responsiveText.body,
                      'text-white leading-snug flex-1'
                    )}>
                      {bullet}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-auto pt-2">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="h-0.5 bg-[#2cc28d] rounded-full origin-left"
                    />
                  </div>
                </div>

                {/* Glowing effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-[#2cc28d]/0 group-hover:bg-[#2cc28d]/5 transition-all duration-300 -z-10 blur-xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
            <p className={cn(
              responsiveText.body,
              'text-[#2cc28d] font-semibold'
            )}>
              {isRTL ? '� مناسب للأسواق العالمية والإقليمية' : '🌍 Suitable for Global & Regional Markets'}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
