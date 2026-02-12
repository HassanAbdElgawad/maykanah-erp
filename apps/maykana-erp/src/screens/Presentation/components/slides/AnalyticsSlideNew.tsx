import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart, Download, Calendar, Target, LineChart, Activity } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const AnalyticsSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const features = [
    {
      icon: BarChart3,
      titleAr: 'لوحة معلومات تنفيذية',
      titleEn: 'Executive Dashboard',
      descAr: 'عرض شامل لأهم المؤشرات والبيانات',
      descEn: 'Comprehensive view of key indicators',
      color: '#3b82f6',
      items: ['📊', '💰', '✓', '🔔'],
    },
    {
      icon: Target,
      titleAr: 'مؤشرات الأداء (KPIs)',
      titleEn: 'Key Performance Indicators',
      descAr: 'قياس الأداء المؤسسي بدقة',
      descEn: 'Accurate performance measurement',
      color: '#10b981',
      items: ['📈', '🎯', '⚡'],
    },
    {
      icon: TrendingUp,
      titleAr: 'تحليل الاتجاهات',
      titleEn: 'Trend Analysis',
      descAr: 'توقع الأنماط المستقبلية',
      descEn: 'Predict future patterns',
      color: '#f59e0b',
      items: ['📉', '📊', '●'],
    },
    {
      icon: PieChart,
      titleAr: 'تقارير مصورة',
      titleEn: 'Visual Reports',
      descAr: 'رسوم بيانية تفاعلية وجذابة',
      descEn: 'Interactive attractive charts',
      color: '#8b5cf6',
      items: ['📊', '📈', '🗺️'],
    },
    {
      icon: Download,
      titleAr: 'تصدير متعدد',
      titleEn: 'Multi-format Export',
      descAr: 'تصدير بصيغ PDF, Excel, CSV',
      descEn: 'Export to PDF, Excel, CSV',
      color: '#ec4899',
      items: ['PDF', 'XLS', 'CSV'],
    },
    {
      icon: Calendar,
      titleAr: 'تقارير مجدولة',
      titleEn: 'Scheduled Reports',
      descAr: 'إرسال تقارير دورية تلقائياً',
      descEn: 'Auto send periodic reports',
      color: '#06b6d4',
      items: ['📅', '📧', '⏰'],
    },
  ];

  const dashboardWidgets = [
    {
      titleAr: 'المبيعات',
      titleEn: 'Sales',
      value: '15.2M',
      trend: '+18%',
      color: '#10b981',
      icon: LineChart,
    },
    {
      titleAr: 'الإيرادات',
      titleEn: 'Revenue',
      value: '8.5M',
      trend: '+24%',
      color: '#3b82f6',
      icon: TrendingUp,
    },
    {
      titleAr: 'المهام',
      titleEn: 'Tasks',
      value: '142',
      trend: '-12%',
      color: '#f59e0b',
      icon: Activity,
    },
  ];

  const stats = [
    { icon: '📊', value: '100+', labelAr: 'تقرير جاهز', labelEn: 'Ready Reports' },
    { icon: '📈', value: '10+', labelAr: 'لوحة معلومات', labelEn: 'Dashboards' },
    { icon: '⚡', value: 'Real-time', labelAr: 'تحديث لحظي', labelEn: 'Live Updates' },
    { icon: '∞', value: '∞', labelAr: 'تقارير مخصصة', labelEn: 'Custom Reports' },
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
            <pattern id="analytics-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white"/>
              <path d="M 0 30 L 60 30" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <path d="M 30 0 L 30 60" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#analytics-pattern)" />
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
            <TrendingUp className="w-12 h-12 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'التحليلات والرؤى' : 'Analytics & Insights'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'قرارات ذكية مبنية على البيانات' : 'Smart Data-Driven Decisions'}
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

        {/* Dashboard Preview Widgets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isRTL ? 'لوحة المعلومات' : 'Dashboard Preview'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dashboardWidgets.map((widget, index) => {
              const Icon = widget.icon;
              const isPositive = widget.trend.startsWith('+');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all"
                  style={{ boxShadow: `0 0 30px ${widget.color}15` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">
                      {isRTL ? widget.titleAr : widget.titleEn}
                    </h3>
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${widget.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: widget.color }} />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{widget.value}</div>
                  <div className={`text-sm font-bold ${isPositive ? 'text-green-300' : 'text-red-300'}`}>
                    {widget.trend} {isRTL ? 'من الشهر السابق' : 'from last month'}
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
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isRTL ? 'المميزات التحليلية' : 'Analytics Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all"
                  style={{ boxShadow: `0 0 25px ${feature.color}15` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {isRTL ? feature.titleAr : feature.titleEn}
                      </h3>
                      <p className="text-sm text-white/70">
                        {isRTL ? feature.descAr : feature.descEn}
                      </p>
                    </div>
                  </div>
                  {/* Items */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {feature.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-bold"
                        style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
