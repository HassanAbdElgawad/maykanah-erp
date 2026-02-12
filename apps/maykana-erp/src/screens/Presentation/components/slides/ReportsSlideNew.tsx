import { motion } from 'framer-motion';
import { BarChart3, FileText, Download, Filter, Calendar, TrendingUp, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ReportsSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const reportCategories = [
    {
      icon: '🧮',
      titleAr: 'تقارير المحاسبة',
      titleEn: 'Accounting Reports',
      color: '#3b82f6',
      count: '25+',
      items: ['ميزان المراجعة', 'قائمة الدخل', 'المركز المالي', 'دفتر اليومية'],
    },
    {
      icon: '💼',
      titleAr: 'تقارير المبيعات',
      titleEn: 'Sales Reports',
      color: '#10b981',
      count: '15+',
      items: ['تحليل المبيعات', 'أداء المندوبين', 'العملاء النشطين', 'العمولات'],
    },
    {
      icon: '📦',
      titleAr: 'تقارير المخازن',
      titleEn: 'Inventory Reports',
      color: '#f59e0b',
      count: '20+',
      items: ['حالة المخزون', 'حركة المخزون', 'تقييم المخزون', 'نقاط الطلب'],
    },
    {
      icon: '👥',
      titleAr: 'تقارير الموارد البشرية',
      titleEn: 'HR Reports',
      color: '#ec4899',
      count: '18+',
      items: ['الحضور والانصراف', 'الرواتب', 'تقييم الأداء', 'الإجازات'],
    },
    {
      icon: '🛒',
      titleAr: 'تقارير المشتريات',
      titleEn: 'Purchases Reports',
      color: '#8b5cf6',
      count: '15+',
      items: ['تحليل المشتريات', 'مقارنة الموردين', 'أوامر الشراء', 'الفواتير'],
    },
    {
      icon: '🏢',
      titleAr: 'تقارير الأصول',
      titleEn: 'Assets Reports',
      color: '#06b6d4',
      count: '12+',
      items: ['حالة الأصول', 'الاستهلاك', 'الصيانة', 'العهد'],
    },
  ];

  const features = [
    {
      icon: Filter,
      titleAr: 'فلاتر متقدمة',
      titleEn: 'Advanced Filters',
      descAr: 'فلترة حسب التاريخ، القسم، الفرع',
      descEn: 'Filter by date, department, branch',
      color: '#3b82f6',
    },
    {
      icon: Download,
      titleAr: 'تصدير متعدد',
      titleEn: 'Multiple Export',
      descAr: 'PDF, Excel, CSV',
      descEn: 'PDF, Excel, CSV',
      color: '#10b981',
    },
    {
      icon: Calendar,
      titleAr: 'جدولة آلية',
      titleEn: 'Auto Schedule',
      descAr: 'إرسال تقارير دورية تلقائياً',
      descEn: 'Send periodic reports automatically',
      color: '#f59e0b',
    },
    {
      icon: Eye,
      titleAr: 'معاينة فورية',
      titleEn: 'Live Preview',
      descAr: 'مشاهدة التقرير قبل الطباعة',
      descEn: 'Preview before printing',
      color: '#ec4899',
    },
  ];

  const dashboards = [
    {
      titleAr: 'لوحة المدير التنفيذي',
      titleEn: 'Executive Dashboard',
      metrics: [
        { labelAr: 'الإيرادات', labelEn: 'Revenue', value: '12.5M', trend: '+15%' },
        { labelAr: 'المصروفات', labelEn: 'Expenses', value: '8.2M', trend: '-5%' },
        { labelAr: 'صافي الربح', labelEn: 'Net Profit', value: '4.3M', trend: '+22%' },
      ],
    },
  ];

  const stats = [
    { icon: FileText, value: '100+', labelAr: 'تقرير جاهز', labelEn: 'Ready Reports' },
    { icon: BarChart3, value: '10+', labelAr: 'لوحة معلومات', labelEn: 'Dashboards' },
    { icon: TrendingUp, value: '∞', labelAr: 'تقارير مخصصة', labelEn: 'Custom Reports' },
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
            <pattern id="reports-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4"/>
              <circle cx="20" cy="20" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reports-pattern)" />
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
            <BarChart3 className="w-12 h-12 text-emerald-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'نظام التقارير' : 'Reports System'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'تقارير شاملة ومتنوعة لجميع وحدات النظام' : 'Comprehensive Reports for All System Modules'}
          </p>
        </motion.div>

        {/* Report Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {reportCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-5 hover:bg-white/15 transition-all"
              style={{ boxShadow: `0 0 20px ${category.color}15` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {isRTL ? category.titleAr : category.titleEn}
                    </h3>
                    <div
                      className="text-xs font-bold px-2 py-0.5 rounded-full inline-block mt-1"
                      style={{ backgroundColor: `${category.color}30`, color: category.color }}
                    >
                      {category.count}
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-1.5">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: category.color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 text-center hover:bg-white/15 transition-all"
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">
                  {isRTL ? feature.titleAr : feature.titleEn}
                </h4>
                <p className="text-white/70 text-xs">
                  {isRTL ? feature.descAr : feature.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dashboard Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            {isRTL ? dashboards[0].titleAr : dashboards[0].titleEn}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dashboards[0].metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-4 text-center border border-white/10"
              >
                <div className="text-white/70 text-sm mb-2">
                  {isRTL ? metric.labelAr : metric.labelEn}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-emerald-400 text-sm font-bold">{metric.trend}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-md rounded-xl border border-white/20 p-5 text-center"
              >
                <Icon className="w-8 h-8 mx-auto mb-2 text-emerald-300" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-emerald-200">{isRTL ? stat.labelAr : stat.labelEn}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
