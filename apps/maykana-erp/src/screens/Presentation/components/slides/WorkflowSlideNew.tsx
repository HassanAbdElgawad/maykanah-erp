import { motion } from 'framer-motion';
import { GitMerge, CheckCircle, Clock, Bell, Settings, Users, FileCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';

export const WorkflowSlideNew = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const approvalFlow = [
    {
      step: 1,
      titleAr: 'إنشاء الطلب',
      titleEn: 'Create Request',
      icon: FileCheck,
      color: '#3b82f6',
      statusAr: 'مسودة',
      statusEn: 'Draft',
    },
    {
      step: 2,
      titleAr: 'موافقة المدير',
      titleEn: 'Manager Approval',
      icon: Users,
      color: '#f59e0b',
      statusAr: 'قيد المراجعة',
      statusEn: 'Under Review',
    },
    {
      step: 3,
      titleAr: 'موافقة مالية',
      titleEn: 'Finance Approval',
      icon: CheckCircle,
      color: '#10b981',
      statusAr: 'معتمد جزئياً',
      statusEn: 'Partially Approved',
    },
    {
      step: 4,
      titleAr: 'اعتماد نهائي',
      titleEn: 'Final Approval',
      icon: CheckCircle,
      color: '#8b5cf6',
      statusAr: 'معتمد',
      statusEn: 'Approved',
    },
  ];

  const workflowFeatures = [
    {
      icon: GitMerge,
      titleAr: 'مسارات مرنة',
      titleEn: 'Flexible Workflows',
      descAr: 'تصميم مسارات عمل حسب احتياجاتك',
      descEn: 'Design custom approval flows',
      color: '#3b82f6',
      stats: [
        { labelAr: 'مسار عمل', labelEn: 'Workflows', value: '50+' },
        { labelAr: 'إجراء', labelEn: 'Actions', value: '200+' },
      ],
    },
    {
      icon: Bell,
      titleAr: 'تنبيهات ذكية',
      titleEn: 'Smart Notifications',
      descAr: 'إشعارات فورية لجميع الأطراف',
      descEn: 'Real-time alerts for stakeholders',
      color: '#f59e0b',
      stats: [
        { labelAr: 'بريد إلكتروني', labelEn: 'Email', value: '✓' },
        { labelAr: 'داخل النظام', labelEn: 'In-App', value: '✓' },
      ],
    },
    {
      icon: Clock,
      titleAr: 'جدولة آلية',
      titleEn: 'Auto Scheduling',
      descAr: 'مهل زمنية وتذكيرات تلقائية',
      descEn: 'Deadlines and auto reminders',
      color: '#10b981',
      stats: [
        { labelAr: 'مهلة زمنية', labelEn: 'SLA', value: '✓' },
        { labelAr: 'تصعيد تلقائي', labelEn: 'Escalation', value: '✓' },
      ],
    },
    {
      icon: Settings,
      titleAr: 'صلاحيات متقدمة',
      titleEn: 'Advanced Permissions',
      descAr: 'تحكم دقيق في الصلاحيات',
      descEn: 'Granular access control',
      color: '#8b5cf6',
      stats: [
        { labelAr: 'دور', labelEn: 'Roles', value: '100+' },
        { labelAr: 'صلاحية', labelEn: 'Permissions', value: '500+' },
      ],
    },
  ];

  const integrations = [
    { icon: '📧', nameAr: 'البريد الإلكتروني', nameEn: 'Email' },
    { icon: '📱', nameAr: 'الجوال', nameEn: 'Mobile' },
    { icon: '📊', nameAr: 'التقارير', nameEn: 'Reports' },
    { icon: '🔔', nameAr: 'الإشعارات', nameEn: 'Notifications' },
    { icon: '📁', nameAr: 'الأرشفة', nameEn: 'Archiving' },
    { icon: '🔗', nameAr: 'الربط', nameEn: 'Integration' },
  ];

  const stats = [
    { value: '50K+', labelAr: 'معاملة شهرياً', labelEn: 'Transactions/Month' },
    { value: '95%', labelAr: 'معدل الموافقة الآلية', labelEn: 'Auto-Approval Rate' },
    { value: '2hr', labelAr: 'متوسط وقت الموافقة', labelEn: 'Avg Approval Time' },
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
            <pattern id="workflow-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1.5" fill="white" />
              <line x1="15" y1="15" x2="30" y2="15" stroke="white" strokeWidth="0.5"/>
              <line x1="15" y1="15" x2="15" y2="30" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#workflow-grid)" />
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
            <GitMerge className="w-12 h-12 text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {isRTL ? 'محرك سير العمل' : 'Workflow Engine'}
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            {isRTL ? 'أتمتة ذكية للموافقات والإجراءات' : 'Smart Automation for Approvals & Processes'}
          </p>
        </motion.div>

        {/* Approval Flow Example */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {isRTL ? 'مثال: مسار موافقة طلب شراء' : 'Example: Purchase Request Approval Flow'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {approvalFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative"
                >
                  <div
                    className="bg-white/10 rounded-2xl border border-white/20 p-5 text-center hover:bg-white/15 transition-all"
                    style={{ boxShadow: `0 0 20px ${step.color}15` }}
                  >
                    {/* Step Number */}
                    <div
                      className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: step.color }} />
                    </div>

                    {/* Title */}
                    <h4 className="text-white font-bold mb-2">
                      {isRTL ? step.titleAr : step.titleEn}
                    </h4>

                    {/* Status Badge */}
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${step.color}30`, color: step.color }}
                    >
                      {isRTL ? step.statusAr : step.statusEn}
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < approvalFlow.length - 1 && (
                    <div className={`hidden md:flex absolute top-1/2 ${isRTL ? 'left' : 'right'}-0 transform ${isRTL ? 'translate-x-1/2' : '-translate-x-1/2'} -translate-y-1/2 z-20`}>
                      <ArrowRight className={`w-6 h-6 text-gray-400 ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Workflow Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {workflowFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 hover:bg-white/15 transition-all"
              >
                <div
                  className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h4 className="text-white font-bold mb-2">
                  {isRTL ? feature.titleAr : feature.titleEn}
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  {isRTL ? feature.descAr : feature.descEn}
                </p>
                <div className="space-y-2">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-white/80">{isRTL ? stat.labelAr : stat.labelEn}</span>
                      <span className="font-bold" style={{ color: feature.color }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integrations & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Integrations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6"
          >
            <h4 className="text-xl font-bold text-white mb-4 text-center">
              {isRTL ? 'التكامل مع الأنظمة' : 'System Integration'}
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 rounded-xl p-3 text-center border border-white/10 hover:bg-white/20 transition-all"
                >
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-white text-xs font-medium">
                    {isRTL ? integration.nameAr : integration.nameEn}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl border border-white/20 p-6"
          >
            <h4 className="text-xl font-bold text-white mb-6 text-center">
              {isRTL ? 'الإحصائيات' : 'Statistics'}
            </h4>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{isRTL ? stat.labelAr : stat.labelEn}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
