import { motion } from 'framer-motion';
import { Palette, Smartphone, Globe, Zap, Eye, Languages, Moon, Accessibility } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const UIUXSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const designFeatures = [
    {
      icon: Globe,
      titleAr: 'واجهة عربية أصلية 100%',
      titleEn: '100% Native Arabic Interface',
      descAr: 'مصممة من الأساس للمستخدم العربي',
      descEn: 'Designed from scratch for Arabic users',
      color: '#3b82f6',
      highlight: true,
    },
    {
      icon: ArrowsIcon,
      titleAr: 'دعم كامل RTL',
      titleEn: 'Full RTL Support',
      descAr: 'تخطيط من اليمين لليسار في كل عنصر',
      descEn: 'Right-to-left layout everywhere',
      color: '#10b981',
    },
    {
      icon: Smartphone,
      titleAr: 'تصميم متجاوب',
      titleEn: 'Responsive Design',
      descAr: 'يعمل على جميع الأجهزة والشاشات',
      descEn: 'Works on all devices',
      color: '#f59e0b',
    },
    {
      icon: Palette,
      titleAr: 'ألوان احترافية',
      titleEn: 'Professional Colors',
      descAr: 'نظام ألوان متناسق ومريح للعين',
      descEn: 'Consistent and eye-friendly colors',
      color: '#8b5cf6',
    },
    {
      icon: FontIcon,
      titleAr: 'خط IBM Plex Arabic',
      titleEn: 'IBM Plex Arabic Font',
      descAr: 'خط عربي احترافي وواضح',
      descEn: 'Professional clear Arabic font',
      color: '#ec4899',
    },
    {
      icon: Zap,
      titleAr: 'واجهة بديهية',
      titleEn: 'Intuitive Interface',
      descAr: 'سهلة الاستخدام بدون تدريب',
      descEn: 'Easy to use without training',
      color: '#06b6d4',
    },
    {
      icon: Accessibility,
      titleAr: 'إمكانية الوصول',
      titleEn: 'Accessibility',
      descAr: 'متوافق مع معايير الوصول',
      descEn: 'WCAG compliant',
      color: '#10b981',
    },
    {
      icon: Moon,
      titleAr: 'الوضع الليلي (قريباً)',
      titleEn: 'Dark Mode (Soon)',
      descAr: 'راحة للعين في الإضاءة المنخفضة',
      descEn: 'Comfort in low light',
      color: '#64748b',
    },
  ];

  const colorPalette = [
    { name: 'Primary', colorAr: 'الرئيسي', colorEn: 'Primary', hex: '#093738', textColor: 'white' },
    { name: 'Success', colorAr: 'النجاح', colorEn: 'Success', hex: '#2cc28d', textColor: 'white' },
    { name: 'Warning', colorAr: 'تحذير', colorEn: 'Warning', hex: '#f59e0b', textColor: 'white' },
    { name: 'Info', colorAr: 'معلومات', colorEn: 'Info', hex: '#3b82f6', textColor: 'white' },
  ];

  const principles = [
    {
      icon: Eye,
      titleAr: 'وضوح',
      titleEn: 'Clarity',
      descAr: 'معلومات واضحة ومباشرة',
      descEn: 'Clear and direct information',
    },
    {
      icon: Zap,
      titleAr: 'سرعة',
      titleEn: 'Speed',
      descAr: 'أداء سريع وسلس',
      descEn: 'Fast and smooth performance',
    },
    {
      icon: Languages,
      titleAr: 'لغة',
      titleEn: 'Language',
      descAr: 'دعم عربي كامل',
      descEn: 'Full Arabic support',
    },
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
            <pattern id="uiux-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white"/>
              <path d="M 0 30 Q 15 15, 30 30 T 60 30" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#uiux-pattern)" />
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
            <Palette className="w-12 h-12 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'التصميم وتجربة المستخدم' : 'UI/UX Design'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'واجهة احترافية مصممة خصيصاً للمستخدم العربي' : 'Professional Interface Designed for Arabic Users'}
          </p>
        </motion.div>

        {/* Design Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {designFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-white/10 backdrop-blur-md rounded-xl border ${
                  feature.highlight ? 'border-yellow-400/50 shadow-yellow-400/20' : 'border-white/20'
                } p-5 hover:bg-white/15 transition-all text-center`}
                style={{ boxShadow: feature.highlight ? '0 0 30px rgba(250, 204, 21, 0.2)' : `0 0 20px ${feature.color}15` }}
              >
                <div
                  className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}30` }}
                >
                  <Icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">
                  {isRTL ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  {isRTL ? feature.descAr : feature.descEn}
                </p>
                {feature.highlight && (
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-bold rounded-full">
                      ⭐ {isRTL ? 'مميز' : 'Featured'}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Color Palette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {isRTL ? 'لوحة الألوان' : 'Color Palette'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {colorPalette.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div
                  className="w-24 h-24 mx-auto mb-3 rounded-2xl shadow-lg flex items-center justify-center font-bold"
                  style={{ backgroundColor: color.hex, color: color.textColor }}
                >
                  {color.hex}
                </div>
                <div className="text-white font-bold text-sm">
                  {isRTL ? color.colorAr : color.colorEn}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-xl border border-white/20 p-6 text-center"
              >
                <Icon className="w-10 h-10 mx-auto mb-3 text-purple-300" />
                <h4 className="text-white font-bold text-lg mb-2">
                  {isRTL ? principle.titleAr : principle.titleEn}
                </h4>
                <p className="text-white/70 text-sm">
                  {isRTL ? principle.descAr : principle.descEn}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

// Custom Icons
const ArrowsIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 3 L3 9 L9 15"/>
    <path d="M15 21 L21 15 L15 9"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="21" y1="15" x2="3" y2="15"/>
  </svg>
);

const FontIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 20 L8 4 L12 4 L14 20"/>
    <line x1="7" y1="12" x2="13" y2="12"/>
    <path d="M15 20 L16.5 10 L19 10"/>
  </svg>
);
