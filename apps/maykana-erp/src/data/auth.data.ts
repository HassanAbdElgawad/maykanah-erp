// Authentication Pages Data (Login, ForgotPassword, etc.)

export interface ContentSlide {
  title: string;
  description: string;
  lines: number[];
}

/**
 * Get content slides for authentication pages
 * @param language Current language ('ar' | 'en')
 */
export const getAuthContentSlides = (language: string): ContentSlide[] => [
  {
    title: language === 'ar' ? 'أتمتة ذكية لإدارة أسهل' : 'Smart Automation',
    description:
      language === 'ar'
        ? 'مع ميكنة، تدير حساباتك وتقاريرك بخطوات بسيطة وسريعة، وتبقى دائمًا على اطلاع بما يهمك.'
        : 'Manage your accounts and reports with simple steps, stay always informed.',
    lines: [30, 30, 100],
  },
  {
    title: language === 'ar' ? 'تقارير دقيقة ومفصلة' : 'Detailed Reports',
    description:
      language === 'ar'
        ? 'احصل على تقارير شاملة ودقيقة تساعدك في اتخاذ القرارات الصحيحة لتطوير عملك.'
        : 'Get comprehensive reports to help you make the right decisions for your business.',
    lines: [40, 100, 40],
  },
  {
    title: language === 'ar' ? 'أمان وحماية كاملة' : 'Complete Security',
    description:
      language === 'ar'
        ? 'نحمي بياناتك بأعلى معايير الأمان والخصوصية، مع نسخ احتياطي تلقائي.'
        : 'We protect your data with the highest security standards and automatic backup.',
    lines: [100, 40, 40],
  },
];
