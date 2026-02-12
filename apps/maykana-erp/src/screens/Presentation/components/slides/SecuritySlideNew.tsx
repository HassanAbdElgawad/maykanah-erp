import { motion } from 'framer-motion';
import { Shield, Lock, Key, UserCheck, FileCheck, Database, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const SecuritySlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const securityFeatures = [
    {
      icon: Key,
      titleAr: 'نظام صلاحيات متعدد المستويات',
      titleEn: 'Multi-level Permissions',
      descAr: 'تحكم دقيق في صلاحيات المستخدمين',
      descEn: 'Precise control over user permissions',
      level: 'high',
      color: '#3b82f6',
    },
    {
      icon: Lock,
      titleAr: 'تسجيل دخول آمن',
      titleEn: 'Secure Login',
      descAr: 'مصادقة ثنائية وتشفير كلمات المرور',
      descEn: 'Two-factor authentication & password encryption',
      level: 'high',
      color: '#10b981',
    },
    {
      icon: UserCheck,
      titleAr: 'التحكم حسب الدور (RBAC)',
      titleEn: 'Role-Based Access Control',
      descAr: 'صلاحيات مرتبطة بالوظيفة والمسؤوليات',
      descEn: 'Permissions linked to roles',
      level: 'high',
      color: '#f59e0b',
    },
    {
      icon: FileCheck,
      titleAr: 'سجل كامل للإجراءات',
      titleEn: 'Complete Audit Trail',
      descAr: 'تسجيل كل عملية مع المستخدم والتوقيت',
      descEn: 'Log every operation with user & timestamp',
      level: 'medium',
      color: '#8b5cf6',
    },
    {
      icon: ShieldCheck,
      titleAr: 'تشفير البيانات',
      titleEn: 'Data Encryption',
      descAr: 'حماية البيانات الحساسة بالتشفير',
      descEn: 'Protect sensitive data with encryption',
      level: 'high',
      color: '#ec4899',
    },
    {
      icon: Database,
      titleAr: 'نسخ احتياطي تلقائي',
      titleEn: 'Automatic Backup',
      descAr: 'نسخ احتياطي دوري للبيانات',
      descEn: 'Periodic data backup',
      level: 'medium',
      color: '#06b6d4',
    },
    {
      icon: Shield,
      titleAr: 'حماية من الاختراق',
      titleEn: 'Security Protection',
      descAr: 'حماية متعددة الطبقات ضد التهديدات',
      descEn: 'Multi-layer protection against threats',
      level: 'high',
      color: '#ef4444',
    },
    {
      icon: Clock,
      titleAr: 'انتهاء الجلسة التلقائي',
      titleEn: 'Auto Session Timeout',
      descAr: 'إنهاء الجلسات غير النشطة تلقائياً',
      descEn: 'Automatically end inactive sessions',
      level: 'medium',
      color: '#64748b',
    },
  ];

  const securityLayers = [
    { nameAr: 'طبقة التطبيق', nameEn: 'Application Layer', icon: '🎯' },
    { nameAr: 'طبقة البيانات', nameEn: 'Data Layer', icon: '💾' },
    { nameAr: 'طبقة الشبكة', nameEn: 'Network Layer', icon: '🌐' },
    { nameAr: 'طبقة المستخدم', nameEn: 'User Layer', icon: '👤' },
  ];

  const stats = [
    { icon: '🔐', value: '256-bit', labelAr: 'تشفير', labelEn: 'Encryption' },
    { icon: '✓', value: '100%', labelAr: 'امتثال', labelEn: 'Compliance' },
    { icon: '📝', value: '∞', labelAr: 'سجل التدقيق', labelEn: 'Audit Log' },
    { icon: '🛡️', value: '24/7', labelAr: 'مراقبة', labelEn: 'Monitoring' },
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
            <pattern id="security-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="white"/>
              <rect x="0" y="0" width="50" height="50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#security-pattern)" />
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
            <Shield className="w-12 h-12 text-red-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'الأمان والصلاحيات' : 'Security & Permissions'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'حماية متعددة الطبقات لبياناتك' : 'Multi-layer Protection for Your Data'}
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

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isRTL ? 'المميزات الأمنية' : 'Security Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isHighLevel = feature.level === 'high';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl border-2 p-6 hover:bg-white/15 transition-all ${
                    isHighLevel ? 'border-red-400' : 'border-white/20'
                  }`}
                  style={{ boxShadow: `0 0 25px ${feature.color}15` }}
                >
                  {/* Security Level Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        isHighLevel 
                          ? 'bg-red-400/20 text-red-300' 
                          : 'bg-yellow-400/20 text-yellow-300'
                      }`}
                    >
                      {isHighLevel ? (isRTL ? 'عالي' : 'HIGH') : (isRTL ? 'متوسط' : 'MEDIUM')}
                    </div>
                  </div>

                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>

                  <h3 className="text-lg font-bold text-white text-center mb-2 min-h-[3.5rem]">
                    {isRTL ? feature.titleAr : feature.titleEn}
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    {isRTL ? feature.descAr : feature.descEn}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Security Layers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isRTL ? 'طبقات الحماية' : 'Security Layers'}
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="bg-white/5 rounded-xl p-5 text-center border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="text-5xl mb-3">{layer.icon}</div>
                  <h4 className="text-white font-bold">
                    {isRTL ? layer.nameAr : layer.nameEn}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
