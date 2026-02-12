import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, techStackSlide as techContent } from '../../translations';
import { 
  Code2, 
  Layout, 
  Zap,
  Palette,
  Component,
  Box,
  Package,
  GitBranch,
  Route,
  Type,
  Layers,
  Gauge,
  Smartphone,
  Languages,
  Puzzle
} from 'lucide-react';
import { 
  responsiveText, 
  responsiveContainer,
  responsiveGrid,
  cn 
} from '../../utils/responsive';

export const TechStackSlide = () => {
  const { language } = useLanguage();
  const t = getTranslation(techContent, language);
  const isRTL = language === 'ar';

  // Divide bullets into 3 sections (5 items each)
  const frontend = t.bullets?.slice(0, 5) || [];
  const architecture = t.bullets?.slice(5, 10) || [];
  const features = t.bullets?.slice(10, 15) || [];

  const frontendIcons = [Code2, Layout, Zap, Palette, Component];
  const architectureIcons = [Box, Package, GitBranch, Route, Type];
  const featuresIcons = [Layers, Gauge, Smartphone, Languages, Puzzle];

  const sections = [
    {
      title: t.content[0],
      items: frontend,
      icons: frontendIcons,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: t.content[1],
      items: architecture,
      icons: architectureIcons,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: t.content[2],
      items: features,
      icons: featuresIcons,
      gradient: 'from-[#2cc28d] to-[#1e7e34]',
      bgGradient: 'from-[#2cc28d]/20 to-[#1e7e34]/20',
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
            <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <div className={cn(
        responsiveContainer.full,
        'relative z-10'
      )}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
            <Code2 className="w-10 h-10 text-[#2cc28d]" />
            <h1 className={cn(
              responsiveText.h2,
              'text-white font-bold'
            )}>
              {t.title}
            </h1>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-32 bg-[#2cc28d] mx-auto rounded-full"
          />
        </motion.div>

        {/* Three Sections Grid */}
        <div className={cn(
          'grid',
          responsiveGrid.cols3,
          'gap-4 md:gap-6'
        )}>
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 0.5 + (sectionIndex * 0.2),
                type: 'spring',
                stiffness: 100
              }}
              className="flex flex-col"
            >
              {/* Section Header */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={cn(
                  'bg-gradient-to-r',
                  section.gradient,
                  'rounded-xl p-3 mb-4 text-center shadow-lg'
                )}
              >
                <h2 className={cn(
                  responsiveText.h4,
                  'text-white font-bold'
                )}>
                  {section.title}
                </h2>
              </motion.div>

              {/* Section Items */}
              <div className="space-y-2 flex-1">
                {section.items.map((item, itemIndex) => {
                  const Icon = section.icons[itemIndex];
                  
                  // Split item into name and description
                  const [name, description] = item.split(' - ');
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.7 + (sectionIndex * 0.2) + (itemIndex * 0.1)
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="group"
                    >
                      <div className={cn(
                        'bg-white/10 backdrop-blur-sm rounded-lg p-2',
                        'border border-white/20 hover:border-white/40',
                        'transition-all duration-300 h-full'
                      )}>
                        <div className="flex items-start gap-2">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={cn(
                              'bg-gradient-to-br',
                              section.bgGradient,
                              'rounded-lg p-1.5 flex-shrink-0'
                            )}
                          >
                            <Icon className="w-4 h-4 text-white" />
                          </motion.div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <h3 className={cn(
                              'text-white font-semibold mb-1',
                              'text-sm'
                            )}>
                              {name}
                            </h3>
                            <p className={cn(
                              'text-white/70 text-xs',
                              'leading-tight'
                            )}>
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { label: isRTL ? 'حديث' : 'Modern', icon: '⚡' },
            { label: isRTL ? 'سريع' : 'Fast', icon: '🚀' },
            { label: isRTL ? 'آمن' : 'Secure', icon: '🔒' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 + (index * 0.1), type: 'spring' }}
              whileHover={{ scale: 1.1 }}
              className={cn(
                'bg-white/10 backdrop-blur-sm rounded-lg p-3',
                'border border-white/20 text-center'
              )}
            >
              <span className="text-2xl block mb-1">{stat.icon}</span>
              <span className="text-white font-semibold text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
