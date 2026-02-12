// Documents data for Strategy module

export interface Document {
  id: string;
  name: string;
  type: string;
  linkedTo: string;
  date: string;
  size: string;
  access: boolean;
  version: string;
  status: string;
}

export const documentsData: Document[] = [
  {
    id: '1',
    name: 'عقد التوريد',
    type: 'PDF',
    linkedTo: 'مشروع: منصة الخدمات',
    date: '01/03/2025',
    size: '10 MB',
    access: true,
    version: 'v1.01',
    status: 'فريق المبرمج',
  },
];
