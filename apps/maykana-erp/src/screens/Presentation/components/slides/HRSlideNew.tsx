import { motion } from 'framer-motion';
import { Users, UserPlus, GraduationCap, TrendingUp, Award, LogOut, Clock, CreditCard } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const HRSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  // Employee Lifecycle
  const lifecycle = [
    {
      icon: UserPlus,
      titleAr: 'التوظيف',
      titleEn: 'Recruitment',
      descAr: 'استقطاب الكفاءات',
      descEn: 'Talent Acquisition',
      color: '#10b981',
    },
    {
      icon: GraduationCap,
      titleAr: 'الإعداد',
      titleEn: 'Onboarding',
      descAr: 'تهيئة الموظفين',
      descEn: 'Employee Integration',
      color: '#3b82f6',
    },
    {
      icon: TrendingUp,
      titleAr: 'التطوير',
      titleEn: 'Development',
      descAr: 'التدريب والنمو',
      descEn: 'Training & Growth',
      color: '#f59e0b',
    },
    {
      icon: Award,
      titleAr: 'التقييم',
      titleEn: 'Evaluation',
      descAr: 'قياس الأداء',
      descEn: 'Performance Review',
      color: '#8b5cf6',
    },
    {
      icon: CreditCard,
      titleAr: 'المكافآت',
      titleEn: 'Compensation',
      descAr: 'الرواتب والحوافز',
      descEn: 'Payroll & Benefits',
      color: '#ec4899',
    },
    {
      icon: LogOut,
      titleAr: 'الإنهاء',
      titleEn: 'Offboarding',
      descAr: 'إنهاء الخدمات',
      descEn: 'Exit Management',
      color: '#64748b',
    },
  ];

  const features = [
    {
      titleAr: 'نظام الرواتب (WPS)',
      titleEn: 'Payroll System (WPS)',
      items: [
        { ar: 'متوافق مع نظام الأجور المحمي', en: 'WPS Compliant' },
        { ar: 'احتساب الرواتب آلياً', en: 'Automated Payroll' },
        { ar: 'إدارة البدلات والاستقطاعات', en: 'Allowances & Deductions' },
      ],
      icon: CreditCard,
      color: '#10b981',
    },
    {
      titleAr: 'إدارة الحضور',
      titleEn: 'Attendance Management',
      items: [
        { ar: 'نظام حضور وانصراف ذكي', en: 'Smart Time & Attendance' },
        { ar: 'إدارة الإجازات والأذونات', en: 'Leave Management' },
        { ar: 'تتبع ساعات العمل الإضافي', en: 'Overtime Tracking' },
      ],
      icon: Clock,
      color: '#3b82f6',
    },
  ];

  const stats = [
    { value: '500+', labelAr: 'موظف', labelEn: 'Employees' },
    { value: '98%', labelAr: 'رضا الموظفين', labelEn: 'Satisfaction' },
    { value: '24/7', labelAr: 'خدمة ذاتية', labelEn: 'Self-Service' },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex flex-col items-center justify-start py-24 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="hr-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="2" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hr-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <Users className="w-12 h-12 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'الموارد البشرية' : 'Human Resources'}
            </h1>
          </div>
          <p className="text-xl text-pink-200">
            {isRTL ? 'رحلة الموظف من التوظيف إلى التقاعد' : 'Employee Journey from Hire to Retire'}
          </p>
        </motion.div>

        {/* Employee Lifecycle Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {lifecycle.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 text-center hover:bg-white/20 transition-all duration-300">
                    <div
                      className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${stage.color}30` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: stage.color }} />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">
                      {isRTL ? stage.titleAr : stage.titleEn}
                    </h3>
                    <p className="text-white/70 text-xs">
                      {isRTL ? stage.descAr : stage.descEn}
                    </p>
                  </div>
                  
                  {/* Arrow connector (except last) */}
                  {index < lifecycle.length - 1 && (
                    <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 z-20 ${isRTL ? '-left-2' : '-right-2'}`}>
                      <div className="text-2xl text-pink-300">{isRTL ? '←' : '→'}</div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${feature.color}30` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {isRTL ? feature.titleAr : feature.titleEn}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                      <span>{isRTL ? item.ar : item.en}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md rounded-xl border border-white/20 p-4 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-pink-200">{isRTL ? stat.labelAr : stat.labelEn}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
