import { motion } from 'framer-motion';
import { Building2, TrendingDown, Wrench, FileText, Calculator } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const AssetsSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const assetTypes = [
    { icon: '🏢', nameAr: 'مباني', nameEn: 'Buildings', value: '45%', color: '#3b82f6' },
    { icon: '🚗', nameAr: 'مركبات', nameEn: 'Vehicles', value: '20%', color: '#10b981' },
    { icon: '💻', nameAr: 'معدات', nameEn: 'Equipment', value: '25%', color: '#f59e0b' },
    { icon: '🪑', nameAr: 'أثاث', nameEn: 'Furniture', value: '10%', color: '#8b5cf6' },
  ];

  const depreciationMethods = [
    {
      nameAr: 'القسط الثابت',
      nameEn: 'Straight Line',
      descAr: 'قيمة ثابتة سنوياً',
      descEn: 'Fixed Annual Value',
      color: '#3b82f6',
      formula: isRTL ? '(التكلفة - الخردة) ÷ العمر' : '(Cost - Salvage) ÷ Life',
    },
    {
      nameAr: 'القسط المتناقص',
      nameEn: 'Declining Balance',
      descAr: 'نسبة من القيمة الدفترية',
      descEn: 'Percentage of Book Value',
      color: '#10b981',
      formula: isRTL ? 'القيمة الدفترية × النسبة' : 'Book Value × Rate',
    },
    {
      nameAr: 'وحدات الإنتاج',
      nameEn: 'Units of Production',
      descAr: 'حسب الاستخدام الفعلي',
      descEn: 'Based on Actual Use',
      color: '#f59e0b',
      formula: isRTL ? '(الوحدات المستخدمة ÷ الإجمالي) × التكلفة' : '(Units Used ÷ Total) × Cost',
    },
  ];

  const assetLifecycle = [
    { 
      icon: ShoppingCart, 
      nameAr: 'الشراء', 
      nameEn: 'Acquisition',
      descAr: 'تسجيل الأصل',
      descEn: 'Asset Registration',
      color: '#3b82f6' 
    },
    { 
      icon: Calculator, 
      nameAr: 'الإهلاك', 
      nameEn: 'Depreciation',
      descAr: 'احتساب آلي',
      descEn: 'Auto Calculate',
      color: '#10b981' 
    },
    { 
      icon: Wrench, 
      nameAr: 'الصيانة', 
      nameEn: 'Maintenance',
      descAr: 'تتبع وجدولة',
      descEn: 'Track & Schedule',
      color: '#f59e0b' 
    },
    { 
      icon: TrendingDown, 
      nameAr: 'التخلص', 
      nameEn: 'Disposal',
      descAr: 'بيع أو إتلاف',
      descEn: 'Sell or Scrap',
      color: '#ef4444' 
    },
  ];

  const features = [
    {
      titleAr: 'إدارة عهد الموظفين',
      titleEn: 'Employee Custody',
      items: [
        { ar: 'تسليم واستلام العهد', en: 'Custody Handover' },
        { ar: 'تتبع المسؤولية', en: 'Responsibility Tracking' },
        { ar: 'تقارير العهد', en: 'Custody Reports' },
      ],
      icon: Users,
      color: '#8b5cf6',
    },
    {
      titleAr: 'إدارة المنافسات',
      titleEn: 'Competition Management',
      items: [
        { ar: 'تعريف المناقصات', en: 'Tender Definition' },
        { ar: 'تقييم العروض', en: 'Bid Evaluation' },
        { ar: 'إدارة العقود', en: 'Contract Management' },
      ],
      icon: FileText,
      color: '#ec4899',
    },
  ];

  const stats = [
    { value: '5000+', labelAr: 'أصل', labelEn: 'Assets' },
    { value: '12M', labelAr: 'ريال', labelEn: 'SAR' },
    { value: '100%', labelAr: 'دقة', labelEn: 'Accuracy' },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex flex-col items-center justify-start py-24 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="asset-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#asset-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-3 mt-1">
            <Building2 className="w-12 h-12 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'إدارة الأصول' : 'Asset Management'}
            </h1>
          </div>
          <p className="text-xl text-purple-200">
            {isRTL ? 'تتبع ومحاسبة الأصول الثابتة' : 'Fixed Assets Tracking & Accounting'}
          </p>
        </motion.div>

        {/* Asset Types Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {isRTL ? 'توزيع الأصول' : 'Asset Distribution'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {assetTypes.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-3">{asset.icon}</div>
                <div className="text-white font-bold mb-1">
                  {isRTL ? asset.nameAr : asset.nameEn}
                </div>
                <div 
                  className="text-3xl font-bold"
                  style={{ color: asset.color }}
                >
                  {asset.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Depreciation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {depreciationMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all"
              style={{ boxShadow: `0 0 25px ${method.color}20` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: method.color }}
                />
                <h3 className="text-xl font-bold text-white">
                  {isRTL ? method.nameAr : method.nameEn}
                </h3>
              </div>
              <p className="text-white/80 text-sm mb-3">
                {isRTL ? method.descAr : method.descEn}
              </p>
              <div 
                className="bg-white/10 rounded-lg p-3 font-mono text-sm text-center"
                style={{ color: method.color }}
              >
                {method.formula}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Asset Lifecycle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {assetLifecycle.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 text-center hover:bg-white/15 transition-all"
                >
                  <div
                    className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${stage.color}30` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: stage.color }} />
                  </div>
                  <div className="text-white font-bold text-sm mb-1">
                    {isRTL ? stage.nameAr : stage.nameEn}
                  </div>
                  <div className="text-white/70 text-xs">
                    {isRTL ? stage.descAr : stage.descEn}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Features & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                  <h4 className="text-white font-bold text-sm">
                    {isRTL ? feature.titleAr : feature.titleEn}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80 text-xs">
                      <div className="w-1 h-1 rounded-full mt-1.5" style={{ backgroundColor: feature.color }} />
                      <span>{isRTL ? item.ar : item.en}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-md rounded-xl border border-white/20 p-5"
          >
            <div className="space-y-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-purple-200">{isRTL ? stat.labelAr : stat.labelEn}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ShoppingCart = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const Users = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
