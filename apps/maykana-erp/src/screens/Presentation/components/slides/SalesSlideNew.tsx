import { motion } from 'framer-motion';
import { ShoppingBag, Users, FileText, Receipt, Truck, DollarSign, TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const SalesSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const salesCycle = [
    {
      step: 1,
      icon: Users,
      titleAr: 'العميل',
      titleEn: 'Customer',
      descAr: 'إدارة قاعدة العملاء',
      descEn: 'Customer Database',
      color: '#3b82f6',
    },
    {
      step: 2,
      icon: FileText,
      titleAr: 'عرض السعر',
      titleEn: 'Quotation',
      descAr: 'إنشاء عروض احترافية',
      descEn: 'Professional Quotes',
      color: '#8b5cf6',
    },
    {
      step: 3,
      icon: ShoppingBag,
      titleAr: 'أمر البيع',
      titleEn: 'Sales Order',
      descAr: 'تأكيد الطلب',
      descEn: 'Order Confirmation',
      color: '#10b981',
    },
    {
      step: 4,
      icon: Truck,
      titleAr: 'التسليم',
      titleEn: 'Delivery',
      descAr: 'إذن تسليم',
      descEn: 'Delivery Note',
      color: '#f59e0b',
    },
    {
      step: 5,
      icon: Receipt,
      titleAr: 'الفاتورة',
      titleEn: 'Invoice',
      descAr: 'إصدار الفاتورة',
      descEn: 'Issue Invoice',
      color: '#ec4899',
    },
    {
      step: 6,
      icon: DollarSign,
      titleAr: 'التحصيل',
      titleEn: 'Payment',
      descAr: 'استلام الدفعات',
      descEn: 'Receive Payment',
      color: '#06b6d4',
    },
  ];

  const features = [
    {
      icon: Users,
      titleAr: 'إدارة العملاء',
      titleEn: 'Customer Management',
      items: [
        { ar: 'قاعدة بيانات شاملة', en: 'Comprehensive Database' },
        { ar: 'تاريخ التعاملات', en: 'Transaction History' },
        { ar: 'مستويات الأسعار', en: 'Price Levels' },
      ],
      color: '#3b82f6',
    },
    {
      icon: TrendingUp,
      titleAr: 'مندوبي المبيعات',
      titleEn: 'Sales Representatives',
      items: [
        { ar: 'متابعة الأداء', en: 'Performance Tracking' },
        { ar: 'حساب العمولات', en: 'Commission Calculation' },
        { ar: 'أهداف المبيعات', en: 'Sales Targets' },
      ],
      color: '#10b981',
    },
    {
      icon: Target,
      titleAr: 'قوائم الأسعار',
      titleEn: 'Price Lists',
      items: [
        { ar: 'أسعار متعددة', en: 'Multiple Price Lists' },
        { ar: 'عروض خاصة', en: 'Special Offers' },
        { ar: 'خصومات مرنة', en: 'Flexible Discounts' },
      ],
      color: '#f59e0b',
    },
  ];

  const stats = [
    { value: '1000+', labelAr: 'عميل', labelEn: 'Customers', icon: '👥' },
    { value: '5K+', labelAr: 'فاتورة شهرياً', labelEn: 'Invoices/Month', icon: '📄' },
    { value: '15M', labelAr: 'ريال مبيعات', labelEn: 'SAR Sales', icon: '💰' },
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
            <pattern id="sales-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="white" />
              <path d="M 0 25 L 50 25 M 25 0 L 25 50" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sales-pattern)" />
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
            <ShoppingBag className="w-12 h-12 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'إدارة المبيعات' : 'Sales Management'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'نظام متكامل لإدارة عمليات البيع والعملاء' : 'Integrated Sales & Customer Management System'}
          </p>
        </motion.div>

        {/* Sales Cycle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {isRTL ? 'دورة المبيعات' : 'Sales Cycle'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {salesCycle.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative"
                >
                  <div
                    className="bg-white/10 rounded-2xl border border-white/20 p-4 text-center hover:bg-white/15 transition-all"
                    style={{ boxShadow: `0 0 20px ${stage.color}15` }}
                  >
                    {/* Step Number */}
                    <div
                      className={`absolute -top-2 w-7 h-7 rounded-full flex items-center justify-center font-bold text-white text-xs ${isRTL ? '-left-2' : '-right-2'}`}
                      style={{ backgroundColor: stage.color }}
                    >
                      {stage.step}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${stage.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: stage.color }} />
                    </div>

                    {/* Title */}
                    <h4 className="text-white font-bold text-sm mb-1">
                      {isRTL ? stage.titleAr : stage.titleEn}
                    </h4>

                    {/* Description */}
                    <p className="text-white/70 text-xs">
                      {isRTL ? stage.descAr : stage.descEn}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {isRTL ? feature.titleAr : feature.titleEn}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: feature.color }} />
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
          transition={{ delay: 1.8 }}
          className="grid grid-cols-3 gap-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500/20 to-emerald-500/20 backdrop-blur-md rounded-xl border border-white/20 p-5 text-center hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-emerald-200">{isRTL ? stat.labelAr : stat.labelEn}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
