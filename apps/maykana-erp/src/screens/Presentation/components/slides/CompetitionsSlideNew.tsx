import { motion } from 'framer-motion';
import { Trophy, Users, CheckCircle, FileCheck, Send, Target, FileText } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const CompetitionsSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const competitionStages = [
    {
      icon: CheckCircle,
      titleAr: 'تأهيل الموردين',
      titleEn: 'Vendor Qualification',
      color: '#3b82f6',
    },
    {
      icon: Users,
      titleAr: 'تشكيل اللجان',
      titleEn: 'Committee Formation',
      color: '#10b981',
    },
    {
      icon: FileCheck,
      titleAr: 'معايير التقييم',
      titleEn: 'Evaluation Criteria',
      color: '#f59e0b',
    },
    {
      icon: Send,
      titleAr: 'إطلاق المنافسة',
      titleEn: 'Launch Competition',
      color: '#8b5cf6',
    },
    {
      icon: Target,
      titleAr: 'التقييم والترسية',
      titleEn: 'Evaluation & Award',
      color: '#ec4899',
    },
    {
      icon: FileText,
      titleAr: 'العقود',
      titleEn: 'Contracts',
      color: '#06b6d4',
    },
  ];

  const features = [
    {
      titleAr: 'شفافية كاملة',
      titleEn: 'Full Transparency',
      descAr: 'توثيق جميع مراحل المنافسة',
      descEn: 'Document all competition stages',
      icon: '🔍',
      color: '#3b82f6',
    },
    {
      titleAr: 'تقييم عادل',
      titleEn: 'Fair Evaluation',
      descAr: 'معايير واضحة ومحايدة',
      descEn: 'Clear and unbiased criteria',
      icon: '⚖️',
      color: '#10b981',
    },
    {
      titleAr: 'إشعارات آلية',
      titleEn: 'Auto Notifications',
      descAr: 'تنبيه للموردين والمعنيين',
      descEn: 'Alert vendors and stakeholders',
      icon: '🔔',
      color: '#f59e0b',
    },
    {
      titleAr: 'ضمانات بنكية',
      titleEn: 'Bank Guarantees',
      descAr: 'إدارة الضمانات بكفاءة',
      descEn: 'Efficient guarantee management',
      icon: '🏦',
      color: '#8b5cf6',
    },
  ];

  const stats = [
    { icon: '🏆', value: '200+', labelAr: 'منافسة/سنوياً', labelEn: 'Competitions/Year' },
    { icon: '👥', value: '500+', labelAr: 'مورد مؤهل', labelEn: 'Qualified Vendors' },
    { icon: '✓', value: '100%', labelAr: 'امتثال', labelEn: 'Compliance' },
    { icon: '⚡', value: '-50%', labelAr: 'وقت أقل', labelEn: 'Time Saved' },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex flex-col items-center justify-start py-24 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="competition-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white"/>
              <path d="M 30 0 L 30 60 M 0 30 L 60 30" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#competition-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <Trophy className="w-12 h-12 text-yellow-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'إدارة المنافسات' : 'Competitions Management'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'نظام متكامل لإدارة المنافسات والمناقصات' : 'Integrated Competitions & Tenders System'}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-emerald-200">{isRTL ? stat.labelAr : stat.labelEn}</div>
            </div>
          ))}
        </motion.div>

        {/* Competition Stages - Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isRTL ? 'مراحل المنافسة' : 'Competition Stages'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {competitionStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 hover:bg-white/15 transition-all relative"
                  style={{ boxShadow: `0 0 25px ${stage.color}15` }}
                >
                  {/* Step Number */}
                  <div
                    className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: stage.color }}
                  >
                    {index + 1}
                  </div>
                  
                  <div className="flex flex-col items-center text-center pt-8">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${stage.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: stage.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {isRTL ? stage.titleAr : stage.titleEn}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isRTL ? 'المميزات الرئيسية' : 'Key Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-5 hover:bg-white/15 transition-all"
                style={{ borderTop: `3px solid ${feature.color}` }}
              >
                <div className="text-5xl mb-3 text-center">{feature.icon}</div>
                <h4 className="text-lg font-bold text-white text-center mb-2">
                  {isRTL ? feature.titleAr : feature.titleEn}
                </h4>
                <p className="text-sm text-white/70 text-center">
                  {isRTL ? feature.descAr : feature.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
