import { motion } from 'framer-motion';
import { Rocket, CheckCircle, Clock, Sparkles, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const RoadmapSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const phases: Array<{
    status: string;
    icon: any;
    titleAr: string;
    titleEn: string;
    color: string;
    bgColor: string;
    items: Array<{ ar: string; en: string; progress?: number }>;
  }> = [
    {
      status: 'completed',
      icon: CheckCircle,
      titleAr: 'المرحلة الحالية',
      titleEn: 'Current Phase',
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      items: [
        { ar: 'البنية الأساسية والتصميم', en: 'Core Infrastructure & Design', progress: 100 },
        { ar: '10 وحدات رئيسية', en: '10 Core Modules', progress: 100 },
        { ar: 'واجهة عربية كاملة', en: 'Full Arabic Interface', progress: 100 },
        { ar: 'نظام الصلاحيات', en: 'Permissions System', progress: 100 },
      ],
    },
    {
      status: 'in-progress',
      icon: Clock,
      titleAr: 'المرحلة القادمة',
      titleEn: 'Next Phase',
      color: '#f59e0b',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      items: [
        { ar: 'التكامل مع الأنظمة الخارجية', en: 'External Systems Integration', progress: 60 },
        { ar: 'التقارير المتقدمة', en: 'Advanced Reporting', progress: 40 },
        { ar: 'تطبيق الهاتف المحمول', en: 'Mobile Application', progress: 20 },
        { ar: 'API للمطورين', en: 'Developer API', progress: 30 },
      ],
    },
    {
      status: 'planned',
      icon: Sparkles,
      titleAr: 'المستقبل',
      titleEn: 'Future',
      color: '#3b82f6',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      items: [
        { ar: 'الذكاء الاصطناعي', en: 'Artificial Intelligence' },
        { ar: 'التحليلات التنبؤية', en: 'Predictive Analytics' },
        { ar: 'Blockchain للأمان', en: 'Blockchain Security' },
        { ar: 'IoT Integration', en: 'IoT Integration' },
      ],
    },
  ];

  const achievements = [
    { icon: '🏆', value: '10+', labelAr: 'وحدات', labelEn: 'Modules' },
    { icon: '📊', value: '100+', labelAr: 'تقرير', labelEn: 'Reports' },
    { icon: '⚡', value: '99%', labelAr: 'جاهزية', labelEn: 'Ready' },
    { icon: '🎯', value: '2030', labelAr: 'رؤية', labelEn: 'Vision' },
  ];

  const contactInfo = [
    { icon: Mail, labelAr: 'البريد الإلكتروني', labelEn: 'Email', value: 'info@lamdax.com' },
    { icon: Phone, labelAr: 'الهاتف', labelEn: 'Phone', value: '+966 53 567 3953' },
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
            <pattern id="roadmap-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="white"/>
              <path d="M 0 25 L 50 25" stroke="white" strokeWidth="0.5" opacity="0.5"/>
              <path d="M 25 0 L 25 50" stroke="white" strokeWidth="0.5" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roadmap-pattern)" />
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
            <Rocket className="w-12 h-12 text-yellow-300" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'خارطة الطريق' : 'Roadmap'}
            </h1>
          </div>
          <p className="text-xl text-emerald-200">
            {isRTL ? 'رحلتنا نحو التميز والابتكار' : 'Our Journey Towards Excellence & Innovation'}
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 text-center"
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-sm text-emerald-200">{isRTL ? achievement.labelAr : achievement.labelEn}</div>
            </div>
          ))}
        </motion.div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all"
                style={{ boxShadow: `0 0 30px ${phase.color}20` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: phase.bgColor }}
                  >
                    <Icon className="w-7 h-7" style={{ color: phase.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {isRTL ? phase.titleAr : phase.titleEn}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex items-start gap-2 mb-2">
                        <div
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: phase.color }}
                        />
                        <span className="text-white/90 text-sm flex-1">
                          {isRTL ? item.ar : item.en}
                        </span>
                      </div>
                      {item.progress !== undefined && (
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.progress}%` }}
                            transition={{ delay: 0.6 + index * 0.2 + itemIndex * 0.1, duration: 0.8 }}
                            className="h-2 rounded-full"
                            style={{ backgroundColor: phase.color }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isRTL ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
          </h2>
          <p className="text-white/80 text-lg mb-6">
            {isRTL ? 'انضم إلينا في رحلة التحول الرقمي' : 'Join us in the digital transformation journey'}
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-4 flex items-center gap-3"
                >
                  <Icon className="w-6 h-6 text-emerald-300" />
                  <div className="text-left">
                    <div className="text-white/70 text-xs">
                      {isRTL ? contact.labelAr : contact.labelEn}
                    </div>
                    <div className="text-white font-bold" dir="ltr">{contact.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Thank You */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            {isRTL ? '✨ شكراً لكم ✨' : '✨ Thank You ✨'}
          </motion.div>
          <div className="text-emerald-200 mt-2">
            {isRTL ? '🇸🇦 داعم لرؤية المملكة 2030 🇸🇦' : '🇸🇦 Supporting Saudi Vision 2030 🇸🇦'}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
