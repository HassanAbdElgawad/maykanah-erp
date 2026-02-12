import { motion } from 'framer-motion';
import { Target, TrendingUp, Award, Users, BarChart3, Zap } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const StrategySlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const perspectives = [
    {
      nameAr: 'المنظور المالي',
      nameEn: 'Financial Perspective',
      icon: TrendingUp,
      color: '#10b981',
      kpis: [
        { ar: 'نمو الإيرادات', en: 'Revenue Growth', value: '+25%' },
        { ar: 'العائد على الاستثمار', en: 'ROI', value: '18%' },
      ],
    },
    {
      nameAr: 'منظور العملاء',
      nameEn: 'Customer Perspective',
      icon: Users,
      color: '#3b82f6',
      kpis: [
        { ar: 'رضا العملاء', en: 'Customer Satisfaction', value: '92%' },
        { ar: 'معدل الاحتفاظ', en: 'Retention Rate', value: '88%' },
      ],
    },
    {
      nameAr: 'العمليات الداخلية',
      nameEn: 'Internal Processes',
      icon: BarChart3,
      color: '#f59e0b',
      kpis: [
        { ar: 'كفاءة العمليات', en: 'Process Efficiency', value: '85%' },
        { ar: 'وقت التنفيذ', en: 'Execution Time', value: '-30%' },
      ],
    },
    {
      nameAr: 'التعلم والنمو',
      nameEn: 'Learning & Growth',
      icon: Award,
      color: '#8b5cf6',
      kpis: [
        { ar: 'تطوير الموظفين', en: 'Employee Development', value: '95%' },
        { ar: 'الابتكار', en: 'Innovation', value: '+40%' },
      ],
    },
  ];

  const achievements = [
    { ar: 'مبادرة استراتيجية', en: 'Strategic Initiatives', value: '24+' },
    { ar: 'مؤشر أداء رئيسي', en: 'Key Performance Indicators', value: '150+' },
    { ar: 'معدل تحقيق الأهداف', en: 'Goal Achievement Rate', value: '89%' },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex flex-col items-center justify-start py-24 px-6"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Target className="w-10 h-10 text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'الإدارة الاستراتيجية' : 'Strategic Management'}
            </h1>
            <Target className="w-10 h-10 text-blue-400" />
          </div>
          <p className="text-xl text-blue-200">
            {isRTL ? 'بطاقة الأداء المتوازن (Balanced Scorecard)' : 'Balanced Scorecard (BSC)'}
          </p>
        </motion.div>

        {/* BSC Grid - 4 Perspectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {perspectives.map((perspective, index) => {
            const Icon = perspective.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group"
              >
                <div
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 h-full hover:bg-white/15 transition-all duration-300"
                  style={{ boxShadow: `0 0 30px ${perspective.color}20` }}
                >
                  {/* Perspective Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${perspective.color}30` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: perspective.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {isRTL ? perspective.nameAr : perspective.nameEn}
                    </h3>
                  </div>

                  {/* KPIs */}
                  <div className="space-y-3">
                    {perspective.kpis.map((kpi, kpiIndex) => (
                      <div key={kpiIndex} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                        <span className="text-white/90 text-sm">
                          {isRTL ? kpi.ar : kpi.en}
                        </span>
                        <span
                          className="text-xl font-bold px-3 py-1 rounded-lg"
                          style={{ backgroundColor: `${perspective.color}20`, color: perspective.color }}
                        >
                          {kpi.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="h-1 rounded-full mt-4 origin-left"
                    style={{ backgroundColor: perspective.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-xl border border-white/20 p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{achievement.value}</div>
              <div className="text-sm text-blue-200">{isRTL ? achievement.ar : achievement.en}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
