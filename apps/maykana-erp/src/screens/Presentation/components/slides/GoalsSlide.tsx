import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, goalsSlide as goalsContent } from '../../translations';
import {
  Target,
  Zap,
  TrendingUp,
  Database,
  CheckCircle,
  Rocket,
  RefreshCw,
  Clock,
  DollarSign,
  BarChart3,
  FileText,
  Shield,
  Award,
} from 'lucide-react';
import { responsiveText, responsiveContainer, cn } from '../../utils/responsive';

export const GoalsSlide = () => {
  const { language } = useLanguage();
  const t = getTranslation(goalsContent, language);
  const isRTL = language === 'ar';

  // First 7 items are goals, rest are benefits
  const goals = t.bullets?.slice(0, 7) || [];
  const benefits = t.bullets?.slice(7) || [];

  const goalsIcons = [Target, Zap, TrendingUp, Database, CheckCircle, Rocket, RefreshCw];
  const benefitsIcons = [Clock, DollarSign, BarChart3, FileText, Shield, Award];

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex items-center justify-center pt-28 pb-12 px-4 md:px-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
          <h1 className={cn(
            responsiveText.h2,
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

        {/* Two Columns: Goals and Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Goals Section */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Goals Header */}
            <div className={cn(
              'bg-gradient-to-r from-[#2cc28d] to-[#1e7e34]',
              'rounded-xl p-3 mb-4 text-center shadow-lg'
            )}>
              <div className="flex items-center justify-center gap-3">
                <Target className="w-6 h-6 text-white" />
                <h2 className={cn(
                  responsiveText.h4,
                  'text-white font-bold'
                )}>
                  {t.content[0]}
                </h2>
              </div>
            </div>

            {/* Goals List */}
            <div className="space-y-2">
              {goals.map((goal, index) => {
                const Icon = goalsIcons[index];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.6 + (index * 0.1),
                      type: 'spring'
                    }}
                    whileHover={{ scale: 1.02, x: isRTL ? -5 : 5 }}
                    className="group"
                  >
                    <div className={cn(
                      'bg-white/10 backdrop-blur-sm rounded-lg p-2',
                      'border border-white/20 hover:border-[#2cc28d]/50',
                      'transition-all duration-300 flex items-center gap-3'
                    )}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#2cc28d]/20 rounded-lg p-1.5 flex-shrink-0"
                      >
                        <Icon className="w-5 h-5 text-[#2cc28d]" />
                      </motion.div>
                      
                      <p className={cn(
                        responsiveText.body,
                        'text-white leading-tight flex-1'
                      )}>
                        {goal}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Benefits Header */}
            <div className={cn(
              'bg-gradient-to-r from-[#1e7e34] to-[#2cc28d]',
              'rounded-xl p-3 mb-4 text-center shadow-lg'
            )}>
              <div className="flex items-center justify-center gap-3">
                <Award className="w-6 h-6 text-white" />
                <h2 className={cn(
                  responsiveText.h4,
                  'text-white font-bold'
                )}>
                  {t.content[1]}
                </h2>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-2">
              {benefits.map((benefit, index) => {
                const Icon = benefitsIcons[index];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.7 + (index * 0.1),
                      type: 'spring'
                    }}
                    whileHover={{ scale: 1.02, x: isRTL ? 5 : -5 }}
                    className="group"
                  >
                    <div className={cn(
                      'bg-white/10 backdrop-blur-sm rounded-lg p-2',
                      'border border-white/20 hover:border-[#2cc28d]/50',
                      'transition-all duration-300 flex items-center gap-3'
                    )}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#2cc28d]/20 rounded-lg p-1.5 flex-shrink-0"
                      >
                        <Icon className="w-5 h-5 text-[#2cc28d]" />
                      </motion.div>
                      
                      <p className={cn(
                        responsiveText.body,
                        'text-white leading-tight flex-1'
                      )}>
                        {benefit}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, type: 'spring' }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-3xl">🇸🇦</span>
            <span className="text-white font-semibold">{isRTL ? 'رؤية 2030' : 'Vision 2030'}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
