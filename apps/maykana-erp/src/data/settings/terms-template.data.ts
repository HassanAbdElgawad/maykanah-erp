// Terms Template data for Settings module

export interface TermTemplate {
  id: string;
  templateName: string;
  description: string;
  content: string;
  appliedTo: string;
  isActive: boolean;
}

const templatesData: TermTemplate[] = [
  { id: '1', templateName: 'شرط للمبيعات', description: 'تفاصيل شروط المبيعات هنا', content: 'نوع المستند هنا', appliedTo: 'مطبقة علي', isActive: true },
  { id: '2', templateName: 'شرط للمشتريات', description: 'تفاصيل شروط المشتريات هنا', content: 'نوع المستند هنا', appliedTo: 'مطبقة علي', isActive: true },
  { id: '3', templateName: 'شرط لقرارات الشراء', description: 'تفاصيل شروط القرارات الشرائية هنا', content: 'نوع المستند هنا د', appliedTo: 'مطبقة علي', isActive: false },
];

export const getTermsTemplatesSampleData = (): TermTemplate[] => [...templatesData];
