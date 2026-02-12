/**
 * Presentation Translation Keys
 * Structure for supporting Arabic and English content
 */

export interface SlideContent {
  ar: {
    title: string;
    subtitle?: string;
    content: string[];
    bullets?: string[];
    footer?: string;
  };
  en: {
    title: string;
    subtitle?: string;
    content: string[];
    bullets?: string[];
    footer?: string;
  };
}

// Cover Slide Translations
export const coverSlide: SlideContent = {
  ar: {
    title: 'ميكنة',
    subtitle: 'نظام تخطيط موارد المؤسسات',
    content: [
      'حلول ذكية لرؤية 2030',
      'مواكبة التحول الرقمي في المملكة العربية السعودية',
    ],
    footer: 'داعم لرؤية المملكة 2030',
  },
  en: {
    title: 'Maykana',
    subtitle: 'Enterprise Resource Planning System',
    content: [
      'Smart Solutions for Vision 2030',
      'Embracing Digital Transformation in Saudi Arabia',
    ],
    footer: 'Supporting Saudi Vision 2030',
  },
};

// Password Protection Translations
export const passwordProtection = {
  ar: {
    title: 'العرض التقديمي محمي',
    subtitle: 'الرجاء إدخال كلمة المرور للمتابعة',
    passwordPlaceholder: 'كلمة المرور',
    submitButton: 'دخول',
    verifying: 'جاري التحقق...',
    errorMessage: 'كلمة المرور غير صحيحة',
    sessionInfo: 'الجلسة صالحة لمدة ساعة واحدة',
    footer: 'رؤية 2030',
  },
  en: {
    title: 'Protected Presentation',
    subtitle: 'Please enter password to continue',
    passwordPlaceholder: 'Password',
    submitButton: 'Enter',
    verifying: 'Verifying...',
    errorMessage: 'Incorrect password',
    sessionInfo: 'Session valid for one hour',
    footer: 'Vision 2030',
  },
};

// Navigation Translations
export const navigation = {
  ar: {
    previous: 'السابق',
    next: 'التالي',
    home: 'الرئيسية',
    close: 'إغلاق',
    fullscreen: 'ملء الشاشة',
    exitFullscreen: 'خروج من ملء الشاشة',
    language: 'اللغة',
    slideOf: 'من',
  },
  en: {
    previous: 'Previous',
    next: 'Next',
    home: 'Home',
    close: 'Close',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
    language: 'Language',
    slideOf: 'of',
  },
};

// Slide 2: Overview Slide
export const overviewSlide: SlideContent = {
  ar: {
    title: 'نظرة عامة',
    subtitle: '',
    content: [],
    bullets: [
      'نظام ERP سعودي مصمم خصيصاً للمملكة ودول الخليج',
      'مواكب لرؤية 2030 والتحول الرقمي الوطني',
      'تطوير مستمر ودائم لمواكبة احتياجات السوق',
      'واجهة عربية أصلية مع دعم كامل للغة العربية (RTL)',
      'معمارية Monorepo حديثة باستخدام أحدث التقنيات العالمية',
      'نظام شامل يغطي 10+ وحدات رئيسية متكاملة',
    ],
  },
  en: {
    title: 'System Overview',
    subtitle: '',
    content: [],
    bullets: [
      'Saudi ERP system designed for KSA and GCC countries',
      'Aligned with Vision 2030 and National Digital Transformation',
      'Continuous development to meet market needs',
      'Native Arabic interface with full RTL support',
      'Modern Monorepo architecture using latest technologies',
      'Comprehensive system covering 10+ integrated modules',
    ],
  },
};

// Slide 3: Goals & Benefits
export const goalsSlide: SlideContent = {
  ar: {
    title: 'الأهداف والفوائد',
    subtitle: '',
    content: [
      'الأهداف الاستراتيجية',
      'الفوائد الرئيسية',
    ],
    bullets: [
      'دعم رؤية المملكة 2030 في التحول الرقمي',
      'أتمتة جميع العمليات الإدارية والمالية',
      'تحسين الكفاءة التشغيلية وزيادة الإنتاجية',
      'توحيد البيانات في نظام واحد متكامل',
      'تقليل الأخطاء البشرية والامتثال للمعايير',
      'تسريع عملية اتخاذ القرار الاستراتيجي',
      'التطوير المستمر لمواكبة احتياجات السوق السعودي',
      'توفير الوقت والجهد',
      'تقليل التكاليف التشغيلية',
      'تحسين دقة البيانات',
      'تقارير فورية شاملة',
      'سهولة التدقيق والمراجعة',
      'الامتثال للمعايير المحاسبية',
    ],
  },
  en: {
    title: 'Goals & Benefits',
    subtitle: '',
    content: [
      'Strategic Goals',
      'Key Benefits',
    ],
    bullets: [
      'Support Saudi Vision 2030 digital transformation',
      'Automate all administrative and financial processes',
      'Improve operational efficiency and productivity',
      'Unify data in one integrated system',
      'Reduce human errors and ensure compliance',
      'Accelerate strategic decision-making',
      'Continuous development to meet Saudi market needs',
      'Save time and effort',
      'Reduce operational costs',
      'Improve data accuracy',
      'Comprehensive instant reports',
      'Easy auditing and review',
      'Compliance with accounting standards',
    ],
  },
};

// Slide 4: Technology Stack
export const techStackSlide: SlideContent = {
  ar: {
    title: 'التقنيات المستخدمة',
    subtitle: '',
    content: [
      'واجهة المستخدم',
      'البنية التحتية',
      'المميزات التقنية',
    ],
    bullets: [
      'React 18 - مكتبة بناء الواجهات',
      'TypeScript 5.8 - لغة البرمجة',
      'Vite - أداة التطوير السريعة',
      'Tailwind CSS - إطار التصميم',
      'Shadcn/ui - مكتبة المكونات',
      'Turborepo - نظام Monorepo',
      'pnpm - مدير الحزم',
      'Redux Toolkit - إدارة الحالة',
      'React Router v6 - التنقل',
      'IBM Plex Arabic - الخط العربي',
      'Monorepo - بنية قابلة للتوسع',
      'Lazy Loading - أداء عالي',
      'Responsive - متجاوب',
      'RTL Support - دعم العربية',
      'Reusable - مكونات قابلة لإعادة الاستخدام',
    ],
  },
  en: {
    title: 'Technology Stack',
    subtitle: '',
    content: [
      'Frontend',
      'Architecture',
      'Features',
    ],
    bullets: [
      'React 18 - UI library',
      'TypeScript 5.8 - Programming language',
      'Vite - Fast development tool',
      'Tailwind CSS - Design framework',
      'Shadcn/ui - Component library',
      'Turborepo - Monorepo system',
      'pnpm - Package manager',
      'Redux Toolkit - State management',
      'React Router v6 - Navigation',
      'IBM Plex Arabic - Arabic font',
      'Monorepo - Scalable architecture',
      'Lazy Loading - High performance',
      'Responsive - Adaptive design',
      'RTL Support - Arabic support',
      'Reusable - Reusable components',
    ],
  },
};

// Helper function to get translated content
export const getTranslation = (content: SlideContent, language: 'ar' | 'en') => {
  return content[language];
};

// Placeholder for remaining slides (to be filled)
export const slides: Record<number, SlideContent> = {
  1: coverSlide,
  2: overviewSlide,
  3: goalsSlide,
  4: techStackSlide,
  // Add more slides as they are developed
};
