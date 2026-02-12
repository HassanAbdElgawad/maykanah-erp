import { motion } from 'framer-motion';
import { Link2, Workflow, Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const IntegrationSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const integrationFlows = [
    {
      nameAr: 'المشتريات ← المخازن ← المحاسبة',
      nameEn: 'Purchases → Warehouses → Accounting',
      descAr: 'تسجيل تلقائي للمشتريات في المخازن والحسابات',
      descEn: 'Automatic registration of purchases in warehouses and accounts',
      modules: ['🛒', '📦', '🧮'],
      color: '#3b82f6',
    },
    {
      nameAr: 'المبيعات ← المخازن ← المحاسبة',
      nameEn: 'Sales → Warehouses → Accounting',
      descAr: 'صرف تلقائي من المخزون وتسجيل الإيرادات',
      descEn: 'Automatic stock issue and revenue recording',
      modules: ['💼', '📦', '🧮'],
      color: '#10b981',
    },
    {
      nameAr: 'الموارد البشرية ← المحاسبة',
      nameEn: 'HR → Accounting',
      descAr: 'تسجيل الرواتب والمصروفات تلقائياً',
      descEn: 'Automatic salary and expense recording',
      modules: ['👥', '🧮'],
      color: '#f59e0b',
    },
    {
      nameAr: 'الأصول ← المحاسبة',
      nameEn: 'Assets → Accounting',
      descAr: 'حساب الاستهلاك وتسجيل القيود',
      descEn: 'Depreciation calculation and entry recording',
      modules: ['🏢', '🧮'],
      color: '#8b5cf6',
    },
    {
      nameAr: 'المنافسات ← المشتريات ← العقود',
      nameEn: 'Competitions → Purchases → Contracts',
      descAr: 'من المنافسة إلى الطلب إلى العقد',
      descEn: 'From competition to order to contract',
      modules: ['🏆', '🛒', '📄'],
      color: '#ec4899',
    },
    {
      nameAr: 'جميع الوحدات ← محرك سير العمل',
      nameEn: 'All Modules ← Workflow Engine',
      descAr: 'نظام موحد للموافقات في كل الوحدات',
      descEn: 'Unified approval system across all modules',
      modules: ['⭐', '⚙️'],
      color: '#06b6d4',
      highlight: true,
    },
  ];

  const benefits = [
    {
      icon: Zap,
      titleAr: 'أتمتة كاملة',
      titleEn: 'Full Automation',
      descAr: 'لا حاجة لإدخال البيانات يدوياً',
      descEn: 'No manual data entry needed',
    },
    {
      icon: CheckCircle2,
      titleAr: 'دقة عالية',
      titleEn: 'High Accuracy',
      descAr: 'تقليل الأخطاء البشرية',
      descEn: 'Reduce human errors',
    },
    {
      icon: Workflow,
      titleAr: 'تدفق سلس',
      titleEn: 'Smooth Flow',
      descAr: 'انتقال تلقائي بين الوحدات',
      descEn: 'Automatic transition between modules',
    },
    {
      icon: Link2,
      titleAr: 'ترابط محكم',
      titleEn: 'Tight Integration',
      descAr: 'جميع الأنظمة متصلة ببعضها',
      descEn: 'All systems connected together',
    },
  ];

  const stats = [
    { icon: '🔗', value: '10+', labelAr: 'وحدات متكاملة', labelEn: 'Integrated Modules' },
    { icon: '⚡', value: '99%', labelAr: 'أتمتة', labelEn: 'Automation' },
    { icon: '✓', value: '0', labelAr: 'تدخل يدوي', labelEn: 'Manual Work' },
    { icon: '🚀', value: '-70%', labelAr: 'وقت أقل', labelEn: 'Time Saved' },
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
            <pattern id="integration-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white"/>
              <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#integration-pattern)" />
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
            <Link2 className="w-12 h-12 text-cyan-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'التكامل بين الأنظمة' : 'System Integration'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'التكامل الشامل بين جميع الوحدات' : 'Complete Integration Between All Modules'}
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

        {/* Integration Flows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isRTL ? 'مسارات التكامل' : 'Integration Flows'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {integrationFlows.map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className={`bg-white/10 backdrop-blur-md rounded-2xl border-2 p-6 hover:bg-white/15 transition-all ${
                  flow.highlight ? 'border-yellow-400' : 'border-white/20'
                }`}
                style={{ boxShadow: flow.highlight ? '0 0 40px rgba(234, 179, 8, 0.3)' : `0 0 25px ${flow.color}15` }}
              >
                {flow.highlight && (
                  <div className="absolute top-3 right-3 bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ {isRTL ? 'مميز' : 'Featured'}
                  </div>
                )}
                
                {/* Modules Flow */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  {flow.modules.map((module, idx) => (
                    <div key={idx} className="flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                        className="text-4xl"
                      >
                        {module}
                      </motion.div>
                      {idx < flow.modules.length - 1 && (
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.3 }}
                          className="mx-2 text-2xl"
                          style={{ color: flow.color }}
                        >
                          {isRTL ? '←' : '→'}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-white text-center mb-2">
                  {isRTL ? flow.nameAr : flow.nameEn}
                </h3>
                <p className="text-sm text-white/80 text-center">
                  {isRTL ? flow.descAr : flow.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isRTL ? 'فوائد التكامل' : 'Integration Benefits'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-5 hover:bg-white/15 transition-all text-center"
                >
                  <Icon className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">
                    {isRTL ? benefit.titleAr : benefit.titleEn}
                  </h4>
                  <p className="text-sm text-white/70">
                    {isRTL ? benefit.descAr : benefit.descEn}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
