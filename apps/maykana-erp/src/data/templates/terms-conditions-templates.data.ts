// Terms and Conditions Templates Data Types and Sample Data

export type TemplateStatus = 'active' | 'inactive';

export interface TermsConditionsTemplate {
  id: number;
  templateName: string;
  description: string;
  date: string;
  status: TemplateStatus;
}

export const termsConditionsTemplatesData: TermsConditionsTemplate[] = [
  {
    id: 1,
    templateName: 'شروط البيعات',
    description: 'تفاصيل شروط البيعات هنا',
    date: '25-5-2025',
    status: 'active',
  },
  {
    id: 2,
    templateName: 'شروط المشتريات',
    description: 'تفاصيل شروط المشتريات هنا',
    date: '25-5-2025',
    status: 'active',
  },
  {
    id: 3,
    templateName: 'شروط الموارد البشرية',
    description: 'تفاصيل شروط الموارد البشرية هنا',
    date: '25-5-2025',
    status: 'inactive',
  },
];
