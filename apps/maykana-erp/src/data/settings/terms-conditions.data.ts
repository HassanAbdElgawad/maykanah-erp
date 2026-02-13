// Terms Conditions data for Settings module

export interface TermsCondition {
  id: string;
  name: string;
  type: string;
  details: string;
  isActive: boolean;
}

const termsData: TermsCondition[] = [
  { id: '1', name: 'شرط المبيعات', type: 'مشتريات', details: 'تفاصيل شروط المبيعات هنا', isActive: true },
  { id: '2', name: 'شرط المشتريات', type: 'مشتريات', details: 'تفاصيل شروط المشتريات هنا', isActive: true },
  { id: '3', name: 'شرط العقود المشرية', type: 'مشتريات', details: 'تفاصيل شروط العقود المشرية هنا', isActive: false },
];

export const getTermsConditionsSampleData = (): TermsCondition[] => [...termsData];
