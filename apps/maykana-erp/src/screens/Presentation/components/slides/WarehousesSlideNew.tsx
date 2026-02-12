import { motion } from 'framer-motion';
import { Package, ArrowDownToLine, ArrowUpFromLine, RefreshCw, TrendingUp, Layers } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const WarehousesSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const warehouseFlow = [
    {
      icon: ArrowDownToLine,
      titleAr: 'استلام',
      titleEn: 'Receiving',
      descAr: 'استلام المواد من الموردين',
      descEn: 'Receive materials from suppliers',
      color: '#3b82f6',
    },
    {
      icon: Package,
      titleAr: 'تخزين',
      titleEn: 'Storage',
      descAr: 'تخزين في المواقع المخصصة',
      descEn: 'Store in designated locations',
      color: '#10b981',
    },
    {
      icon: ArrowUpFromLine,
      titleAr: 'صرف',
      titleEn: 'Issue',
      descAr: 'صرف للطلبات والمشاريع',
      descEn: 'Issue to requests and projects',
      color: '#f59e0b',
    },
  ];

  const features = [
    {
      icon: RefreshCw,
      titleAr: 'حركات المخزون',
      titleEn: 'Stock Movements',
      descAr: 'تتبع لحظي لجميع الحركات',
      descEn: 'Real-time tracking of all movements',
      color: '#06b6d4',
    },
    {
      icon: Layers,
      titleAr: 'جرد المخزون',
      titleEn: 'Inventory Count',
      descAr: 'جرد دوري ومفاجئ',
      descEn: 'Periodic and spot counts',
      color: '#8b5cf6',
    },
    {
      icon: TrendingUp,
      titleAr: 'نقل المواد',
      titleEn: 'Material Transfers',
      descAr: 'نقل بين المستودعات',
      descEn: 'Transfer between warehouses',
      color: '#ec4899',
    },
  ];

  const valuationMethods = [
    {
      nameAr: 'FIFO',
      nameEn: 'First In First Out',
      descAr: 'الوارد أولاً يصرف أولاً',
      descEn: 'First In First Out',
      color: '#3b82f6',
    },
    {
      nameAr: 'LIFO',
      nameEn: 'Last In First Out',
      descAr: 'الوارد أخيراً يصرف أولاً',
      descEn: 'Last In First Out',
      color: '#10b981',
    },
    {
      nameAr: 'المتوسط',
      nameEn: 'Average Cost',
      descAr: 'متوسط التكلفة المرجح',
      descEn: 'Weighted Average Cost',
      color: '#f59e0b',
    },
  ];

  const stats = [
    { icon: '📦', value: '10K+', labelAr: 'صنف', labelEn: 'Items' },
    { icon: '🏢', value: '50+', labelAr: 'مستودع', labelEn: 'Warehouses' },
    { icon: '✓', value: '99.5%', labelAr: 'دقة', labelEn: 'Accuracy' },
    { icon: '⚡', value: '24/7', labelAr: 'تتبع', labelEn: 'Tracking' },
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
            <pattern id="warehouse-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="50" height="50" fill="none" stroke="white" strokeWidth="0.5"/>
              <circle cx="25" cy="25" r="2" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#warehouse-pattern)" />
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
            <Package className="w-12 h-12 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'إدارة المستودعات' : 'Warehouses Management'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'إدارة شاملة للمخزون وحركات المواد' : 'Comprehensive Inventory & Material Movements'}
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

        {/* Warehouse Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isRTL ? 'دورة حركة المواد' : 'Material Movement Cycle'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {warehouseFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="relative"
                >
                  <div
                    className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all"
                    style={{ boxShadow: `0 0 30px ${step.color}20` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: step.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">
                          {isRTL ? step.titleAr : step.titleEn}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/80">
                      {isRTL ? step.descAr : step.descEn}
                    </p>
                  </div>
                  {/* Arrow between steps */}
                  {index < warehouseFlow.length - 1 && (
                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 z-10 ${isRTL ? '-left-4' : '-right-4'}`}>
                      <div className="text-4xl text-emerald-300">{isRTL ? '←' : '→'}</div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Features & Valuation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {isRTL ? 'الميزات الرئيسية' : 'Key Features'}
            </h3>
            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 hover:bg-white/15 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: feature.color }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">
                          {isRTL ? feature.titleAr : feature.titleEn}
                        </h4>
                        <p className="text-sm text-white/70">
                          {isRTL ? feature.descAr : feature.descEn}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Valuation Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {isRTL ? 'طرق التقييم' : 'Valuation Methods'}
            </h3>
            <div className="space-y-3">
              {valuationMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-5 hover:bg-white/15 transition-all"
                  style={{ borderLeft: `4px solid ${method.color}` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">
                      {method.nameAr}
                    </h4>
                    <div
                      className="px-3 py-1 rounded-lg text-sm font-bold"
                      style={{ backgroundColor: `${method.color}20`, color: method.color }}
                    >
                      {method.nameEn}
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    {isRTL ? method.descAr : method.descEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
