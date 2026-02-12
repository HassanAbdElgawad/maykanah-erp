import { motion } from 'framer-motion';
import { Calculator, FileText, PieChart, TrendingUp, CheckCircle, Receipt } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const AccountingSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const financialStatements = [
    {
      nameAr: 'قائمة المركز المالي',
      nameEn: 'Balance Sheet',
      icon: FileText,
      color: '#10b981',
      items: [
        { ar: 'الأصول الثابتة والمتداولة', en: 'Fixed & Current Assets' },
        { ar: 'الخصوم والالتزامات', en: 'Liabilities & Obligations' },
        { ar: 'حقوق الملكية', en: 'Shareholders Equity' },
      ],
    },
    {
      nameAr: 'قائمة الدخل',
      nameEn: 'Income Statement',
      icon: TrendingUp,
      color: '#3b82f6',
      items: [
        { ar: 'الإيرادات التشغيلية', en: 'Operating Revenue' },
        { ar: 'التكاليف والمصروفات', en: 'Costs & Expenses' },
        { ar: 'صافي الربح/الخسارة', en: 'Net Profit/Loss' },
      ],
    },
    {
      nameAr: 'قائمة التدفقات النقدية',
      nameEn: 'Cash Flow Statement',
      icon: PieChart,
      color: '#f59e0b',
      items: [
        { ar: 'الأنشطة التشغيلية', en: 'Operating Activities' },
        { ar: 'الأنشطة الاستثمارية', en: 'Investing Activities' },
        { ar: 'الأنشطة التمويلية', en: 'Financing Activities' },
      ],
    },
  ];

  const accountingCycle = [
    { ar: 'إدخال القيود', en: 'Journal Entries', icon: '📝' },
    { ar: 'الترحيل', en: 'Posting', icon: '📊' },
    { ar: 'ميزان المراجعة', en: 'Trial Balance', icon: '⚖️' },
    { ar: 'التسويات', en: 'Adjustments', icon: '🔧' },
    { ar: 'القوائم المالية', en: 'Financial Statements', icon: '📈' },
    { ar: 'الإقفالات', en: 'Closing Entries', icon: '🔐' },
  ];

  const features = [
    {
      icon: Receipt,
      titleAr: 'إدارة الفواتير',
      titleEn: 'Invoice Management',
      valueAr: 'فاتورة إلكترونية',
      valueEn: 'E-Invoice',
      color: '#10b981',
    },
    {
      icon: CheckCircle,
      titleAr: 'توافق ضريبي',
      titleEn: 'Tax Compliance',
      valueAr: 'ضريبة القيمة المضافة',
      valueEn: 'VAT Ready',
      color: '#3b82f6',
    },
    {
      icon: Calculator,
      titleAr: 'إقرارات الزكاة',
      titleEn: 'Zakat Declaration',
      valueAr: 'آلي ومتوافق',
      valueEn: 'Automated',
      color: '#8b5cf6',
    },
  ];

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-gradient-to-br from-[#093738] via-[#0a4849] to-[#1e7e34] flex flex-col items-center justify-start py-24 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <Calculator className="w-12 h-12 text-emerald-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'الإدارة المالية' : 'Financial Management'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'نظام محاسبي متكامل متوافق مع المعايير السعودية' : 'Complete Accounting System Compliant with Saudi Standards'}
          </p>
        </motion.div>

        {/* Financial Statements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {financialStatements.map((statement, index) => {
            const Icon = statement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
                style={{ boxShadow: `0 0 30px ${statement.color}20` }}
              >
                <div
                  className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${statement.color}30` }}
                >
                  <Icon className="w-7 h-7" style={{ color: statement.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {isRTL ? statement.nameAr : statement.nameEn}
                </h3>
                <ul className="space-y-2">
                  {statement.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: statement.color }} />
                      <span>{isRTL ? item.ar : item.en}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Accounting Cycle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {isRTL ? 'الدورة المحاسبية' : 'Accounting Cycle'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {accountingCycle.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10 hover:bg-white/20 transition-all">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <div className="text-white text-xs font-medium">
                    {isRTL ? step.ar : step.en}
                  </div>
                </div>
                {index < accountingCycle.length - 1 && (
                  <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 z-20 ${isRTL ? '-left-0 translate-x-[-50%]' : '-right-0 translate-x-[50%]'}`}>
                    <div className="text-emerald-400">{isRTL ? '←' : '→'}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-xl border border-white/20 p-5 flex items-center gap-4 hover:scale-105 transition-transform"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feature.color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-1">
                    {isRTL ? feature.titleAr : feature.titleEn}
                  </div>
                  <div className="text-emerald-200 text-xs">
                    {isRTL ? feature.valueAr : feature.valueEn}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
