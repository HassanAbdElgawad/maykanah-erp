import { motion } from 'framer-motion';
import { ShoppingCart, Package, Truck, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const SupplyChainSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const supplyChainFlow = [
    {
      icon: ShoppingCart,
      titleAr: 'طلب الشراء',
      titleEn: 'Purchase Request',
      descAr: 'إنشاء طلب من الأقسام',
      descEn: 'Department Request',
      color: '#3b82f6',
    },
    {
      icon: FileText,
      titleAr: 'عروض الأسعار',
      titleEn: 'Quotations',
      descAr: 'مقارنة الموردين',
      descEn: 'Vendor Comparison',
      color: '#8b5cf6',
    },
    {
      icon: CheckCircle,
      titleAr: 'أمر الشراء',
      titleEn: 'Purchase Order',
      descAr: 'اعتماد وإرسال',
      descEn: 'Approve & Send',
      color: '#10b981',
    },
    {
      icon: Truck,
      titleAr: 'الاستلام',
      titleEn: 'Receipt',
      descAr: 'استلام ومطابقة',
      descEn: 'Receive & Match',
      color: '#f59e0b',
    },
    {
      icon: Package,
      titleAr: 'التخزين',
      titleEn: 'Storage',
      descAr: 'إدخال المخزون',
      descEn: 'Add to Stock',
      color: '#ec4899',
    },
    {
      icon: Factory,
      titleAr: 'التوزيع',
      titleEn: 'Distribution',
      descAr: 'صرف للأقسام',
      descEn: 'Issue to Depts',
      color: '#06b6d4',
    },
  ];

  const modules = [
    {
      titleAr: 'إدارة المشتريات',
      titleEn: 'Procurement',
      features: [
        { ar: 'طلبات الشراء الإلكترونية', en: 'E-Purchase Requests' },
        { ar: 'إدارة عروض الأسعار', en: 'RFQ Management' },
        { ar: 'أوامر الشراء', en: 'Purchase Orders' },
        { ar: 'إدارة الموردين', en: 'Vendor Management' },
      ],
      color: '#3b82f6',
      icon: ShoppingCart,
    },
    {
      titleAr: 'إدارة المخزون',
      titleEn: 'Inventory',
      features: [
        { ar: 'تتبع المخزون الفوري', en: 'Real-time Tracking' },
        { ar: 'نقاط إعادة الطلب', en: 'Reorder Points' },
        { ar: 'الجرد الدوري والمفاجئ', en: 'Periodic & Cycle Count' },
        { ar: 'تقييم المخزون', en: 'Inventory Valuation' },
      ],
      color: '#10b981',
      icon: Package,
    },
  ];

  const stats = [
    { value: '10K+', labelAr: 'أصناف', labelEn: 'Items', icon: '📦' },
    { value: '50+', labelAr: 'مستودع', labelEn: 'Warehouses', icon: '🏪' },
    { value: '99%', labelAr: 'دقة المخزون', labelEn: 'Accuracy', icon: '🎯' },
    { value: '-30%', labelAr: 'تكاليف', labelEn: 'Cost Reduction', icon: '💰' },
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
            <pattern id="supply-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#supply-grid)" />
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
            <Truck className="w-12 h-12 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'سلاسل الإمداد' : 'Supply Chain'}
            </h1>
          </div>
          <p className="text-xl text-orange-200">
            {isRTL ? 'من الطلب إلى التسليم - إدارة متكاملة' : 'From Request to Delivery - Full Integration'}
          </p>
        </motion.div>

        {/* Supply Chain Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {isRTL ? 'دورة الشراء والتخزين' : 'Procurement & Storage Cycle'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {supplyChainFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="relative"
                  >
                    <div
                      className="bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all text-center"
                      style={{ boxShadow: `0 0 20px ${step.color}20` }}
                    >
                      <div
                        className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}30` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: step.color }} />
                      </div>
                      <div className="text-white font-bold text-sm mb-1">
                        {isRTL ? step.titleAr : step.titleEn}
                      </div>
                      <div className="text-white/70 text-xs">
                        {isRTL ? step.descAr : step.descEn}
                      </div>
                    </div>

                    {/* Arrow */}
                    {index < supplyChainFlow.length - 1 && (
                      <div className={`hidden lg:flex absolute top-1/2 ${isRTL ? 'left' : 'right'}-0 transform ${isRTL ? 'translate-x-1/2' : '-translate-x-1/2'} -translate-y-1/2 z-20`}>
                        <ArrowRight className={`w-6 h-6 text-orange-300 ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${module.color}30` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: module.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {isRTL ? module.titleAr : module.titleEn}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {module.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: module.color }} />
                      <span className="text-white/90 text-sm">{isRTL ? feature.ar : feature.en}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-md rounded-xl border border-white/20 p-5 text-center hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-orange-200">{isRTL ? stat.labelAr : stat.labelEn}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const FileText = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
